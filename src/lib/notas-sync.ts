/**
 * Solo lado servidor y solo en la máquina del docente: lee
 * `listado/alumnos.json` (datos en claro, ignorado por git), cifra cada
 * alumno con la clave derivada de su CI y escribe
 * `src/data/notas-payload.json`, que sí se commitea.
 *
 * Así el repo —y cualquier deploy como Vercel— recibe únicamente blobs
 * cifrados: nunca viajan CIs ni notas en claro.
 */
import { readFileSync, writeFileSync } from "node:fs";
import {
  cifrarAlumno,
  type AlumnoNotas,
  type NotasPayload,
  type PruebaNota,
} from "./notas.ts";

export interface NotaSource {
  valor: string | null;
  comentario?: string;
}

export interface ColumnaSource {
  id: string;
  fecha: string;
  tipo: string;
  periodo: string;
}

export interface AlumnoSource {
  "Nombre Apellido": string;
  CI: string;
  notas: Record<string, NotaSource>;
  items: string[];
}

export interface ListadoSource {
  fecha: string;
  columnas: ColumnaSource[];
  alumnos: AlumnoSource[];
}

const LISTADO_URL = new URL("../../listado/alumnos.json", import.meta.url);
const PAYLOAD_URL = new URL("../data/notas-payload.json", import.meta.url);

function aPruebaNota(
  columna: ColumnaSource,
  nota: NotaSource | undefined,
): PruebaNota {
  return {
    fecha: columna.fecha,
    tipo: columna.tipo,
    periodo: columna.periodo,
    valor: nota?.valor ?? null,
    comentario: nota?.comentario ?? null,
  };
}

export function aAlumnoNotas(
  alumno: AlumnoSource,
  columnas: ColumnaSource[],
): AlumnoNotas {
  return {
    nombre: alumno["Nombre Apellido"],
    pruebas: columnas.map((columna) =>
      aPruebaNota(columna, alumno.notas[columna.id]),
    ),
    recuperar: alumno.items.filter((item) => item.startsWith("Recuperar")),
  };
}

export async function sincronizarNotas(): Promise<NotasPayload> {
  const listado = JSON.parse(
    readFileSync(LISTADO_URL, "utf8"),
  ) as ListadoSource;

  const registros = await Promise.all(
    listado.alumnos.map((alumno) =>
      cifrarAlumno(aAlumnoNotas(alumno, listado.columnas), alumno.CI),
    ),
  );
  const payload: NotasPayload = { fecha: listado.fecha, registros };
  const json = `${JSON.stringify(payload, null, 2)}\n`;

  // Cinturón y tirantes: el payload que se commitea no lleva nada en claro.
  for (const alumno of listado.alumnos) {
    if (
      json.includes(alumno["Nombre Apellido"]) ||
      json.includes(alumno.CI)
    ) {
      throw new Error(
        "El payload a escribir contiene datos en claro: revisar el cifrado.",
      );
    }
  }

  writeFileSync(PAYLOAD_URL, json);
  return payload;
}

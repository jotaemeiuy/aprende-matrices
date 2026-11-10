/**
 * Solo lado servidor (build): toma `listado/alumnos.json` y produce el
 * payload cifrado que viaja a la página /notas. No debe importarse desde
 * scripts de cliente.
 */
import alumnosJson from "../../listado/alumnos.json" with { type: "json" };
import {
  cifrarAlumno,
  type AlumnoNotas,
  type NotasPayload,
  type PruebaNota,
} from "./notas.ts";

interface NotaSource {
  valor: string | null;
  comentario?: string;
}

interface ColumnaSource {
  id: string;
  fecha: string;
  tipo: string;
  periodo: string;
}

interface AlumnoSource {
  "Nombre Apellido": string;
  CI: string;
  notas: Record<string, NotaSource>;
  items: string[];
}

interface ListadoSource {
  fecha: string;
  columnas: ColumnaSource[];
  alumnos: AlumnoSource[];
}

const listado = alumnosJson as ListadoSource;

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

function aAlumnoNotas(
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

export async function construirNotasPayload(): Promise<NotasPayload> {
  const registros = await Promise.all(
    listado.alumnos.map((alumno) =>
      cifrarAlumno(aAlumnoNotas(alumno, listado.columnas), alumno.CI),
    ),
  );
  return { fecha: listado.fecha, registros };
}

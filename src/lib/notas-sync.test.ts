import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  aAlumnoNotas,
  type AlumnoSource,
  type ColumnaSource,
} from "./notas-sync.ts";

const COLUMNAS: ColumnaSource[] = [
  { id: "escrito_1", fecha: "27/04", tipo: "Escrito", periodo: "Mar-Abr" },
  { id: "parcial_1", fecha: "20/07", tipo: "Parcial", periodo: "Ev. semest." },
];

const ALUMNO: AlumnoSource = {
  "Nombre Apellido": "ALUMNO DE PRUEBA",
  CI: "11111111",
  notas: {
    escrito_1: { valor: "5" },
    parcial_1: { valor: null, comentario: "No se presentó" },
  },
  items: ["Recuperar Trigonometría", "Recuperar Matrices", "Salir a receso"],
};

describe("aAlumnoNotas", () => {
  it("mapea las notas según las columnas del listado", () => {
    const alumno = aAlumnoNotas(ALUMNO, COLUMNAS);
    assert.equal(alumno.nombre, "ALUMNO DE PRUEBA");
    assert.equal(alumno.pruebas.length, 2);
    assert.deepEqual(alumno.pruebas[1], {
      fecha: "20/07",
      tipo: "Parcial",
      periodo: "Ev. semest.",
      valor: null,
      comentario: "No se presentó",
    });
  });

  it("encierra en null una prueba sin dato", () => {
    const sinRegistro: AlumnoSource = {
      ...ALUMNO,
      notas: {},
    };
    const alumno = aAlumnoNotas(sinRegistro, COLUMNAS);
    assert.deepEqual(alumno.pruebas[0], {
      fecha: "27/04",
      tipo: "Escrito",
      periodo: "Mar-Abr",
      valor: null,
      comentario: null,
    });
  });

  it("solo conserva los ítems de recuperación", () => {
    const alumno = aAlumnoNotas(ALUMNO, COLUMNAS);
    assert.deepEqual(alumno.recuperar, [
      "Recuperar Trigonometría",
      "Recuperar Matrices",
    ]);
  });
});

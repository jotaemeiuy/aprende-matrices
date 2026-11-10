import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  buscarAlumno,
  ciValida,
  cifrarAlumno,
  descifrarAlumno,
  normalizarCi,
  type AlumnoNotas,
} from "./notas.ts";

const CI = "11111111";

const ALUMNO: AlumnoNotas = {
  nombre: "ALUMNO DE PRUEBA",
  pruebas: [
    {
      fecha: "27/04",
      tipo: "Escrito",
      periodo: "Mar-Abr",
      valor: "3",
      comentario: null,
    },
    {
      fecha: "20/07",
      tipo: "Parcial",
      periodo: "Ev. semest.",
      valor: null,
      comentario: "No se presentó",
    },
  ],
  recuperar: ["Recuperar Trigonometría"],
};

describe("normalizarCi", () => {
  it("elimina puntos, guiones y espacios", () => {
    assert.equal(normalizarCi("1.111.111-1"), "11111111");
    assert.equal(normalizarCi(" 11111111 "), "11111111");
  });
});

describe("ciValida", () => {
  it("acepta 7 u 8 dígitos", () => {
    assert.equal(ciValida("11111111"), true);
    assert.equal(ciValida("1111111"), true);
  });

  it("rechaza cédulas incompletas o con texto", () => {
    assert.equal(ciValida("123"), false);
    assert.equal(ciValida(""), false);
    assert.equal(ciValida("11111111x"), false);
  });
});

describe("cifrado de notas", () => {
  it("descifra con el CI correcto, tolerando formato", async () => {
    const blob = await cifrarAlumno(ALUMNO, CI);
    const alumno = await descifrarAlumno(blob, "1.111.111-1");
    assert.deepEqual(alumno, ALUMNO);
  });

  it("falla con un CI incorrecto", async () => {
    const blob = await cifrarAlumno(ALUMNO, CI);
    await assert.rejects(() => descifrarAlumno(blob, "22222222"));
  });

  it("rechaza blobs corruptos", async () => {
    await assert.rejects(() => descifrarAlumno("no-es-un-blob", CI));
  });
});

describe("buscarAlumno", () => {
  it("encuentra al alumno correcto entre varios", async () => {
    const otro: AlumnoNotas = {
      nombre: "OTRO ALUMNO",
      pruebas: [],
      recuperar: [],
    };
    const registros = [
      await cifrarAlumno(otro, "22222222"),
      await cifrarAlumno(ALUMNO, CI),
    ];
    const alumno = await buscarAlumno(registros, CI);
    assert.deepEqual(alumno, ALUMNO);
  });

  it("devuelve null si ninguna cédula coincide", async () => {
    const registros = [await cifrarAlumno(ALUMNO, CI)];
    const alumno = await buscarAlumno(registros, "59999999");
    assert.equal(alumno, null);
  });
});

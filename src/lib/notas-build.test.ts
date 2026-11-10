import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { buscarAlumno } from "./notas.ts";
import { construirNotasPayload } from "./notas-build.ts";
import alumnosJson from "../../listado/alumnos.json" with { type: "json" };

// Sin plaintext en el test: el nombre y el CI se toman del listado en
// tiempo de ejecución, así el repo no carga datos reales de alumnos.
interface AlumnoSource {
  "Nombre Apellido": string;
  CI: string;
}

const primerAlumno = (alumnosJson as { alumnos: AlumnoSource[] }).alumnos[0];

describe("construirNotasPayload", () => {
  it("genera un blob cifrado por alumno, legible solo por su CI", async () => {
    const payload = await construirNotasPayload();
    // Un blob por alumno y ningún CI ni nombre en claro.
    assert.ok(payload.registros.length > 0);
    for (const registro of payload.registros) {
      assert.match(registro, /^[A-Za-z0-9+/]+:[A-Za-z0-9+/]+={0,2}$/);
    }
  });

  it("permite recuperar al alumno del listado con su CI", async () => {
    const payload = await construirNotasPayload();
    const alumno = await buscarAlumno(payload.registros, primerAlumno?.CI ?? "");
    assert.notEqual(alumno, null);
    assert.equal(alumno?.nombre, primerAlumno?.["Nombre Apellido"]);
    assert.ok(alumno?.pruebas.length && alumno.pruebas.length > 0);
    assert.notEqual(alumno?.recuperar, undefined);
  });

  it("no deja ver datos con un CI inexistente", async () => {
    const payload = await construirNotasPayload();
    const alumno = await buscarAlumno(payload.registros, "99999999");
    assert.equal(alumno, null);
  });
});

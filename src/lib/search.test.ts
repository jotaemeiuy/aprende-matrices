import { test } from "node:test";
import assert from "node:assert/strict";
import { buildSearchIndex, filterLessons } from "./search.ts";
import type { SearchEntry } from "./search.ts";

const entradas = [
  {
    data: {
      module: "practica-parcial",
      slug: "prueba-1",
      title: "Prueba 1",
      description: "Versión A del parcial de matrices, con su solución en PDF.",
      kind: "practica" as const,
      order: 1,
    },
  },
  {
    data: {
      module: "concepto",
      slug: "que-es-una-matriz",
      title: "¿Qué es una matriz?",
      description: "Arreglo m × n, elementos, filas y columnas.",
      kind: "teoria" as const,
      order: 1,
    },
  },
  {
    data: {
      module: "determinantes-cramer",
      slug: "sarrus-3x3",
      title: "Sarrus: determinante 3×3",
      description: "Cálculo de determinantes de orden 3 con la regla de Sarrus.",
      kind: "teoria" as const,
      order: 2,
    },
  },
];

test("buildSearchIndex incluye todos los temas con su descripción", () => {
  const indice = buildSearchIndex(entradas);
  assert.equal(indice.length, 3);
  assert.ok(indice.every((e) => e.description.length > 0));
  const parcial = indice.find((e) => e.slug === "prueba-1");
  assert.ok(parcial);
  assert.equal(parcial.moduleTitle, "Práctica para el Parcial");
});

test("buildSearchIndex ordena por temario y luego por order", () => {
  const indice = buildSearchIndex(entradas);
  assert.deepEqual(
    indice.map((e) => e.slug),
    ["que-es-una-matriz", "sarrus-3x3", "prueba-1"],
  );
});

test("buildSearchIndex usa el id de módulo si no está en el temario", () => {
  const indice = buildSearchIndex([
    {
      data: {
        module: "modulo-inexistente",
        slug: "x",
        title: "X",
        description: "d",
        kind: "teoria" as const,
        order: 1,
      },
    },
  ]);
  const [inexistente] = indice;
  assert.ok(inexistente);
  assert.equal(inexistente.moduleTitle, "modulo-inexistente");
});

test("filterLessons encuentra por título", () => {
  const indice: SearchEntry[] = buildSearchIndex(entradas);
  const resultado = filterLessons(indice, "Sarrus");
  assert.equal(resultado.length, 1);
  const [sarrus] = resultado;
  assert.ok(sarrus);
  assert.equal(sarrus.slug, "sarrus-3x3");
});

test("filterLessons encuentra por descripción aunque no esté en el título", () => {
  const indice: SearchEntry[] = buildSearchIndex(entradas);
  assert.deepEqual(filterLessons(indice, "fibonacci"), []);
  const resultado = filterLessons(indice, "PDF");
  assert.equal(resultado.length, 1);
  const [pdf] = resultado;
  assert.ok(pdf);
  assert.equal(pdf.slug, "prueba-1");
});

test("filterLessons encuentra por título de módulo", () => {
  const indice: SearchEntry[] = buildSearchIndex(entradas);
  const resultado = filterLessons(indice, "parcial");
  assert.equal(resultado.length, 1);
  const [parcial] = resultado;
  assert.ok(parcial);
  assert.equal(parcial.slug, "prueba-1");
});

test("filterLessons con consulta vacía devuelve todo", () => {
  const indice: SearchEntry[] = buildSearchIndex(entradas);
  assert.equal(filterLessons(indice, "").length, 3);
  assert.equal(filterLessons(indice, "   ").length, 3);
});

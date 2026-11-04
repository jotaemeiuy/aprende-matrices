export interface Lesson {
  slug: string;
  title: string;
  kind: "teoria" | "practica";
}

export interface Module {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export const modules: Module[] = [
  {
    id: "concepto",
    number: "01",
    title: "Concepto de matriz",
    description: "Arreglo m × n, elementos, filas y columnas.",
    icon: "matrix",
    lessons: [
      { slug: "que-es-una-matriz", title: "¿Qué es una matriz?", kind: "teoria" },
      { slug: "orden-y-elementos", title: "Orden y elementos aᵢⱼ", kind: "teoria" },
      { slug: "matriz-como-tabla", title: "Matriz como tabla en programación", kind: "practica" },
      { slug: "infografia-concepto", title: "Infografía: matrices desde cero", kind: "teoria" },
    ],
  },
  {
    id: "tipos",
    number: "02",
    title: "Tipos: fila, columna, rectangular, cuadrada",
    description: "Notas, RGB, datasets y grafos como matrices.",
    icon: "tipos",
    lessons: [
      { slug: "matriz-fila", title: "Matriz fila", kind: "teoria" },
      { slug: "matriz-columna", title: "Matriz columna y color RGB", kind: "teoria" },
      { slug: "rectangular", title: "Rectangular: dataset de películas", kind: "teoria" },
      { slug: "cuadrada", title: "Cuadrada: grafo e imagen", kind: "teoria" },
      { slug: "ejercicios-tipos", title: "Ejercicios", kind: "practica" },
      { slug: "infografia-tipos", title: "Infografía: tipos de matrices", kind: "teoria" },
    ],
  },
  {
    id: "nula-identidad",
    number: "03",
    title: "Nula, identidad y triangulares",
    description: "O, I_n y matrices triangulares superior e inferior.",
    icon: "triangular",
    lessons: [
      { slug: "matriz-nula", title: "Matriz nula", kind: "teoria" },
      { slug: "matriz-identidad", title: "Matriz identidad", kind: "teoria" },
      { slug: "triangulares", title: "Triangulares y diagonal", kind: "teoria" },
      { slug: "ejercicios-nula-identidad", title: "Ejercicios: imagen negra", kind: "practica" },
      { slug: "infografia-nula-identidad", title: "Infografía: nula, identidad y triangulares", kind: "teoria" },
    ],
  },
  {
    id: "traza",
    number: "04",
    title: "Traza",
    description: "Suma de la diagonal: aciertos y bucles.",
    icon: "traza",
    lessons: [
      { slug: "definicion-traza", title: "Definición de traza", kind: "teoria" },
      { slug: "matriz-confusion", title: "Matriz de confusión", kind: "teoria" },
      { slug: "ejercicios-traza", title: "Ejercicios de traza", kind: "practica" },
      { slug: "infografia-traza", title: "Infografía: traza", kind: "teoria" },
    ],
  },
  {
    id: "operaciones-basicas",
    number: "05",
    title: "Igualdad, suma y producto por escalar",
    description: "Mismo orden, suma casilla a casilla y brillo.",
    icon: "suma",
    lessons: [
      { slug: "igualdad", title: "Igualdad de matrices", kind: "teoria" },
      { slug: "suma", title: "Suma de matrices", kind: "teoria" },
      { slug: "producto-escalar", title: "Producto por escalar", kind: "teoria" },
      { slug: "ejercicios-suma", title: "Ejercicios: tienda y evento ×3", kind: "practica" },
      { slug: "infografia-operaciones", title: "Infografía: operaciones básicas", kind: "teoria" },
    ],
  },
  {
    id: "producto",
    number: "06",
    title: "Fila por columna y producto",
    description: "Producto punto, ponderados y capas lineales.",
    icon: "producto",
    lessons: [
      { slug: "fila-por-columna", title: "Fila por columna", kind: "teoria" },
      { slug: "producto-matrices", title: "Producto de dos matrices", kind: "teoria" },
      { slug: "no-conmuta", title: "El orden importa: AB ≠ BA", kind: "teoria" },
      { slug: "ejercicios-producto", title: "Ejercicios: neurona y capa lineal", kind: "practica" },
      { slug: "infografia-producto", title: "Infografía: producto de matrices", kind: "teoria" },
    ],
  },
  {
    id: "propiedades-potencia",
    number: "07",
    title: "Propiedades, potencia e idempotencia",
    description: "Asociativa, distributiva, potencia.",
    icon: "potencia",
    lessons: [
      { slug: "propiedades", title: "Asociativa y distributiva", kind: "teoria" },
      { slug: "potencia", title: "Potencia y Fibonacci", kind: "teoria" },
      { slug: "idempotente", title: "Idempotente", kind: "teoria" },
      { slug: "ejercicios-potencia", title: "Ejercicios: rotar y escalar", kind: "practica" },
      { slug: "infografia-propiedades", title: "Infografía: propiedades y potencia", kind: "teoria" },
    ],
  },
  {
    id: "rango-inversa",
    number: "08",
    title: "Rango e inversa por Gauss-Jordan",
    description: "Escalonar (A|I) → (I|A⁻¹) y detectar singulares.",
    icon: "escalon",
    lessons: [
      { slug: "transformaciones", title: "Transformaciones elementales", kind: "teoria" },
      { slug: "rango", title: "Rango y pivotes", kind: "teoria" },
      { slug: "gauss-jordan", title: "Gauss-Jordan 2×2 y 3×3", kind: "teoria" },
      { slug: "ejercicios-inversa", title: "Ejercicios de inversa", kind: "practica" },
      { slug: "infografia-rango-inversa", title: "Infografía: rango e inversa", kind: "teoria" },
    ],
  },
  {
    id: "traspuesta",
    number: "09",
    title: "Traspuesta y especiales",
    description: "Aᵗ, simétrica, antisimétrica y ortogonal.",
    icon: "traspuesta",
    lessons: [
      { slug: "definicion-traspuesta", title: "Definición de traspuesta", kind: "teoria" },
      { slug: "propiedades-traspuesta", title: "(AB)ᵗ = BᵗAᵗ", kind: "teoria" },
      { slug: "simetrica-ortogonal", title: "Simétrica y rotación 90°", kind: "teoria" },
      { slug: "ejercicios-traspuesta", title: "Ejercicios con Aᵗ", kind: "practica" },
      { slug: "infografia-traspuesta", title: "Infografía: traspuesta y especiales", kind: "teoria" },
    ],
  },
  {
    id: "sistemas-ecuaciones",
    number: "10",
    title: "Rouché-Frobenius y ecuaciones",
    description: "AX=B, XA=B, AXB=C y tres destinos 3×3.",
    icon: "sistema",
    lessons: [
      { slug: "rouche-frobenius", title: "Teorema de Rouché-Frobenius", kind: "teoria" },
      { slug: "ecuaciones-matriciales", title: "Ecuaciones AX=B ", kind: "teoria" },
      { slug: "ejercicios-sistemas", title: "Ejercicios: determinado e incompatible", kind: "practica" },
      { slug: "infografia-sistemas", title: "Infografía: sistemas y Rouché-Frobenius", kind: "teoria" },
    ],
  },
  {
    id: "determinantes-cramer",
    number: "11",
    title: "Determinantes y regla de Cramer",
    description: "Sarrus, sistemas 2×2 y 3×3, y sus aplicaciones.",
    icon: "determinante",
    lessons: [
      { slug: "determinante-1x1-2x2", title: "Determinante: 1×1 y 2×2", kind: "teoria" },
      { slug: "sarrus-3x3", title: "Sarrus: determinante 3×3", kind: "teoria" },
      { slug: "ejercicios-determinantes", title: "Ejercicios: determinantes en informática", kind: "practica" },
      { slug: "regla-cramer", title: "Regla de Cramer paso a paso", kind: "teoria" },
      { slug: "ejercicios-cramer", title: "Ejercicios: Cramer en informática", kind: "practica" },
      { slug: "infografia-resumen", title: "Infografía: determinantes y Cramer", kind: "teoria" },
    ],
  },
];

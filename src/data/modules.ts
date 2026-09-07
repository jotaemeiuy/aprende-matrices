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
    ],
  },
];

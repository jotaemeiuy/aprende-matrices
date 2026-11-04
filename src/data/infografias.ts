import { modules } from "./modules.ts";

export interface InfografiaPaso {
  titulo: string;
  idea: string;
  formula?: string;
  codigo?: string;
  nota?: string;
}

export interface Infografia {
  moduleId: string;
  titulo: string;
  subtitulo: string;
  pasos: InfografiaPaso[];
  aplicaciones: string[];
  cierre: string;
}

export const infografias: Record<string, Infografia> = {
  concepto: {
    moduleId: "concepto",
    titulo: "De la tabla al arreglo bidimensional",
    subtitulo: "Orden, elementos y recorrido: la base de todo el curso.",
    pasos: [
      {
        titulo: "Una matriz es una tabla",
        idea: "Números ordenados en filas y columnas. El orden m × n dice cuántas hay de cada una.",
        formula: String.raw`A=(a_{ij})_{m\times n}\in\mathbb{R}^{m\times n}`,
        nota: "m filas, n columnas y m·n casillas en total.",
      },
      {
        titulo: "El elemento aᵢⱼ",
        idea: "El primer subíndice es la fila; el segundo, la columna.",
        formula: String.raw`a_{ij}=\text{elemento de la fila }i\text{ y la columna }j`,
        nota: "a₂₃ está en la fila 2, columna 3.",
      },
      {
        titulo: "En Java: int[][]",
        idea: "Una matriz es un arreglo de arreglos. Las dimensiones se declaran al crearla.",
        codigo: `int[][] notas = {
  {8, 7, 9},
  {6, 5, 7}
};`,
        nota: "notas.length = 2 filas; notas[0].length = 3 columnas.",
      },
      {
        titulo: "Índices y recorrido",
        idea: "Java cuenta desde 0: aᵢⱼ vive en A[i-1][j-1]. El doble for visita cada casilla.",
        formula: String.raw`A[i-1][j-1]\;\longleftrightarrow\;a_{ij}`,
        codigo: `for (int i = 0; i < filas; i++)
  for (int j = 0; j < columnas; j++)
    System.out.print(A[i][j] + " ");`,
        nota: "Error clásico: pedir A[m][n]; los índices máximos son m-1 y n-1.",
      },
    ],
    aplicaciones: ["Notas", "Imágenes", "Datasets", "Grafos"],
    cierre: "Toda matriz es una tabla; el orden y los índices evitan el 90% de los errores.",
  },

  tipos: {
    moduleId: "tipos",
    titulo: "Cuatro formas de mirar una matriz",
    subtitulo: "Fila, columna, rectangular y cuadrada: el tipo guía la operación.",
    pasos: [
      {
        titulo: "Fila y columna",
        idea: "Una sola fila (1×n) o una sola columna (m×1). Son vectores disfrazados de matriz.",
        formula: String.raw`F_{1\times n}=\begin{pmatrix}a_1&\cdots&a_n\end{pmatrix},\qquad C_{m\times1}=\begin{pmatrix}b_1\\\vdots\\b_m\end{pmatrix}`,
        nota: "Notas de un alumno (fila); color RGB o punto 2D (columna).",
      },
      {
        titulo: "Rectangular: datos",
        idea: "m ≠ n. Cada fila es un caso y cada columna una variable.",
        formula: String.raw`A_{m\times n},\quad m\neq n`,
        nota: "Dataset de usuarios × películas, planillas y lotes de mediciones.",
      },
      {
        titulo: "Cuadrada: redes e imágenes",
        idea: "m = n. Tiene diagonal principal aᵢᵢ y describe transformaciones, grafos o píxeles.",
        formula: String.raw`A_{n\times n},\qquad \operatorname{diag}(A)=(a_{11},\ldots,a_{nn})`,
        nota: "Matriz de adyacencia de una red; imagen en escala de grises.",
      },
      {
        titulo: "El tipo cambia el código",
        idea: "Fila y columna son espejos: la misma información acostada o parada. Trasponer la convierte.",
        formula: String.raw`F_{1\times n}\;\xrightarrow{\;t\;}\;C_{n\times1}`,
        nota: "Si el código espera columna y recibe fila, las dimensiones fallan.",
      },
    ],
    aplicaciones: ["Notas", "RGB", "Datasets", "Grafos", "Píxeles"],
    cierre: "Reconocer el tipo es el primer chequeo antes de sumar, multiplicar o invertir.",
  },

  "nula-identidad": {
    moduleId: "nula-identidad",
    titulo: "Los ceros y los unos que ordenan todo",
    subtitulo: "Nula, identidad, triangulares y diagonal: matrices con estructura.",
    pasos: [
      {
        titulo: "Matriz nula O",
        idea: "Todos sus elementos son 0. Es el neutro de la suma.",
        formula: String.raw`O_{m\times n}=(0)_{m\times n},\qquad A+O=A`,
        nota: "Una imagen 2×3 toda negra es una matriz nula.",
      },
      {
        titulo: "Matriz identidad Iₙ",
        idea: "Cuadrada, con 1 en la diagonal y 0 fuera. Es el neutro del producto.",
        formula: String.raw`I_n=(a_{ij}),\quad a_{ij}=\begin{cases}1&i=j\\0&i\neq j\end{cases}`,
        nota: "AI = IA = A; en gráficos, I₂ no mueve ningún punto.",
      },
      {
        titulo: "Triangulares y diagonal",
        idea: "Superior: ceros debajo de la diagonal. Inferior: ceros encima. Si es ambas, es diagonal.",
        formula: String.raw`S:\;a_{ij}=0\;(i>j),\qquad L:\;a_{ij}=0\;(i<j)`,
        nota: "Gauss produce triangulares; las dependencias de módulos también.",
      },
      {
        titulo: "Los ceros son información",
        idea: "No es lo mismo «no hay dato» que «el valor es cero». La estructura de ceros describe el problema.",
        formula: String.raw`D=\operatorname{diag}(d_1,\ldots,d_n)\;\Longleftrightarrow\;a_{ij}=0\;(i\neq j)`,
        nota: "Matriz de dependencias triangular inferior: el módulo 2 no depende del 3.",
      },
    ],
    aplicaciones: ["Inicializar acumuladores", "Imagen negra", "Dependencias", "Gauss"],
    cierre: "O, I y las triangulares son los ladrillos con los que se construye todo lo demás.",
  },

  traza: {
    moduleId: "traza",
    titulo: "Traza: un número escondido en la diagonal",
    subtitulo: "Sumar la diagonal para medir aciertos, bucles y estructura.",
    pasos: [
      {
        titulo: "Definición",
        idea: "Solo para matrices cuadradas: se suman los elementos de la diagonal principal.",
        formula: String.raw`\operatorname{tr}(A)=\sum_{i=1}^{n}a_{ii}=a_{11}+a_{22}+\cdots+a_{nn}`,
        nota: "Ejemplo: 4 + 3 = 7.",
      },
      {
        titulo: "En código",
        idea: "Un solo for basta: no hace falta recorrer toda la matriz.",
        codigo: `int traza = 0;
for (int i = 0; i < n; i++)
  traza += a[i][i];`,
        nota: "Complejidad O(n) frente a O(n²) de recorrer todo.",
      },
      {
        titulo: "Matriz de confusión",
        idea: "En clasificación, la diagonal son los aciertos por clase; su suma es el total de aciertos.",
        formula: String.raw`\operatorname{tr}(C)=50+45+60=155`,
        nota: "Permite leer de un vistazo cuántas predicciones correctas hubo.",
      },
      {
        titulo: "Bucles en un grafo",
        idea: "En una matriz de adyacencia, la traza cuenta los nodos conectados consigo mismos.",
        formula: String.raw`\operatorname{tr}(G)=0\;\Longleftrightarrow\;\text{sin bucles}`,
        nota: "Una red sin autoconexiones tiene traza 0.",
      },
    ],
    aplicaciones: ["Machine learning", "Grafos", "Métricas", "Bucles"],
    cierre: "La misma suma responde preguntas distintas según el contexto.",
  },

  "operaciones-basicas": {
    moduleId: "operaciones-basicas",
    titulo: "Igualar, sumar y escalar",
    subtitulo: "Tres operaciones simples con una regla común: mirar el orden.",
    pasos: [
      {
        titulo: "Igualdad",
        idea: "Dos matrices son iguales si tienen el mismo orden y coinciden casilla por casilla.",
        formula: String.raw`A=B\;\Longleftrightarrow\;a_{ij}=b_{ij}\;\forall i,j\quad(\text{mismo orden})`,
        nota: "Sirve para hallar parámetros: x = 1, y = 5.",
      },
      {
        titulo: "Suma",
        idea: "Se suma elemento a elemento, pero solo si el orden coincide.",
        formula: String.raw`(A+B)_{ij}=a_{ij}+b_{ij}`,
        nota: "Sumar imágenes superpone brillo; sumar puntajes acumula parciales.",
      },
      {
        titulo: "Producto por escalar",
        idea: "Cada elemento se multiplica por el número. No requiere ningún orden especial.",
        formula: String.raw`(kA)_{ij}=k\cdot a_{ij}`,
        nota: "2A duplica el brillo; A/255 normaliza de 0–255 a 0–1.",
      },
      {
        titulo: "El orden primero",
        idea: "Si los órdenes no coinciden, la suma no existe. El producto por escalar siempre existe.",
        formula: String.raw`A_{m\times n}+B_{m\times n}\;\checkmark,\qquad A_{m\times n}+B_{p\times q}\;\text{imposible}`,
        nota: "En Java: doble for y comprobar dimensiones antes de operar.",
      },
    ],
    aplicaciones: ["Imágenes", "Puntajes", "Brillo", "Normalización"],
    cierre: "Comprobar dimensiones antes de calcular evita la mayoría de los errores.",
  },

  producto: {
    moduleId: "producto",
    titulo: "Fila por columna, el motor del álgebra",
    subtitulo: "Producto punto, matrices y capas lineales.",
    pasos: [
      {
        titulo: "Producto punto",
        idea: "Una fila por una columna del mismo largo da un número.",
        formula: String.raw`F\cdot C=\sum_{k=1}^{n}a_kb_k`,
        nota: "Notas × pesos = promedio ponderado; w·x = neurona sin sesgo.",
      },
      {
        titulo: "Producto de matrices",
        idea: "Columnas de A deben coincidir con filas de B. El resultado hereda filas de A y columnas de B.",
        formula: String.raw`A_{m\times n}B_{n\times p}=C_{m\times p},\qquad c_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}`,
        nota: "El par del medio n-n es la condición; si falla, «shapes not aligned».",
      },
      {
        titulo: "Matriz por vector",
        idea: "Una capa densa transforma la entrada x en la salida y.",
        formula: String.raw`y=Wx+b`,
        nota: "W de 2×2 y x de 2×1 dan y de 2×1: dos neuronas.",
      },
      {
        titulo: "No conmuta",
        idea: "AB y BA pueden existir y ser distintas. El orden del pipeline cambia el resultado.",
        formula: String.raw`AB\neq BA\;\text{ en general}`,
        nota: "Rotar y escalar no es lo mismo que escalar y rotar; al despejar, A⁻¹ va del lado correcto.",
      },
    ],
    aplicaciones: ["Neuronas", "Promedios", "Gráficos", "Capas lineales"],
    cierre: "Primero las dimensiones, después las cuentas: n de A contra n de B.",
  },

  "propiedades-potencia": {
    moduleId: "propiedades-potencia",
    titulo: "Propiedades, potencias e idempotencia",
    subtitulo: "Lo que se puede agrupar, lo que se repite y lo que se estabiliza.",
    pasos: [
      {
        titulo: "Asociativa y distributiva",
        idea: "El producto se puede agrupar y se distribuye sobre la suma, siempre con órdenes compatibles.",
        formula: String.raw`(AB)C=A(BC),\qquad A(B+C)=AB+AC`,
        nota: "Permite agrupar transformaciones en un pipeline sin cambiar el resultado.",
      },
      {
        titulo: "Potencias",
        idea: "Solo para cuadradas: A⁰ = I y cada potencia multiplica otra vez por A.",
        formula: String.raw`A^0=I,\qquad A^{n+1}=A^nA`,
        nota: "En diagonales se potencia cada elemento; con [[1,1],[1,0]] aparece Fibonacci.",
      },
      {
        titulo: "Idempotencia",
        idea: "Aplicar la transformación dos veces es igual que aplicarla una.",
        formula: String.raw`A^2=A`,
        nota: "Proyectar sobre un eje o promediar dos veces no cambia el resultado.",
      },
      {
        titulo: "Caminos en un grafo",
        idea: "Las potencias de la matriz de adyacencia cuentan caminos de k pasos.",
        formula: String.raw`(G^k)_{ij}=\text{caminos de }i\text{ a }j\text{ en }k\text{ pasos}`,
        nota: "G² cuenta rutas de 2 pasos: útil en redes y navegación.",
      },
    ],
    aplicaciones: ["Pipelines", "Fibonacci", "Filtros", "Grafos"],
    cierre: "Agrupar no cambia el resultado; el orden de los factores sí.",
  },

  "rango-inversa": {
    moduleId: "rango-inversa",
    titulo: "Rango e inversa: deshacer una transformación",
    subtitulo: "Pivotes, Gauss-Jordan y el criterio de regularidad.",
    pasos: [
      {
        titulo: "Transformaciones elementales",
        idea: "Tres movimientos permitidos por filas que no cambian las soluciones.",
        formula: String.raw`F_i\leftrightarrow F_j,\qquad F_i\to kF_i\;(k\neq0),\qquad F_i\to F_i+kF_j`,
        nota: "Son la base de Gauss y Gauss-Jordan.",
      },
      {
        titulo: "Rango = pivotes",
        idea: "Al escalonar, cada fila no nula es un escalón. El rango cuenta filas independientes.",
        formula: String.raw`\operatorname{rango}(A)=\text{número de pivotes}`,
        nota: "Filas proporcionales = sensores redundantes; el sistema pierde información.",
      },
      {
        titulo: "Gauss-Jordan",
        idea: "Se amplía con la identidad y se hacen operaciones hasta que la izquierda sea I.",
        formula: String.raw`(A\mid I)\;\longrightarrow\;(I\mid A^{-1})`,
        nota: "Si aparece una fila de ceros a la izquierda, no se puede llegar a I.",
      },
      {
        titulo: "Regular o singular",
        idea: "Una matriz cuadrada tiene inversa si su rango es máximo; si no, es singular.",
        formula: String.raw`A^{-1}\text{ existe}\;\Longleftrightarrow\;\operatorname{rango}(A)=n`,
        nota: "En código: si una columna se queda sin pivote, informar error o devolver null, nunca dividir.",
      },
    ],
    aplicaciones: ["Resolver sistemas", "Deshacer filtros", "Detectar redundancia", "Gráficos"],
    cierre: "Invertir es deshacer; el rango dice si esa vuelta atrás existe.",
  },

  traspuesta: {
    moduleId: "traspuesta",
    titulo: "Traspuesta: filas que se vuelven columnas",
    subtitulo: "Aᵗ, propiedades y matrices especiales.",
    pasos: [
      {
        titulo: "Definición",
        idea: "Se intercambian filas y columnas; el orden se da vuelta.",
        formula: String.raw`(A^t)_{ij}=a_{ji},\qquad A_{m\times n}\;\longrightarrow\;A^t_{n\times m}`,
        nota: "Un dataset alumnos × materias pasa a materias × alumnos; en NumPy, A.T.",
      },
      {
        titulo: "Propiedades",
        idea: "La suma se distribuye, el producto invierte el orden y trasponer dos veces vuelve al inicio.",
        formula: String.raw`(A+B)^t=A^t+B^t,\qquad (AB)^t=B^tA^t,\qquad (A^t)^t=A`,
        nota: "El orden invertido en (AB)ᵗ es la propiedad que más se olvida.",
      },
      {
        titulo: "Simétrica, antisimétrica, ortogonal",
        idea: "Tres familias que se definen por su relación con su propia traspuesta.",
        formula: String.raw`S^t=S,\qquad K^t=-K,\qquad R^tR=I`,
        nota: "Red no dirigida, torneo con diferencias y rotación sin deformación.",
      },
      {
        titulo: "Aplicaciones",
        idea: "Trasponer reordena datos y simplifica productos; las ortogonales conservan distancias.",
        formula: String.raw`R^tR=I\;\Longrightarrow\;R^{-1}=R^t`,
        nota: "En gráficos, una rotación se deshace trasponiendo; en datasets, A.T cambia variables por casos.",
      },
    ],
    aplicaciones: ["Datasets", "Redes", "Rotaciones", "Álgebra"],
    cierre: "Trasponer es gratis conceptualmente; recordá invertir el orden en (AB)ᵗ.",
  },

  "sistemas-ecuaciones": {
    moduleId: "sistemas-ecuaciones",
    titulo: "Sistemas: los tres destinos posibles",
    subtitulo: "Rouché-Frobenius, ecuaciones matriciales y despejes.",
    pasos: [
      {
        titulo: "Rouché-Frobenius",
        idea: "Comparar el rango de A con el de la ampliada decide si hay solución.",
        formula: String.raw`\operatorname{rango}(A)\;\text{vs.}\;\operatorname{rango}(A\mid B)`,
        nota: "Si difieren: incompatible. Si coinciden con n: determinado. Si coinciden y son < n: indeterminado.",
      },
      {
        titulo: "Compatible determinado",
        idea: "Rango igual a n: una única solución. Se resuelve por Gauss o por inversa.",
        formula: String.raw`AX=B\;\Longrightarrow\;X=A^{-1}B`,
        nota: "Si A es cuadrada y regular, la solución es única.",
      },
      {
        titulo: "Ecuaciones matriciales",
        idea: "El lado por el que se multiplica la inversa importa porque el producto no conmuta.",
        formula: String.raw`AX=B\Rightarrow X=A^{-1}B,\qquad XA=B\Rightarrow X=BA^{-1}`,
        nota: "AXB = C se despeja como X = A⁻¹CB⁻¹.",
      },
      {
        titulo: "En código",
        idea: "Escalonar, contar pivotes y detectar la fila 0 = b. Si no hay inversa, no dividir.",
        codigo: `// Tras escalonar (A|B):
// si aparece [0 ... 0 | b != 0] -> incompatible
// si rango(A) == rango(A|B) == n -> determinado`,
        nota: "Rouché evita intentar invertir una matriz singular.",
      },
    ],
    aplicaciones: ["Circuitos", "Gráficos", "Redes", "Machine learning"],
    cierre: "Primero clasificar con rangos; después resolver con Gauss o con la inversa.",
  },

  "determinantes-cramer": {
    moduleId: "determinantes-cramer",
    titulo: "Determinantes y Cramer: de la matriz a la solución",
    subtitulo: "Área, volumen y cómo clasificar un sistema cuando Δ = 0.",
    pasos: [
      {
        titulo: "Determinante 2×2",
        idea: "Producto de la diagonal principal menos la secundaria. Mide el factor de área.",
        formula: String.raw`\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc`,
        nota: "det = 0 aplasta el plano; la transformación no se puede deshacer.",
      },
      {
        titulo: "Sarrus 3×3",
        idea: "Tres diagonales que bajan se suman; tres que suben se restan.",
        formula: String.raw`\det(A)=(aei+bfg+cdh)-(ceg+bdi+afh)`,
        nota: "El determinante es el factor de volumen en 3D. Sarrus solo vale para 3×3.",
      },
      {
        titulo: "Regla de Cramer",
        idea: "Para un sistema cuadrado con Δ ≠ 0, cada incógnita es un cociente de determinantes.",
        formula: String.raw`x_i=\frac{\Delta_i}{\Delta},\qquad \Delta=\det(A)\neq0`,
        nota: "Δᵢ se obtiene reemplazando la columna i por la columna B.",
      },
      {
        titulo: "Cuando Δ = 0",
        idea: "Cramer no se aplica, pero los Δₖ permiten clasificar el sistema sin resolverlo.",
        formula: String.raw`\Delta=0\;\Longrightarrow\;
\begin{cases}
\text{incompatible} & \text{si } \exists k:\Delta_k\neq0\\[4pt]
\text{compatible indeterminado} & \text{si } \Delta_k=0\;\forall k
\end{cases}`,
        nota: "Ejemplo: Δ = 0 y Δₓ ≠ 0 → incompatible. Si Δ, Δₓ, Δ_y y Δ_z son todos 0 → indeterminado.",
      },
    ],
    aplicaciones: ["Gráficos 2D/3D", "Circuitos", "Calibración de color", "Intersecciones"],
    cierre: "Δ ≠ 0: solución única. Δ = 0: si algún Δₖ ≠ 0, incompatible; si todos son 0, indeterminado.",
  },
};

const faltantes = modules.filter((modulo) => !(modulo.id in infografias));

if (faltantes.length > 0) {
  throw new Error(
    `Faltan infografías para: ${faltantes.map((modulo) => modulo.id).join(", ")}`,
  );
}

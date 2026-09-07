---
title: "Ejercicios"
description: "Práctica de tipos de matrices con respuestas."
module: "tipos"
slug: "ejercicios-tipos"
order: 5
kind: "practica"
---

:::ejercicio[1 · Notas y vectores]
$F = \begin{pmatrix} 8 & 7 & 9 \end{pmatrix}$ son las notas de un estudiante.

- ¿Qué orden tiene? ¿Es fila, columna, rectangular o cuadrada?
- En Java sería `int[] notas = {8, 7, 9}`. Escribí el `for` que la recorre e imprime.
:::

:::ejercicio[2 · Color RGB]
$C = \begin{pmatrix} 255 \\ 128 \\ 0 \end{pmatrix}$.

- ¿Orden y tipo?
- ¿Qué color representa? ¿Qué pasaría si la guardás como fila en vez de columna en tu programa?
:::

:::ejercicio[3 · Dataset de películas]
$$
A = \begin{pmatrix}
5 & 7 & 3 & 9 \\
8 & 6 & 4 & 2 \\
1 & 0 & 5 & 7
\end{pmatrix}
$$

3 usuarios $\times$ 4 películas.

- Orden y tipo. ¿Qué es $a_{23}$ y $a_{31}$ en palabras?
- En Java: `int[][] a = new int[3][4]`. ¿Cuántos elementos guarda? ¿Qué índices tiene la última casilla?
:::

:::ejercicio[4 · Red de computadoras]
$$
G = \begin{pmatrix}
0 & 1 & 1 \\
1 & 0 & 0 \\
1 & 0 & 0
\end{pmatrix}
$$

- ¿Cuadrada de qué orden? Escribí su diagonal principal.
- ¿Qué pares de computadoras están conectados? Dibujá el grafo de 3 nodos.
:::

## Soluciones

- **1:** orden $1 \times 3$, fila. Recorrido: `for (int i = 0; i < notas.length; i++) System.out.print(notas[i] + " ");`
- **2:** orden $3 \times 1$, columna; naranja. Como fila cambia el orden a $1 \times 3$ y el código que espera columna falla.
- **3:** $3 \times 4$ rectangular; $a_{23} = 4$ (usuario 2, película 3), $a_{31} = 1$ (usuario 3, película 1); 12 elementos, última casilla `a[2][3]`.
- **4:** orden 3, diagonal $0, 0, 0$; conexiones 1–2 y 1–3.

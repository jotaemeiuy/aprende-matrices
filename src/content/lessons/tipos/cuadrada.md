---
title: "Cuadrada: grafo e imagen"
description: "Matrices con m = n, su diagonal principal, redes e imágenes."
module: "tipos"
slug: "cuadrada"
order: 4
kind: "teoria"
---

:::definicion[Definición]
Una **matriz cuadrada** tiene igual número de filas y columnas. Es de orden $n$ (o $n \times n$). Su **diagonal principal** son los elementos $a_{ii}$.
:::

:::ejemplo[Ejemplo]
$$
C = \begin{pmatrix}
4 & 1 \\
2 & 3
\end{pmatrix}_{2 \times 2}
$$

Diagonal principal: $4$ y $3$.
:::

:::ejemplo[Grafo y matriz de adyacencia]
$$
G = \begin{pmatrix}
0 & 1 & 1 \\
1 & 0 & 0 \\
1 & 0 & 0
\end{pmatrix}_{3 \times 3}
$$

Grafo de 3 nodos (por ejemplo 3 computadoras en red): $1$ si hay conexión, $0$ si no. Las matrices cuadradas de ceros y unos describen redes, mapas y autómatas.
:::

:::ejemplo[Imagen en escala de grises]
$$
I = \begin{pmatrix}
0 & 128 & 255 \\
64 & 192 & 32 \\
255 & 0 & 100
\end{pmatrix}_{3 \times 3}
$$

Cada número es un píxel de $0$ (negro) a $255$ (blanco). Toda imagen es una matriz.
:::

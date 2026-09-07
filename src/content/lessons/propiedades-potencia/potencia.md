---
title: "Potencia y Fibonacci"
description: "A⁰ = I, Aⁿ⁺¹ = Aⁿ·A, diagonales y caminos en grafos."
module: "propiedades-potencia"
slug: "potencia"
order: 2
kind: "teoria"
---

:::definicion[Definición]
Solo para cuadradas: $A^0 = I$, $A^1 = A$, $A^{n+1} = A^n \cdot A$.
:::

:::ejemplo[Ejemplo]
Si $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$, entonces $A^2 = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ y $A^3 = A^2 A = \begin{pmatrix} 3 & 2 \\ 2 & 1 \end{pmatrix}$ (aparece Fibonacci).
:::

:::ejemplo[Diagonales]
Si $D = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$, entonces $D^2 = \begin{pmatrix} 4 & 0 \\ 0 & 9 \end{pmatrix}$ y $D^3 = \begin{pmatrix} 8 & 0 \\ 0 & 27 \end{pmatrix}$: en diagonales se potencia elemento a elemento.
:::

:::ejemplo[Caminos en un grafo]
Si $G$ es adyacencia, $G^2$ cuenta caminos de $2$ pasos. Para $G = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}$, $G^2 = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}$: hay 2 formas de salir del nodo 1 y volver en 2 pasos.
:::

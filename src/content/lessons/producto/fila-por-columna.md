---
title: "Fila por columna"
description: "El producto punto: fila de notas por columna de pesos da un número."
module: "producto"
slug: "fila-por-columna"
order: 1
kind: "teoria"
---

:::definicion[Definición]
Una fila $F_{1 \times n} = \begin{pmatrix} a_1 & \cdots & a_n \end{pmatrix}$ por una columna $C_{n \times 1} = \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix}$ da una matriz $1 \times 1$, es decir un número:

$$
F \cdot C = a_1b_1 + a_2b_2 + \cdots + a_nb_n = \sum_{k=1}^{n} a_kb_k
$$

Es necesario que ambas tengan la misma cantidad $n$ de elementos.
:::

:::ejemplo[Ejemplo]
$$
\begin{pmatrix} 1 & 2 & 3 \end{pmatrix} \begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix} = 1\cdot 4 + 2\cdot 5 + 3\cdot 6 = 4 + 10 + 18 = 32
$$
:::

:::ejemplo[Notas ponderadas]
$$
\begin{pmatrix} 7 & 8 & 9 \end{pmatrix} \begin{pmatrix} 0{,}3 \\ 0{,}3 \\ 0{,}4 \end{pmatrix} = 7\cdot 0{,}3 + 8\cdot 0{,}3 + 9\cdot 0{,}4 = 2{,}1 + 2{,}4 + 3{,}6 = 8{,}1
$$

Fila de notas por columna de pesos: promedio ponderado. Así se calcula un puntaje en código.
:::

:::ejemplo[Producto punto]
$$
\begin{pmatrix} 2 & -1 & 4 \end{pmatrix} \begin{pmatrix} 3 \\ 0 \\ -2 \end{pmatrix} = 6 + 0 - 8 = -2
$$

Es el producto escalar o punto de vectores, base de similitud, proyecciones y neuronas ($w \cdot x$).
:::

:::observacion[Incompatible]
$\begin{pmatrix} 1 & 2 \end{pmatrix}_{1 \times 2}$ por $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}_{3 \times 1}$ no se puede: $2 \neq 3$.
:::

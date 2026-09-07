---
title: "Orden y elementos aᵢⱼ"
description: "Cómo leer el orden m × n de una matriz y localizar cualquier elemento aᵢⱼ."
module: "concepto"
slug: "orden-y-elementos"
order: 2
kind: "teoria"
---

El **orden** es el "documento de identidad" de una matriz: dice cuántas filas y cuántas columnas tiene. Se escribe $m \times n$ y se lee "$m$ por $n$".

:::definicion[Definición]
Si $A$ es de orden $m \times n$, entonces $A$ tiene $m$ filas, $n$ columnas y $m \cdot n$ elementos en total. El símbolo $a_{ij}$ nombra al elemento de la fila $i$ y columna $j$, con $1 \leq i \leq m$ y $1 \leq j \leq n$.
:::

## Leer el orden

Mirá esta matriz y contá: filas en horizontal, columnas en vertical.

$$
B = \begin{pmatrix}
5 & 7 & 3 & 9 \\
8 & 6 & 4 & 2 \\
1 & 0 & 5 & 7
\end{pmatrix}_{3 \times 4}
$$

Tiene 3 filas y 4 columnas: es de orden $3 \times 4$ y guarda $3 \cdot 4 = 12$ elementos.

:::ejemplo[Ejemplo]
En $B$: $a_{23} = 4$ (fila 2, columna 3) y $a_{31} = 1$ (fila 3, columna 1). El orden importa: una matriz $3 \times 4$ **no** es lo mismo que una $4 \times 3$.
:::

## Casos particulares

- Si $m = 1$ es una **matriz fila** (una sola fila), por ejemplo $\begin{pmatrix} 8 & 7 & 9 \end{pmatrix}_{1 \times 3}$.
- Si $n = 1$ es una **matriz columna** (una sola columna), por ejemplo $\begin{pmatrix} 255 \\ 128 \\ 0 \end{pmatrix}_{3 \times 1}$.
- Si $m = n$ es **cuadrada** (tantas filas como columnas).
- Si $m \neq n$ es **rectangular**.

:::observacion[Observación]
Dos matrices solo pueden compararse o sumarse si tienen **el mismo orden**. Es el primer chequeo antes de cualquier operación: si los órdenes no coinciden, la operación no existe.
:::

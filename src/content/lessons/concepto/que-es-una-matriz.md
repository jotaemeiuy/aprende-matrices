---
title: "¿Qué es una matriz?"
description: "Definición de matriz de orden m × n y el significado del elemento aᵢⱼ."
module: "concepto"
slug: "que-es-una-matriz"
order: 1
kind: "teoria"
---

Una **matriz** es la forma que tiene la matemática de ordenar números en una tabla: filas horizontales y columnas verticales. Si ya programaste en Java, es lo mismo que un arreglo bidimensional `A[m][n]`.

:::definicion[Definición]
Una **matriz** de orden $m \times n$ (se lee "$m$ por $n$") es un arreglo rectangular de números con $m$ filas y $n$ columnas:

$$
A = (a_{ij})_{m \times n} =
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

donde $a_{ij}$ es el elemento de la fila $i$ y columna $j$.
:::

Fijate en los subíndices: el primero siempre indica la **fila** y el segundo la **columna**. Por ejemplo, $a_{23}$ es el elemento de la fila 2, columna 3.

:::observacion[Observación]
En programación una matriz $m \times n$ es una tabla, una grilla de píxeles o un arreglo bidimensional. La fila $i$ suele ser un "registro" (por ejemplo un alumno) y la columna $j$ una "característica" (por ejemplo una materia).
:::

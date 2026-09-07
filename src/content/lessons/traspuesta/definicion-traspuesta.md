---
title: "Definición de traspuesta"
description: "La matriz Aᵗ que intercambia filas por columnas, con datasets."
module: "traspuesta"
slug: "definicion-traspuesta"
order: 1
kind: "teoria"
---

:::definicion[Definición]
La **traspuesta** $A^t$ intercambia filas por columnas: si $A = (a_{ij})_{m \times n}$, entonces $A^t = (a_{ji})_{n \times m}$. El orden se da vuelta.
:::

:::ejemplo[Ejemplo]
Si $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}_{2 \times 3}$, entonces $A^t = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}_{3 \times 2}$.
:::

:::ejemplo[Dataset]
Tabla alumnos $\times$ materias $3 \times 2$ traspuesta queda materias $\times$ alumnos $2 \times 3$. En NumPy es `A.T`; en Java se invierten las dimensiones del `new`.
:::

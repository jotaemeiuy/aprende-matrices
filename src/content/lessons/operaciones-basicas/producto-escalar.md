---
title: "Producto por escalar"
description: "Multiplicar cada elemento por k: brillo y normalización de 0–255 a 0–1."
module: "operaciones-basicas"
slug: "producto-escalar"
order: 3
kind: "teoria"
---

:::definicion[Definición]
Si $k$ es un número y $A = (a_{ij})$, entonces $kA = (k \cdot a_{ij})$: se multiplica **cada** elemento por $k$.
:::

:::ejemplo[Ejemplo]
$2 \cdot \begin{pmatrix} 1 & -2 \\ 0 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -4 \\ 0 & 6 \end{pmatrix}$.
:::

:::ejemplo[Ejemplo]
$(-1) \cdot \begin{pmatrix} 4 & 1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} -4 & -1 \\ 3 & -2 \end{pmatrix}$.
:::

:::ejemplo[Brillo y normalización]
$$
2 \cdot \begin{pmatrix} 10 & 20 \\ 30 & 40 \end{pmatrix} = \begin{pmatrix} 20 & 40 \\ 60 & 80 \end{pmatrix} \quad \text{(duplica el brillo)}
$$

$$
\frac{1}{255}\begin{pmatrix} 255 & 128 \\ 0 & 64 \end{pmatrix} = \begin{pmatrix} 1 & 0{,}50 \\ 0 & 0{,}25 \end{pmatrix} \quad \text{(pasa de 0--255 a 0--1)}
$$
:::

:::observacion[Observación]
A diferencia de la suma, el producto por escalar **no pide ningún orden**: funciona con cualquier matriz. En código es un doble `for` multiplicando en el lugar.
:::

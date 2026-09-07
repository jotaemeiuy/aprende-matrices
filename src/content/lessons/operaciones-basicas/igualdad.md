---
title: "Igualdad de matrices"
description: "Cuándo dos matrices son iguales y cómo hallar parámetros."
module: "operaciones-basicas"
slug: "igualdad"
order: 1
kind: "teoria"
---

:::definicion[Definición]
$A = B$ si tienen el **mismo orden** y $a_{ij} = b_{ij}$ para todo $i, j$: coinciden casilla por casilla.
:::

:::ejemplo[Ejemplo]
$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, pero $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \neq \begin{pmatrix} 1 & 2 & 0 \\ 3 & 4 & 0 \end{pmatrix}$ porque el orden es distinto.
:::

:::ejemplo[Hallar parámetros]
$$
\begin{pmatrix} x & 2 \\ 3 & y \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix} \Rightarrow x = 1,\; y = 5
$$

Es como comparar dos tablas o dos imágenes píxel a píxel en un test.
:::

:::ejemplo[Ejemplo]
$$
\begin{pmatrix} a+1 & 0 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & b-1 \end{pmatrix} \Rightarrow a = 2,\; b = 5
$$
:::

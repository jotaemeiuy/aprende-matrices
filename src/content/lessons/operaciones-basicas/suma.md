---
title: "Suma de matrices"
description: "Suma casilla a casilla con el mismo orden: imágenes y puntajes."
module: "operaciones-basicas"
slug: "suma"
order: 2
kind: "teoria"
---

:::definicion[Definición]
Si $A$ y $B$ tienen el **mismo orden** $m \times n$, entonces $C = A + B$ tiene $c_{ij} = a_{ij} + b_{ij}$: se suma casilla por casilla.
:::

:::ejemplo[Ejemplo]
$$
\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 5 & 0 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 6 & 2 \\ 2 & 6 \end{pmatrix}
$$
:::

:::ejemplo[Imágenes]
Sumar dos matrices $2 \times 2$ de grises superpone el brillo:

$$
\begin{pmatrix} 10 & 20 \\ 30 & 40 \end{pmatrix} + \begin{pmatrix} 5 & 5 \\ 5 & 5 \end{pmatrix} = \begin{pmatrix} 15 & 25 \\ 35 & 45 \end{pmatrix}
$$
:::

:::ejemplo[Puntajes]
$$
\begin{pmatrix} 7 & 8 & 9 \\ 6 & 5 & 7 \end{pmatrix} + \begin{pmatrix} 1 & 0 & 1 \\ 2 & 3 & 0 \end{pmatrix} = \begin{pmatrix} 8 & 8 & 10 \\ 8 & 8 & 7 \end{pmatrix}
$$

Dos parciales sumados por alumno y materia.
:::

:::observacion[Observación]
Sumar matrices de **distinto orden no existe**. Es el mismo chequeo de la igualdad: primero el orden, después las cuentas.
:::

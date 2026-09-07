---
title: "(AB)ᵗ = BᵗAᵗ"
description: "Las 4 propiedades de la traspuesta, con el orden que se da vuelta."
module: "traspuesta"
slug: "propiedades-traspuesta"
order: 2
kind: "teoria"
---

:::propiedad[1 · Suma]
$(A+B)^t = A^t + B^t$.
:::

:::ejemplo[Ejemplo]
$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ -1 & 2 \end{pmatrix}$. $A+B = \begin{pmatrix} 1 & 3 \\ 2 & 6 \end{pmatrix}$, $(A+B)^t = \begin{pmatrix} 1 & 2 \\ 3 & 6 \end{pmatrix} = A^t + B^t$.
:::

:::propiedad[2 · Producto: se da vuelta el orden]
$(A \cdot B)^t = B^t \cdot A^t$.
:::

:::ejemplo[Ejemplo]
Con $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 3 & 0 \\ 1 & 2 \end{pmatrix}$: $AB = \begin{pmatrix} 5 & 4 \\ 1 & 2 \end{pmatrix}$, $(AB)^t = \begin{pmatrix} 5 & 1 \\ 4 & 2 \end{pmatrix} = B^tA^t$.
:::

:::propiedad[3 · Doble traspuesta]
$(A^t)^t = A$.
:::

:::ejemplo[Ejemplo]
Si $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$, trasponer dos veces devuelve $A$.
:::

:::propiedad[4 · Escalar]
$(kA)^t = kA^t$.
:::

:::ejemplo[Ejemplo]
$2A = \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}$ con $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$: $(2A)^t = \begin{pmatrix} 2 & 6 \\ 4 & 8 \end{pmatrix} = 2A^t$.
:::

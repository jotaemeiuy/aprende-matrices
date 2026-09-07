---
title: "Ecuaciones AX=B"
description: "Despejes con inversa: X = A⁻¹B, X = BA⁻¹ y X = A⁻¹CB⁻¹."
module: "sistemas-ecuaciones"
slug: "ecuaciones-matriciales"
order: 2
kind: "teoria"
---

:::definicion[Definición]
Son ecuaciones con incógnita matricial $X$. Las básicas:

$$
AX = B \Rightarrow X = A^{-1}B, \qquad XA = B \Rightarrow X = BA^{-1}, \qquad AXB = C \Rightarrow X = A^{-1}CB^{-1}
$$

El orden y el lado importan porque el producto no conmuta.
:::

:::ejemplo[Tipo AX = B]
$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \; B = \begin{pmatrix} 5 \\ 11 \end{pmatrix}, \quad AX = B
$$

Como $A^{-1} = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$:

$$
X = A^{-1}B = \begin{pmatrix} -2\cdot 5+1\cdot 11 \\ 1{,}5\cdot 5-0{,}5\cdot 11 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}
$$

Es un sistema $2 \times 2$: $x = 1$, $y = 2$. En código es `numpy.linalg.solve(A, B)`.
:::

:::ejemplo[Tipo XA = B, decodificar]
$$
A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}, \; B = \begin{pmatrix} 8 & 12 \\ 4 & 6 \end{pmatrix}, \quad XA = B
$$

$A^{-1} = \begin{pmatrix} 1/2 & 0 \\ 0 & 1/3 \end{pmatrix}$, luego:

$$
X = BA^{-1} = \begin{pmatrix} 8 & 12 \\ 4 & 6 \end{pmatrix}\begin{pmatrix} 1/2 & 0 \\ 0 & 1/3 \end{pmatrix} = \begin{pmatrix} 4 & 4 \\ 2 & 2 \end{pmatrix}
$$

$A$ escalaba por $2$ y $3$; $X$ recupera el original: como "deshacer" una transformación.
:::

:::ejemplo[Tipo AXB = C]
$$
A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, \; B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}, \; C = \begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix}
$$

$A^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$, $B^{-1} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$:

$$
X = A^{-1}CB^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}
$$

Verificación: $AXB = C$.
:::

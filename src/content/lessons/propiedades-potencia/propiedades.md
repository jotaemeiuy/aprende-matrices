---
title: "Asociativa y distributiva"
description: "Las propiedades que sí valen: (AB)C = A(BC) y A(B+C) = AB+AC."
module: "propiedades-potencia"
slug: "propiedades"
order: 1
kind: "teoria"
---

:::propiedad[Asociativa]
Si los órdenes son compatibles, $(AB)C = A(BC)$. En programación permite agrupar transformaciones como se quiera.
:::

:::ejemplo[Ejemplo]
$A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$, $C = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$: tanto $(AB)C$ como $A(BC)$ dan $\begin{pmatrix} 13 \\ 4 \end{pmatrix}$.
:::

:::propiedad[Distributiva]
$A(B+C) = AB+AC$ y $(A+B)C = AC+BC$ (siempre con órdenes compatibles).
:::

:::ejemplo[Ejemplo]
$A = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$: $A(B+C) = AB+AC = \begin{pmatrix} 2 & 2 \\ 3 & 5 \end{pmatrix}$.
:::

:::propiedad[Neutro, nula y escalar]
Si $A_{m \times n}$: $AI_n = I_mA = A$ y $AO = OA = O$ (con órdenes compatibles). Además $k(AB) = (kA)B = A(kB)$ para todo número $k$.
:::

:::ejemplo[Ejemplo]
$A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$: $AI_2 = A$ y $A \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$.
:::

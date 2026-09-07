---
title: "Simétrica y rotación 90°"
description: "Simétrica, antisimétrica y ortogonal: redes, torneos y videojuegos."
module: "traspuesta"
slug: "simetrica-ortogonal"
order: 3
kind: "teoria"
---

:::definicion[Definición]
$A$ cuadrada es **simétrica** si $A^t = A$; **antisimétrica** si $A^t = -A$ (entonces la diagonal es $0$); **ortogonal** si $A^t A = I$, es decir $A^{-1} = A^t$.
:::

:::ejemplo[Simétrica: red no dirigida]
$$
S = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} = S^t
$$

Si el nodo $i$ se conecta con $j$, $j$ se conecta con $i$.
:::

:::ejemplo[Antisimétrica: diferencias]
$$
K = \begin{pmatrix} 0 & 2 & -1 \\ -2 & 0 & 3 \\ 1 & -3 & 0 \end{pmatrix} = -K^t
$$

Sirve para torneos o diferencias $a_{ij} = -a_{ji}$.
:::

:::ejemplo[Ortogonal: rotación 90°]
$$
R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \quad R^t R = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2
$$

Rota el punto $(x, y)$ a $(-y, x)$ sin deformar: clave en videojuegos y gráficos.
:::

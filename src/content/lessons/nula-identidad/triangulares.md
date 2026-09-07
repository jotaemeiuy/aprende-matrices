---
title: "Triangulares y diagonal"
description: "Triangular superior e inferior, ceros estructurales y matriz diagonal."
module: "nula-identidad"
slug: "triangulares"
order: 3
kind: "teoria"
---

:::definicion[Definición]
$A$ cuadrada es **triangular superior** si todo lo que está debajo de la diagonal es cero: $a_{ij} = 0$ cuando $i > j$.
:::

:::definicion[Definición]
$A$ cuadrada es **triangular inferior** si todo lo que está sobre la diagonal es cero: $a_{ij} = 0$ cuando $i < j$.
:::

:::ejemplo[Superior]
$$
S = \begin{pmatrix}
2 & 5 & 1 \\
0 & 3 & 4 \\
0 & 0 & 6
\end{pmatrix}
$$

Todo lo que está debajo de la diagonal es $0$. Estas matrices aparecen al resolver sistemas por eliminación: los ceros indican que ya se eliminaron variables.
:::

:::ejemplo[Inferior]
$$
L = \begin{pmatrix}
1 & 0 & 0 \\
2 & 5 & 0 \\
3 & -1 & 4
\end{pmatrix}
$$

Todo lo que está sobre la diagonal es $0$. Si el módulo 2 depende del 1 y el 3 depende de los anteriores, la matriz de dependencias es triangular inferior: no hay dependencias "hacia adelante".
:::

:::observacion[Observación]
Si una matriz es triangular superior e inferior a la vez, es **diagonal**: solo la diagonal puede tener valores no nulos.
:::

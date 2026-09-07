---
title: "Definición de traza"
description: "La suma de la diagonal principal tr(A) con ejemplos directos."
module: "traza"
slug: "definicion-traza"
order: 1
kind: "teoria"
---

:::definicion[Definición]
Si $A$ es cuadrada de orden $n$, su **traza** es la suma de la diagonal principal:

$$
\operatorname{tr}(A) = a_{11} + a_{22} + \cdots + a_{nn} = \sum_{i=1}^{n} a_{ii}
$$
:::

:::ejemplo[Ejemplo]
Si $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$, entonces $\operatorname{tr}(A) = 4 + 3 = 7$.
:::

:::ejemplo[Ejemplo]
Si $B = \begin{pmatrix} 1 & 0 & 2 \\ 5 & -1 & 3 \\ 0 & 4 & 6 \end{pmatrix}$, entonces $\operatorname{tr}(B) = 1 + (-1) + 6 = 6$.
:::

:::observacion[Observación]
La traza solo existe para matrices **cuadradas**. Es un solo número que resume la diagonal: en código se calcula con un solo `for` sumando `a[i][i]`.
:::

---
title: "Producto de dos matrices"
description: "Columnas de A = filas de B, fila i por columna j, paso a paso."
module: "producto"
slug: "producto-matrices"
order: 2
kind: "teoria"
---

:::definicion[Definición]
$A_{m \times n}$ por $B_{n \times p}$ es posible si **columnas de $A$ $=$ filas de $B$**. El resultado $C_{m \times p}$ tiene:

$$
c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{in}b_{nj} = \sum_{k=1}^{n} a_{ik}b_{kj}
$$

Fila $i$ de $A$ por columna $j$ de $B$.
:::

:::observacion[Error típico]
Si las dimensiones internas no coinciden, no se puede multiplicar (NumPy diría `shapes not aligned`). Mirá siempre el par del medio: $A_{m \times \mathbf{n}} \cdot B_{\mathbf{n} \times p}$.
:::

:::ejemplo[Paso a paso]
$$
A_{2 \times 3} = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}, \quad B_{3 \times 2} = \begin{pmatrix} 7 & 8 \\ 9 & 10 \\ 11 & 12 \end{pmatrix}
$$

$$
AB = \begin{pmatrix}
1\cdot 7+2\cdot 9+3\cdot 11 & 1\cdot 8+2\cdot 10+3\cdot 12 \\
4\cdot 7+5\cdot 9+6\cdot 11 & 4\cdot 8+5\cdot 10+6\cdot 12
\end{pmatrix} = \begin{pmatrix} 58 & 64 \\ 139 & 154 \end{pmatrix}_{2 \times 2}
$$
:::

:::ejemplo[Matriz por vector: capa lineal]
$$
W = \begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}, \quad x = \begin{pmatrix} 4 \\ 5 \end{pmatrix} \Rightarrow Wx = \begin{pmatrix} 2\cdot 4+(-1)\cdot 5 \\ 0\cdot 4+3\cdot 5 \end{pmatrix} = \begin{pmatrix} 3 \\ 15 \end{pmatrix}
$$

Así funciona una neurona o capa densa: $y = Wx + b$.
:::

:::observacion[Incompatible]
$A_{2 \times 3}$ por $B_{2 \times 2}$ es imposible: $3 \neq 2$. En código hay que trasponer o corregir dimensiones.
:::

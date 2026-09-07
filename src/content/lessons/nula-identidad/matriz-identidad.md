---
title: "Matriz identidad"
description: "La matriz Iₙ con unos en la diagonal: el neutro multiplicativo."
module: "nula-identidad"
slug: "matriz-identidad"
order: 2
kind: "teoria"
---

:::definicion[Definición]
La **matriz identidad** $I_n$ es cuadrada de orden $n$, con $1$ en la diagonal principal y $0$ fuera:

$$
I_n = \begin{pmatrix}
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{pmatrix}, \quad a_{ij} = \begin{cases} 1 & i = j \\ 0 & i \neq j \end{cases}
$$
:::

:::ejemplo[Ejemplo]
$I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ y $I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.
:::

:::ejemplo[Programación]
$I_n$ es el "no hacer nada": en gráficos $I_2$ deja un punto igual, en código es como multiplicar por $1$. En NumPy: `np.eye(3)`. En Java se construye con $1$ si `i == j`, $0$ si no.
:::

:::observacion[Observación]
$I$ es el **neutro multiplicativo**: $AI = IA = A$. Es la gemela del $1$ en los números.
:::

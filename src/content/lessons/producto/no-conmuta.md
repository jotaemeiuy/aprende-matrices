---
title: "El orden importa: AB ≠ BA"
description: "El producto no conmuta: rotar y escalar dan distinto según el orden."
module: "producto"
slug: "no-conmuta"
order: 3
kind: "teoria"
---

:::propiedad[No conmutativa]
El producto de matrices **no es conmutativo**: en general $AB \neq BA$. Aunque $AB$ y $BA$ existan, suelen ser distintos; incluso puede existir uno y no el otro.
:::

:::ejemplo[Ejemplo]
$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix},\; B = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \Rightarrow AB = \begin{pmatrix} -2 & 1 \\ -4 & 3 \end{pmatrix},\; BA = \begin{pmatrix} 3 & 4 \\ -1 & -2 \end{pmatrix}
$$
:::

:::ejemplo[Gráficos: rotar y escalar no conmutan]
$R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (rotación 90°) y $E = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$ (estira en $x$):

$$
RE = \begin{pmatrix} 0 & -1 \\ 2 & 0 \end{pmatrix} \neq ER = \begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix}
$$

Aplicadas al punto $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ dan $(-1, 2)$ y $(-2, 1)$: el orden del *pipeline* cambia el resultado.
:::

:::observacion[Consecuencias]
De la no conmutatividad sale que $(AB)^2 \neq A^2B^2$ en general, y que al despejar $AX = B$ hay que multiplicar por $A^{-1}$ del lado correcto: $X = A^{-1}B$, no $BA^{-1}$.
:::

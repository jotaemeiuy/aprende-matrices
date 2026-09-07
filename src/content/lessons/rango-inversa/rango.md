---
title: "Rango y pivotes"
description: "Rango como filas independientes y matrices regulares vs singulares."
module: "rango-inversa"
slug: "rango"
order: 2
kind: "teoria"
---

:::definicion[Definición]
El **rango** de $A$ es el número de filas no nulas (pivotes) que quedan al escalonar por Gauss. Mide cuántas filas son **independientes**.
:::

:::ejemplo[Rango]
$\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} \xrightarrow{F_2 \to F_2-2F_1} \begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}$: rango $1$ (una fila sobra, es el doble de la otra).
:::

:::ejemplo[Rango máximo]
$I_3$ tiene rango $3$. Un dataset $3 \times 3$ de rango $3$ no tiene columnas redundantes.
:::

:::definicion[Regular y singular]
$O$ es el **neutro aditivo** ($A + O = A$) e $I$ el **neutro multiplicativo** ($AI = IA = A$). La **opuesta** de $A$ es $-A$ y la **inversa** (si existe) es $A^{-1}$ con $AA^{-1} = A^{-1}A = I$. $A$ cuadrada es **regular** (invertible) si tiene inversa; si no, es **singular**.
:::

:::ejemplo[Ejemplo]
$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ es regular: $A^{-1} = \begin{pmatrix} -2 & 1 \\ 1{,}5 & -0{,}5 \end{pmatrix}$ (verificar $AA^{-1} = I_2$).
:::

:::ejemplo[Ejemplo]
$B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ es singular: la fila 2 es el doble de la 1 (filas dependientes, dato redundante). No tiene inversa.
:::

:::observacion[Programación]
Filas proporcionales $=$ sensores que miden lo mismo: la matriz es singular y el sistema no tiene solución única. En código, el programa falla al invertir.
:::

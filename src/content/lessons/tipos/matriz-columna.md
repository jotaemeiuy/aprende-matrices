---
title: "Matriz columna y color RGB"
description: "Matrices de orden m × 1: una sola columna, como un color o un punto."
module: "tipos"
slug: "matriz-columna"
order: 2
kind: "teoria"
---

:::definicion[Definición]
Una **matriz columna** es de orden $m \times 1$: una sola columna con $m$ elementos.
:::

:::ejemplo[Ejemplo]
$C = \begin{pmatrix} 255 \\ 128 \\ 0 \end{pmatrix}_{3 \times 1}$: el color naranja en RGB (rojo $= 255$, verde $= 128$, azul $= 0$).
:::

:::ejemplo[Ejemplo]
$P = \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}_{2 \times 1}$: un punto o vector en el plano, muy usado en gráficos por computadora.
:::

:::observacion[Observación]
Fila y columna son espejos: la misma información puede guardarse acostada ($1 \times n$) o parada ($m \times 1$). Pasar de una a otra es **trasponer**, que veremos en el módulo 09.
:::

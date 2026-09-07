---
title: "Matriz nula"
description: "La matriz de ceros O de cualquier orden y su uso en programación."
module: "nula-identidad"
slug: "matriz-nula"
order: 1
kind: "teoria"
---

:::definicion[Definición]
La **matriz nula** $O_{m \times n}$ tiene todos sus elementos iguales a $0$. Existe en cualquier orden.
:::

:::ejemplo[Ejemplo]
$O_{2 \times 2} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ y $O_{2 \times 3} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.
:::

:::ejemplo[Programación]
Una imagen $2 \times 3$ toda negra es la matriz nula. Inicializar un acumulador en cero es crear $O$: en Java, `new int[2][3]` ya nace en cero.
:::

:::observacion[Observación]
$O$ es el **neutro aditivo**: $A + O = A$ para toda matriz $A$ del mismo orden. Es el "cero" de las matrices.
:::

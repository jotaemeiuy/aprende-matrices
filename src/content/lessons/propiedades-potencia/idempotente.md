---
title: "Idempotente"
description: "A² = A: proyecciones y filtros estables que no cambian al repetirse."
module: "propiedades-potencia"
slug: "idempotente"
order: 3
kind: "teoria"
---

:::definicion[Definición]
$A$ es **idempotente** si $A^2 = A$: aplicarla dos veces es igual que aplicarla una.
:::

:::ejemplo[Ejemplo]
$P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$: $P^2 = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} = P$. Proyecta $(x, y)$ sobre el eje $x$.
:::

:::ejemplo[Ejemplo]
$Q = \begin{pmatrix} 0{,}5 & 0{,}5 \\ 0{,}5 & 0{,}5 \end{pmatrix}$: $Q^2 = Q$. Promedia dos valores; promediar dos veces no cambia nada. Ideal de filtro estable.
:::

:::observacion[Observación]
Las proyecciones ($P$) y los promedios ($Q$) son idempotentes por naturaleza: una vez que proyectaste o promediaste, repetir no agrega nada.
:::

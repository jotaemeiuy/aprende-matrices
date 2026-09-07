---
title: "Rectangular: dataset de películas"
description: "Matrices con m ≠ n: tablas de datos con casos por fila y variables por columna."
module: "tipos"
slug: "rectangular"
order: 3
kind: "teoria"
---

:::definicion[Definición]
Una **matriz rectangular** tiene distinto número de filas y columnas ($m \neq n$).
:::

:::ejemplo[Ejemplo]
$$
A = \begin{pmatrix}
5 & 7 & 3 & 9 \\
8 & 6 & 4 & 2 \\
1 & 0 & 5 & 7
\end{pmatrix}_{3 \times 4}
$$

Tabla con 3 usuarios (filas) y 4 películas (columnas): puntajes del 0 al 9. Es el típico *dataset*: filas $=$ casos, columnas $=$ variables.
:::

:::ejemplo[Ejemplo]
$$
B = \begin{pmatrix}
1 & 2 \\
3 & 4 \\
5 & 6
\end{pmatrix}_{3 \times 2}
$$

3 puntos en 2D guardados como filas: $(1, 2)$, $(3, 4)$, $(5, 6)$.
:::

:::observacion[Observación]
Casi todos los datos reales son rectangulares: planillas, imágenes no cuadradas, lotes de mediciones. El orden te dice de un vistazo cuántos casos y cuántas variables hay.
:::

---
title: "Ejercicios: tienda y evento ×3"
description: "Práctica de igualdad, suma y producto por escalar con respuestas."
module: "operaciones-basicas"
slug: "ejercicios-suma"
order: 4
kind: "practica"
---

:::ejercicio[1 · Test de igualdad]
- ¿Son iguales $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ y $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$? ¿Y con $\begin{pmatrix} 1 & 2 & 0 \\ 3 & 4 & 0 \end{pmatrix}$?
- Hallá $x, y$: $\begin{pmatrix} x & 2 \\ 3 & y \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix}$.
- En Java, ¿cómo compararías dos matrices $2 \times 2$ casilla por casilla? Escribí la idea con un `boolean iguales`.
:::

:::ejercicio[2 · Turnos de una tienda]
Mañana $M = \begin{pmatrix} 10 & 5 & 3 \\ 4 & 7 & 2 \end{pmatrix}$, tarde $T = \begin{pmatrix} 6 & 1 & 8 \\ 3 & 9 & 5 \end{pmatrix}$ (2 días $\times$ 3 productos). Calculá el total $M + T$ y explicá qué es cada casilla.
:::

:::ejercicio[3 · Evento puntaje triple]
Recompensas $R = \begin{pmatrix} 10 & 25 & 30 \\ 15 & 5 & 20 \end{pmatrix}$. Hay evento $\times 3$.

- Calculá $3R$.
- Normalizá la imagen $\begin{pmatrix} 255 & 128 \\ 0 & 64 \end{pmatrix}$ con $\frac{1}{255}A$.
- En Java, multiplicá toda matriz por `k` sin crear otra matriz (en el lugar):

```java
for (int i = 0; i < f; i++)
  for (int j = 0; j < c; j++)
    m[i][j] = m[i][j] * k;
```
:::

## Soluciones

- **1:** sí son iguales; con la $2 \times 3$ no (distinto orden); $x = 1$, $y = 5$. Comparar con doble `for` y cortar en la primera diferencia.
- **2:** $\begin{pmatrix} 16 & 6 & 11 \\ 7 & 16 & 7 \end{pmatrix}$: ventas del día por producto.
- **3:** $3R = \begin{pmatrix} 30 & 75 & 90 \\ 45 & 15 & 60 \end{pmatrix}$; normalizada $\begin{pmatrix} 1 & 0{,}50 \\ 0 & 0{,}25 \end{pmatrix}$.

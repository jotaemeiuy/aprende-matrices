---
title: "Ejercicios de traza"
description: "Práctica de traza directa, en Java y en grafos, con respuestas."
module: "traza"
slug: "ejercicios-traza"
order: 3
kind: "practica"
---

:::ejercicio[1 · Cálculo directo]
Calculá la traza de $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ y de $B = \begin{pmatrix} 1 & 0 & 2 \\ 5 & -1 & 3 \\ 0 & 4 & 6 \end{pmatrix}$.
:::

:::ejercicio[2 · Matriz de confusión]
$$
C = \begin{pmatrix}
50 & 2 & 1 \\
3 & 45 & 5 \\
0 & 4 & 60
\end{pmatrix}
$$

- Calculá $\operatorname{tr}(C)$. ¿Qué mide (aciertos totales)?
- En Java, ¿cómo sumarías la diagonal con un solo `for`?
:::

:::ejercicio[3 · Bucles en un grafo]
$G = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 1 \end{pmatrix}$.

- Calculá $\operatorname{tr}(G)$. ¿Hay nodos conectados consigo mismos? ¿Cuáles?
- ¿Qué significa $\operatorname{tr}(G) = 0$ en una red?
:::

## Soluciones

- **1:** $7$ y $6$.
- **2:** $155$ aciertos totales.
```java
int traza = 0;
for (int i = 0; i < 3; i++) traza += c[i][i];
```
- **3:** $\operatorname{tr} = 1$, hay bucle en el nodo 3; $\operatorname{tr} = 0$ significa sin bucles.

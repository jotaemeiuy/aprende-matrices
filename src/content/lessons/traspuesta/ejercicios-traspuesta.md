---
title: "Ejercicios con Aᵗ"
description: "Práctica de traspuesta y clasificación con respuestas."
module: "traspuesta"
slug: "ejercicios-traspuesta"
order: 4
kind: "practica"
---

:::ejercicio[1 · Trasponer dataset]
$H = \begin{pmatrix} 5 & 6 & 7 \\ 8 & 9 & 10 \end{pmatrix}_{2 \times 3}$ (2 semanas $\times$ 3 cursos).

- Calculá $H^t$. ¿Qué orden tiene?
- En Java completalo (fijate que las dimensiones se invierten):

```java
int[][] t = new int[3][2];
for (int i = 0; i < 2; i++)
  for (int j = 0; j < 3; j++)
    t[j][i] = h[i][j];
```
:::

:::ejercicio[2 · Las 4 propiedades]
Con $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ -1 & 2 \end{pmatrix}$ verificá $(A+B)^t = A^t + B^t$ y $(AB)^t = B^tA^t$. Con $k = 2$ verificá $(kA)^t = kA^t$ y $(A^t)^t = A$.
:::

:::ejercicio[3 · Clasificar]
$$
S = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}, \;
K = \begin{pmatrix} 0 & 2 & -1 \\ -2 & 0 & 3 \\ 1 & -3 & 0 \end{pmatrix}, \;
R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}
$$

- ¿Cuál es simétrica ($A^t = A$), antisimétrica ($A^t = -A$) y ortogonal ($R^tR = I$)?
- Asociá cada una a: red no dirigida, torneo con $a_{ij} = -a_{ji}$, rotación de videojuego.
- En Java, ¿cómo chequearías simetría con `m[i][j] == m[j][i]` en doble `for`?
:::

## Soluciones

- **1:** $H^t_{3 \times 2}$.
- **2:** verificación directa.
- **3:** $S$ simétrica (red), $K$ antisimétrica (torneo), $R$ ortogonal (rotación).

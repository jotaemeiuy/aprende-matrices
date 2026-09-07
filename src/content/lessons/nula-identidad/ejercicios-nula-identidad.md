---
title: "Ejercicios: imagen negra"
description: "Práctica de nula, identidad y triangulares con respuestas."
module: "nula-identidad"
slug: "ejercicios-nula-identidad"
order: 4
kind: "practica"
---

:::ejercicio[1 · Imagen negra]
Una imagen $2 \times 3$ toda negra es $O_{2 \times 3}$.

- Escribila. ¿Qué orden tiene?
- En Java, ¿cómo inicializás `int[][] img = new int[2][3]` en cero con dos `for`?
:::

:::ejercicio[2 · Identidad]
- Escribí $I_2$ e $I_3$.
- En Java, construí $I_4$ con $1$ si `i == j` y $0$ si no:

```java
for (int i = 0; i < 4; i++)
  for (int j = 0; j < 4; j++)
    // completar
```
:::

:::ejercicio[3 · ¿Triangular?]
$$
S = \begin{pmatrix} 2 & 5 & 1 \\ 0 & 3 & 4 \\ 0 & 0 & 6 \end{pmatrix}, \quad
L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 5 & 0 \\ 3 & -1 & 4 \end{pmatrix}, \quad
M = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}
$$

Decí si cada una es triangular superior, inferior, diagonal o ninguna.
:::

:::ejercicio[4 · Dependencias]
El módulo 2 depende del 1, y el 3 depende del 1 y 2. La matriz de dependencias es triangular inferior con $1$ en la diagonal.

- Escribí esa matriz $3 \times 3$.
- ¿Qué significan los ceros sobre la diagonal en términos del programa?
:::

## Soluciones

- **1:** $O_{2 \times 3}$ todo cero, orden $2 \times 3$. En Java `new int[2][3]` ya es cero; si hay que forzarlo, doble `for` asignando `0`.
- **2:** $I_2$, $I_3$; completar con `img[i][j] = (i == j) ? 1 : 0;`
- **3:** $S$ superior, $L$ inferior, $M$ ninguna (tiene un $1$ debajo de la diagonal en $a_{31}$).
- **4:** $\begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}$; los ceros dicen que no hay dependencia "hacia adelante".

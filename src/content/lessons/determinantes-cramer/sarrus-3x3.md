---
title: "Sarrus: determinante 3×3"
description: "La regla de Sarrus paso a paso y su significado como volumen en 3D."
module: "determinantes-cramer"
slug: "sarrus-3x3"
order: 2
kind: "teoria"
---

Para una matriz $3 \times 3$ el determinante se puede calcular con la **regla de Sarrus**. Es una receta visual: se repiten las dos primeras columnas a la derecha y se suman tres diagonales hacia abajo, menos tres diagonales hacia arriba.

:::definicion[Regla de Sarrus]
$$
A = \begin{pmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{pmatrix}
$$

$$
\det(A) = (aei + bfg + cdh) - (ceg + bdi + afh)
$$

Las tres primeras diagonales (de izquierda a derecha, bajando) se suman. Las tres que suben se restan.
:::

:::ejemplo[Sarrus paso a paso]
$$
A = \begin{pmatrix}
1 & 2 & 3 \\
0 & 1 & 4 \\
5 & 6 & 0
\end{pmatrix}
$$

Primero escribimos las dos primeras columnas otra vez:

$$
\begin{array}{ccc|cc}
1 & 2 & 3 & 1 & 2 \\
0 & 1 & 4 & 0 & 1 \\
5 & 6 & 0 & 5 & 6
\end{array}
$$

**Diagonales que bajan:**
$$
1 \cdot 1 \cdot 0 + 2 \cdot 4 \cdot 5 + 3 \cdot 0 \cdot 6 = 0 + 40 + 0 = 40
$$

**Diagonales que suben:**
$$
3 \cdot 1 \cdot 5 + 1 \cdot 4 \cdot 6 + 2 \cdot 0 \cdot 0 = 15 + 24 + 0 = 39
$$

**Determinante:**
$$
\det(A) = 40 - 39 = 1
$$
:::

:::ejemplo[Otro ejemplo con ceros]
$$
B = \begin{pmatrix}
2 & 0 & 1 \\
3 & 1 & 4 \\
1 & 2 & 0
\end{pmatrix}
$$

Bajan: $2 \cdot 1 \cdot 0 + 0 \cdot 4 \cdot 1 + 1 \cdot 3 \cdot 2 = 0 + 0 + 6 = 6$.

Suben: $1 \cdot 1 \cdot 1 + 0 \cdot 3 \cdot 0 + 2 \cdot 4 \cdot 2 = 1 + 0 + 16 = 17$.

$$
\det(B) = 6 - 17 = -11
$$
:::

:::propiedad[Sarrus solo funciona en 3×3]
La regla de Sarrus es un atajo para $3 \times 3$. **No** se puede aplicar a $4 \times 4$ ni a órdenes mayores: para eso se usa la expansión por cofactores o, en la práctica, Gauss. Si ves una fórmula con ocho productos para una $4 \times 4$, no es Sarrus.
:::

:::observacion[Volumen en 3D]
En un espacio 3D, el determinante de una transformación $3 \times 3$ es el **factor de volumen**:

- Una rotación tiene $\det = 1$: conserva volúmenes.
- Una escala $\operatorname{diag}(2, 3, 4)$ tiene $\det = 24$: un cubo de volumen $1$ pasa a volumen $24$.
- Una proyección sobre el plano $xy$, como $\operatorname{diag}(1, 1, 0)$, tiene $\det = 0$: el espacio se aplasta y el volumen se pierde.
:::

:::ejemplo[En código]
En Java, Sarrus se escribe con seis productos. Cuidado con los signos:

```java
static double det3(double[][] m) {
  return m[0][0] * m[1][1] * m[2][2]
       + m[0][1] * m[1][2] * m[2][0]
       + m[0][2] * m[1][0] * m[2][1]
       - m[0][2] * m[1][1] * m[2][0]
       - m[0][0] * m[1][2] * m[2][1]
       - m[0][1] * m[1][0] * m[2][2];
}
```

Con números decimales, comparar el resultado con cero usando una tolerancia (`Math.abs(det) < 1e-9`) y no con `== 0`.
:::

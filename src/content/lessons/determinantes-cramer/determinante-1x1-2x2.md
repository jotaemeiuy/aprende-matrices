---
title: "Determinante: 1×1 y 2×2"
description: "Qué es el determinante, cómo se calcula en orden 1 y 2, y qué mide en una transformación."
module: "determinantes-cramer"
slug: "determinante-1x1-2x2"
order: 1
kind: "teoria"
---

El **determinante** es un número que se calcula a partir de una matriz cuadrada. No es otra matriz: es una sola cifra que resume dos cosas: si la matriz se puede invertir y cuánto cambia el área (o el volumen) cuando la usás como transformación.

:::definicion[Definición]
Solo las matrices **cuadradas** ($n \times n$) tienen determinante. Se escribe $\det(A)$ o $|A|$.
:::

## Orden 1

Para una matriz $1 \times 1$:

$$
A = \begin{pmatrix} a_{11} \end{pmatrix}
\quad\Rightarrow\quad
\det(A) = a_{11}
$$

El determinante de un número es ese mismo número. Es el caso base de la definición.

## Orden 2

Para una matriz $2 \times 2$:

$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
\quad\Rightarrow\quad
\det(A) = ad - bc
$$

Es el producto de la **diagonal principal** ($ad$) menos el producto de la **diagonal secundaria** ($bc$).

:::ejemplo[Determinantes de orden 1 y 2]
$$
\det\begin{pmatrix} 7 \end{pmatrix} = 7
$$

$$
\det\begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}
= 3 \cdot 4 - 2 \cdot 1 = 12 - 2 = 10
$$

$$
\det\begin{pmatrix} -1 & 5 \\ 2 & 3 \end{pmatrix}
= (-1) \cdot 3 - 5 \cdot 2 = -3 - 10 = -13
$$
:::

:::propiedad[Propiedades que vas a usar]
- $\det(I_n) = 1$: la identidad no cambia nada.
- $\det(O_n) = 0$: la matriz nula aplasta todo.
- $\det(AB) = \det(A)\det(B)$.
- Si $A$ tiene inversa, $\det(A^{-1}) = \dfrac{1}{\det(A)}$.
- Si una fila o una columna es toda cero, $\det(A) = 0$.
- Si dos filas (o columnas) son iguales, $\det(A) = 0$.
- En una matriz triangular, $\det(A)$ es el producto de su diagonal.
:::

:::observacion[Qué mide en informática]
En gráficos 2D, una matriz $2 \times 2$ transforma puntos del plano. Su determinante es el **factor de escala del área**:

- $\det(A) = 1$: el área se conserva (una rotación).
- $\det(A) = 4$: el área se multiplica por $4$.
- $\det(A) = 0$: el plano se aplasta sobre una recta; la transformación **no se puede deshacer** y la matriz no tiene inversa.
:::

:::ejemplo[Rotación, escala y proyección]
$$
R = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}
\quad\Rightarrow\quad
\det(R) = \cos^2\theta + \sin^2\theta = 1
$$

$$
E = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}
\quad\Rightarrow\quad
\det(E) = 4
$$

$$
P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}
\quad\Rightarrow\quad
\det(P) = 0
$$

$P$ proyecta cualquier punto sobre el eje $x$: dos puntos distintos pueden terminar en el mismo lugar. Por eso no hay vuelta atrás.
:::

:::observacion[Conexión con la inversa]
Una matriz cuadrada $A$ tiene inversa si y solo si $\det(A) \neq 0$. Si $\det(A) = 0$, se llama **singular**. En el capítulo 08 viste que Gauss-Jordan no puede llegar a $I$ en ese caso: es la misma idea vista desde otro ángulo.
:::

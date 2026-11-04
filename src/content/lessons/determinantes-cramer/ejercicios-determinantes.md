---
title: "Ejercicios: determinantes en informática"
description: "Práctica de determinantes 2×2 y 3×3 con aplicaciones y respuestas."
module: "determinantes-cramer"
slug: "ejercicios-determinantes"
order: 3
kind: "practica"
---

:::ejercicio[1 · Calculá el determinante]
Calculá:

- $\det\begin{pmatrix} 5 & -2 \\ 3 & 4 \end{pmatrix}$
- $\det\begin{pmatrix} 2 & 0 & 1 \\ 3 & 1 & 4 \\ 1 & 2 & 0 \end{pmatrix}$ con Sarrus.
- $\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 1 & 0 & 6 \end{pmatrix}$ con Sarrus.
:::

:::ejercicio[2 · ¿Se puede deshacer la transformación?]
Un filtro 2D usa $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ y otro usa $B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$.

- Calculá $\det(A)$ y $\det(B)$.
- ¿Cuál de las dos transformaciones multiplica el área por $5$?
- ¿Cuál no tiene inversa? ¿Qué le pasa a una imagen si aplicás esa transformación?
:::

:::ejercicio[3 · Volumen 3D]
Una escena 3D se escala con $M = \operatorname{diag}(2, 3, 4)$ y otra se proyecta con $N = \operatorname{diag}(1, 1, 0)$.

- Calculá $\det(M)$ y $\det(N)$.
- Si un cubo tiene volumen $1$, ¿qué volumen tiene después de $M$?
- ¿Por qué $N$ no se puede invertir? ¿Qué pasa con la profundidad?
:::

:::ejercicio[4 · Encontrá el valor de k]
Sea $A = \begin{pmatrix} k & 2 \\ 3 & 4 \end{pmatrix}$.

- Calculá $\det(A)$ en función de $k$.
- ¿Para qué valor de $k$ la matriz es singular?
- Si $k = 2$, ¿existe $A^{-1}$? Justificá con el determinante.
:::

:::ejercicio[5 · Depurá el código]
Un compañero escribió esta función para Sarrus, pero siempre obtiene mal el resultado:

```java
static double det3(double[][] m) {
  return m[0][0] * m[1][1] * m[2][2]
       + m[0][1] * m[1][2] * m[2][0]
       + m[0][2] * m[1][0] * m[2][1];
}
```

- ¿Qué términos faltan?
- Escribí la función corregida.
- Probala mentalmente con la matriz $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$: debería dar $1$.
:::

## Soluciones

- **1:** $26$; $-11$; $22$.
- **2:** $\det(A) = 5$, $\det(B) = 0$. $A$ multiplica el área por $5$; $B$ aplasta la imagen sobre una recta, no tiene inversa y no se puede deshacer.
- **3:** $\det(M) = 24$, $\det(N) = 0$. El cubo pasa a volumen $24$. $N$ elimina la coordenada $z$: pierde la profundidad y no se puede reconstruir.
- **4:** $\det(A) = 4k - 6$. Es singular cuando $4k - 6 = 0$, es decir $k = \frac{3}{2}$. Si $k = 2$, $\det(A) = 2 \neq 0$ y sí existe inversa.
- **5:** faltan los tres productos negativos: $-m_{02}m_{11}m_{20} - m_{00}m_{12}m_{21} - m_{01}m_{10}m_{22}$. La función corregida es la del teórico; con $I_3$ da $1$.

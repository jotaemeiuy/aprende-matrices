---
title: "Regla de Cramer paso a paso"
description: "Resolver sistemas cuadrados con determinantes y clasificar los casos con Δ = 0."
module: "determinantes-cramer"
slug: "regla-cramer"
order: 4
kind: "teoria"
---

La **regla de Cramer** resuelve sistemas de ecuaciones lineales usando determinantes. Sirve cuando el sistema tiene el mismo número de ecuaciones que de incógnitas y el determinante de la matriz de coeficientes es distinto de cero. Si $\Delta = 0$, Cramer no se puede usar, pero los determinantes $\Delta_k$ permiten decidir si el sistema es incompatible o compatible indeterminado.

:::definicion[Regla de Cramer]
Sea el sistema $AX = B$, con $A$ una matriz cuadrada $n \times n$. Si $\Delta = \det(A) \neq 0$, la solución es única y:

$$
x_i = \frac{\Delta_i}{\Delta}
$$

donde $\Delta_i$ es el determinante de la matriz que se obtiene al reemplazar la columna $i$ de $A$ por la columna $B$.
:::

:::ejemplo[Paso a paso en 2×2]
Resolver:

$$
\begin{cases}
2x + 3y = 8 \\
4x - y = 2
\end{cases}
$$

**Paso 1. Matriz de coeficientes y columna de términos independientes:**

$$
A = \begin{pmatrix} 2 & 3 \\ 4 & -1 \end{pmatrix},
\qquad
B = \begin{pmatrix} 8 \\ 2 \end{pmatrix}
$$

**Paso 2. Determinante del sistema:**

$$
\Delta = \det(A) = 2 \cdot (-1) - 3 \cdot 4 = -2 - 12 = -14
$$

Como $\Delta \neq 0$, hay solución única.

**Paso 3. Determinante para $x$:** reemplazamos la primera columna por $B$:

$$
\Delta_x = \det\begin{pmatrix} 8 & 3 \\ 2 & -1 \end{pmatrix}
= 8 \cdot (-1) - 3 \cdot 2 = -8 - 6 = -14
$$

**Paso 4. Determinante para $y$:** reemplazamos la segunda columna por $B$:

$$
\Delta_y = \det\begin{pmatrix} 2 & 8 \\ 4 & 2 \end{pmatrix}
= 2 \cdot 2 - 8 \cdot 4 = 4 - 32 = -28
$$

**Paso 5. Dividimos:**

$$
x = \frac{\Delta_x}{\Delta} = \frac{-14}{-14} = 1,
\qquad
y = \frac{\Delta_y}{\Delta} = \frac{-28}{-14} = 2
$$

Solución: $(x, y) = (1, 2)$. Verificación: $2(1) + 3(2) = 8$ y $4(1) - 2 = 2$.
:::

:::ejemplo[Paso a paso en 3×3]
Resolver:

$$
\begin{cases}
x + y + z = 6 \\
2x - y + z = 3 \\
x + 2y - z = 2
\end{cases}
$$

**Paso 1. Matrices:**

$$
A = \begin{pmatrix}
1 & 1 & 1 \\
2 & -1 & 1 \\
1 & 2 & -1
\end{pmatrix},
\qquad
B = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}
$$

**Paso 2. Determinante del sistema con Sarrus:**

$$
\begin{aligned}
\Delta &= \bigl(1 \cdot (-1) \cdot (-1) + 1 \cdot 1 \cdot 1 + 1 \cdot 2 \cdot 2\bigr) \\
&\quad - \bigl(1 \cdot (-1) \cdot 1 + 1 \cdot 2 \cdot (-1) + 1 \cdot 1 \cdot 2\bigr) \\
&= (1 + 1 + 4) - (-1 - 2 + 2) = 6 - (-1) = 7
\end{aligned}
$$

**Paso 3. Determinante para $x$:** reemplazamos la columna 1 por $B$:

$$
\Delta_x = \det\begin{pmatrix}
6 & 1 & 1 \\
3 & -1 & 1 \\
2 & 2 & -1
\end{pmatrix}
$$

$$
\begin{aligned}
\Delta_x &= \bigl(6 \cdot (-1) \cdot (-1) + 1 \cdot 1 \cdot 2 + 1 \cdot 3 \cdot 2\bigr) \\
&\quad - \bigl(1 \cdot (-1) \cdot 2 + 1 \cdot 3 \cdot (-1) + 6 \cdot 1 \cdot 2\bigr) \\
&= (6 + 2 + 6) - (-2 - 3 + 12) = 14 - 7 = 7
\end{aligned}
$$

**Paso 4. Determinante para $y$:** reemplazamos la columna 2 por $B$:

$$
\Delta_y = \det\begin{pmatrix}
1 & 6 & 1 \\
2 & 3 & 1 \\
1 & 2 & -1
\end{pmatrix}
$$

$$
\begin{aligned}
\Delta_y &= \bigl(1 \cdot 3 \cdot (-1) + 6 \cdot 1 \cdot 1 + 1 \cdot 2 \cdot 2\bigr) \\
&\quad - \bigl(1 \cdot 3 \cdot 1 + 6 \cdot 2 \cdot (-1) + 1 \cdot 1 \cdot 2\bigr) \\
&= (-3 + 6 + 4) - (3 - 12 + 2) = 7 - (-7) = 14
\end{aligned}
$$

**Paso 5. Determinante para $z$:** reemplazamos la columna 3 por $B$:

$$
\Delta_z = \det\begin{pmatrix}
1 & 1 & 6 \\
2 & -1 & 3 \\
1 & 2 & 2
\end{pmatrix}
$$

$$
\begin{aligned}
\Delta_z &= \bigl(1 \cdot (-1) \cdot 2 + 1 \cdot 3 \cdot 1 + 6 \cdot 2 \cdot 2\bigr) \\
&\quad - \bigl(6 \cdot (-1) \cdot 1 + 1 \cdot 2 \cdot 2 + 1 \cdot 3 \cdot 2\bigr) \\
&= (-2 + 3 + 24) - (-6 + 4 + 6) = 25 - 4 = 21
\end{aligned}
$$

**Paso 6. Dividimos:**

$$
x = \frac{7}{7} = 1, \qquad
y = \frac{14}{7} = 2, \qquad
z = \frac{21}{7} = 3
$$

Solución: $(1, 2, 3)$.
:::

:::propiedad[Condiciones para usar Cramer]
- El sistema debe ser **cuadrado**: igual número de ecuaciones que de incógnitas.
- La matriz $A$ debe tener $\Delta = \det(A) \neq 0$.
- Si $\Delta = 0$, Cramer **no se puede aplicar** porque dividiríamos por cero. Para clasificar el sistema, mirá los determinantes $\Delta_k$:
  - Si **al menos uno** de los $\Delta_k \neq 0$, el sistema es **incompatible** (no tiene solución).
  - Si **todos** los $\Delta_k = 0$, el sistema es **compatible indeterminado** (infinitas soluciones).
- En ambos casos se puede confirmar con Rouché-Frobenius o Gauss (capítulo 10).
:::

:::ejemplo[Cuando Δ = 0]
Sistema 1:
$$
\begin{cases}
x + y = 2 \\
2x + 2y = 4
\end{cases}
\quad\Rightarrow\quad
\Delta = 1 \cdot 2 - 1 \cdot 2 = 0
$$

Calculamos también los determinantes de Cramer:

$$
\Delta_x = \det\begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix} = 4 - 4 = 0,
\qquad
\Delta_y = \det\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} = 4 - 4 = 0
$$

Como $\Delta = 0$ y **todos** los $\Delta_k = 0$, el sistema es **compatible indeterminado**. Las dos ecuaciones son la misma recta: hay **infinitas soluciones**.

Sistema 2:
$$
\begin{cases}
x + y = 2 \\
2x + 2y = 5
\end{cases}
\quad\Rightarrow\quad
\Delta = 1 \cdot 2 - 1 \cdot 2 = 0
$$

$$
\Delta_x = \det\begin{pmatrix} 2 & 1 \\ 5 & 2 \end{pmatrix} = 4 - 5 = -1 \neq 0,
\qquad
\Delta_y = \det\begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix} = 5 - 4 = 1 \neq 0
$$

Como $\Delta = 0$ y **al menos un** $\Delta_k \neq 0$, el sistema es **incompatible**. Las rectas son paralelas: **no hay solución**.
:::

:::observacion[En informática]
Cramer aparece cuando el sistema es chico y los coeficientes son números concretos:

- **Gráficos 2D:** intersección de dos rectas (por ejemplo, detectar si un rayo toca un segmento).
- **Gráficos 3D:** intersección de tres planos o coordenadas baricéntricas de un triángulo.
- **Circuitos:** corrientes de malla con las leyes de Kirchhoff (3 ecuaciones, 3 incógnitas).
- **Color:** calibrar tres canales o sensores para obtener un color objetivo.

Para sistemas grandes (miles de incógnitas) no se usa Cramer: calcular $n+1$ determinantes es carísimo. En la práctica se usa Gauss, que es $O(n^3)$.
:::

:::observacion[En código]
Un Cramer 2×2 en Java, con la comprobación de seguridad:

```java
static double[] cramer2(double a, double b, double c,
                        double d, double e, double f) {
  double delta = a * d - b * c;
  if (Math.abs(delta) < 1e-12) {
    throw new ArithmeticException("Sistema sin solución única");
  }
  double x = (e * d - b * f) / delta;
  double y = (a * f - e * c) / delta;
  return new double[] { x, y };
}
```

El sistema es:
$$
\begin{cases}
ax + by = e \\
cx + dy = f
\end{cases}
$$
:::

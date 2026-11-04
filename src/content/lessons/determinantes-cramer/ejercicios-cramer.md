---
title: "Ejercicios: Cramer en informática"
description: "Sistemas 2×2 y 3×3 resueltos por determinantes, con casos singulares y código."
module: "determinantes-cramer"
slug: "ejercicios-cramer"
order: 5
kind: "practica"
---

:::ejercicio[1 · Intersección de dos rectas]
Dos rectas de una escena 2D son:

$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$

- Calculá $\Delta$, $\Delta_x$ y $\Delta_y$.
- Hallá el punto de intersección.
- Verificá la solución en las dos ecuaciones.
:::

:::ejercicio[2 · Calibración de color]
Un monitor mezcla tres canales y quiere obtener el objetivo $B = \begin{pmatrix} 4 \\ 10 \\ 8 \end{pmatrix}$. Las mezclas posibles están dadas por:

$$
A = \begin{pmatrix}
2 & 1 & 0 \\
1 & 3 & 1 \\
0 & 1 & 2
\end{pmatrix}
$$

Resolvé $AX = B$ con Cramer.

- Calculá $\Delta = \det(A)$.
- Calculá $\Delta_x$, $\Delta_y$ y $\Delta_z$.
- Indicá cuánto vale cada canal.
:::

:::ejercicio[3 · Coordenadas en una malla 3D]
Un punto de una malla tiene coordenadas $(x, y, z)$ que cumplen:

$$
\begin{cases}
x + 2y + 3z = 3 \\
2x + y = 3 \\
y + z = 0
\end{cases}
$$

- Escribí $A$ y $B$.
- Calculá $\Delta$ y los tres determinantes de Cramer.
- Hallá $(x, y, z)$.
:::

:::ejercicio[4 · Cuando Cramer no alcanza]
Para cada sistema, calculá sus determinantes y explicá qué pasa:

a)
$$
\begin{cases}
x + 2y = 4 \\
2x + 4y = 8
\end{cases}
$$

b)
$$
\begin{cases}
x + 2y = 4 \\
2x + 4y = 9
\end{cases}
$$

- Calculá $\Delta$, $\Delta_x$ y $\Delta_y$.
- Clasificá cada sistema usando el criterio de los $\Delta_k$.
- Confirmá la clasificación con Rouché-Frobenius.
:::

:::ejercicio[5 · Completá el código]
Este método intenta resolver un sistema 2×2, pero le falta una comprobación:

```java
static double[] cramer2(double a, double b, double c,
                        double d, double e, double f) {
  double delta = a * d - b * c;
  double x = (e * d - b * f) / delta;
  double y = (a * f - e * c) / delta;
  return new double[] { x, y };
}
```

- ¿Qué pasa si `delta` vale cero?
- Agregá la comprobación y lanzá una excepción con un mensaje claro.
- ¿Por qué conviene comparar con una tolerancia y no con `delta == 0`?
:::

## Soluciones

- **1:** $\Delta = -3$, $\Delta_x = -6$, $\Delta_y = -9$. $x = 2$, $y = 3$. Verificación: $2+3=5$ y $2(2)-3=1$.
- **2:** $\Delta = 8$, $\Delta_x = 8$, $\Delta_y = 16$, $\Delta_z = 24$. $(x, y, z) = (1, 2, 3)$.
- **3:** $\Delta = 3$, $\Delta_x = 6$, $\Delta_y = -3$, $\Delta_z = 3$. $(x, y, z) = (2, -1, 1)$.
- **4:** a) $\Delta = 0$, $\Delta_x = 0$ y $\Delta_y = 0$: todos los determinantes de Cramer son cero → **compatible indeterminado** (infinitas soluciones; las ecuaciones son la misma recta). b) $\Delta = 0$, $\Delta_x = -2 \neq 0$ y $\Delta_y = 1 \neq 0$: al menos uno no es cero → **incompatible** (sin solución; las rectas son paralelas). En ambos casos Cramer no se aplica porque dividiría por cero.
- **5:** Si `delta == 0` se divide por cero: el programa falla o devuelve `Infinity`/`NaN`. Hay que comprobar `Math.abs(delta) < 1e-12` y lanzar `ArithmeticException`. La tolerancia evita errores de redondeo de `double`.

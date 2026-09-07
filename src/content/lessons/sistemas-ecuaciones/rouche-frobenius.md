---
title: "Teorema de Rouché-Frobenius"
description: "Rango de A vs rango de (A|B): los 3 destinos de un sistema."
module: "sistemas-ecuaciones"
slug: "rouche-frobenius"
order: 1
kind: "teoria"
---

:::definicion[Definición]
Al escalonar una matriz por Gauss, cada fila no nula forma un **escalón** (pivote). El número de escalones es el **rango**:

$$
\operatorname{rango}(A) = \text{número de filas no nulas al escalonar} = \text{número de pivotes}
$$
:::

:::propiedad[Teorema de Rouché-Frobenius, solo enunciado]
Sea un sistema de $m$ ecuaciones con $n$ incógnitas $AX = B$, con $A_{m \times n}$ matriz de coeficientes y $(A \mid B)_{m \times (n+1)}$ matriz ampliada. Entonces:

1. Si $\operatorname{rango}(A) \neq \operatorname{rango}(A \mid B)$: sistema **incompatible** (sin solución).
2. Si $\operatorname{rango}(A) = \operatorname{rango}(A \mid B) = n$: sistema **compatible determinado** (solución única).
3. Si $\operatorname{rango}(A) = \operatorname{rango}(A \mid B) < n$: sistema **compatible indeterminado** (infinitas soluciones).
:::

:::observacion[En código]
Escalonar $(A \mid B)$ y contar pivotes a izquierda y derecha de la barra. Si aparece una fila $[0\cdots 0 \mid b \neq 0]$, es $0 = b$: incompatible.
:::

:::ejemplo[Compatible determinado, rango 2 = n]
$$
\left(\begin{array}{cc|c}
1 & 2 & 5 \\
3 & 4 & 11
\end{array}\right)
\xrightarrow{F_2 \to F_2-3F_1}
\left(\begin{array}{cc|c}
1 & 2 & 5 \\
0 & -2 & -4
\end{array}\right)
$$

2 escalones: $\operatorname{rango}(A) = 2$, $\operatorname{rango}(A \mid B) = 2 = n = 2$. Compatible determinado: solución única $x = 1$, $y = 2$.
:::

:::ejemplo[Incompatible, 1 ≠ 2]
$$
\left(\begin{array}{cc|c}
1 & 2 & 3 \\
2 & 4 & 9
\end{array}\right)
\xrightarrow{F_2 \to F_2-2F_1}
\left(\begin{array}{cc|c}
1 & 2 & 3 \\
0 & 0 & 3
\end{array}\right)
$$

Fila $0 = 3$: $\operatorname{rango}(A) = 1 \neq \operatorname{rango}(A \mid B) = 2$. Incompatible, sin solución. Son dos rectas paralelas.
:::

:::ejemplo[Compatible indeterminado, 1 < 2]
$$
\left(\begin{array}{cc|c}
1 & 2 & 3 \\
2 & 4 & 6
\end{array}\right)
\xrightarrow{F_2 \to F_2-2F_1}
\left(\begin{array}{cc|c}
1 & 2 & 3 \\
0 & 0 & 0
\end{array}\right)
$$

$\operatorname{rango}(A) = \operatorname{rango}(A \mid B) = 1 < n = 2$. Indeterminado: infinitas soluciones $x + 2y = 3$. Son dos rectas coincidentes.
:::

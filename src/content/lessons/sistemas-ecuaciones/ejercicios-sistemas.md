---
title: "Ejercicios: determinado e incompatible"
description: "Práctica de Rouché-Frobenius y ecuaciones matriciales con respuestas."
module: "sistemas-ecuaciones"
slug: "ejercicios-sistemas"
order: 3
kind: "practica"
---

:::ejercicio[1 · Tres sistemas 3 × 3, tres destinos]
Escaloná $(A \mid B)$ y clasificá con Rouché-Frobenius. Todos son $3 \times 3$ (3 ecuaciones, 3 incógnitas):

- Determinado:
$\left(\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & 1 & 4 \\ 1 & 1 & 0 & 3 \end{array}\right)$
(pista: $F_3 \to F_3 - F_1$, luego $F_3 \to F_3 - F_2$; quedan 3 escalones).
- Incompatible:
$\left(\begin{array}{ccc|c} 1 & 2 & 3 & 1 \\ 0 & 1 & 1 & 2 \\ 1 & 3 & 4 & 5 \end{array}\right)$
(pista: $F_3 \to F_3 - F_1 - F_2$ da la fila $0\;0\;0 \mid 2$, o sea $0 = 2$).
- Indeterminado:
$\left(\begin{array}{ccc|c} 1 & 2 & 3 & 1 \\ 0 & 1 & 1 & 2 \\ 1 & 3 & 4 & 3 \end{array}\right)$
(pista: la misma operación da $0\;0\;0 \mid 0$; la tercera ecuación sobra).

Para cada uno da $\operatorname{rango}(A)$, $\operatorname{rango}(A \mid B)$ y si es compatible determinado / incompatible / indeterminado. En b) y c) la matriz $A$ es la misma singular de rango 2: lo que cambia el destino es $B$.
:::

:::ejercicio[2 · Resolver AX = B]
$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $B = \begin{pmatrix} 5 \\ 11 \end{pmatrix}$. Con $A^{-1} = \begin{pmatrix} -2 & 1 \\ 1{,}5 & -0{,}5 \end{pmatrix}$ hallá $X = A^{-1}B$ y comprobá que es $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
:::

:::ejercicio[3 · Decodificar XA = B]
$A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ escaló por 2 y 3, $B = \begin{pmatrix} 8 & 12 \\ 4 & 6 \end{pmatrix}$. Hallá $X = BA^{-1}$ con $A^{-1} = \begin{pmatrix} 1/2 & 0 \\ 0 & 1/3 \end{pmatrix}$. Interpretá: $X$ es la imagen original antes del escalado.
:::

:::ejercicio[4 · Desafío AXB = C]
$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$, $C = \begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix}$. Con $A^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$, $B^{-1} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$ hallá $X = A^{-1}CB^{-1}$ y verificá $AXB = C$.
:::

## Soluciones

- **1:** a) rangos $3, 3 = n$ determinado, solución $x = 1, y = 2, z = 2$; b) $2 \neq 3$ incompatible ($0 = 2$); c) $2 = 2 < 3$ indeterminado (infinitas, 1 grado de libertad).
- **2:** $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
- **3:** $\begin{pmatrix} 4 & 4 \\ 2 & 2 \end{pmatrix}$.
- **4:** $\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$.

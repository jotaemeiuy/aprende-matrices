---
title: "Ejercicios de inversa"
description: "Práctica de regularidad, Gauss-Jordan y rango con respuestas."
module: "rango-inversa"
slug: "ejercicios-inversa"
order: 4
kind: "practica"
---

:::ejercicio[1 · ¿Regular o singular?]
$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$.

- Sin calcular la inversa, ¿cuál sospechás singular (fila múltiplo de otra)?
- Verificá que $A^{-1} = \begin{pmatrix} -2 & 1 \\ 1{,}5 & -0{,}5 \end{pmatrix}$ cumple $AA^{-1} = I_2$.
:::

:::ejercicio[2 · Inversa 2 × 2]
Por Gauss-Jordan, hallá la inversa de $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ partiendo de $(A \mid I_2)$. Mostrá las 3 operaciones ($F_2 - 3F_1$, dividir, $F_1 - 2F_2$).
:::

:::ejercicio[3 · Inversa 3 × 3]
Hallá la inversa de $A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ con $(A \mid I_3)$. Respuesta: $\begin{pmatrix} 1/2 & -1/2 & 1/2 \\ -1/2 & 1/2 & 1/2 \\ 1/2 & 1/2 & -1/2 \end{pmatrix}$. Verificala con $AA^{-1} = I_3$.
:::

:::ejercicio[4 · Inversa 3 × 3 triangular]
Por Gauss-Jordan, hallá la inversa de $C = \begin{pmatrix} 2 & 0 & 0 \\ 1 & 3 & 0 \\ 0 & 2 & 1 \end{pmatrix}$ partiendo de $(C \mid I_3)$.
:::

:::ejercicio[5 · Sin inversa: 3 × 3 singular]
Intentá hallar por Gauss-Jordan la inversa de $B = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 1 & 3 & 4 \end{pmatrix}$ con $(B \mid I_3)$.

- Hacé $F_3 \to F_3 - F_1 - F_2$. ¿Qué fila obtenés a la izquierda?
- ¿Por qué eso prueba que $B$ es singular y no tiene inversa? ¿Qué rango tiene $B$?
- En Java, si tu función `inversa()` llega a una fila $0\cdots 0$ a la izquierda, ¿qué debería devolver o informar?
:::

:::ejercicio[6 · Rango = filas útiles]
Escaloná $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ con $F_2 - 2F_1$. ¿Cuántos escalones quedan? ¿Rango? Explicá por qué en Java eso sería un sensor redundante.
:::

## Soluciones

- **1:** $A$ regular, $B$ singular (fila 2 $=$ doble de la 1).
- **2–3:** ver el teórico; $A^{-1}$ como arriba.
- **4:** $C^{-1} = \begin{pmatrix} 1/2 & 0 & 0 \\ -1/6 & 1/3 & 0 \\ 1/3 & -2/3 & 1 \end{pmatrix}$.
- **5:** fila $0\;0\;0$ a la izquierda: singular, rango $2$, sin inversa; en Java informar error o `null`.
- **6:** un escalón, rango $1$: dos filas que miden lo mismo.

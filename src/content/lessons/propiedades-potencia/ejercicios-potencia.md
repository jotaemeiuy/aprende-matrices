---
title: "Ejercicios: rotar y escalar"
description: "Práctica de propiedades, potencias e idempotencia con respuestas."
module: "propiedades-potencia"
slug: "ejercicios-potencia"
order: 4
kind: "practica"
---

:::ejercicio[1 · Asociativa y distributiva]
Con $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$, $C = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$ verificá $(AB)C = A(BC)$. Luego, con otras $2 \times 2$ a elección, verificá $A(B+C) = AB+AC$.
:::

:::ejercicio[2 · El orden importa]
$R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (rota 90°) y $E = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$ (estira en $x$).

- Calculá $RE$ y $ER$. ¿Son iguales?
- Aplicalas al punto $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$. ¿Qué puntos distintos obtenés?
- En un juego, ¿por qué el orden del *pipeline* cambia el dibujo?
:::

:::ejercicio[3 · Potencias]
$A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$. Calculá $A^2$ y $A^3$. Para $D = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ calculá $D^2$ y $D^3$ (pista: en diagonales se potencia directo).
:::

:::ejercicio[4 · Filtro estable e idempotente]
$P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ y $Q = \begin{pmatrix} 0{,}5 & 0{,}5 \\ 0{,}5 & 0{,}5 \end{pmatrix}$.

- Verificá $P^2 = P$ y $Q^2 = Q$.
- Explicá con palabras: ¿por qué aplicar dos veces el filtro es igual que una?
:::

## Soluciones

- **1:** $(AB)C = A(BC) = \begin{pmatrix} 13 \\ 4 \end{pmatrix}$.
- **2:** $RE = \begin{pmatrix} 0 & -1 \\ 2 & 0 \end{pmatrix} \neq ER = \begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix}$; puntos $(-1, 2)$ vs $(-2, 1)$.
- **3:** $A^2 = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, $A^3 = \begin{pmatrix} 3 & 2 \\ 2 & 1 \end{pmatrix}$; $D^2 = \begin{pmatrix} 4 & 0 \\ 0 & 9 \end{pmatrix}$.
- **4:** $P^2 = P$, $Q^2 = Q$: proyectar o promediar dos veces no cambia el resultado.

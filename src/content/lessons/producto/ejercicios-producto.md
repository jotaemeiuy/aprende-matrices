---
title: "Ejercicios: neurona y capa lineal"
description: "Práctica de fila por columna y producto de matrices con respuestas."
module: "producto"
slug: "ejercicios-producto"
order: 4
kind: "practica"
---

:::ejercicio[1 · Promedio ponderado]
Notas $\begin{pmatrix} 7 & 8 & 9 \end{pmatrix}$, pesos $\begin{pmatrix} 0{,}3 \\ 0{,}3 \\ 0{,}4 \end{pmatrix}$.

- Calculá el producto. ¿Qué número da?
- En Java es el producto punto. Completalo:

```java
int suma = 0;
for (int k = 0; k < 3; k++) suma += fila[k] * col[k];
```
:::

:::ejercicio[2 · Neurona]
$w = \begin{pmatrix} 2 & -1 & 4 \end{pmatrix}$, $x = \begin{pmatrix} 3 \\ 0 \\ -2 \end{pmatrix}$. Calculá $w \cdot x$ (es $y = wx$ sin sesgo).
:::

:::ejercicio[3 · Producto paso a paso]
$$
A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}_{2 \times 3}, \quad
B = \begin{pmatrix} 7 & 8 \\ 9 & 10 \\ 11 & 12 \end{pmatrix}_{3 \times 2}
$$

- ¿Se puede hacer $AB$? ¿De qué orden es? Calculalo completo.
- ¿Se puede hacer $BA$? Si sí, ¿de qué orden?
- Explicá por qué $A_{2 \times 3}$ por $D_{2 \times 2}$ es imposible (como el error `shapes not aligned`).
:::

:::ejercicio[4 · Capa lineal]
$W = \begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}$, $x = \begin{pmatrix} 4 \\ 5 \end{pmatrix}$. Calculá $Wx$ y verificá que da $\begin{pmatrix} 3 \\ 15 \end{pmatrix}$.
:::

## Soluciones

- **1:** $8{,}1$.
- **2:** $-2$.
- **3:** $AB = \begin{pmatrix} 58 & 64 \\ 139 & 154 \end{pmatrix}_{2 \times 2}$; $BA$ sí existe y es $3 \times 3$; $2 \times 3$ por $2 \times 2$ imposible porque $3 \neq 2$.
- **4:** $\begin{pmatrix} 3 \\ 15 \end{pmatrix}$.

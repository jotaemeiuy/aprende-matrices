---
title: "Gauss-Jordan 2×2 y 3×3"
description: "El método (A|I) → (I|A⁻¹) paso a paso y el caso singular."
module: "rango-inversa"
slug: "gauss-jordan"
order: 3
kind: "teoria"
---

:::definicion[Método de Gauss-Jordan]
Para hallar $A^{-1}$ se forma $(A \mid I)$ y con operaciones elementales se lleva a $(I \mid A^{-1})$. Si no se puede llegar a $I$, $A$ es singular.
:::

:::ejemplo[Inversa 2 × 2]
$$
\left(\begin{array}{cc|cc}
1 & 2 & 1 & 0 \\
3 & 4 & 0 & 1
\end{array}\right)
\xrightarrow{F_2 \to F_2-3F_1}
\left(\begin{array}{cc|cc}
1 & 2 & 1 & 0 \\
0 & -2 & -3 & 1
\end{array}\right)
$$

$$
\xrightarrow{F_2 \to F_2/(-2)}
\left(\begin{array}{cc|cc}
1 & 2 & 1 & 0 \\
0 & 1 & 3/2 & -1/2
\end{array}\right)
\xrightarrow{F_1 \to F_1-2F_2}
\left(\begin{array}{cc|cc}
1 & 0 & -2 & 1 \\
0 & 1 & 3/2 & -1/2
\end{array}\right)
$$

Luego $A^{-1} = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$.
:::

:::ejemplo[Inversa 3 × 3]
$$
A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix}, \quad (A \mid I_3) =
\left(\begin{array}{ccc|ccc}
1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 0 \\
1 & 1 & 0 & 0 & 0 & 1
\end{array}\right)
$$

$F_3 \to F_3 - F_1$, luego $F_3 \to F_3 - F_2$:

$$
\left(\begin{array}{ccc|ccc}
1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 0 \\
0 & 0 & -2 & -1 & -1 & 1
\end{array}\right)
$$

$F_3 \to F_3/(-2)$, luego $F_1 \to F_1 - F_3$, $F_2 \to F_2 - F_3$:

$$
\left(\begin{array}{ccc|ccc}
1 & 0 & 0 & 1/2 & -1/2 & 1/2 \\
0 & 1 & 0 & -1/2 & 1/2 & 1/2 \\
0 & 0 & 1 & 1/2 & 1/2 & -1/2
\end{array}\right)
$$

Así $A^{-1} = \begin{pmatrix} 1/2 & -1/2 & 1/2 \\ -1/2 & 1/2 & 1/2 \\ 1/2 & 1/2 & -1/2 \end{pmatrix}$.
:::

:::ejemplo[Singular, no hay inversa]
$$
\left(\begin{array}{cc|cc}
1 & 2 & 1 & 0 \\
2 & 4 & 0 & 1
\end{array}\right)
\xrightarrow{F_2 \to F_2-2F_1}
\left(\begin{array}{cc|cc}
1 & 2 & 1 & 0 \\
0 & 0 & -2 & 1
\end{array}\right)
$$

La fila $0 = 0$ a la izquierda impide llegar a $I$: $A$ es singular, rango $1$.
:::

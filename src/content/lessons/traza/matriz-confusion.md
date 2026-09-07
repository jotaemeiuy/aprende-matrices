---
title: "Matriz de confusión"
description: "La traza como total de aciertos en clasificación y bucles en grafos."
module: "traza"
slug: "matriz-confusion"
order: 2
kind: "teoria"
---

:::ejemplo[Matriz de confusión]
$$
\begin{pmatrix}
50 & 2 & 1 \\
3 & 45 & 5 \\
0 & 4 & 60
\end{pmatrix}
$$

En clasificación, la diagonal son los aciertos de cada clase. $\operatorname{tr} = 50 + 45 + 60 = 155$ es el total de aciertos del modelo.
:::

:::ejemplo[Grafo]
En una matriz de adyacencia, $\operatorname{tr}(G)$ cuenta los **bucles**: nodos conectados consigo mismos. Si $\operatorname{tr}(G) = 0$, no hay bucles en la red.
:::

:::observacion[Observación]
La misma operación —sumar la diagonal— responde preguntas distintas según el contexto: ¿cuánto acertó el modelo? ¿Hay bucles en la red? Por eso la traza aparece en machine learning y en grafos.
:::

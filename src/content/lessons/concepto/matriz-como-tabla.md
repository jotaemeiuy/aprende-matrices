---
title: "Matriz como tabla en programación"
description: "Del aᵢⱼ al int[][] de Java: índices, dimensiones y recorrido con for."
module: "concepto"
slug: "matriz-como-tabla"
order: 3
kind: "practica"
---

En Java una matriz $m \times n$ es un arreglo bidimensional: un arreglo de arreglos. Cada fila es un `int[]` y la matriz completa es un `int[][]`.

:::definicion[Definición]
`int[][] a = new int[m][n]` crea una tabla con $m$ filas y $n$ columnas. El elemento matemático $a_{ij}$ vive en la casilla `a[i-1][j-1]`, porque Java cuenta desde $0$ y la matemática desde $1$.
:::

## Dimensiones y casillas

```java
int[][] notas = {
  {8, 7, 9},
  {6, 5, 7}
};
int filas = notas.length;      // 2  (m)
int columnas = notas[0].length; // 3  (n)
```

La tabla es de orden $2 \times 3$ y guarda $6$ elementos. La última casilla es `notas[1][2]` (índices máximos $m-1$ y $n-1$).

:::ejemplo[Ejemplo]
$a_{23}$ en matemática es fila 2, columna 3. En Java es `notas[1][2]`. Si pedís `notas[2][3]` el programa falla: esa fila y esa columna no existen.
:::

## Recorrer con for

El doble `for` visita cada casilla una vez: el de afuera recorre filas, el de adentro columnas.

```java
for (int i = 0; i < filas; i++) {
  for (int j = 0; j < columnas; j++) {
    System.out.print(notas[i][j] + " ");
  }
  System.out.println();
}
```

:::ejercicio[Ejercicio]
Con la tabla `notas` de arriba: ¿qué imprime el recorrido? ¿Qué orden tiene la tabla? Escribí qué valor hay en `notas[0][1]` y a qué $a_{ij}$ corresponde.
:::

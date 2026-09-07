# AGENTS.md

## Convenciones
- Usa pnpm para todo,no utilices npm ni yarn bajo ningun concepto.
- Typescript es obligatorio.
- Usa siempre Tailwind para estilos,en particular puedes usar el plugin de animaciones de Tailwind (https://tailwind-animations.com/).
- Utiliza oxlint obligatoriamente en vez de eslint.
- Iconos de tabler-icons (https://tabler-icons.io/), Heroicons (https://heroicons.com/),allsvgicons (https://allsvgicons.com/),supersvg (https://github.com/ManzDev/vite-plugin-supersvg) ó similares, no uses iconos de librerias externas.Crea un archivo de Sprite de iconos y usalo en todo el proyecto con <symbol> y <use> para evitar dependencias externas y optimizar el bundle.
- Importación explicita de componentes,nunca barrels.
- Preferir ESM y sintaxis moderna del navegador.
- Utiliza como stack Astro 7 con pnpm 11 + Node >=22.12.
- Math con KaTeX
- No ejecutes comandos de instalación de dependencias sin preguntar antes, y no añadas dependencias externas sin aprobación.Yo voy a ejecutar todos los comandos de instalación de dependencias.
- No levantes servidores de desarrollo ni hagas builds salvo que se pida expresamente.

## Creacion de proyecto
- Comando recomendado: `pnpm create astro@latest --template minimal`
- Configura typescript, tailwind y oxlint siguiendo la documentacion oficial de Astro.
- No añadir dependencias hasta que no sea necesario,y preguntar antes de añadir cualquier dependencia externa.

## Organización
- Componentes pequeños y con una sola responsabilidad, no mezclar logica de negocio con UI.
- Preferir composicion frente a configuraciones complejas.
- Evita abstracciones prematuras.
- El codigo compartido debe vivir en carpetas claras como `layouts`, `lib` o `utils`,

## Reglas de typescript

- Evitar `any` y `unknown`, usar tipos estrictos y tipado fuerte.
- Preferir siempre que se pueda la inferencia de tipos de typescript, evitando tipar manualmente.
- Si los tipos no estan claros,parar y aclarar antes de continuar.

## UI y estilos
- Tailwind es la unica solucion de estilos, no usar CSS puro ni librerias externas de estilos.
- No duplicar clases de tailwind, si se puede extraer a un componente hacerlo.
- Priorizar legibirlidad frente a micro-optimizaciones visuales.
- Accesibilidad no es opcional, siempre debe ser una prioridad:HTML semantico, roles, aria-labels cuando aplique y foco gestionado.

## Testing y calidad de codigo
- Revisar los workflows de github actions y asegurarse de que todos los tests pasen antes de hacer merge.
- Ejecutar los test con :
  - `pnpm test` para ejecutar todos los tests.
  - `pnpm test:watch` para ejecutar los tests en modo watch.
- Para Vitest:
  - `pnpm vitest run -t <test-name>` para ejecutar un test especifico.
- Tras mover archivos o cambiar importaciones, ejecutar `pnpm oxlint` para asegurarse de que no hay errores de importación.
- No se acepta codigo con errores de tipos,linting o tests fallidos.
- Añadir o actualizar test cuando se cambie comportamiento,anque no se pida explicitamente.

## Rendimiento y desiciones tecnicas
- No adivinar rendimiento,tañmaño de bundle,tiempos de carga o impacto de dependencias externas:medir.
- Si algo parece lento añadir instrumentacion antes de optimizar.
- Validar primero en pequeño antes de escalar,evitar optimizaciones prematuras.
- Evitar dependencias externas innecesarias,si algo se puede hacer con el stack actual, no añadir dependencias externas.
- Evitar dependencias externas que no sean mantenidas activamente

## Comportamiento del agente
- Si una peticion no esta clara,hacer preguntas concretas antes de ejecutar.
- Tareas simples y bien definidas se ejecutan directamente.
- Cambios complejs (refactorizaciones, cambios de arquitectura,nuevas features, etc) requieren aprobacion antes de ejecutar.
- No asumir requisitos implicitos,ni comportamientos,si algo no esta claro preguntar antes de ejecutar.
- Si falta infomacion preguntar.

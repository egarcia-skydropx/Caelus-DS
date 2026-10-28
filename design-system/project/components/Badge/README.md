# Badge

Etiqueta de color compacta para destacar estados, categorías o conteos en tablas, listas y tarjetas.

## Cuándo usarlo
- Estatus de un envío o una orden en el historial (siempre visible, es lo primero que se busca).
- Categorías o filtros aplicados (con `onRemove`).
- Conteos cortos.

Elige el `theme` por su significado, no por gusto:
- `green`: éxito o activo.
- `red`: error o alerta.
- `yellow`: advertencia o en proceso.
- `gray`: neutral o inactivo.
- `primary`, `blue`, `indigo`, `purple`, `pink`, `teal`, `orange`: categorías sin carga de estado.
- `white`: sobre superficies de color.

## Qué pasa el consumidor
- `children`: texto corto (una o dos palabras).
- `theme`, `size` (`large` 25px con texto 14px, `small` 22px con texto 12px).
- `icon` opcional a la izquierda; sin `children` el badge queda circular y **necesita** `aria-label`.
- `onRemove` para mostrar la X de cerrar (botón accesible con `removeLabel`).

## Colores
Fondo `core-surface-<color>-light-100`, texto `core-theme-<color>-darkest-800` y X `core-theme-<color>-contrast-600`. Hay dos excepciones: gray usa `core-text-primary-gray900` y blue usa `core-theme-blue-dark-700` para la X.

## Do / Don't
- Haz: acompaña el color con texto o icono; el color solo no basta para distinguir estados.
- No hagas: usar badges como botones de acción.
- No hagas: mezclar más de dos o tres colores en una misma fila.

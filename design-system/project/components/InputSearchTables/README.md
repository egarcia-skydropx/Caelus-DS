# InputSearchTables

Buscador compacto para filtrar tablas, con botón cuadrado de lupa a la derecha.

## Cuándo usarlo

- Encima de una tabla para filtrar resultados al escribir o al pulsar Enter.

## Qué pasa el consumidor

- `value` / `defaultValue` / `onChange`, `onSearch(value)` (Enter o botón), `onClear`.
- `placeholder`, `buttonLabel` (default "Buscar"), `clearLabel`.

## Estados

Default, Active, Typing, Value. Solo existe en tamaño Small (37px).

## Do / Don't

- Do: muestra la X en cuanto haya texto para limpiar rápido.
- Do: colócalo alineado con las acciones de la tabla.
- Don't: lo uses fuera de tablas; usa `InputSearch`.

## Notas de la fuente

- El foco usa `core-theme-secondary-secondary-900` (borde 2px), distinto del resto de inputs (`core-interactions-active-primary600`). Se respeta Figma; conviene revisarlo.
- Botón: fondo `core-theme-primary-primary-900`, icono `core-text-invert-white` (18.07:1). El color del icono no está ligado a variable en Figma.

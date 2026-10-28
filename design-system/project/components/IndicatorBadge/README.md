# IndicatorBadge

Pastilla con punto de color y texto que muestra en qué paso de un proceso está algo, sobre todo en Mis envíos y Órdenes.

## Cuándo usarlo
- Estatus de un envío o una orden en tablas y detalles ("En tránsito", "Entregado", "Cancelado").
- Siempre con un color fijo por concepto en todo el producto.

## Qué pasa el consumidor
- `children`: texto del estado, máximo dos palabras.
- `color`: `blue` | `gray` | `green` | `indigo` | `orange` | `primary` | `red` | `yellow`. Usa `indicators-<color>-surface-100` de fondo, `indicators-<color>-indicator-*` en el punto y `indicators-<color>-text-*` en el texto.

## Do / Don't
- Haz: textos cortos y siempre el mismo color para el mismo estado.
- No hagas: usarlo como botón o filtro; no es interactivo.
- No hagas: confiar solo en el color; el texto es lo que comunica.

## Notas de la fuente
- Incluye el componente interno de Figma `.idicator-color` (el punto de 12px).
- La variante `green` en Figma usa variables de librería `green/100`, `green/500` y `green/800` en vez de `indicators/green/*`; los valores son iguales, aquí se usan los tokens `indicators-green-*` para ser consistentes.
- Excepciones de tono: `blue` usa `text-700`; `gray` usa `text-500` e `indicator-400`; `orange` usa `indicator-400`; `yellow` usa `indicator-300`.
- Contraste: el texto `gray` (`core-gray-500` #6b7280 sobre `core-gray-100` #f3f4f6) queda ≈4.4:1, un poco por debajo de 4.5:1 para texto de 12px.
- El texto en Figma tiene peso mixto (`text-xs/font-medium`); aquí se fija en 500.

# ButtonGroup

Une botones relacionados en una sola pieza con bordes compartidos.

## Cuándo usarlo
- Acciones sobre el mismo objeto: "Descargar" + conteo, "Guardar cambios" + marcador.
- Filtros de rango exclusivos (Años / Meses / Días), marcando el actual con `selected`.
- Navegación compacta anterior / siguiente con dos segmentos de solo ícono.

Las cinco variantes de Figma (`group`, `With stat`, `Only Icon`, `With save`, `With tooltip`) salen de la misma API combinando `items`.

## Qué pasa el consumidor
- `items`: arreglo de segmentos. Cada uno acepta `label`, `icon`, `aria-label` (obligatorio si no hay texto), `onClick`, `selected`, `disabled`, `stat` (segmento informativo no clicable) y `tooltip`.
- `aria-label` en el grupo para describir qué agrupa (el contenedor tiene `role="group"`).

## Estados
- Hover: fondo `core-interactions-hover-gray100`.
- Focus (`:focus-visible`): anillo de 2px `core-interactions-active-primary600`.
- Seleccionado: fondo `core-interactions-heavy-hover-gray200` y `aria-pressed`.
- Disabled: texto `core-interactions-disabled-gray400`.
- Tooltip: oscuro arriba (`core-gray-900`, texto `white`), aparece con hover y foco y se enlaza con `aria-describedby`.

## Do / Don't
- Haz: agrupa solo acciones del mismo nivel.
- No hagas: mezclar botones Primary y Secondary dentro del mismo grupo.
- No hagas: segmentos de solo ícono sin `aria-label`.

## Notas de la fuente
- Figma no define hover, focus, seleccionado ni disabled para este set; los de aquí son propuestos.
- Radio de 6px y alturas de 37px (texto) y 38px (solo ícono) tal como en Figma; 6px no es token de radio.
- Figma usa variables de librería `gray/200`, `gray/900` y `white`; aquí se mapean a `core-gray-200`, `core-gray-900` y `white`.
- El tooltip de Figma tiene 34px de alto con radio 4 (contenedor) y 8 (texto); aquí se simplifica a un solo radio `radius-4` y la flecha es un triángulo CSS.
- La sombra del tooltip (#000 al 8 %, y 1, blur 2) se aproxima con `shadow-sm`.
- Textos de muestra de Figma en inglés (Years / Months / Days, Download, Save changes); el preview usa español.

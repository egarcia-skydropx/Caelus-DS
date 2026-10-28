# DropdownMultiselect

Panel con buscador y casillas para elegir varias opciones a la vez, con opción de agrupar en niveles.

## Cuándo usarlo
- Filtrar por varios valores de un mismo campo: paqueterías, estatus, tiendas.
- Usa el tipo jerárquico (opciones con `children`) cuando las opciones tienen un padre natural, como tiendas dentro de una plataforma.
- A diferencia de un select, cada casilla es independiente: marcar una no desmarca las otras.

## Qué pasa el consumidor
- `options`: `{ value, label, helper?, disabled?, children?, defaultExpanded? }`.
- `value` (arreglo de valores) y `onChange(values)`.
- `searchable` y `showSelectAll` (ambos `true` por defecto).
- `search` y `onSearchChange` si quieres controlar la búsqueda (por ejemplo, para buscar en el servidor).
- Textos: `searchPlaceholder`, `searchLabel`, `selectAllLabel`, `emptyText`, `clearSearchLabel`.
- `maxHeight` para que la lista haga scroll.

## Estados
- Casilla marcada o indeterminada: fondo y borde `core-interactions-active-primary600`.
- "Seleccionar todos" y cada padre jerárquico quedan indeterminados cuando solo parte de sus opciones está marcada. "Seleccionar todos" actúa sobre lo que se ve con la búsqueda actual.
- Estado vacío: "No se encontraron resultados" en `core-theme-gray-dark-700` y un botón tertiary para limpiar la búsqueda.
- Hijos de un grupo: fondo `core-surface-gray-lighter-50` y sangría de 34px.

## Do / Don't
- Haz: indica cuántas opciones hay elegidas en el campo que abre el panel.
- Haz: incluye el buscador si hay más de 8 opciones.
- No hagas: más de dos niveles de jerarquía.
- No hagas: usarlo para elegir una sola opción; para eso está `Dropdown`.

## Notas de la fuente
- Las casillas se dibujan aquí (input nativo con estilo) porque el sistema todavía no tiene un `Checkbox`. Si se agrega, conviene reemplazarlas.
- En Figma la etiqueta de cada opción va en peso 500 y el helper en 400.
- El buscador replica `base/input-search` (borde `core-border-primary-gray300`, radio 8).
- El botón de vaciar búsqueda dice "Limpiar busqueda" sin acento en Figma; aquí se corrigió a "Limpiar búsqueda".

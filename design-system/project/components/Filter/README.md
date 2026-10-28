# Filter

Panel de filtros que limita los resultados de una tabla o lista según fechas, categorías con casillas e interruptores.

## Cuándo usarlo
- Al lado o encima de tablas largas (historial de envíos, órdenes, recolecciones) que se abren desde el botón "Filtros".
- En escritorio va como panel flotante de 512px; en móvil ocupa todo el ancho (`breakpoint="mobile"`).

## Qué pasa el consumidor
- `title`, `onClose` (muestra la X) y `onClear` (muestra "Limpiar").
- `applied` + `onRemoveApplied`: filtros activos como badges que se pueden quitar.
- `date` + `dateLabel`: el control de fechas (por ejemplo, un selector de rango).
- `categories` + `value` + `onChange(categoryId, values)`: secciones plegables de casillas con "Todos".
- `toggles`: interruptores con `label`, `helper`, `badge`, `checked` y `onChange`.
- `children`: contenido extra al final (por ejemplo, botones de aplicar en móvil).

## Estados
- Cada sección se pliega con su chevron (`aria-expanded`). El contador "(n)" aparece cuando la categoría tiene opciones marcadas.
- "Todos" queda indeterminado cuando solo hay una parte marcada.
- Casillas e interruptor encendido: `core-interactions-active-primary600`; interruptor apagado: `core-theme-gray-light-300`.

## Do / Don't
- Haz: muestra cuántos filtros están activos y deja quitarlos uno por uno.
- Haz: ordena las categorías de la más usada a la menos usada.
- No hagas: aplicar filtros que dejen la tabla vacía sin explicar por qué ni cómo limpiarlos.
- No hagas: meter más de 6 categorías; agrupa o mueve las raras a una búsqueda.

## Notas de la fuente
- Las piezas internas (`.filter-header`, `.filter-header-badge`, `.filter-category`, `.filter-toggle`, `.filter-badge`) se juntaron en props.
- Los títulos de sección usan `core-theme-gray-gray-900` y el contador `core-text-secondary-gray500`.
- La sombra de Figma (50px de desenfoque, 25px hacia abajo, negro 25%) coincide con `shadow-2xl`.
- `.filter-badge` usa un degradado y la variable suelta `theme/primary/dark-700`; no se construyó. Pasa tu propio badge en `toggles[].badge`.
- Las casillas e interruptores se dibujan aquí porque el sistema todavía no tiene `Checkbox` ni `Toggle`. El interruptor se dedujo de la captura (40x20).
- El selector de fechas (`input-datepicker`) no es parte de este lote; se recibe por `date`.
- La versión móvil de Figma incluye el navbar arriba; aquí solo se construyó el panel.

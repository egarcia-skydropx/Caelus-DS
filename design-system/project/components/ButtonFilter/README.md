# ButtonFilter

Botón que abre el panel o la vista de filtros de una tabla o un listado.

## Cuándo usarlo
- Arriba de tablas de envíos, guías u órdenes para mostrar u ocultar filtros.
- Con texto (`shape="button"`) cuando hay espacio; `circle` o `square` en tablas compactas o en móvil.

## Qué pasa el consumidor
- `children`: etiqueta (por defecto "Filtros"). Puedes mostrar el conteo, por ejemplo "2 filtros".
- `shape`: `button` | `circle` | `square`. Sin texto visible, pasa `aria-label`.
- `active`: hay filtros aplicados. Pinta el fondo `core-surface-indigo-light-100` y pone `aria-pressed`.
- `icon`: reemplaza el embudo por defecto (18px).
- `disabled`, `onClick` y demás props nativas de `button`.

## Estados
- Default: fondo `core-surface-light-white`, borde y texto `core-theme-primary-primary-900`.
- Hover: fondo `core-surface-indigo-lighter-50`.
- Focus (`:focus-visible`): mismo fondo que hover y borde de 2px.
- Active: fondo `core-surface-indigo-light-100`.
- Disabled: fondo `core-surface-gray-lighter-50`, borde `core-theme-gray-base-500`, texto `core-icon-secondary-gray500`.

## Do / Don't
- Haz: deja el estado `active` mientras haya filtros aplicados, para que se note que la vista está filtrada.
- Haz: usa una sola forma (circle o square) en toda la interfaz.
- No hagas: deshabilitarlo sin explicar por qué.

## Notas de la fuente
- En Figma las variantes Circle y Square muestran un ícono de tres puntos (ellipsis), no un embudo. Aquí el ícono por defecto es un embudo genérico dibujado a mano; pasa `icon` si necesitas otro.
- El texto de Figma usa peso mixto (`text-sm/font-medium`); aquí se fija en 500.
- Contraste de disabled: `core-icon-secondary-gray500` (#6b7280) sobre `core-gray-50` ronda 4.6:1, pasa por poco.

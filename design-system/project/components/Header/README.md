# Header

Encabezado de página con título, descripción, acciones y las herramientas para consultar la tabla (pestañas, buscador y filtros).

## Cuándo usarlo
- Al inicio de cada vista principal (Mis envíos, Órdenes, Recolecciones), justo debajo del navbar.
- Una sola vez por página: el título es el `h1`.

## Qué pasa el consumidor
- `title` y `description`.
- `actions` (botones con texto) e `iconActions` (botones de icono; se separan con una línea vertical).
- `tabs`: normalmente un `TabFilter`.
- `search`: `{ value, onChange, onSubmit, placeholder, label, buttonLabel }` para el buscador de tabla.
- `onFilterClick`, `filterLabel`, `filterCount` para el botón "Filtros" (abre un `Filter`).
- `breakpoint`: `desktop` o `mobile` (apila buscador y pestañas).

## Estados
- El buscador marca el foco con borde `core-interactions-active-primary600`.
- El botón de filtros hace hover con `core-surface-primary-lighter-50`.

## Do / Don't
- Haz: un título corto que nombre la sección y una descripción de una línea que diga qué puede hacer el usuario.
- Haz: una sola acción principal; las demás, secundarias o de icono.
- No hagas: más de dos botones con texto junto al título.
- No hagas: repetir el título en la descripción.

## Notas de la fuente
- El buscador replica `base/input-search-tables` y el botón `button-filter`; ninguno existe aún como componente propio.
- El botón de búsqueda y el de filtros usan `core-theme-primary-primary-900` (azul marino en Skydropx Pro).
- El hover del botón de filtros no está en Figma; se usó `core-surface-primary-lighter-50`.
- En la versión móvil de Figma el buscador va antes que las pestañas; aquí se respeta ese orden.

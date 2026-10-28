# TabFilter

Grupo de pestañas compactas que filtra el contenido de una tabla, lista o dashboard con un solo clic.

## Cuándo usarlo
- Arriba de tablas de datos para vistas rápidas: "Todos", "Sin descargar guía", "Con incidencia".
- Normalmente dentro de un `Header`, junto al buscador y al botón de filtros.
- Para navegar entre secciones de una página usa `TabNav`.

## Qué pasa el consumidor
- `tabs`: `{ id, label, icon?, count?, disabled?, panelId? }`.
- `value` y `onChange(id)`.
- Atributos de `div`, sobre todo `aria-label` ("Filtrar envíos").

## Estados
- Default: texto `core-text-secondary-gray500` sobre el contenedor `core-surface-gray-light-100`.
- Hover: fondo `core-surface-gray-lighter-50`.
- Foco: anillo interior de 2px `core-theme-primary-contrast-600`.
- Activa: fondo `buttons-secondary-default-surface` (blanco) y texto `core-theme-gray-darkest-800`.
- Teclado: `role="tablist"`, flechas izquierda/derecha, Inicio y Fin.

## Do / Don't
- Haz: deja "Todos" como primera opción.
- Haz: 2 a 5 filtros, con nombres cortos.
- No hagas: usarlo para filtros combinables; para eso está `Filter`.

## Notas de la fuente
- La variante "Con plus" de Figma se ve igual que la primera pestaña activa; no se construyó nada extra.
- El texto inactivo `core-text-secondary-gray500` sobre `core-surface-gray-light-100` da cerca de 4.4:1, apenas debajo de 4.5:1 para texto de 12px.

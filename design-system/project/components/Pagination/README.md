# Pagination

Barra que va arriba o abajo de una tabla para seleccionar filas, lanzar acciones en lote y moverse entre páginas de resultados.

## Cuándo usarlo
- En tablas con muchos registros (envíos, órdenes, guías) que se dividen en páginas.
- Cuando el usuario puede seleccionar filas y aplicar acciones a varias a la vez (exportar, descargar guías).

## Qué pasa el consumidor
- `page`, `pageSize`, `total` y `onPageChange(page)`: arman el rango "1-20 de 50" y las flechas.
- `selection` (`none`, `partial`, `all`) y `onSelectAllChange(checked)`: la casilla "Seleccionar".
- `actions`: botones de icono para acciones en lote (usa `Button` `type="tertiary"` `shape="square"` con `aria-label`; deshabilítalos si no hay selección).
- `selectionText` y `selectionAction` (`{ label, onClick }`): resumen y enlace mientras hay filas seleccionadas.
- `onSortClick` / `sortLabel` y `onMoreClick` / `moreLabel`: muestran el botón de ordenar y el de más opciones.
- `breakpoint`: `desktop` (una fila) o `mobile` (apilado).

## Estados
- Default, selección parcial (casilla indeterminada + "Incluir todos…") y todo seleccionado (casilla marcada + "Anular selección").
- Flecha deshabilitada en la primera o última página: fondo `core-surface-gray-lighter-50`.
- La navegación es un `nav` con `aria-label`; el rango lleva `aria-current="page"` y se anuncia al cambiar.

## Do / Don't
- Haz: di siempre el total ("1-20 de 50") para que el usuario sepa cuánto hay.
- Haz: cuando todo lo visible está seleccionado, ofrece incluir todos los resultados.
- No hagas: dejar acciones en lote activas sin filas seleccionadas.
- No hagas: esconder la paginación en tablas con más de una página.

## Notas de la fuente
- El fondo de la barra es el hex `#f9fafb` sin variable; coincide con `core-surface-gray-lighter-50`.
- El enlace de la selección usa `core-theme-blue-contrast-600`, azul fijo que no sigue la marca.
- El resumen usa `core-theme-gray-contrast-600` a 12px.
- Figma no tiene números de página, solo rango y flechas; por eso `aria-current` va en el rango.
- Los íconos de exportar y descargar de la muestra son del set de Caelus; se pasan por `actions`.
- Los tooltips de `.icons` (`Show Tooltip`) no se construyeron.

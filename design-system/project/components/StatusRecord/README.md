# StatusRecord

Línea de progreso que muestra en qué etapa va un envío, desde que se crea hasta que se entrega o se devuelve.

## Cuándo usarlo
- En el detalle o historial de un envío, para dar transparencia sobre la etapa actual.
- Dentro de `DrawerHistorial`, en la tarjeta "Estatus del envío".

## Qué pasa el consumidor
- `status`: `creado`, `recolectado`, `en-camino`, `por-llegar`, `entregado`, `incidencia`, `en-devolucion`.
- `size`: `desktop` o `mobile`.
- `labels` para cambiar el texto de un paso.
- Es una lista ordenada (`ol`); el paso actual lleva `aria-current="step"` y cada paso anuncia si está completado, pendiente o con problema.

## Estados
- Pasos completados en índigo, pendientes en gris.
- `entregado`: el último paso en verde.
- `incidencia`: el paso "En camino" en rojo con ícono de advertencia.
- `en-devolucion`: el último paso cambia a "En devolución" en rojo.

## Do / Don't
- Do: usa etiquetas de una o dos palabras para que no se encimen en mobile.
- Do: respeta el orden cronológico del proceso.
- Don't: saltes pasos ni muestres más de cinco.

## Notas de la fuente
- Figma: set `status-record` (7369:27035) en ❖ Drawer, `Estatus` × `Breakpoints`.
- Los conectores usan `core-theme-indigo-contrast-600` después de un paso completado y `core-border-primary-gray300` en los pendientes.
- Los íconos (cube, clipboard, truck, map-pin, check, exclamation-triangle) se dibujan aquí como SVG genéricos.
- Figma solo tiene la variante Mobile para `Creado`; los demás estados en mobile se derivan.
- El indigo se usa aquí como color de progreso (navegación/estado), no como acción.

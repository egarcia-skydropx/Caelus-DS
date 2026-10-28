# Toast

Notificación flotante y breve que confirma el resultado de una acción del flujo: crear, editar, eliminar, integrar o guardar.

## Cuándo usarlo
- Para confirmar que una acción terminó bien o mal sin bloquear la pantalla.
- Cuando el mensaje es corto: título de menos de 3 palabras y descripción de máximo 2 líneas.
- Para mensajes que deben quedarse en la página hasta que el usuario los lea, usa un Alert.

## Qué pasa el consumidor
- `type`: `info` (default), `warning`, `success` o `danger`.
- `title`: el título en semibold 14px.
- `children`: descripción opcional (Figma `Show body`).
- `date`: fecha y hora opcional (Figma `Show date`).
- `link`: `{ label, href, onClick }` opcional (Figma `Show link`).
- `icon`: icono de 24px opcional; si no se pasa se dibuja un glifo genérico según el tipo.
- `onClose`: si existe aparece la “x” (botón nativo con `aria-label`, por defecto “Cerrar notificación”).
- `mobile`: ancho de 310px en lugar de 394px.
- El Toast se anuncia con `role="status"`. Colocarlo y quitarlo de la pantalla (posición, tiempo) es tarea del consumidor.

## Colores
| type | barra e icono | token |
|---|---|---|
| info | azul | `toast-info-accent` |
| warning | amarillo | `toast-warning-accent` |
| success | verde | `toast-success-accent` |
| danger | rojo | `toast-error-accent` |

Fondo `toast-info-surface`, título `toast-info-title`, fecha `toast-info-body`, enlace `toast-info-link` (iguales en los cuatro tipos). Sombra `shadow-md`.

## Do / Don't
- Do: un solo Toast a la vez, cerca de donde ocurrió la acción.
- Do: textos concretos (“Guía creada”, no “Operación exitosa”).
- Don't: meter botones o formularios dentro del Toast.
- Don't: usar `danger` para avisos que no son errores.

## Notas de la fuente
- La descripción usa `core-theme-gray-contrast-600` en Figma; el token `toast-*-body` (gris 500) corresponde a la fecha, así que se usa ahí.
- El borde de 1px en Figma es `core-theme-light-white`, blanco sobre blanco: se conserva aunque no se ve.
- Figma usa altos fijos (105px y 73px). Aquí el alto sale del contenido con 12px de margen vertical.
- Icono blanco sobre `toast-warning-accent` (amarillo 300) y `toast-success-accent` (verde 400) tiene contraste bajo (menos de 3:1). Es un icono decorativo, pero el título debe explicar el estado por sí mismo.
- La variable `Dark mode=no` no se construyó.

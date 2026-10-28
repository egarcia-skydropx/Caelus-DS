# CardOrdenes

Card que resume una orden que llegó de una tienda en línea (Shopify, WooCommerce…) y deja crear o gestionar su envío desde la lista.

## Cuándo usarlo
- En el listado de órdenes de e-commerce, una card por orden.
- Cuando faltan datos para crear la guía y el usuario los completa desde la misma fila.
- Para guías ya creadas sin orden de tienda usa `CardHistorialEnvios`.

## Qué pasa el consumidor
- `breakdown`: `desktop` o `movil`.
- `status`: `por-preparar` (amarillo), `preparada` (verde), `error-al-preparar` (rojo), `guia-cancelada` (rojo) u `orden-cancelada` (gris). Usa `Caelus.Badge` en tamaño small.
- `payment`: `pagada` (punto `core-theme-green-darkest-800`) o `por-pagar` (punto `core-theme-gray-dark-700`).
- Datos: `orderNumber`, `date`, `platformIcon`, `label`, `products`, `pkg`, `carrier`, `origin`, `destination`, `shippingType`, `showFooter`.
- Acciones: `onCreate`, `onDownload`, `onView`, `onMore`, `onCopyTracking`, `onComplete(field)`, `selected` + `onSelect`.

## Estados
Los 16 valores de `Type` en Figma salen de los datos, no de una prop:
- Falta `pkg`, `carrier` o el `detail` de una dirección → aparece “+ Completar” (Incompleta, Sin direcciones).
- `status="preparada"` → la paquetería muestra el rastreo y las acciones cambian a descargar, ver y más.
- `status="error-al-preparar"` → la etiqueta “Paquetería” se pone roja con icono de info.
- Multipaquete, Convenio, Guía externa, etc. se resuelven con el texto de `pkg`, `carrier` y `label`.

## Do / Don't
- Haz: deja “Crear envío” como única acción primaria de la card.
- No hagas: ocultar campos vacíos; el “+ Completar” es la forma de guiar al usuario.
- Haz: da un `aria-label` útil al checkbox; por defecto incluye el número de orden.

## Notas de la fuente
- Figma: set `card-ordenes` (15942:12271), página ❖ Cards (5572:11171), 32 variantes. Se leyeron Completa, Error al preparar, Multipaquete, Sin direcciones y Preparada (desktop).
- Integra `.status-card`, `.status-pago`, `.paquete`, `.paqueteria`, `.origen` y `.destino`.
- El título del pie (“Tipo de envío”) usa en Figma el hex `#111928` sin variable; es igual a `core-gray-900`, por eso se usa `core-text-primary-gray900`.
- El acomodo de `movil` es una columna inferida; no se leyó en detalle la variante móvil.

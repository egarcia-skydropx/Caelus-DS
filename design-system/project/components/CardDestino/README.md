# CardDestino

Card de solo lectura con la dirección de destino de un envío: destinatario, dirección, teléfono y correo, en formato acordeón.

## Cuándo usarlo
- En el detalle de un envío, junto a `CardOrigen` y `CardPaquete`.
- Para revisar el destino ya guardado; para capturarlo usa un formulario.

## Qué pasa el consumidor
- Las mismas props que `CardOrigen`: `name`, `address`, `phone`, `email`, `title`, `icon`, `collapsible`, `defaultOpen`, `open`, `onOpenChange`.
- Cambia el título por defecto (“Dirección de destino”) y el icono (una casa).

## Estados
- Igual que `CardOrigen`: encabezado `button` con `aria-expanded`, contenido en `<address>`.

## Do / Don't
- Haz: usa `CardDestino` y `CardOrigen` juntas con el mismo ancho.
- No hagas: usar `CardOrigen` con título cambiado para el destino; así el icono no coincide.

## Notas de la fuente
- Figma: componente `card-direccion/card-destino` (7346:19867), página ❖ Cards (5572:11171). Es idéntico al de origen salvo título e icono.
- Se implementa sobre `Caelus.CardOrigen`, así que hereda sus estilos (`.cl-card-origen`). Si `CardOrigen` no está en el bundle, no se pinta.

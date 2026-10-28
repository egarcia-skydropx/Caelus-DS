# CardOrigen

Card de solo lectura con la dirección de origen de un envío: remitente, dirección, teléfono y correo, en formato acordeón.

## Cuándo usarlo
- En el detalle de un envío o del historial, junto a `CardDestino` y `CardPaquete`.
- Para revisar datos ya guardados; para capturarlos usa un formulario.

## Qué pasa el consumidor
- `name`, `address`, `phone`, `email`. Cada fila solo aparece si llega su dato.
- `title` e `icon` para cambiar el encabezado.
- `collapsible`, `defaultOpen`, `open`, `onOpenChange`.

## Estados
- El encabezado es un `button` con `aria-expanded` y `aria-controls`; el contenido va en un `<address>`.
- Cerrado: solo título y chevron hacia abajo.

## Do / Don't
- Haz: pasa la dirección ya formateada en una sola línea con separadores “|”, como en la fuente.
- No hagas: recortar el correo o la dirección; el texto se parte en varias líneas.

## Notas de la fuente
- Figma: componente `card-direccion/card-origen` (7346:19866), página ❖ Cards (5572:11171).
- Borde `gray/200` mapeado a `core-border-secondary-gray200`. El color de los glifos dentro de los cuadros grises (`core-icon-secondary-gray500`) y del icono del título son inferidos.
- `CardDestino` reutiliza este componente con otro título e icono.

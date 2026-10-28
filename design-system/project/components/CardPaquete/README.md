# CardPaquete

Card de resumen con los datos técnicos finales del paquete de un envío (medidas y peso), en formato acordeón.

## Cuándo usarlo
- En el detalle de un envío ya creado, junto a `CardOrigen` y `CardDestino`.
- Para mostrar datos fijos; no es un formulario.

## Qué pasa el consumidor
- `title`, `icon`.
- `tags`: lista de `{ label, icon }` que se pintan como `Caelus.Badge` gris tamaño large (“10 × 10 × 10 cm”, “1 kg”).
- `children` si necesitas otro contenido.
- `collapsible`, `defaultOpen`, `open`, `onOpenChange`.

## Estados
- Abierto: chevron hacia arriba. Cerrado: chevron hacia abajo y solo se ve el título.
- El encabezado es un `button` con `aria-expanded` y `aria-controls`.

## Do / Don't
- Haz: usa los badges solo para datos técnicos cortos (medidas, peso).
- No hagas: meter acciones o estados del envío en esta card.

## Notas de la fuente
- Figma: componente `card-paquete` (7346:19868), página ❖ Cards (5572:11171).
- Borde `gray/200` mapeado a `core-border-secondary-gray200` (mismo valor). Fondo del icono `core-surface-secondary-light-100`; el color del glifo (`core-theme-secondary-dark-700`) es inferido.
- Los iconos de medidas y peso son glifos genéricos.

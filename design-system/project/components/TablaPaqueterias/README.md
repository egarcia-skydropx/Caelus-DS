# TablaPaqueterias

Lista vertical de `CardPaqueteria` para administrar todas las paqueterías disponibles en el módulo de Convenios.

## Cuándo usarlo
- En la vista principal de Convenios, para ver de un vistazo qué paqueterías están activas y cuáles tienen convenio.
- Cuando el usuario filtra o busca paqueterías: si no hay resultados, muestra el estado vacío solo.

## Qué pasa el consumidor
- `items`: arreglo con las props de cada `CardPaqueteria` (`name`, `logo`, `convenioState`, `statusLabel`…). Un `id` opcional sirve de key.
- `variant` (`v1` o `v2`, default `v2`) y `device` se aplican a todas las cards.
- `emptyTitle` y `emptyText` personalizan el vacío. También puedes pasar `children` con tus propias cards.

## Do / Don't
- Haz: ordena la lista con las paqueterías activas primero.
- No hagas: mezclar v1 y v2 en la misma tabla.
- Haz: se renderiza como `ul`/`li`, así el lector de pantalla anuncia cuántas paqueterías hay.

## Notas de la fuente
- Figma: componente `tabla-paqueterias` (6381:9050), página ❖ Cards (5572:11171). Son siete instancias de `card-paqueteria` v2 desktop con 12px de separación (`space-12`).
- No tiene encabezado de tabla ni paginación en la fuente; si hacen falta van fuera del componente.

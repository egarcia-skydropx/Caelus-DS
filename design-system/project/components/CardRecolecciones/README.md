# CardRecolecciones

Card de listado para gestionar recolecciones: número, paquetería, origen, fecha programada, paquetes y peso, en versión desktop o móvil.

## Cuándo usarlo
- En la vista de recolecciones programadas (incluida la marca blanca), una card por recolección.
- En móvil, con `mobile`, la información se apila en columna.

## Qué pasa el consumidor
- `mobile`: `true` para la versión móvil (cubre `wl-card-recolecciones-mobile`).
- Datos: `number`, `status`, `carrier { logo, name, service }`, `origin { name, detail }`, `schedule { date, time }`, `packages`, `weight`.
- `onMore`: botón secundario cuadrado de más opciones (`Caelus.Button`).

## Do / Don't
- Haz: formatea fecha y horario antes de pasarlos (“Lun - 08/10/2022”, “9:00 am - 7:00 pm”).
- No hagas: poner acciones primarias en la card; las acciones van en el menú.
- Haz: si muestras estatus, usa `Caelus.Badge` en tamaño small.

## Notas de la fuente
- Figma: componentes `wl-card-recolecciones` (5587:2046) y `wl-card-recolecciones-mobile` (5587:2019), página ❖ Cards (5572:11171). Integra `.header-recolecciones`, `.paqueteria-servicio`, `.destino`, `.paquetes` y `.peso`.
- En desktop las etiquetas usan `core-theme-gray-dark-700`, no el índigo de las demás cards. En móvil “Paquetería” aparece en índigo; se respetó.
- El espacio entre columnas en desktop es 41px en la fuente (no es token); se dejó literal.
- En Figma la instancia `.Estatus` del encabezado está vacía; aquí es opcional (`status`).
- El móvil dice “Cantidad” en lugar de “Paquetes”.

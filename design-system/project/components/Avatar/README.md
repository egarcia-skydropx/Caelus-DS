# Avatar

Foto o iniciales que representan a una persona o cuenta, solo o en grupo apilado.

## Cuándo usarlo
- Junto al nombre de quien creó un envío, en comentarios o en el menú de cuenta.
- `type="stacked"` para mostrar el equipo asignado a una cuenta o a una tarea, con contador "+N".
- `dot` para indicar que la persona está en línea o tiene notificaciones.

## Qué pasa el consumidor
- `type`: `circle` (por defecto) | `rounded` | `stacked`.
- `size`: `sm` 24 · `regular` 32 · `md` 48 · `lg` 80 · `xl` 144.
- `src` + `alt`: foto y nombre. Sin `src` se muestra el placeholder con `initials` (fondo `core-surface-gray-light-100`, texto `core-text-primary-gray900`).
- `dot` (+ `dotLabel` para lectores de pantalla): punto `core-green-400` con borde `white`.
- `onRemove` (+ `removeLabel`): el punto se vuelve botón gris (`core-gray-400`) con una X para quitar al usuario.
- `avatars` y `max` (solo `stacked`): lista de personas y cuántas mostrar; el resto se resume en un círculo `core-gray-900` con "+N".

## Do / Don't
- Haz: pasa siempre `alt` con el nombre de la persona.
- Haz: usa `dotLabel` cuando el punto comunica algo importante; el color solo no basta.
- No hagas: mezclar círculos y redondeados en la misma lista.

## Notas de la fuente
- En Figma el redondeado mide 4px con foto y 8px con placeholder o con punto. Aquí: 4px con foto y 8px en placeholder; con punto se mantiene 4px.
- La posición del punto en Figma no sigue una regla fija entre tamaños (p. ej. circle LG queda 2px dentro y XL 14px dentro); se copiaron los valores de cada tamaño.
- El grosor del borde del punto (1.5px en sm/regular) y del borde de los apilados (1.5px en md/lg) no son tokens.
- La variante Close Button solo existe en SM en Figma (punto de 10px). Aquí funciona en todos los tamaños y su área táctil se amplía con un pseudo-elemento invisible; aun así es pequeña para táctil.
- `stacked` no tiene tamaño XL en Figma.
- Contraste: el "+N" blanco sobre `core-gray-900` es alto; las iniciales `core-gray-900` sobre `core-gray-100` también.
- El punto usa la variable primitiva `core/green/400` y el borde la variable `base` (#ffffff), que se mapea a `white`.

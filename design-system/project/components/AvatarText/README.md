# AvatarText

Avatar circular con un título y un texto de apoyo al lado.

## Cuándo usarlo
- Identificar a una persona o cuenta en listas, encabezados de perfil o el menú de usuario.
- Mostrar quién creó o modificó un envío, con un dato breve debajo (rol, fecha, correo).

## Qué pasa el consumidor
- `title`: nombre (semibold, `core-gray-900`).
- `description`: texto de apoyo (regular, `core-gray-500`).
- `src`, `initials`, `alt`: se pasan al `Avatar` interno, que toma el mismo `size`.
- `avatar`: si necesitas otro avatar (con punto, redondeado), pásalo completo.
- `size`: `sm` | `regular` | `md` | `lg`.

## Do / Don't
- Haz: mantén el texto de apoyo corto, en una línea.
- No hagas: repetir el nombre en el `alt` de la foto; ya está escrito al lado (la foto queda decorativa).

## Notas de la fuente
- Tamaños de texto de Figma: título 12/14/16/30px y apoyo 12/12/14/24px, con interlineado 1 (`leading-none`).
- Separaciones entre avatar y texto: 10, 10, 12 y 16px; 10px no es token de espaciado en la escala usada aquí, se deja literal.
- Figma usa las variables primitivas `core/gray/900` y `core/gray/500`; aquí `core-gray-900` y `core-gray-500`.
- Contraste: `core-gray-500` (#6b7280) sobre blanco ≈ 4.8:1, pasa.
- Texto de muestra de Figma en inglés ("Joined in August 2014"); el preview usa español.

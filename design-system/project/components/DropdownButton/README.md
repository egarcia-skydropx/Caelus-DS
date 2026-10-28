# DropdownButton

Botón que agrupa varias acciones relacionadas y las muestra en un menú al hacer clic.

## Cuándo usarlo
- Cuando hay tres o más acciones secundarias sobre el mismo objeto (una guía, un envío, una orden) y no caben como botones sueltos.
- La versión de solo icono (`type="icon"`, tres puntos) va en filas de tabla y tarjetas donde falta espacio.
- Si solo hay una o dos acciones, usa `Button` directamente.

## Qué pasa el consumidor
- `label`: texto del botón (o `aria-label` en la versión de icono).
- `type`: `default` (texto + chevron) o `icon`.
- `icon`: icono del botón de solo icono (por defecto tres puntos).
- `items`: acciones del menú, con `icon`, `trailing`, `danger`, `disabled` y `onSelect`, igual que las filas de `Dropdown`.
- `onSelect(item)`, `open` y `onOpenChange` (si quieres controlarlo), `align` (`start` o `end`), `buttonType` y `size` del botón.

## Estados
- Abierto: el botón muestra el borde de foco `core-interactions-active-primary600` y texto `core-text-contrast-primary600`; `aria-expanded="true"`.
- El menú se cierra con Escape, al elegir una acción o al hacer clic fuera, y el foco vuelve al botón.
- Flecha abajo sobre el botón abre el menú; dentro, las flechas mueven el foco.

## Do / Don't
- Haz: usa verbos en las acciones ("Descargar guía", "Duplicar envío").
- Haz: separa la acción destructiva al final con un separador y `danger`.
- No hagas: esconder aquí la acción principal de la pantalla; esa va como botón primario visible.
- No hagas: anidar submenús.

## Notas de la fuente
- Usa `Button` (secondary) y `Dropdown` del sistema. El menú mide 224px de ancho y queda 8px debajo del botón.
- El separador del menú en Figma usa la variable suelta `gray/100`; aquí se usa el separador del `Dropdown` (`core-theme-gray-lighter-200`).
- La acción "Sign Out" de la muestra usa `core-theme-red-contrast-600`, que es lo que aplica `danger`.

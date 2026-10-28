# ButtonIcon

Botón compacto de solo ícono para barras de herramientas, tareas y menús.

## Cuándo usarlo
- Barras de herramientas con varias acciones (ideal en grupos de 3 o 4).
- Selección exclusiva de herramientas, marcando la actual con `active`.

## Qué pasa el consumidor
- `icon` (o `children`): ícono de 24px; usa `stroke="currentColor"` para heredar el color.
- `aria-label`: obligatorio.
- `background`: `true` (fondo `toolbarIcon-default-surface`) o `false` (transparente, ícono `core-icon-secondary-gray500`).
- `active`: herramienta seleccionada; pone `aria-pressed`.
- `disabled`, `onClick` y demás props nativas.

## Estados
- Hover: fondo `toolbarIcon-hover-surface`, ícono `core-icon-contrast-primary600`.
- Active y focus: fondo `toolbarIcon-focus-surface` con borde de 2px `toolbarIcon-focus-border`.
- Disabled: ícono `core-icon-minimal-gray400`; con fondo usa `toolbarIcon-disabled-surface`.

## Do / Don't
- Haz: siempre pon `aria-label`.
- No hagas: imitar el estilo disabled sin deshabilitar el botón; el teclado y los lectores de pantalla lo seguirían usando.

## Notas de la fuente
- Figma no tiene estado Focus en este set; aquí `:focus-visible` reutiliza el estilo de Active para que el teclado tenga un foco visible.
- El ícono disabled (`core-icon-minimal-gray400`, #9ca3af) tiene contraste bajo (≈2.5:1); es aceptable solo porque el control está deshabilitado.

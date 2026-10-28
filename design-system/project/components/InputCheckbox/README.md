# InputCheckbox

Casilla para elegir una o varias opciones de un conjunto, con etiqueta, texto de apoyo y estado de selección parcial.

## Cuándo usarlo
- Selección múltiple: elegir varias guías en una tabla, aceptar varios servicios adicionales.
- Confirmaciones dentro de un formulario que se envía después (aceptar términos).
- Para una sola opción excluyente usa `InputRadio`; para ajustes inmediatos, `InputToggle`.

## Qué pasa el consumidor
- `label`, `helperText`, `indeterminate` (Figma `Partial selection`).
- `checked` / `defaultChecked`, `onChange`, `disabled`, `name`, `value` van al `<input type="checkbox">` nativo.

## Estados
| Figma | Fondo | Borde |
|---|---|---|
| Default | `core-surface-light-white` | `core-border-heavy-gray-400` |
| Checked / Partial | `core-interactions-active-primary600` | igual |
| Default + Disabled | `core-theme-gray-lighter-200` | `core-border-primary-gray300` |
| Checked / Partial + Disabled | `core-theme-primary-light-300` | igual |

Check y guion en `core-icon-invert-white`. Foco con contorno de 2px. En parcial se activa la propiedad nativa `indeterminate`, que los lectores anuncian como "mixto".

## Do / Don't
- Haz: etiquetas breves y en positivo ("Incluir seguro").
- Haz: usa `indeterminate` en el "seleccionar todo" cuando solo algunas filas están marcadas.
- No hagas: usar checkboxes para opciones excluyentes.
- No hagas: disparar acciones inmediatas al marcar (para eso es el toggle).

## Notas de la fuente
- Figma set `base/input-checkbox` (página ❖ Forms, `3:219229`).
- Disabled en Figma usa `core-theme-gray-lighter-200`, no el token `checkbox-disabled-surface` (que vale gris 100); se siguió Figma.
- El borde de Checked en Figma es primary 600 al 50% de opacidad sobre el mismo relleno; visualmente es igual y se dejó sólido.
- Las opciones `Show flag` y `Show plataforma` (ocultas por defecto) no se construyeron; pasa la bandera o logo dentro de `label`.
- Contraste: el borde gris 400 sobre blanco queda en ~2.5:1 (bajo 3:1 para componentes).

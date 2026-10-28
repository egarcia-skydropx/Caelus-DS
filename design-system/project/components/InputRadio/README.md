# InputRadio

Botón de opción para elegir una sola alternativa dentro de un listado, con etiqueta y texto de apoyo.

## Cuándo usarlo
- Opciones excluyentes y visibles a la vez: tipo de servicio (estándar o express), quién paga el envío.
- Para varias opciones a la vez usa `InputCheckbox`; para listas largas, un select.

## Qué pasa el consumidor
- `label`, `helperText`.
- `name` (el mismo en todo el grupo), `value`, `checked` / `defaultChecked`, `onChange`, `disabled` van al `<input type="radio">` nativo.
- Agrupa los radios en un `<fieldset>` con `<legend>` (o `role="radiogroup"` + `aria-labelledby`); el componente no crea el grupo.

## Estados
| Figma | Círculo |
|---|---|
| Default | fondo `core-surface-light-white`, borde 1px `core-border-heavy-gray-400` |
| Checked | borde 5px `core-interactions-active-primary600` (deja un punto blanco) |
| Default + Disabled | fondo `core-theme-gray-lighter-200`, borde `core-border-primary-gray300` |
| Checked + Disabled | borde 5px `core-theme-primary-light-300` |

Las flechas del teclado mueven la selección dentro del grupo (comportamiento nativo). Foco con contorno de 2px.

## Do / Don't
- Haz: ordena las opciones con lógica (precio, uso más frecuente).
- Haz: deja una opción marcada por defecto cuando haya una recomendada.
- No hagas: usar un solo radio aislado; para eso es el checkbox.
- No hagas: más de 5–6 opciones; cambia a un select.

## Notas de la fuente
- Figma set `base/input-radio` (página ❖ Forms, `3:219196`).
- Disabled en Figma usa `core-theme-gray-lighter-200`, no el token `radio-disabled-surface` (gris 100); se siguió Figma.
- Contraste: el borde gris 400 sobre blanco queda en ~2.5:1 (bajo 3:1 para componentes).

# InputToggle

Interruptor para activar o desactivar un ajuste que se aplica al instante, con etiqueta y texto de apoyo.

## Cuándo usarlo
- Configuraciones de efecto inmediato: notificaciones de entrega, seguro automático, modo de etiqueta térmica.
- Si el cambio necesita un botón "Guardar", usa `InputCheckbox`.

## Qué pasa el consumidor
- `label`, `helperText`.
- `checked` / `defaultChecked`, `onChange`, `disabled`, `name` y el resto van al `<input type="checkbox" role="switch">`.

## Estados
| Figma | Track | Thumb |
|---|---|---|
| Default | `core-theme-gray-medium-400` | `core-surface-light-white` |
| Checked | `core-interactions-active-primary600` | `core-surface-light-white` |
| Default + Disabled | `core-theme-gray-light-300` | `core-surface-gray-light-100` |
| Checked + Disabled | `core-theme-primary-light-300` | `core-surface-light-white` |

Etiqueta `core-text-primary-gray900` (gris 500 si está deshabilitado), helper `core-text-secondary-gray500`. Foco visible con contorno de 2px.

## Do / Don't
- Haz: escribe la etiqueta como el ajuste, no como una pregunta ("Notificar al destinatario").
- Haz: aplica el cambio en cuanto se mueve el interruptor.
- No hagas: usarlo dentro de un formulario que se envía después.
- No hagas: cambiar la etiqueta según el estado (activado/desactivado).

## Notas de la fuente
- Figma set `base/input-toggle` (página ❖ Forms, `3:219264`).
- La opción `Show icon` (oculta por defecto) no se construyó.
- Figma no tiene animación; el thumb cambia de lado sin transición.
- Contraste: el track gris 400 sobre blanco queda en ~2.5:1 (bajo 3:1 para componentes).

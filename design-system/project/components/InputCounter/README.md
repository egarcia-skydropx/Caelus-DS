# InputCounter

Contador numérico con botones − y + y entrada directa por teclado, para ajustes pequeños y precisos.

## Cuándo usarlo
- Número de paquetes, piezas o etiquetas a imprimir: cantidades pequeñas con límites claros.
- Para montos usa `InputAmount`; para rangos amplios o aproximados, `InputSlider`.

## Qué pasa el consumidor
- `label`, `labelInfo`, `helperText`.
- `value` + `onValueChange(n)` (o `defaultValue`), `min`, `max`, `step`.
- `size` (`base` 42px / `sm` 37px), `state` (`default` / `error` / `disabled`).
- `decrementLabel` / `incrementLabel` para los botones.

## Estados
- Default: contenedor `contador-default-white`, borde `core-border-primary-gray300`, iconos `core-icon-primary-gray900`.
- Active / Typing (foco en el número): contenedor `contador-active-gray50` y borde interno `core-theme-primary-contrast-600`.
- Error: contenedor `contador-error-red50`, borde interno `core-theme-red-base-500`, texto `core-theme-red-dark-700`.
- Disabled: contenedor `contador-disabled-surface`, botones `core-surface-gray-lighter-50`, iconos `core-icon-secondary-gray500`.

## Accesibilidad
- El número es un `spinbutton` con `aria-valuenow/min/max`; flechas arriba/abajo, Inicio y Fin funcionan con teclado.
- Los botones − y + quedan fuera del orden de tabulación (el teclado ya cubre la acción) y se deshabilitan en los límites.

## Do / Don't
- Haz: define siempre `min` y `max`.
- Haz: explica el límite en el helper ("Máximo 10 paquetes por guía").
- No hagas: usarlo para valores grandes que la persona escribiría más rápido.

## Notas de la fuente
- Figma set `input-counter` (página ❖ Forms, `1394:88448`), botones `Decrement` / `Increment`.
- El ancho fijo de 142px es el de Figma; puedes cambiarlo con `style`.
- En Figma el número de Default ("0") está en gris 500; aquí el valor real se muestra en `core-text-primary-gray900` porque no es un placeholder.
- Los tokens `contador-typing-*`, `contador-value-*` y `contador-error-red100` no se usan: equivalen a los de arriba.

# InputPhone

Campo de teléfono con selector de código de país pegado a la izquierda y, opcionalmente, un botón primario para enviar un código de verificación.

## Cuándo usarlo
- Capturar el celular del remitente o destinatario y verificarlo por SMS.
- Si solo necesitas un número sin país, usa `InputText` con `type="tel"`.

## Qué pasa el consumidor
- `label`, `helperText`: deja la instrucción de no repetir el código de país, así se evitan números de 12 o 13 dígitos.
- `countryCode` (default "+52"), `flag` (ReactNode 20×14) y `onCountryClick` para abrir tu listado de países.
- `size` (`base` / `sm`), `state` (`default` / `error` / `disabled`), `valid`.
- `actionLabel` + `onAction`: muestra un `Button` primario a todo el ancho (p. ej. "Enviar código").
- El resto (`value`, `onChange`, `name`) va al `<input type="tel">`.

## Estados
- Selector: `selectPhone-default-surface-gray50`, borde `selectPhone-default-border`; foco con `selectPhone-active-border`; deshabilitado con `selectPhone-disabled-*`.
- Número: igual que `InputText` (`inputField-*`).
- Error: campo y helper en rojo; el selector se queda en Default, como en Figma.

## Do / Don't
- Haz: aplica una máscara que agrupe los dígitos mientras se escribe (p. ej. 55 5123 4567).
- Haz: deshabilita el botón hasta que el número tenga 10 dígitos.
- No hagas: pedir el código de país dentro del número.
- No hagas: usar este botón para acciones que no sean del propio teléfono.

## Notas de la fuente
- Figma set `input-phone` (página ❖ Forms, `4453:8085`); el selector es el componente `Select país`.
- La bandera no se copia de Figma: el consumidor la pasa en `flag`.
- El botón usa `window.Caelus.Button` (otro componente del sistema).
- El color del chevron no está ligado en el dump; se usó `core-icon-secondary-gray500`.
- El listado de países (estado Active del selector con dropdown) no se construyó.

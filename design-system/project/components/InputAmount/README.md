# InputAmount

Campo para capturar montos, con bandera, código de moneda y símbolo fijos antes del número.

## Cuándo usarlo
- Valor declarado de un paquete, monto de una recarga de saldo o de un cobro contra entrega.
- Si el valor no es dinero, usa `InputText` o `InputCounter`.

## Qué pasa el consumidor
- `label` claro ("Valor declarado"), `labelInfo`, `helperText`.
- `flag` (ReactNode 18×18), `currency` (default "MXN"), `symbol` (default "$").
- `size` (`base` / `sm`), `state` (`default` / `error` / `disabled`), `valid`.
- El resto (`value`, `onChange`, `name`) va al `<input inputMode="decimal">`. El formato de miles y decimales lo aplica el consumidor.

## Estados
Iguales a `InputText` (`inputField-*`). En error el código y el símbolo también pasan a `core-theme-red-dark-700`.

## Accesibilidad
El prefijo (moneda) se liga al input con `aria-describedby`, así el lector anuncia "MXN" junto al campo.

## Do / Don't
- Haz: usa una etiqueta que diga qué monto es ("Monto a transferir").
- Haz: formatea con separador de miles al salir del campo.
- No hagas: pedir que la persona escriba el símbolo de moneda.
- No hagas: mezclar monedas en un mismo formulario sin mostrar el código.

## Notas de la fuente
- Figma set `input-amount` (página ❖ Forms, `12064:36785`).
- La etiqueta en Figma usa la variable suelta `gray/900` (mismo valor que `core-text-primary-gray900`, que es la que se usó).
- El código de moneda en Figma es la instancia `Medidas-y-moneda` ("USD"); aquí es texto de 12px en `core-text-secondary-gray500`.
- La bandera no se copia de Figma: el consumidor la pasa en `flag`.

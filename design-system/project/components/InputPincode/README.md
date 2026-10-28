# InputPincode

Casillas de un dígito para escribir el código de verificación de la doble autenticación al iniciar sesión.

## Cuándo usarlo
- Verificación en dos pasos (código por SMS o correo) y confirmación de teléfono.
- No lo uses para contraseñas ni para números largos como guías.

## Qué pasa el consumidor
- `label` (default visual de Figma: "Tu código"), `helperText`.
- `length` (default 6), `value` + `onValueChange(code)` o `defaultValue`, `onComplete(code)` para validar en automático.
- `state`: `default`, `error` o `disabled`.

## Comportamiento
- Al escribir un dígito el foco salta a la siguiente casilla; Retroceso borra y regresa.
- Pegar un código completo llena todas las casillas.
- Flechas izquierda/derecha mueven el foco. Solo acepta dígitos.
- La primera casilla usa `autoComplete="one-time-code"` para que el teléfono sugiera el código del SMS.

## Estados
- Default: `core-surface-light-white`, borde `core-border-primary-gray300`, texto 16px.
- Active (casilla con foco): `core-surface-gray-lighter-50`, borde `core-interactions-active-primary600`.
- Error: `core-surface-red-lighter-50`, borde `core-interactions-error-red500`, texto `core-theme-red-dark-700`; etiqueta y mensaje en `core-theme-red-contrast-600`.

## Accesibilidad
Las casillas forman un `group` ligado a la etiqueta y cada una se anuncia como "Dígito n de 6".

## Do / Don't
- Haz: valida en cuanto se complete el código y muestra el error con instrucciones ("El código no coincide, verifícalo e intenta de nuevo").
- Haz: ofrece reenviar el código cerca del campo.
- No hagas: bloquear pegar.
- No hagas: limpiar las casillas en error sin avisar.

## Notas de la fuente
- Figma set `input-pincode` (página ❖ Forms, `9708:40185`); estados Default, Active, Typing, Value y Error.
- En Figma, Active marca las 6 casillas a la vez con borde de 1px; aquí se marca solo la casilla con foco y se suma un borde interno de 1px (2px en total) para que el foco sea visible.
- Figma no tiene Disabled; se usó `inputField-disabled-surface`.

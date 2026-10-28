# ModalVerificationCode

Contenido de modal para validar la identidad con un código que el sistema envió por correo o SMS.

## Cuándo usarlo
- Después de disparar un código de seguridad a un canal externo (correo o SMS), por ejemplo al crear usuarios o confirmar un cambio sensible.
- Va dentro de un `Modal` (o de una vista enfocada); este componente es solo el cuerpo del formulario.

## Qué pasa el consumidor
- `variant` (`code` | `code-sms`), `title`, `message`, `destination`, `label`, `placeholder`, `caption`, `length`.
- `value` / `defaultValue` y `onChange(code)`: el campo solo acepta dígitos, abre teclado numérico (`inputMode="numeric"`) y acepta pegar el código completo (`autoComplete="one-time-code"`).
- `onSubmit(code)`, `submitLabel`, `loading`, `loadingLabel`.
- `error`: muestra el mensaje y pone `aria-invalid` en el campo.
- `onResend`, `resendLabel`, `onHelp` (`null` lo oculta), `helpLabel`.

## Estados
- Botón "Verificar" deshabilitado hasta completar los dígitos y mientras `loading`.
- Error en el campo con `error`.
- `code-sms` agrega la nota "Por seguridad, nunca compartas este código.".

## Do / Don't
- Do: muestra a dónde se envió el código (correo o número enmascarado).
- Do: cambia el botón a espera mientras se valida.
- Don't: pongas números reales como ejemplo en el placeholder.
- Don't: bloquees el pegado del código.

## Notas de la fuente
- Figma: set `modal-verification-code` (1419:4192) en ❖ Modals, variantes `Code` y `Code-SMS`.
- El frame de Figma no tiene fondo ni borde: se pensó para ir dentro del cuerpo de un modal.
- El correo resaltado usa `core-indigo-600` (paleta) mientras "Reenviar código" usa `core-text-contrast-primary600`; se respetaron los dos tal como están en Figma.
- El mensaje de la variante SMS usa el hex `#6b7280` sin variable; es idéntico a `core-text-secondary-gray500` y se usó ese token.
- "Necesito ayuda" usa `core-theme-blue-base-500` sobre blanco (#3f83f8): contraste ~3.6:1, por debajo de 4.5:1 para texto de 14px.
- Figma muestra un solo campo con placeholder "0 - 0 - 0 - 0", no casillas separadas; el estado de carga y el de error no están dibujados (se agregaron según la descripción del componente).

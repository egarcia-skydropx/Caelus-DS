# InputPassword

Campo de contraseña con botón para mostrar u ocultar el texto y una lista de requisitos que se marca mientras la persona escribe.

## Cuándo usarlo
- Registro, cambio y restablecimiento de contraseña, donde conviene explicar por qué una contraseña no se acepta.
- Para iniciar sesión basta con el campo y el ojo; no pases `requirements`.

## Qué pasa el consumidor
- `label`, `helperText` (mensaje de error en `state="error"`).
- `state`: `default`, `error` o `disabled`.
- `requirements`: `[{ label, met }]`. `met: true` muestra check verde, `false` cruz roja y sin `met` solo el texto (como en Active, antes de escribir).
- `requirementsTitle` (default "Debe contener:"), `showLabel` / `hideLabel` para el botón del ojo.
- El resto (`value`, `onChange`, `autoComplete`, `name`) va al `<input>`; usa `autoComplete="new-password"` en registro.

## Estados
- Default: fondo `core-surface-light-white`, borde `core-border-primary-gray300`.
- Active / Typing (`:focus-within`): fondo `core-surface-gray-lighter-50`, borde 2px `core-interactions-active-primary600`.
- Error: fondo `core-surface-red-lighter-50`, borde rojo, etiqueta y mensaje `core-theme-red-contrast-600`.
- Requisitos: check `core-theme-green-base-500`, cruz `core-theme-red-contrast-600`, texto `core-text-secondary-gray500`.

## Accesibilidad
- El ojo es un `<button>` con `aria-pressed` y etiqueta que cambia.
- Cada requisito anuncia "(cumplido)" o "(pendiente)" en texto oculto, porque el color y el icono solos no bastan. La lista es `aria-live="polite"` y se liga al input por `aria-describedby`.

## Do / Don't
- Haz: acompaña siempre el check y la cruz con el texto del requisito.
- Haz: valida en tiempo real y marca la cruz solo cuando la persona ya escribió.
- No hagas: esconder los requisitos hasta que falle el envío.
- No hagas: bloquear pegar contraseñas.

## Notas de la fuente
- Figma set `input-password` (página ❖ Forms, `1380:1602`). Solo tiene tamaño Base (42px).
- Figma no tiene estado Disabled para este set; se reutiliza el del campo base.
- El ojo usa `core-theme-gray-darkest-800` como en Figma.
- Cuando un requisito no tiene icono, Figma deja 24px de sangría; se respetó para que el texto no salte al aparecer el icono.

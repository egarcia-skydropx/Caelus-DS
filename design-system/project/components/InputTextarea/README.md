# InputTextarea

Campo multilínea para textos largos, con barra opcional de formato (negrita, alineación, listas, imagen y enlace).

## Cuándo usarlo
- Notas o instrucciones de entrega, descripciones de incidencias, mensajes a soporte: texto que necesita párrafos o listas.
- Para una sola línea usa `InputText`; para chat usa `InputChatroom`.

## Qué pasa el consumidor
- `label`, `labelInfo`, `helperText`.
- `state`: `default`, `error` o `disabled`.
- `toolbar` (default `true`) y `onToolbarAction(action)`: los botones solo avisan qué se pulsó; aplicar el formato (o conectar un editor rico) es tarea del consumidor.
- `resize` (default `true`) para permitir estirarlo en vertical.
- El resto (`value`, `onChange`, `rows`, `maxLength`, `placeholder`) va al `<textarea>`.

## Estados
- Default: borde `core-border-primary-gray300`, área `core-surface-light-white`, barra `core-surface-gray-lighter-50`.
- Active / Typing (`:focus-within`): borde 1px `core-interactions-active-primary600`, área `core-surface-gray-lighter-50`.
- Error: borde `core-interactions-error-red500`, área `core-surface-red-lighter-50`, texto `core-theme-red-dark-700`, etiqueta y ayuda `core-theme-red-contrast-600`.
- Disabled: área `core-surface-gray-lighter-50`, barra deshabilitada.

## Do / Don't
- Haz: usa la barra solo si el texto realmente se mostrará con formato.
- Haz: indica el límite de caracteres en el helper cuando exista.
- No hagas: usarlo para datos cortos como nombres o códigos.
- No hagas: mostrar la barra si los botones no hacen nada.

## Notas de la fuente
- Figma set `input-textarea` (página ❖ Forms, `10988:41812`).
- En Figma el foco es un borde de 1px (no 2px como `InputText`); se respetó.
- Disabled en Figma usa `core-surface-gray-lighter-50`, no `inputField-disabled-surface`; se respetó, pero es inconsistente con el resto de inputs.
- El tirador de resize del diseño se resuelve con el del navegador.
- Los iconos de la barra son SVG genéricos dibujados aquí, no los de la librería.
- Contraste: los iconos `core-icon-secondary-gray500` sobre gris 50 quedan en ~4.6:1.

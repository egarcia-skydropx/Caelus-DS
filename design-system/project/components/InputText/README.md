# InputText

Campo de texto de una línea con etiqueta, texto de apoyo e iconos opcionales; es la base visual de todos los inputs de Forms.

## Cuándo usarlo
- Formularios (datos del remitente, referencia de un envío), barras de búsqueda simples y diálogos de configuración.
- Para valores largos o con formato usa `InputTextarea`; para teléfono, montos o códigos usa su input especializado.

## Qué pasa el consumidor
- `label`: corta y descriptiva, siempre visible. No uses el placeholder como etiqueta.
- `labelInfo`: texto del icono de información junto a la etiqueta.
- `helperText`: contexto breve o, en error, qué corregir.
- `size`: `base` (42px) o `sm` (37px).
- `state`: `default`, `error` o `disabled` (o la prop nativa `disabled`).
- `valid`: muestra el check verde cuando el valor ya se validó.
- `leftIcon` / `rightIcon`: iconos de 18px.
- Cualquier otra prop (`value`, `onChange`, `placeholder`, `type`, `name`, `aria-*`) va al `<input>` nativo.

## Estados
| Figma | Cómo se logra | Tokens |
|---|---|---|
| Default | reposo | fondo `inputField-default-surface-white`, borde `core-border-primary-gray300` |
| Active / Typing | `:focus-within` | fondo `inputField-active-surface-gray50`, borde 2px `core-interactions-active-primary600` |
| Value | con valor (+ `valid`) | texto `core-text-primary-gray900`, check `core-theme-green-base-500` |
| Error | `state="error"` | fondo `inputField-error-surface-red50`, borde `core-interactions-error-red500`, texto `core-theme-red-dark-700`, etiqueta y ayuda `core-theme-red-contrast-600` |
| Disabled | `state="disabled"` | fondo `inputField-disabled-surface` |

En error el input recibe `aria-invalid` y el `helperText` queda ligado por `aria-describedby`.

## Clases compartidas
Este componente define las clases `cl-input-text__label`, `__helper`, `__control` y `__native`, que reutilizan `InputPassword`, `InputPhone`, `InputAmount`, `InputCounter` e `InputBadge` para verse idénticos. Si cambias el estilo del campo, cámbialo aquí.

## Do / Don't
- Haz: etiquetas cortas arriba del campo y un helper que explique el formato esperado.
- Haz: muestra el error junto al campo, en el helper, con instrucciones para corregirlo.
- No hagas: usar el placeholder como única etiqueta.
- No hagas: marcar error mientras la persona todavía escribe por primera vez.

## Notas de la fuente
- Figma set `input-text` (página ❖ Forms, `3:217802`).
- En Small la línea de texto es 21px y en Base 18px (`leading-tight`), igual que en Figma.
- El caption de error en Figma mezcla rojo con un enlace en `core-text-primary-gray900`; aquí el helper es un solo color. Si necesitas enlace, pásalo como nodo en `helperText`.
- La opción `Medidas/moneda` del set no se construyó aparte: usa `rightIcon` o `InputAmount`.
- Contraste: el borde `core-border-primary-gray300` sobre blanco queda en ~1.5:1 (bajo 3:1 para componentes); el placeholder `core-text-secondary-gray500` cumple 4.5:1 sobre blanco y gris 50.
- No hay hover en Figma, así que no se agregó.

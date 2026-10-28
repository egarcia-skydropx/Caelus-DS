# Alert

Mensaje en línea que llama la atención del usuario y da contexto sobre algo que afecta su flujo: éxito, error, advertencia o información.

## Cuándo usarlo
- Es el feedback principal después de una acción (éxito o error).
- Sirve para avisar de un riesgo antes de que se vuelva crítico (warning).
- Da contexto o enlaza documentación relevante (info).
- Para mensajes temporales que aparecen y se van, usa un Toast, no un Alert.

## Qué pasa el consumidor
- `children`: el mensaje, en una o dos frases.
- `color`: `success`, `danger`, `warning`, `info`, `default` u `orange`.
- `title` opcional (semibold 14px).
- `icon` opcional de 16px. En Figma son check, x-circle e information-circle.
- `action` opcional `{ label, onClick, icon }`. Corresponde a la variante “Alert con botón”.
- Ancho: el Alert ocupa el ancho de su contenedor (518px en Figma).

## Colores
| color | fondo | borde | título e icono | texto |
|---|---|---|---|---|
| success | `alerts-success-green50` | `core-theme-green-light-300` | `core-theme-green-dark-700` | `core-theme-green-darkest-800` |
| danger | `alerts-error-red50` | `core-theme-red-light-300` | `core-theme-red-dark-700` | `core-theme-red-darkest-800` |
| warning | `alerts-warning-yellow50` | `core-theme-yellow-light-300` | `core-theme-yellow-dark-700` | `core-theme-yellow-darkest-800` |
| info | `alerts-info-blue50` | `core-theme-blue-light-300` | `core-theme-blue-contrast-600` | `core-theme-blue-darkest-800` |
| default | `core-theme-gray-lighter-200` | `core-border-heavy-gray-400` | `core-theme-gray-darkest-800` | `core-theme-gray-darkest-800` |
| orange | `core-surface-orange-lighter-50` | `core-theme-orange-light-300` | `core-theme-orange-base-500` | `core-theme-orange-darkest-800` |

`danger` y `warning` se anuncian con `role="alert"`; los demás con `role="status"`.

## Do / Don't
- Haz: un mensaje accionable (“Revisa el código postal…”), no solo “Error”.
- No hagas: apilar varias alertas del mismo tipo. Agrúpalas.
- Ojo: en `orange`, el título `core-theme-orange-base-500` sobre `core-surface-orange-lighter-50` tiene poco contraste (unos 3:1). Úsalo solo en texto de 18px o más, o cámbialo a `core-theme-orange-darkest-800`. Así viene en la fuente.
- En `warning`, la acción usa `core-theme-orange-darkest-800`, no amarillo. Así viene en la fuente.

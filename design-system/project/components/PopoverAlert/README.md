# PopoverAlert

Mezcla de popover y alerta que se queda visible hasta que el usuario completa una acción pendiente, anclado a un punto de color en la interfaz.

## Cuándo usarlo
- Para señalar una tarea pendiente en un lugar concreto (datos fiscales, método de pago, dirección de origen).
- Cuando quieres llevar al usuario a otra pantalla con un CTA claro.
- Para avisos de un solo momento, usa un Toast; para avisos en línea, un Alert.

## Qué pasa el consumidor
- `severity`: `warning` (default), `info`, `danger` o `primary`. Cambia punto, borde, degradado, icono, textos y botón.
- `direction`: `right` (default), `left`, `top` o `bottom`: el lado del punto donde aparece la tarjeta.
- `title` y `children`: título (semibold 16px) y descripción (14px).
- `action`: `{ label, onClick, icon }`. Con él se usa la variante “Con botón”; sin él la variante compacta “Sin botón”.
- `onClose`: muestra la “x” con `aria-label`.
- `icon`: icono de 14px dentro del círculo de 24px.
- `showPopover={false}`: deja solo el punto (Figma `Show Popover`). Dale un `aria-label` si el punto es la única pista.
- La tarjeta se anuncia con `role="status"`. Se dibuja estática; posicionarla sobre la interfaz es tarea del consumidor.

## Colores
| severity | punto | borde | degradado | título | botón |
|---|---|---|---|---|---|
| warning | `core-theme-yellow-light-300` | `core-theme-yellow-light-300` | `core-surface-yellow-lighter-50` | `core-theme-yellow-yellow-900` | `core-theme-yellow-contrast-600` |
| info | `core-theme-blue-medium-400` | `core-theme-blue-medium-400` | `core-surface-blue-lighter-50` | `core-theme-blue-contrast-600` | `core-theme-blue-dark-700` |
| danger | `core-interactions-error-red500` | `core-theme-red-light-300` | `alerts-error-red50` | `core-theme-red-dark-700` | `core-theme-red-dark-700` |
| primary | `core-theme-primary-contrast-600` | `core-theme-primary-light-300` | `core-surface-primary-lighter-50` | `core-text-contrast-primary600` | `core-theme-primary-contrast-600` |

El degradado va de arriba (color claro) a abajo (`core-surface-light-white`). Sombra `shadow-md`.

## Do / Don't
- Do: un CTA que diga a dónde lleva (“Completar datos”).
- Do: quítalo en cuanto la tarea pendiente se complete.
- Don't: usar varios PopoverAlert en la misma vista.
- Don't: usar `danger` para tareas que no bloquean.

## Notas de la fuente
- En Figma la severidad roja se llama `Wrong`; aquí es `danger` para alinearlo con Toast.
- El botón de Figma es la instancia `.button-alert` (radio 8, padding 4/8, texto blanco 14px medium). `Button` de Caelus no tiene variantes por severidad, así que se dibuja un `button` nativo con esos valores.
- La flecha de Figma es un vector cuyo relleno es literal (`#fffff6`, `#faf9ff`) en warning y primary; aquí usa el color claro de cada severidad.
- En la variante sin botón no hay título en Figma; aquí se muestra solo si se pasa `title`.
- El texto de muestra de Figma es lorem ipsum; el preview usa textos de envíos.

# TabNav

Pestañas para alternar entre secciones relacionadas de una misma página sin perder el contexto.

## Cuándo usarlo
- Para dividir una vista en categorías del mismo nivel: datos de la cuenta, direcciones, facturación.
- `variant="underline"` para pestañas dentro de una página; `tab` o `pills` cuando las pestañas son la navegación principal de una sección.
- `dark` solo sobre superficies oscuras de MyShipHub.
- Para filtrar una tabla usa `TabFilter`.

## Qué pasa el consumidor
- `tabs`: `{ id, label, icon?, disabled?, tabId?, panelId? }`.
- `value` y `onChange(id)`.
- `variant` (`tab`, `pills`, `underline`) y `dark`.
- Atributos de `div`, sobre todo `aria-label` para nombrar el grupo.

## Estados
- Default: texto `core-text-secondary-gray500`.
- Hover: texto `core-theme-gray-contrast-600`; fondo `core-surface-gray-lighter-50` (tab), `core-surface-gray-light-100` (pills) o línea `core-theme-gray-light-300` (underline).
- Activa: tab con fondo `core-surface-gray-light-100` y texto `core-text-contrast-primary600`; pills con fondo `core-theme-primary-contrast-600` y texto blanco; underline con línea y texto primario.
- Deshabilitada: `core-text-minimal-gray400`.
- Teclado: `role="tablist"`/`"tab"`, `aria-selected` y foco itinerante; flechas izquierda/derecha, Inicio y Fin cambian de pestaña.

## Do / Don't
- Haz: etiquetas de una o dos palabras.
- Haz: une cada pestaña con su panel (`panelId` y `aria-labelledby` en el panel).
- No hagas: usar pestañas para pasos de un proceso; eso es un stepper.
- No hagas: mezclar pestañas con y sin icono en el mismo grupo.

## Notas de la fuente
- `core-text-minimal-gray400` (deshabilitada) no llega a 4.5:1 sobre blanco; se acepta porque es texto inactivo.
- La pestaña deshabilitada del estilo tab usa `navtabs/tab/disabled/surface`, que no está en los tokens; aquí se queda con el fondo blanco por defecto.
- En modo oscuro la activa usa la variable suelta `shiphub/300` (aquí `shiphub-palette-300`). El hover oscuro no está en Figma; se usó `core-theme-gray-gray-900`, el mismo fondo de la activa.

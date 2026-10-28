# CargaConvenios

Contenido de carga para conectar o editar un convenio: encabezado, barra de progreso y botones de salida según termine bien o mal.

## Cuándo usarlo
- Dentro de un modal o panel mientras se conecta un convenio nuevo (`type="conexion"`) o se guardan cambios de uno existente (`type="edicion"`).
- Cuando la operación tarda lo suficiente como para necesitar feedback.

## Qué pasa el consumidor
- `state`: `carga`, `error` o `exito`; `type`: `conexion` o `edicion`.
- `value` (0–100) para el avance en carga.
- Textos opcionales: `title`, `description`, `progressLabel`, `statusText` (en carga, p. ej. “Tiempo estimado 1 seg”).
- Acciones: `onHelp` y `onRetry` (error), `onDone` (éxito). Usa `Caelus.Button`.

## Estados
- `carga`: barra verde (`core-theme-green-base-500`) sobre `core-theme-gray-lighter-200` con porcentaje. Sin botones.
- `error`: barra llena en rojo, icono X, “Error al conectar/editar”, botones “Recibir ayuda” (terciario) y “Reintentar” (primario).
- `exito`: icono de convenio arriba, barra llena verde con check, “Conexión/Edición finalizada” y botón “Entendido”.
- La barra es `role="progressbar"` con `aria-valuenow`; el bloque se anuncia con `role="status"` (o `alert` en error).

## Do / Don't
- Haz: actualiza `value` con el avance real o con pasos fijos; no lo dejes parado.
- No hagas: cerrar el modal solo en error; deja que el usuario elija reintentar o pedir ayuda.

## Notas de la fuente
- Figma: set `carga-convenios` (6386:10096), página ❖ Cards (5572:11171). La barra es la instancia `progress-bars` (Color=Purple) pero su relleno es `core-theme-green-base-500`; se respeta el relleno.
- Los colores rojos del estado error no se leyeron como variables; se usa `core-theme-red-contrast-600` según la captura.
- En éxito de edición, Figma conserva la etiqueta “Conexión del convenio”; aquí se usa “Edición del convenio” por coherencia (cámbiala con `progressLabel`).
- El texto de Figma lleva el marcador “Tiempo estimado {{1 seg}}”; es dato dinámico, pásalo en `statusText`.

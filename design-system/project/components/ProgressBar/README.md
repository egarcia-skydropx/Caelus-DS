# ProgressBar

Barra horizontal que muestra cuánto lleva completado un proceso.

## Cuándo usarlo
- Procesos medibles: carga de un archivo de envíos masivos, pasos de un formulario, guías generadas de un lote.
- `indeterminate` cuando el sistema trabaja pero no puede calcular cuánto falta (actualizar una sección o toda la vista, pegada al borde inferior de la barra de navegación).

## Qué pasa el consumidor
- `value` y `max` (por defecto 100).
- `color`: `primary` | `green` | `dark` | `orange` | `purple` | `yellow` | `red` | `indigo`. Usa el color primario para cargas generales y los semánticos solo cuando el estado lo pida.
- `leftLabel`, `rightLabel`: textos opcionales arriba (12px, `core-text-secondary-gray500`).
- `label`: nombre accesible (p. ej. "Carga del archivo de envíos").
- `indeterminate`: animación continua; no expone `aria-valuenow`.

La barra tiene `role="progressbar"` con `aria-valuemin`, `aria-valuemax` y `aria-valuenow`.

## Estados
- Determinado: el ancho del relleno es `value / max`.
- Indeterminado: un tramo del 75 % se desliza de izquierda a derecha. Con `prefers-reduced-motion: reduce` queda quieto.

## Do / Don't
- Haz: colócala cerca de lo que está cargando.
- Haz: acompaña la versión indeterminada con un texto ("Cargando datos del cliente…").
- No hagas: usar la indeterminada si conoces el porcentaje.

## Notas de la fuente
- Figma solo tiene valores 25, 50, 75 y 100; aquí `value` es continuo.
- Discrepancia: la variante `Primary, Value=75` mide 319px de 350 (≈91 %), no 75 %.
- La animación de Figma (progress-bar-animation) vive en un .json de motion que no se pudo leer; aquí es una animación CSS propia de 1.4 s.
- Track `core-theme-gray-lighter-200`, 6px de alto y radio `radius-2`.
- Contraste (gráfico, mínimo 3:1 contra el track): `yellow` (`core-theme-yellow-light-300`) y `orange` (`core-theme-orange-medium-400`) quedan por debajo; no los uses como única señal.

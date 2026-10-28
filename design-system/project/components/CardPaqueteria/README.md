# CardPaqueteria

Card de gestión de una paquetería en el módulo de Convenios: muestra si está activa, cuántos servicios tiene, el estado del convenio y sus características.

## Cuándo usarlo
- En la lista de paqueterías de Convenios (ver `TablaPaqueterias`).
- Para activar o desactivar una paquetería (v1) o mostrar su estatus (v2).
- `variant="busqueda"` es el estado vacío cuando un filtro no encuentra paqueterías.

## Qué pasa el consumidor
- `variant`: `v1`, `v2` o `busqueda`; `device`: `desktop` o `mobile`.
- Encabezado: `logo`, `name`, `showWarning`, y `enabled` + `onToggle` + `toggleLabel` (v1) o `statusLabel` + `statusTheme` (v2).
- Servicios: `servicesActive`, `servicesTotal`.
- Convenio: `showConvenio`, `convenioState`, `onConectarConvenio`, `onConfigurar`.
- Características: `showDetalles`, `features`.
- Vacío: `emptyTitle`, `emptyText`.

## Estados
- `convenioState="conectar"`: botón secundario “Conectar convenio”.
- `conectado` (`convenio-palette-600`), `apagado` (`core-text-minimal-gray400`), `intermitencia` (`core-theme-yellow-darkest-800`), `en-curso` (`core-theme-primary-medium-400`) y `error` (`core-theme-red-dark-700`): texto con icono de convenio.
- El toggle es un `input type="checkbox"` con `role="switch"`; en activo usa `core-interactions-active-primary600`.

## Do / Don't
- Haz: usa el toggle solo para encender o apagar la paquetería, no para el convenio.
- No hagas: mostrar botón y estado de convenio a la vez.
- Haz: si muestras el triángulo de alerta, explica el problema en `warningLabel`.

## Notas de la fuente
- Figma: set `card-paqueteria` (6381:9279), página ❖ Cards (5572:11171). Integra `.toggle`, `.badge-convenio`, `.contenedor-detalles` e `.icons`.
- La variante llamada `Property 1=v1, device=mobile` mide 1043px de ancho: en realidad es la versión desktop de v1 (nombre equivocado en Figma).
- La ilustración del estado vacío no se copió; se usa una lupa genérica dentro de un círculo `core-surface-primary-lighter-50`.
- El color verde de “5 de 5” (`core-theme-green-contrast-600`) y el gris del toggle apagado (`core-theme-gray-lighter-200`) son inferidos de la captura.
- `convenio-palette-600`, `core-theme-primary-medium-400` y `core-text-minimal-gray400` quedan bajo 4.5:1 sobre blanco.

# CardConvenioContenedor

Bloque que muestra y controla el ciclo de vida del convenio de una paquetería: sin convenio, activo, desactivado, con intermitencia, conectándose o con error.

## Cuándo usarlo
- Dentro de la configuración de una paquetería en el módulo de Convenios (es lo que muestra `CardServiciosPaqueteria` en su variante `convenio`).
- Cuando el usuario necesita saber si su convenio funciona y qué acciones le permite.

## Qué pasa el consumidor
- `state`: `empty`, `conectado`, `desactivado`, `intermitencia`, `en-curso` o `error`.
- `alias`, `message` (texto con enlaces como “crea un reporte”), `skills`, `showSkills`.
- Toggle: `enabled`, `onToggle`.
- Acciones: `onConnect`, `onEdit`, `onDelete`, `onCancel`, `onRetry`. Usa `Caelus.Button`.
- No trae fondo ni borde: va dentro de una card contenedora.

## Estados
| state | título | color | acciones |
|---|---|---|---|
| empty | — | — | Conectar convenio |
| conectado | Convenio activado | `convenio-palette-600` | toggle, Editar, Eliminar |
| desactivado | Convenio desactivado | `core-text-minimal-gray400` | toggle “Activar” |
| intermitencia | Convenio con intermitencia | `core-theme-yellow-darkest-800` | toggle, Editar, Eliminar |
| en-curso | Conectando convenio... | `core-theme-primary-medium-400` | Editar (deshabilitado), Eliminar |
| error | Conexión con error | `core-theme-red-dark-700` | Cancelar conexión, Reintentar |

Las habilidades con `ok: false` muestran una X roja y un texto oculto “(con fallas)” para lectores de pantalla.

## Do / Don't
- Haz: en `intermitencia` y `error`, explica qué falla y ofrece un enlace de ayuda en `message`.
- No hagas: usar el toggle para borrar el convenio; para eso está “Eliminar”.

## Notas de la fuente
- Figma: set `card-convenio-contenedor` (6381:9107), página ❖ Cards (5572:11171). Integra `.title-convenio`, `.toggle`, `.habilidades` e `.icons`.
- El título “Convenio activado” usa en Figma el hex `#0587d0` sin variable; es igual a `convenio-palette-600`.
- En `en-curso` el botón Editar se ve apagado en la captura; aquí se deshabilita.
- `convenio-palette-600` (unos 4:1), `core-theme-primary-medium-400` (unos 2.9:1) y `core-text-minimal-gray400` (unos 2.5:1) no llegan a 4.5:1 sobre blanco con texto de 16px.
- El icono de convenio (apretón de manos) es un glifo genérico.

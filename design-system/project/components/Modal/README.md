# Modal

Ventana emergente que pide atención para confirmar o informar algo importante antes de seguir con el flujo.

## Cuándo usarlo
- Para validar acciones de peso: eliminar, aceptar condiciones o iniciar un proceso.
- `informativo`: título en el header, texto e ilustración opcional, y botones a la derecha.
- `confirmacion`: pregunta centrada con ilustración; para confirmar un paso no destructivo.
- `critico`: acción irreversible; el botón principal es el rojo (`alert`) y los botones van centrados.
- Si el contenido necesita mucho scroll o pasos encadenados, usa un drawer o una página completa.

## Qué pasa el consumidor
- `type`, `title`, `showTitle`, `description`, `illustration`, `children`.
- `primaryAction` y `secondaryAction` (`{ label, onClick, disabled }`) arman el footer; `footer` lo sustituye y `footerVariant` cambia la alineación.
- `onClose` activa la X, la tecla Escape y el clic en el fondo. `closeLabel` cambia su etiqueta accesible.
- `width` (default 416px), `separator`, `inline`.
- El resto de props (`id`, `aria-*`, `className`…) va al elemento con `role="dialog"` (`alertdialog` en `critico`), que lleva `aria-modal` y `aria-labelledby` apuntando al título.

## Estados
- Variantes `informativo`, `confirmacion`, `critico`.
- Breakpoints: el diálogo mide 416px en desktop y se ajusta al ancho disponible en mobile (352px en Figma).
- El fondo usa `core-opacity-backdrop-30pct`. Con `inline` el fondo se pinta como bloque estático (útil en documentación).

## Do / Don't
- Do: escribe en el botón la acción concreta ("Eliminar", "Guardar"), no "Aceptar".
- Do: ofrece siempre una salida clara además de la X (botón de cancelar).
- Do: usa ilustraciones para suavizar mensajes técnicos.
- Don't: abras un modal encima de otro.
- Don't: uses títulos vagos como "Atención"; di qué va a pasar.

## Notas de la fuente
- Figma: set `modal` (11072:9709) en la página ❖ Modals; los internos `.modal-header`, `.modal-content` y `.modal-footer` quedan dentro de este componente.
- El diálogo de Figma no tiene sombra, solo borde `core-border-secondary-gray200`; se respetó así.
- Manejo de foco: el diálogo recibe foco al montarse (fuera de `inline`), pero no hay trampa de foco completa; la app debe devolver el foco al disparador al cerrar.
- La ilustración de Figma (`packge/package-dimensions`) es un vector de marca; aquí se recibe como `ReactNode`.

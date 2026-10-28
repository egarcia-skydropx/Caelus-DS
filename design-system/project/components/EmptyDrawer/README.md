# EmptyDrawer

Drawer sin datos que convierte el vacío en una guía: explica qué va a aparecer ahí y ofrece la acción para empezar.

## Cuándo usarlo
- Cuando un panel lateral (notificaciones, historial, recolecciones…) todavía no tiene contenido.
- Para orientar sobre qué esperar de esa sección y dar acciones claras.

## Qué pasa el consumidor
- `title`, `onClose`, `closeLabel`.
- `illustration`, `heading`, `description`.
- `primaryAction`, `secondaryAction` (`{ label, onClick, disabled }`).
- `children` para contenido extra.

## Estados
- Un solo estado. La ilustración cambia por plataforma (Skydropx vs Solo Envíos/White label); se pasa por prop.

## Do / Don't
- Do: el título debe coincidir con la sección que abrió el drawer.
- Do: explica en una frase por qué está vacío y qué hacer.
- Do: usa ilustraciones que refuercen el mensaje.
- Don't: dejes el panel solo con "No hay datos".
- Don't: pongas más de dos botones.

## Notas de la fuente
- Figma: `empty-drawer` (12639:29677) en ❖ Drawer; los internos `.empty-state-drawer` (12639:29689) e `.Ilustración` (12639:29698) quedan dentro (la ilustración como `ReactNode`).
- El panel blanco usa radio 6.29px y borde 1.05px en Figma (valores escalados); se redondearon a `radius-6` y `border-width-width-1`.
- El texto de Figma es "Lorem ipsum"; el preview usa copy real.
- El texto de apoyo usa `core-theme-gray-dark-700` y el título `gray/900` (mapeado a `core-gray-900`).

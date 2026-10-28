# Popover

Tarjeta flotante con más contexto que un tooltip: título, texto, enlace y, opcionalmente, botón de cerrar.

## Cuándo usarlo
- Para explicar un cálculo, una regla o un dato que no cabe en un tooltip.
- Cuando necesitas un enlace u otro elemento interactivo dentro.
- Si el texto es de menos de 50 caracteres y sin enlaces, usa un Tooltip.

## Qué pasa el consumidor
- `position`: 12 combinaciones de lado y alineación (`top-center`, `top-left`, `top-right`, `bottom-*`, `left-center`, `left-top`, `left-bottom`, `right-*`). El lado es dónde aparece respecto al disparador; la flecha queda en el borde contrario.
- `header`: título en bold 12px (Figma `Show header`). Se enlaza con `aria-labelledby`.
- `children`: el texto (Figma `Show body`).
- `link`: `{ label, href, external, onClick }` (Figma `Show link`).
- `onClose`: muestra la “x” con `aria-label` “Cerrar” (Figma `Show close icon`).
- Se dibuja estático con `role="dialog"`. Abrirlo, posicionarlo, mover el foco y cerrarlo con Escape es tarea del consumidor.

## Do / Don't
- Do: título corto que diga de qué trata.
- Do: deja que se cierre con Escape y al hacer clic fuera.
- Don't: usarlo para formularios largos; usa un modal.
- Don't: abrir varios popovers a la vez.

## Notas de la fuente
- Fondo `core-surface-light-white`, borde `core-border-secondary-gray200`, texto `core-text-primary-gray900`, enlace `core-text-contrast-primary600`. Sombra `shadow`.
- Radio de 4.8px en Figma: no coincide con ningún token, se deja literal.
- La flecha de Figma es un vector; aquí es un cuadrado de 8px girado 45° con el mismo fondo y borde.
- Ancho fijo de 258px como en Figma.
- El texto de muestra de Figma está en inglés; el preview usa textos de envíos.

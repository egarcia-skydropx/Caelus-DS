# ModalMultimedia

Modal para reproducir un video o tutorial corto sin sacar al usuario del flujo en el que está.

## Cuándo usarlo
- Demostraciones de funciones, guías rápidas o tutoriales (idealmente de menos de 3 minutos), por ejemplo "¿Cómo funciona tu link de pedido?".

## Qué pasa el consumidor
- Todo lo de `Modal` (`title`, `onClose`, `primaryAction`, `secondaryAction`, `width` default 495, `inline`…).
- `media`: el reproductor como `ReactNode` (este componente no trae player propio).
- `caption` y `children` opcionales.

## Estados
- Sin `media` muestra un placeholder con la proporción del video de Figma (465 × 387).

## Do / Don't
- Do: da al video subtítulos y controles accesibles (los del navegador o los de tu player).
- Do: pausa la reproducción al cerrar el modal.
- Don't: reproduzcas con sonido automáticamente.
- Don't: lo uses para videos largos; enlaza a una página aparte.

## Notas de la fuente
- Figma: componente `modal-multimedia` (15492:30645) en ❖ Modals; el interno `.modal-multimedia-main` (video con controles simulados) se reemplaza por la prop `media`.
- El área de video tiene 15px de margen lateral (no es token de espacio) y fondo `#ffffff` sin variable; se usó `core-surface-light-white` del modal.
- El header de este modal no tiene borde inferior en Figma, a diferencia del `Modal` base.
- El tiempo del player usa `#eaeaea` sin variable; no se construyó porque los controles son del player.

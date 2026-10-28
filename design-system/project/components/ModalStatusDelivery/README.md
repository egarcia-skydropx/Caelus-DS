# ModalStatusDelivery

Modal tipo glosario que explica qué significa cada estatus de un envío para resolver dudas antes de que se vuelvan tickets de soporte.

## Cuándo usarlo
- Desde un ícono de ayuda junto a los estatus en el historial o en el detalle de una guía.

## Qué pasa el consumidor
- Todo lo de `Modal` (`title`, `onClose`, `width` default 924, `inline`…).
- `columns`: arreglo de columnas; cada una es una lista de `{ label, description, color }`.
- `closeActionLabel`: texto del botón del footer (default "Cerrar"), que llama a `onClose`.

## Estados
- Colores de punto: `blue`, `primary`, `indigo`, `green`, `red`, `orange`.
- En pantallas angostas las columnas se apilan.

## Do / Don't
- Do: escribe cada descripción en una sola frase breve.
- Do: usa los mismos colores de punto que el dashboard de envíos.
- Do: deja el flujo normal a la izquierda y las excepciones (errores, devoluciones, cancelación) a la derecha.
- Don't: agregues acciones dentro de la lista; es solo informativa.

## Notas de la fuente
- Figma: componente `modal-status-delivery` (7340:39290) en ❖ Modals.
- El título de Figma es el placeholder "Modal title"; aquí el default es "Significado de los estatus" (nombre del frame).
- Las variables de Figma vienen con nombres cortos (`blue/100`, `indigo/500`, `gray/900`…); se mapearon a la paleta `core-blue-100`, `core-indigo-500`, `core-gray-900`, etc.
- El punto interno mide 19px dentro de un círculo de 24px (no es token).

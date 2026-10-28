# Tooltip

Globo oscuro con información breve que aparece al pasar el cursor o enfocar un elemento.

## Cuándo usarlo
- Para explicar un icono o una acción sin texto visible (“Descargar guía”).
- Para una aclaración corta, de máximo 50 caracteres.
- Si necesitas enlaces, iconos, imágenes o texto largo, usa un Popover.

## Qué pasa el consumidor
- `position`: `top` (default), `bottom`, `left` o `right`. Es el lado del disparador donde aparece el globo; la flecha apunta hacia el disparador.
- `title`: título opcional; activa la versión con título (192px de ancho, texto en dos niveles).
- `children`: el texto.
- `id`: pásalo y pon `aria-describedby` con ese id en el disparador.
- El componente se dibuja estático (`role="tooltip"`). Mostrarlo al hacer hover o focus, posicionarlo y ocultarlo con Escape es tarea del consumidor.

## Do / Don't
- Do: una frase corta y sin punto final si es una etiqueta.
- Do: muéstralo también con foco de teclado, no solo con hover.
- Don't: poner enlaces ni botones dentro: el tooltip no es interactivo.
- Don't: repetir el texto que ya se ve en el botón.

## Notas de la fuente
- Fondo `core-theme-gray-darkest-800`, texto `core-surface-gray-light-100` (contraste alto). Radio `radius-4`. Sombra `shadow-sm` sin título y `shadow-md` con título.
- La flecha de Figma es un vector redondeado de 34×8px; aquí es un triángulo CSS de 16×8px.
- Figma no fija un ancho máximo para la versión sin título; aquí se limita a 240px.
- El texto de muestra de Figma está en inglés; el preview usa textos de envíos.

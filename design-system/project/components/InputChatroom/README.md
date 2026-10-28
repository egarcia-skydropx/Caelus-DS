# InputChatroom

Barra para redactar y enviar mensajes en un chat, con botones de adjuntar archivo, agregar imagen y enviar.

## Cuándo usarlo
- Solo en mensajería: hilos de soporte, comentarios en una incidencia de envío, chat con la paquetería.
- Para formularios usa `InputTextarea`.

## Qué pasa el consumidor
- `value` / `defaultValue`, `onChange`, `onSend(text)`.
- `onAttach`, `onAddImage` y `showAttach` / `showImage` (default visibles).
- `disabled`, `placeholder` (default "Escribe un mensaje…") y etiquetas accesibles (`sendLabel`, `attachLabel`, `imageLabel`, `aria-label` del textarea, default "Mensaje").

## Comportamiento
- Enter envía; Shift+Enter hace salto de línea. El botón enviar se deshabilita si el mensaje está vacío.
- El campo crece hasta 120px y luego hace scroll.

## Estados
- Default / Value: campo `core-surface-light-white`, borde `core-border-primary-gray300`.
- Active / Typing (`:focus-within`): campo `core-surface-gray-lighter-50`, borde 1px `core-interactions-active-primary600`.
- Disabled: campo `inputField-disabled-surface`.
- Contenedor `core-surface-gray-lighter-50`, iconos `core-icon-secondary-gray500`, enviar `core-icon-contrast-primary600`.

## Do / Don't
- Haz: deja visible el botón enviar aunque Enter también envíe.
- Haz: muestra el progreso del archivo adjunto en el hilo.
- No hagas: usarlo fuera de interfaces de mensajería.
- No hagas: enviar mensajes vacíos.

## Notas de la fuente
- Figma set `input-chatroom` (página ❖ Forms, `14320:86467`), del equipo Success (Reportes Nativos).
- La opción `Show Button` (botón de texto, oculta por defecto) no se construyó: usa `window.Caelus.Button` al lado si la necesitas.
- El radio del contenedor es 12px, que no es token (`--radius-*` llega a 8); se dejó literal.
- En Figma el icono de enviar no cambia en Disabled; aquí pasa a gris para que se note que no está disponible.
- El placeholder de Figma está en inglés ("Write text here ..."); aquí se usa español.

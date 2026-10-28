# Chat

Conversación entre agente y cliente con burbujas que distinguen claramente los mensajes recibidos de los enviados.

## Cuándo usarlo
- En atención a clientes o soporte dentro de la plataforma.
- Para mostrar el historial de mensajes de un envío o reporte.
- No lo uses para notificaciones del sistema: para eso están Toast y Alert.

## Qué pasa el consumidor
- `messages`: arreglo de mensajes en orden. Cada mensaje:
  - `from`: `agent` (izquierda, fondo gris claro) o `client` (derecha, fondo de marca oscuro).
  - `author`, `time`, `text`, `status`.
  - `avatar`: ReactNode de 32px; sin él se muestra la inicial del autor.
  - `attachment`: `{ name, meta, href, onClick }` para un archivo con botón de descarga.
  - `link`: `{ url, title, domain, image }` para una vista previa de enlace.
  - `actions`: opciones del menú “más acciones” (`{ label, onClick }`). Sin ellas no aparece el botón.
- El contenedor tiene `role="log"`; pásale un `aria-label`.

## Estados
- Botón de más acciones: `Button` de Caelus `tertiary`, cuadrado, con `aria-haspopup="menu"` y `aria-expanded`. El menú abre debajo, se cierra con Escape o al elegir una opción, y mueve el foco a la primera opción.

## Do / Don't
- Do: los mensajes del agente siempre a la izquierda y los del cliente a la derecha.
- Do: muestra hora y estado de entrega.
- Don't: mezclar colores de burbuja fuera de los dos definidos.
- Don't: poner acciones destructivas sin confirmación en el menú.

## Notas de la fuente
- Se integran los internos `.chat-bubble` y `.chat-button-more`.
- Construidos: texto, adjunto y enlace. No construidos: audio, imagen y galería de imágenes (sin reproductor ni visor; se pueden pasar como `text` con un ReactNode).
- En la variante `Cliente, Mensaje=Link` el fondo es `core-theme-secondary-darkest-800` en lugar de `core-theme-primary-darkest-800`; parece un error y aquí se usa siempre el primario.
- Los textos del adjunto del agente tienen negro literal en Figma; se usa `dark` (mismo valor `#000000`).
- Radios de burbuja de 12px y gap de 10px: no son tokens, quedan literales.
- El menú usa `shadow-lg`. En Figma el menú es un slot con `.dropdown-nav-link` (texto `core-text-primary-gray900`, 14px).
- La última opción de muestra en Figma es “First Action”; se omitió.

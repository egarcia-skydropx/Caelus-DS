# NotificationPushup

Aviso flotante y celebratorio para comunicar logros o beneficios, sobre todo en el programa de referidos.

## Cuándo usarlo
- Cuando un referido se registra o activa su cuenta, cuando el usuario gana créditos o tiene un beneficio por vencer.
- Para eventos de sistema neutros o errores usa `Toast` o `Alert`.

## Qué pasa el consumidor
- `kind` (`referido` | `creditos` | `beneficio`) define el copy por defecto; `title` y `message` lo sustituyen.
- `platform` (`pro` | `se` | `ei`) cambia el degradado y el emoji por defecto.
- `icon`, `date`, `children`, `onClose`, `closeLabel`.
- El contenedor lleva `role="status"` para que lectores de pantalla lo anuncien sin interrumpir.

## Estados
- Pro: degradado radial morado claro a blanco. SE y EI: azul claro (`core-blue-100`) a blanco.

## Do / Don't
- Do: usa un tono cercano y celebratorio, con signos de exclamación al inicio y al final.
- Do: deja siempre la X para cerrarlo.
- Don't: lo uses para errores o advertencias.
- Don't: apiles varios a la vez.

## Notas de la fuente
- Figma: set `notification-pushup` (15680:29145) en ❖ Drawer, `Property 1` × `Plataforma`.
- Valores sin variable en Figma: degradado Pro `#e7e2ff` (literal, no hay token igual), título `#241918` (literal), mensaje `#4b5563` (es el valor de `core-theme-gray-contrast-600`, que sí estaba ligado), radio 12px (no hay token de 12).
- Figma no tiene la combinación `Creditos` + `EI`; aquí funciona igual que las demás.
- El emoji se recibe como `ReactNode` y se marca como decorativo.

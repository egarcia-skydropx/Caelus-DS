# IconBackground

Ícono dentro de un contenedor de color (círculo o cuadrado) que ayuda a reconocer una característica o atributo de un servicio.

## Cuándo usarlo
- Listas de beneficios o características de un servicio de paquetería.
- Encabezados de tarjetas, pasos de un proceso o estados vacíos.

## Qué pasa el consumidor
- `icon` (o `children`): ícono con `currentColor`; se escala al tamaño correcto (16, 20, 20, 28, 48 y 64px).
- `color`: `white` | `dark` | `green` | `red` | `blue` | `yellow` | `orange` | `purple` | `gray` | `teal` | `secondary` | `indigo` | `pink`. Fondo `core-surface-<color>-light-100` e ícono `core-theme-<color>-*`; `white` y `dark` invierten blanco y `core-theme-gray-gray-900`.
- `shape`: `circle` | `square`.
- `size`: `xxs` | `xs` | `sm` | `md` | `lg` | `xl`.
- `aria-label`: pásalo solo si el ícono comunica algo que no está en el texto cercano; sin él, el componente queda oculto para lectores de pantalla (decorativo).

## Do / Don't
- Haz: elige el color por su significado.
- Haz: cambia el ícono por el que mejor comunique el propósito.
- No hagas: mezclar círculos y cuadrados en la misma lista.

## Notas de la fuente
- 156 variantes en Figma = 13 colores × 2 formas × 6 tamaños; aquí son tres props.
- Tamaños con tokens `icon-shapes-*`, cuyos nombres no coinciden con los de Figma: `xs`→`icon-shapes-xs` (24), `sm`→`icon-shapes-default` (32), `md`→`icon-shapes-lg` (48), `lg`→`icon-shapes-xl` (64), `xl`→`icon-shapes-xxl` (96). `xxs` (20px) no tiene token.
- Tonos del ícono no uniformes: green, yellow, orange, gray, teal y pink usan `base-500`; red, blue, purple y secondary `contrast-600`; indigo `darkest-800`.
- Discrepancia: `Secondary, Square, xxs` usa los tokens de `primary` en Figma; aquí se usa `secondary` en todos los tamaños.
- Contraste de ícono (gráfico, mínimo 3:1): green, yellow, orange, teal y pink sobre su fondo 100 quedan por debajo o al límite (amarillo ≈ 2:1). No los uses como única fuente de información.
- Figma no tiene sombras ni bordes en este set.

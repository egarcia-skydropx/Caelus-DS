# ButtonDownloadApp

Botón de descarga hacia App Store o Google Play, con el texto en dos líneas que piden las tiendas.

## Cuándo usarlo
- En secciones que promueven la app móvil (landing, pie de página, correo de bienvenida).
- Siempre en pareja: si muestras una tienda, muestra también la otra.

## Qué pasa el consumidor
- `store`: `appstore` | `googleplay`.
- `badge`: logo oficial de la tienda (38px). El componente **no** dibuja logos.
- `caption` y `storeName`: las dos líneas de texto (por defecto "Descárgala en" y el nombre de la tienda).
- `href` (+ `target`, `rel`): con enlace se renderiza como `<a>`; sin él, como `<button>`.

## Estados
- Hover: fondo `core-interactions-hover-gray100`.
- Focus (`:focus-visible`): anillo de 2px `core-interactions-active-primary600`.

## Do / Don't
- Haz: respeta los colores originales de los logos.
- No hagas: usarlo como acción principal de la página; para eso está el botón Primary.
- No hagas: amontonarlos dentro de componentes pequeños.

## Notas de la fuente
- Figma solo tiene `Dark mode=False`; no hay variante oscura.
- La variante es blanca (`white`) sin borde ni sombra: sobre un fondo blanco no se distingue. Úsala sobre superficies grises o de color.
- Textos: caption 12px regular con interlineado 1 (`leading-none`) y nombre 18px bold con interlineado 1.25 (`leading-tight`), como en Figma.
- Figma usa variables de librería `gray/900` y `white`; aquí `core-gray-900` y `white`.
- Hover y focus no existen en Figma; son propuestos.
- El texto de Figma está en inglés ("Download on the"); aquí el valor por defecto está en español.

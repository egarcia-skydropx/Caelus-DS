# MenuBreakpoints

Estructura base de la app que acomoda navbar, menú lateral y contenido según el ancho de pantalla.

## Cuándo usarlo
- Como contenedor de todas las vistas con sesión iniciada.
- Desde 1024px el menú queda fijo a la izquierda (256px). Debajo de 1024px el menú se oculta y se abre encima del contenido con un fondo oscurecido, desde la hamburguesa del `Navbar`.

## Qué pasa el consumidor
- `navbar`: normalmente un `Navbar` (con `onMenuClick` y `menuExpanded` en móvil).
- `menu`: normalmente un `Menu`.
- `children`: el contenido de la página.
- `menuOpen` y `onMenuClose`: estado del menú superpuesto; se cierra con clic en el fondo o con Escape.
- `showMenu`, `showContent` y `layout` (`docked` u `overlay`) para forzar un modo sin depender del ancho.

## Estados
- Fijo (≥1024px): menú, contenido con 16px de padding sobre `core-surface-gray-lighter-50`.
- Superpuesto (<1024px): fondo `core-opacity-backdrop-30pct` y panel con sombra `shadow-xl`.

## Do / Don't
- Haz: cuando abras el menú superpuesto, mueve el foco al primer enlace y devuélvelo a la hamburguesa al cerrar.
- Haz: cierra el menú superpuesto al navegar.
- No hagas: poner otro menú lateral dentro del contenido.

## Notas de la fuente
- En Figma `menu-breakpoints` es una plantilla de pantalla completa (navbar + menú + tabla) en 6 anchos: 1536, 1280, 1024, 768, 640 y 384. No es una versión colapsada del menú, por eso quedó como componente aparte.
- El fondo de algunas variantes usa la variable suelta `gray/50`; aquí `core-surface-gray-lighter-50`.
- La sombra del panel superpuesto no está en Figma; se agregó `shadow-xl` para separarlo del fondo.
- La variante "Solo Envíos" solo cambia el navbar y el menú que pases.
- El manejo de foco del menú superpuesto queda a cargo del consumidor.

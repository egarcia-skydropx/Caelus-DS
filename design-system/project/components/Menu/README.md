# Menu

Navegación lateral vertical y modular que organiza las secciones de la plataforma por grupos.

## Cuándo usarlo
- Como menú principal de la app, a la izquierda y debajo del `Navbar`. En pantallas angostas va dentro de `MenuBreakpoints`, que lo muestra como panel con fondo oscurecido.
- Elige `variant` por plataforma: `skydropx`, `soloenvios`, `internacional` o `msh`.

## Qué pasa el consumidor
- `items`: filas con `type` (`link`, `cta`, `label`, `separator`), `label`, `icon`, `href` u `onClick`, `active`, `trailing`, `badge`.
- Una fila con `children` se vuelve grupo plegable (`defaultExpanded`, o `expanded` + `onExpandedChange` si lo controlas). Se abre solo si uno de sus hijos está activo.
- `footer`: filas que van al fondo del menú.
- Atributos de `nav` (`aria-label`, por defecto "Menú principal").

## Estados
- Skydropx: texto `core-theme-gray-dark-700`, icono `core-theme-gray-medium-400`; hover y activo con fondo `core-surface-purple-lighter-50` y texto `core-theme-primary-contrast-600`; presionado `core-surface-purple-light-100`.
- Soloenvíos e Internacionales: texto blanco al 70%; hover y activo con negro al 17% y texto blanco; presionado negro al 25%.
- MyShipHub: activo y hover con línea inferior y texto `shiphub-palette-600`.
- `aria-current="page"` en la sección activa y `aria-expanded` en los grupos.

## Do / Don't
- Haz: un icono por sección principal y el mismo estilo de icono en todo el menú.
- Haz: usa `cta` solo para la acción principal ("Nuevo envío" o "Cotizar y crear").
- No hagas: más de dos niveles.
- No hagas: abrir varios grupos a la vez por defecto; deja abierto solo el de la sección activa.

## Notas de la fuente
- Las piezas `.pro-buttons-main`, `.se-buttons-main` y `.msh-buttons-main` se juntaron en las filas de `items`.
- Valores sin token: etiquetas de sección `#8690a2` (Skydropx), fondo `#cd461f` (Internacionales), capas `rgba(0,0,0,.17)` y `rgba(0,0,0,.25)`, hover MyShipHub `rgba(191,165,255,.15)`.
- El texto al 70% de blanco sobre `core-theme-primary-contrast-600` y sobre `#cd461f` queda debajo de 4.5:1 en algunos temas; revisa contraste antes de reutilizarlo.
- Las etiquetas `#8690a2` sobre blanco dan unos 3.3:1.
- El hover del CTA de Skydropx usa un degradado (paint style); no se construyó.
- `sidebar-nav-*` existe en tokens, pero Figma usa directamente los tonos purple; se siguió a Figma salvo el fondo (`sidebar-nav-default-surface`).
- La variante MSH en Figma no tiene etiquetas ni separadores; sus colores aquí son una extensión.

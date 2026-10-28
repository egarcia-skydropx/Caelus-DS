# Navbar

Barra superior fija con el logo de la plataforma y los accesos clave: saldo, país, ayuda, notificaciones y cuenta.

## Cuándo usarlo
- Una vez por aplicación, arriba de todo, junto con el `Menu` lateral.
- Elige `variant` por plataforma: `skydropx` (fondo oscuro), `soloenvios` e `internacional` (fondo blanco) y `msh` (MyShipHub, con enlaces al centro).
- En móvil (`type="mobile"`) pasa `onMenuClick` para el botón hamburguesa que abre el menú.

## Qué pasa el consumidor
- `logo`: el logo de la plataforma como ReactNode (versión invertida en fondos oscuros).
- `balance`: `{ label, icon?, onAdd, addLabel }` para el saldo y su botón de recarga.
- `country`: `{ code, flag, label, expanded, onClick }`; el menú de países lo abres tú (por ejemplo con `DropdownLogos`).
- `actions`: botones extra de la barra; dales `className="cl-navbar__tool"` y `aria-label` para que tomen el estilo.
- `account`: `{ initials | avatar, label, expanded, onClick }`.
- `links`: enlaces centrales de MyShipHub con `active`.
- `onMenuClick`, `menuLabel`, `menuExpanded`.

## Estados
- Skydropx: botones en `core-surface-contrast-on-dark`, hover `core-theme-indigo-dark-700`, foco `core-theme-indigo-light-300`.
- Soloenvíos / Internacionales: botones `toolbarIcon-default-surface`, hover `toolbarIcon-hover-surface` con texto `toolbarIcon-hover-icon`.
- MyShipHub: enlace activo y hover con texto y línea inferior `shiphub-palette-600`.
- Los botones de país y cuenta exponen `aria-expanded` cuando abren su menú.

## Do / Don't
- Haz: muestra siempre el saldo y la moneda del país activo.
- Haz: pon `aria-label` a todo botón de solo icono.
- No hagas: agregar más de cinco acciones a la barra; lo demás va en el menú de cuenta.
- No hagas: cambiar los colores del logo para que combine con la barra.

## Notas de la fuente
- La barra oscura de Skydropx usa el modo Contrast de los tokens `toolbarIcon-*` y `buttons-primary-*`, que no se importó. Aquí se escribieron directo los valores de ese modo (`core-surface-contrast-on-dark`, `core-theme-indigo-dark-700`, `core-theme-indigo-light-300`).
- El fondo de Soloenvíos usa la variable suelta `white`; aquí `core-surface-light-white`.
- MyShipHub usa el hex `#221f3a`, igual a `shiphub-layout-header-bg`, y la variable suelta `shiphub/600` (`shiphub-palette-600`).
- Los logos, banderas, el botón de automatizaciones, el de referidos y los menús de cuenta y ayuda (`.navbar-extras`, `.se-help-dropdown`, `.msh-dropdown-acount`, `.dropdown-acount-*`) no se construyeron como piezas propias: se pasan por `actions`, `logo`, `country.flag` y los `onClick`.

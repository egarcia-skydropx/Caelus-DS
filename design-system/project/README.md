Caelus es el sistema de diseño de Skydropx. Cubre las plataformas Skydropx Pro, Soloenvíos y White label, además de MyShipHub (MSH). Está hecho para interfaces de logística: cotizar, crear y rastrear envíos, gestionar órdenes, convenios y tiendas integradas.

## Contenido y tono

- Escribe en **español**, de **tú** y con frases cortas. El usuario es quien opera envíos: háblale de su envío, su guía, su saldo.
- Usa verbos en los botones: “Crear envío”, “Descargar guía”, “Ver detalle”. Evita “Aceptar” o “OK” si puedes nombrar la acción.
- Pon mayúscula solo en la primera palabra (sentence case): “Historial de envíos”, no “Historial De Envíos”.
- Nombres de producto tal cual: Skydropx, Soloenvíos, MyShipHub, Envíos Internacionales.
- Los mensajes de error explican qué pasó y qué hacer: “Revisa el código postal de destino e inténtalo de nuevo.”
- No uses emoji en la interfaz. El estado se comunica con color **más** texto o icono.

## Marcas y temas

`tokens.json` tiene tres temas, uno por marca: **SkydropxPro** (por defecto), **Soloenvios** y **White label**. Solo cambian las rampas `core-primary-*`, `core-secondary-*` y los colores de gradiente. Todos los tokens semánticos y de componente siguen a esas rampas, así que un mismo componente se ve violeta en Skydropx Pro, azul eléctrico en Soloenvíos y azul en White label.

- Primario de cada marca: `core-primary-600` (#5233ea en Pro, #1227e2 en Soloenvíos, #1c64f2 en White label).
- `brand-green-*` y `brand-pink-*` son colores de identidad para marketing y momentos de marca. No los uses para estados de UI.
- MyShipHub tiene su propia familia oscura: `shiphub-surface-*`, `shiphub-color-*` y `shiphub-accent-*`.

## Color: cómo elegir tokens

Usa siempre la capa **semántica** (`core-text-*`, `core-icon-*`, `core-surface-*`, `core-border-*`, `core-interactions-*`, `core-theme-*`) o la de **componente** (`buttons-*`, `toast-*`, `inputField-*`…). Las rampas primitivas (`core-blue-500`) son la base; no las uses directo en pantallas.

- Fondo de página y tarjetas: `core-surface-light-white`. Fondos suaves: `core-surface-<color>-lighter-50` (alertas, inputs activos) y `-light-100` (badges, widgets).
- Texto principal: `core-text-primary-gray900`. Secundario: `core-text-secondary-gray500`. Enlaces y acción: `core-text-contrast-primary600`. Sobre fondos oscuros o primarios: `core-text-invert-white`.
- `core-text-minimal-gray400` solo para texto deshabilitado; no llega a 4.5:1 sobre blanco.
- Bordes: `core-border-primary-gray300` por defecto, `core-border-secondary-gray200` para divisores. Activo/foco en inputs: `core-interactions-active-primary600`. Error: `core-interactions-error-red500`. Éxito: `core-interactions-success-green500`.
- Hover de superficies: `core-interactions-hover-gray100`.
- Estados: verde = éxito, rojo = error/destructivo, amarillo = advertencia, azul = información, gris = neutral. Acompaña siempre el color con texto o icono.
- Backdrop de modales y drawers: `core-opacity-backdrop-30pct`.

### Contraste a vigilar (valores de la fuente, sin cambiar)
- El texto hover/focus del botón tertiary (`core-theme-primary-medium-400`) sobre blanco da 3.0:1 en Pro y 2.4:1 en White label.
- Blanco sobre `convenio-palette-600` (botón Convenios) da 3.9:1.
- El título de la alerta orange (`core-theme-orange-base-500`) sobre su fondo da 3.0:1.

Para texto de 14px, prefiere tonos `-700`/`-800` cuando el componente lo permita.

## Tipografía

Familia única: **Inter** (`--font-sans`), cargada desde Google Fonts. Los estilos siguen la escala del archivo: `text-<tamaño>-<peso>`, con interlineado de 1.5.

- Cuerpo de UI: `text-sm-normal` (14px). Texto largo: `text-base-normal` (16px).
- Botones y badges grandes: `text-sm-medium`. Botón xs y badge small: `text-xs-medium`.
- Títulos de alerta y acciones de texto: `text-sm-semibold`.
- Títulos de página: `text-2xl-bold` a `text-3xl-bold`. Display (`text-5xl` en adelante) solo en marketing y pantallas de error.
- Pesos disponibles: 400, 500, 600 y 700.

## Espaciado, radios y bordes

- Espaciado en pasos de `space-4` a `space-96`. Los más usados: `space-8` (gap icono-texto), `space-12`/`space-16` (padding de botones y alertas), `space-24`/`space-32` (entre bloques).
- Radios: `radius-8` para botones, inputs y menús; `radius-6` para badges, alertas y widgets; `radius-full` para pills y botones circulares; `radius-2`/`radius-4` para elementos pequeños.
- Bordes: `border-width-width-1` por defecto. Los anillos de foco usan `border-width-width-2` y `border-width-width-3`.

## Elevación

Sombras de `shadow-sm` a `shadow-2xl`: `shadow-sm` en inputs y tarjetas pequeñas, `shadow` en tarjetas, `shadow-md` en dropdowns y popovers, `shadow-lg` en toasts, `shadow-xl` en modales y drawers. Las sombras de color (`shadow-green-500-50`…) son glows de marketing; no las uses en UI de producto.

## Foco y accesibilidad

- Todo elemento interactivo muestra foco con `:focus-visible`: anillo de 3px `buttons-primary-focus-border` en botones primarios o borde `core-interactions-active-primary600` en controles neutros.
- Los botones y badges de solo icono necesitan `aria-label`.
- Los estados nunca dependen solo del color.

## Iconografía

Caelus usa un set de iconos de línea de 24px. Los nombres siguen Heroicons (`check`, `x-circle`, `information-circle`, `clock`, `x-mark`, `arrows-on-square`) y hay iconos propios con prefijo `especial-`. Dentro de los componentes, los iconos van a 16px (alertas, badges) y 18px (botones), y toman el color del texto (`currentColor`). Hay además un set de banderas (28×20) e ilustraciones de 128px por marca. Estos sets todavía no están en este sistema; consulta la sección de pendientes.

## Logos

En el grupo **Logos** hay un logo por plataforma: Skydropx (logo e isotipo, normal e invertido), Soloenvíos (logo, invertido e isotipo), Shipkraken, Pronto Envíos, Envíos Internacionales y MyShipHub. Usa la versión invertida solo sobre fondos oscuros o primarios. No cambies sus colores ni el gradiente del isotipo de Skydropx.

## Componentes

Los 90 componentes del archivo Componentes (Caelus) están en `window.Caelus`. Cada uno tiene su guía en `components/<Nombre>/README.md`, donde la sección “Notas de la fuente” lista las discrepancias con Figma, los valores literales y los pares de bajo contraste. Las guías parafrasean las descripciones del archivo de Figma.

- **Acciones:** `Button`, `ButtonIcon`, `ButtonFilter`, `ButtonGroup`, `ButtonSocial`, `ButtonDownloadApp`.
- **Formularios:** `InputText` (dueño de los estilos de campo compartidos), `InputPassword`, `InputTextarea`, `InputPhone`, `InputCounter`, `InputAmount`, `InputCode`, `InputPincode`, `InputBadge`, `InputChatroom`, `InputToggle`, `InputCheckbox`, `InputRadio`, `InputSlider`, `InputSelect`, `InputMultiselect`, `InputCombobox`, `InputComboboxFlag`, `InputSearchSelect`, `InputSearchSelectFlag`, `InputSearch`, `InputSearchTables`, `InputSearchBt`, `InputDatepicker`, `InputTimepicker`, `InputDropfile`, `InputFile`, `InputColor`.
- **Feedback:** `Alert`, `Toast`, `Tooltip`, `Popover`, `PopoverAlert`, `Loader`, `ProgressBar`, `EmptyState`, `ErrorScreen`.
- **Datos y estado:** `Badge`, `Indicator`, `IndicatorBadge`, `Avatar`, `AvatarText`, `IconBackground`, `StatusRecord`.
- **Navegación:** `Navbar`, `Menu`, `MenuBreakpoints`, `Header`, `TabNav`, `TabFilter`, `Pagination`, `Dropdown`, `DropdownButton`, `DropdownMultiselect`, `DropdownLogos`, `Filter`, `Carousel`.
- **Overlays:** `Modal` (base de `ModalVerificationCode`, `ModalEcommerceIntegration`, `ModalWithdrawal`, `ModalMultimedia`, `ModalStatusDelivery`), `DrawerHistorial`, `DrawerNotification`, `EmptyDrawer`, `NotificationPushup`, `Protection`, `Chat`.
- **Tarjetas de logística:** `CardHistorialEnvios`, `CardOrdenes`, `CardPaqueteriasCotizador`, `CardPaqueteria`, `CardPaqueteriaDetalles`, `CardServiciosPaqueteria`, `TablaPaqueterias`, `CardTiendaIntegrada`, `CardConvenioContenedor`, `CargaConvenios`, `ResumenDePago`, `CardPaquete`, `CardOrigen`, `CardDestino`, `CardRecolecciones`.

Logos de paqueterías, banderas e ilustraciones van como props `ReactNode` (`logo`, `flag`, `illustration`); las vistas previas muestran un recuadro neutro en su lugar. Los iconos internos son glifos genéricos en SVG con `currentColor`.

## Pendiente de sincronizar

- **Modo Contrast** de la colección Components: se importó solo el modo Light. 18 tokens tienen otro valor en Contrast; su valor aparece en la nota de uso de cada token.
- **Gradientes** (`gradient-logo-skydropx` y los de tarjetas MSH): son paint styles, no variables. Quedaron fuera; existen sus colores `gradient-first-color` y `gradient-second-color`.
- **Variantes de texto** `uppercase`, `line-through`, `underline` y `leading-*` (~700 estilos): son la misma escala con decoración o interlineado distinto. No se importaron.
- **Archivos de fuente**: Inter se carga desde Google Fonts; no hay archivos de fuente propios.
- **Iconos** (225 componentes), **banderas** (209) e **ilustraciones** (75): todavía no se importan.
- **Variantes MyShipHub** (páginas “⤷ … (MSH)” del archivo de componentes) y la página **Documentation** (plantillas de documentación en Figma): no se construyeron.
- En Button no se importaron el estado de carga ni el estado Active de primary/secondary.
- Algunas partes de componentes quedaron fuera; cada README lo indica. Por ejemplo: mensajes de audio e imagen en Chat, el preset de dos meses del datepicker, el popup de color y la variante “En blanco” de DrawerNotification.
- El Navbar oscuro de Skydropx usa valores del modo Contrast escritos como literales, y Menu tiene algunos colores literales (#8690a2, #cd461f). Están listados en sus README.

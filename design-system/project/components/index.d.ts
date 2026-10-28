import type { ReactNode, ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, MouseEventHandler, ChangeEventHandler, KeyboardEventHandler, CSSProperties } from 'react';

/** CTA principal del sistema. Jerarquiza acciones: primary, secondary, tertiary, alert (destructiva), convenios y dashed. */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Jerarquía visual. Default `primary`. */
  type?: 'primary' | 'secondary' | 'tertiary' | 'alert' | 'convenios' | 'dashed';
  /** Tamaño (Figma `Size`). base = 41px, sm = 37px, xs = 34px de alto. Default `base`. */
  size?: 'xs' | 'sm' | 'base';
  /** Forma (Figma `Forma`). `square` y `circle` son botones de solo icono de 42×42. Default `button`. */
  shape?: 'button' | 'square' | 'circle';
  /** Icono de 18px antes del texto. */
  leftIcon?: ReactNode;
  /** Icono de 18px después del texto. */
  rightIcon?: ReactNode;
  /** Icono para `shape="square" | "circle"`. Da también un `aria-label`. */
  icon?: ReactNode;
  /** Atributo `type` nativo del `<button>`. Default `button`. */
  htmlType?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;

/** Etiqueta compacta de color para estados, categorías o conteos. */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color semántico (Figma `Theme`). Default `gray`. */
  theme?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'primary' | 'teal' | 'orange' | 'white';
  /** Figma `Size`: large = 25px, small = 22px de alto. Default `large`. */
  size?: 'small' | 'large';
  /** Icono a la izquierda. Sin `children` el badge es circular (solo icono). */
  icon?: ReactNode;
  /** Muestra la X de cerrar y la llama al hacer clic. */
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible de la X. Default "Quitar". */
  removeLabel?: string;
  children?: ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;

/** Mensaje en línea que da contexto o feedback sobre el flujo (éxito, error, advertencia, info). */
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma `Color`. Default `info`. */
  color?: 'success' | 'info' | 'warning' | 'default' | 'danger' | 'orange';
  /** Encabezado opcional en semibold. */
  title?: ReactNode;
  /** Icono de 16px junto al texto (check, x-circle, information-circle en Figma). */
  icon?: ReactNode;
  /** Acción de texto bajo el mensaje (Figma "Alert con botón"). */
  action?: { label: ReactNode; onClick?: MouseEventHandler<HTMLButtonElement>; icon?: ReactNode };
  children?: ReactNode;
}
export declare function Alert(props: AlertProps): JSX.Element;

export interface AvatarItem {
  /** Llave estable para React. */
  key?: string | number;
  /** URL de la foto. */
  src?: string;
  /** Nombre de la persona (texto alternativo). */
  alt?: string;
  /** Iniciales si no hay foto. */
  initials?: string;
}
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Forma, o grupo apilado de avatares circulares. */
  type?: 'circle' | 'rounded' | 'stacked';
  /** sm 24px, regular 32px, md 48px, lg 80px, xl 144px. */
  size?: 'sm' | 'regular' | 'md' | 'lg' | 'xl';
  /** URL de la foto; sin src se muestran las iniciales (placeholder). */
  src?: string;
  /** Nombre de la persona: alt de la imagen o etiqueta del placeholder. */
  alt?: string;
  /** Iniciales para el placeholder. */
  initials?: string;
  /** Muestra el punto verde de notificación / en línea. */
  dot?: boolean;
  /** Texto para lectores de pantalla que explica el punto (p. ej. "En línea"). */
  dotLabel?: string;
  /** Convierte el punto en un botón para quitar al usuario. */
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  /** aria-label del botón de quitar; por defecto "Quitar". */
  removeLabel?: string;
  /** Solo type="stacked": personas del grupo. */
  avatars?: AvatarItem[];
  /** Solo type="stacked": cuántas mostrar antes del contador "+N". */
  max?: number;
}
export declare function Avatar(props: AvatarProps): JSX.Element;

export interface AvatarTextProps extends HTMLAttributes<HTMLDivElement> {
  /** sm (avatar 24px), regular (32px), md (48px) o lg (80px). */
  size?: 'sm' | 'regular' | 'md' | 'lg';
  /** Nombre o título (texto principal). */
  title: ReactNode;
  /** Texto de apoyo debajo del título. */
  description?: ReactNode;
  /** URL de la foto. */
  src?: string;
  /** Nombre para el placeholder (la foto es decorativa porque el nombre ya está escrito). */
  alt?: string;
  /** Iniciales si no hay foto. */
  initials?: string;
  /** Reemplaza el avatar por otro nodo (p. ej. un Avatar con punto). */
  avatar?: ReactNode;
}
export declare function AvatarText(props: AvatarTextProps): JSX.Element;

export interface ButtonDownloadAppProps extends HTMLAttributes<HTMLElement> {
  /** Tienda: define el nombre por defecto. */
  store?: 'appstore' | 'googleplay';
  /** Logo oficial de la tienda (38px), lo provee el consumidor. */
  badge?: ReactNode;
  /** Primera línea; por defecto "Descárgala en". */
  caption?: ReactNode;
  /** Segunda línea; por defecto "App Store" o "Google Play". */
  storeName?: ReactNode;
  /** Si se pasa, se renderiza como enlace <a>; si no, como <button>. */
  href?: string;
  /** Destino del enlace (solo con href). */
  target?: string;
  /** Relación del enlace (solo con href). */
  rel?: string;
}
export declare function ButtonDownloadApp(props: ButtonDownloadAppProps): JSX.Element;

export interface ButtonFilterProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Forma del botón: con texto, circular o cuadrado (solo ícono; requiere aria-label). */
  shape?: 'button' | 'circle' | 'square';
  /** Hay filtros aplicados: fondo índigo y aria-pressed. */
  active?: boolean;
  /** Ícono de 18px; por defecto un embudo. */
  icon?: ReactNode;
  /** Etiqueta visible (solo shape="button"); por defecto "Filtros". */
  children?: ReactNode;
}
export declare function ButtonFilter(props: ButtonFilterProps): JSX.Element;

export interface ButtonGroupItem {
  /** Llave estable para React (por defecto, el índice). */
  key?: string | number;
  /** Texto del segmento. Sin label y con icon, el segmento es solo ícono. */
  label?: ReactNode;
  /** Ícono de 20px a la izquierda del texto. */
  icon?: ReactNode;
  /** Obligatorio en segmentos de solo ícono. */
  'aria-label'?: string;
  /** Segmento seleccionado (filtros exclusivos tipo Años / Meses / Días); pone aria-pressed. */
  selected?: boolean;
  /** Segmento informativo, no clicable (p. ej. el conteo "12k"). */
  stat?: boolean;
  /** Texto de ayuda que aparece arriba al pasar el mouse o enfocar. */
  tooltip?: ReactNode;
  /** Deshabilita el segmento. */
  disabled?: boolean;
  /** Acción del segmento. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Segmentos del grupo, de izquierda a derecha. */
  items: ButtonGroupItem[];
}
export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Ícono de 24px que se muestra (también acepta children). */
  icon?: ReactNode;
  /** Con fondo gris (true, por defecto) o transparente (false). */
  background?: boolean;
  /** Herramienta seleccionada: borde de 2px y aria-pressed. */
  active?: boolean;
  /** Obligatorio: el botón no tiene texto visible. */
  'aria-label': string;
}
export declare function ButtonIcon(props: ButtonIconProps): JSX.Element;

export interface ButtonSocialProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tamaño: xs (34px), sm (37px), base (41px) o lg (48px). */
  size?: 'xs' | 'sm' | 'base' | 'lg';
  /** Con borde gris (true, por defecto) o solo fondo blanco (false). */
  outline?: boolean;
  /** Proveedor: colorea el ícono con su token core-social-*. */
  provider?: 'facebook' | 'twitter' | 'google' | 'dribbble' | 'github';
  /** Logo oficial del proveedor (el consumidor lo provee; usa currentColor si es monocromo). */
  icon?: ReactNode;
  /** Texto del botón, por ejemplo "Continuar con Google". */
  children?: ReactNode;
}
export declare function ButtonSocial(props: ButtonSocialProps): JSX.Element;

export interface CardConvenioContenedorProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma `convenio detalle`: empty, convenio simple v1 (`conectado`), convenio desactiva (`desactivado`), intermitencia, curso (`en-curso`), error. Default `conectado`. */
  state?: 'empty' | 'conectado' | 'desactivado' | 'intermitencia' | 'en-curso' | 'error';
  /** Alias del convenio; es el texto bajo el título en `conectado`. */
  alias?: ReactNode;
  /** Estado del toggle (conectado, intermitencia). Default `true`. */
  enabled?: boolean;
  /** Cambio del toggle (Desactivar / Activar). */
  onToggle?: ChangeEventHandler<HTMLInputElement>;
  /** Texto bajo el título; reemplaza al alias (intermitencia, en curso, error). */
  message?: ReactNode;
  /** Habilidades del convenio; `ok: false` las marca con fallas. Default Cotización, Creación de envíos, Cancelación de envíos, Recolección. */
  skills?: { label: ReactNode; ok?: boolean }[];
  /** Muestra el panel de habilidades (Figma `Habilidad`). Default `true`. */
  showSkills?: boolean;
  /** empty: muestra el botón "Conectar convenio" (Figma `Show añadir convenio`). Default `true`. */
  showAddConvenio?: boolean;
  /** empty: texto de invitación. */
  emptyText?: ReactNode;
  /** empty: clic en "Conectar convenio". */
  onConnect?: MouseEventHandler<HTMLButtonElement>;
  /** Clic en "Editar". */
  onEdit?: MouseEventHandler<HTMLButtonElement>;
  /** Clic en "Eliminar". */
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  /** error: clic en "Cancelar conexión". */
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  /** error: clic en "Reintentar". */
  onRetry?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CardConvenioContenedor(props: CardConvenioContenedorProps): JSX.Element;

export interface CardDestinoProps extends HTMLAttributes<HTMLElement> {
  /** Título. Default "Dirección de destino". */
  title?: ReactNode;
  /** Icono del círculo de la izquierda. Default una casa genérica. */
  icon?: ReactNode;
  /** Destinatario ("Ana María López Pérez"). */
  name?: ReactNode;
  /** Dirección completa en una sola cadena. */
  address?: ReactNode;
  /** Teléfono. */
  phone?: ReactNode;
  /** Correo electrónico. */
  email?: ReactNode;
  /** El encabezado abre y cierra los datos. Default `true`. */
  collapsible?: boolean;
  /** Abierto al inicio. Default `true`. */
  defaultOpen?: boolean;
  /** Estado controlado de apertura. */
  open?: boolean;
  /** Se llama al abrir o cerrar. */
  onOpenChange?: (open: boolean) => void;
}
export declare function CardDestino(props: CardDestinoProps): JSX.Element;

export interface CardHistorialEnviosProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Type`. Default `default`. */
  type?: 'default' | 'sin-proteccion' | 'con-convenio' | 'ordenes' | 'cancelado' | 'error';
  /** Figma `Breakpoint`. Default `desktop`. */
  breakpoint?: 'desktop' | 'mobile';
  /** Fecha y hora de creación, ya formateada ("20/abr/2024 4:00 pm"). */
  date?: ReactNode;
  /** Quién creó el envío ("Dalia Martínez"). Se muestra como "Por: …". */
  author?: ReactNode;
  /** Número de orden; solo se muestra con `type="ordenes"`. */
  orderNumber?: ReactNode;
  /** Logo de la plataforma de origen (24×24). */
  platformIcon?: ReactNode;
  /** Badge de estatus opcional a la derecha del encabezado (usa `Caelus.Badge`). */
  status?: ReactNode;
  /** Paquetería: logo de 48×48, nombre y servicio. */
  carrier?: { logo?: ReactNode; name?: ReactNode; service?: ReactNode };
  /** Número de rastreo. */
  tracking?: ReactNode;
  /** Destinatario y CP/colonia. */
  destination?: { name?: ReactNode; detail?: ReactNode };
  /** Entrega estimada ("2 días"). */
  eta?: ReactNode;
  /** Precio ya formateado ("$150.00"). */
  price?: ReactNode;
  /** Texto en lugar del precio con `type="con-convenio"`. Default "Con convenio". */
  convenioLabel?: ReactNode;
  /** Servicios contratados. Si no se pasa, se muestran Protección y Rastreo según el `type`. */
  services?: { label: ReactNode; active?: boolean; icon?: ReactNode | 'shield' | 'pin' }[];
  /** Estado del checkbox de selección. */
  selected?: boolean;
  /** Cambio del checkbox de selección. */
  onSelect?: ChangeEventHandler<HTMLInputElement>;
  /** Descargar guía (oculto en `cancelado` y `error`). */
  onDownload?: MouseEventHandler<HTMLButtonElement>;
  /** Ver detalles. */
  onView?: MouseEventHandler<HTMLButtonElement>;
  /** Abrir el menú de más opciones. */
  onMore?: MouseEventHandler<HTMLButtonElement>;
  /** Copiar el número de rastreo. */
  onCopyTracking?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CardHistorialEnvios(props: CardHistorialEnviosProps): JSX.Element;

export interface CardOrdenesProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Breakdown`. Default `desktop`. */
  breakdown?: 'desktop' | 'movil';
  /** Estatus de la orden (badge a la derecha). Default `por-preparar`. */
  status?: 'por-preparar' | 'preparada' | 'error-al-preparar' | 'guia-cancelada' | 'orden-cancelada';
  /** Estatus de pago junto a la fecha. Default `pagada`. */
  payment?: 'pagada' | 'por-pagar';
  /** Número de orden ("#1234567"). */
  orderNumber?: ReactNode;
  /** Fecha de la orden ya formateada. */
  date?: ReactNode;
  /** Logo de la tienda (24×24). */
  platformIcon?: ReactNode;
  /** Etiqueta opcional de la orden (Figma `Etiqueta`). */
  label?: ReactNode;
  /** Resumen de productos ("6 artículos"). */
  products?: ReactNode;
  /** Paquete. Si falta, se muestra "+ Completar". */
  pkg?: { name?: ReactNode; detail?: ReactNode };
  /** Paquetería elegida. Si falta, se muestra "+ Completar". */
  carrier?: { logo?: ReactNode; name?: ReactNode; price?: ReactNode; tracking?: ReactNode };
  /** Dirección de origen. Sin `detail` se muestra "+ Completar". */
  origin?: { name?: ReactNode; detail?: ReactNode };
  /** Dirección de destino. Sin `detail` se muestra "+ Completar". */
  destination?: { name?: ReactNode; detail?: ReactNode };
  /** Texto del pie "Tipo de envío". */
  shippingType?: ReactNode;
  /** Muestra el pie (Figma `Show Footer`). Default `true`. */
  showFooter?: boolean;
  /** Checkbox de selección. */
  selected?: boolean;
  /** Cambio del checkbox. */
  onSelect?: ChangeEventHandler<HTMLInputElement>;
  /** Clic en "+ Completar"; recibe el campo (`origin`, `destination`, `package`, `carrier`). */
  onComplete?: (field: 'origin' | 'destination' | 'package' | 'carrier', event: unknown) => void;
  /** Botón "Crear envío" (cuando la orden no está preparada). */
  onCreate?: MouseEventHandler<HTMLButtonElement>;
  /** Descargar guía (orden preparada). */
  onDownload?: MouseEventHandler<HTMLButtonElement>;
  /** Ver detalles (orden preparada). */
  onView?: MouseEventHandler<HTMLButtonElement>;
  /** Menú de más opciones. */
  onMore?: MouseEventHandler<HTMLButtonElement>;
  /** Copiar el rastreo (orden preparada). */
  onCopyTracking?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CardOrdenes(props: CardOrdenesProps): JSX.Element;

export interface CardOrigenProps extends HTMLAttributes<HTMLElement> {
  /** Título. Default "Dirección de origen". */
  title?: ReactNode;
  /** Icono del círculo de la izquierda. Default una tienda genérica. */
  icon?: ReactNode;
  /** Nombre o tienda y remitente ("Mi tiendita | Dalia Martínez"). */
  name?: ReactNode;
  /** Dirección completa en una sola cadena. */
  address?: ReactNode;
  /** Teléfono. */
  phone?: ReactNode;
  /** Correo electrónico. */
  email?: ReactNode;
  /** El encabezado abre y cierra los datos. Default `true`. */
  collapsible?: boolean;
  /** Abierto al inicio. Default `true`. */
  defaultOpen?: boolean;
  /** Estado controlado de apertura. */
  open?: boolean;
  /** Se llama al abrir o cerrar. */
  onOpenChange?: (open: boolean) => void;
}
export declare function CardOrigen(props: CardOrigenProps): JSX.Element;

export interface CardPaqueteProps extends HTMLAttributes<HTMLElement> {
  /** Título. Default "Paquete". */
  title?: ReactNode;
  /** Icono del círculo de la izquierda (16px). Default un cubo genérico. */
  icon?: ReactNode;
  /** Datos del paquete como badges grises: medidas y peso. `icon` acepta 'ruler', 'weight' o un nodo. */
  tags?: { label: ReactNode; icon?: ReactNode | 'ruler' | 'weight' }[];
  /** Contenido libre en lugar de `tags`. */
  children?: ReactNode;
  /** El encabezado abre y cierra el contenido. Default `true`. */
  collapsible?: boolean;
  /** Abierto al inicio. Default `true`. */
  defaultOpen?: boolean;
  /** Estado controlado de apertura. */
  open?: boolean;
  /** Se llama al abrir o cerrar. */
  onOpenChange?: (open: boolean) => void;
}
export declare function CardPaquete(props: CardPaqueteProps): JSX.Element;

export interface CardPaqueteriaProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Property 1`: v1 con toggle, v2 con badge de estatus, busqueda = estado vacío. Default `v1`. */
  variant?: 'v1' | 'v2' | 'busqueda';
  /** Figma `device`. Default `desktop`. */
  device?: 'desktop' | 'mobile';
  /** Logo de la paquetería (32×32). */
  logo?: ReactNode;
  /** Nombre de la paquetería ("FedEx"). */
  name?: ReactNode;
  /** Muestra el triángulo de alerta junto al nombre (Figma `Show exclamation-triangle`). */
  showWarning?: boolean;
  /** Texto accesible del triángulo. Default "Atención". */
  warningLabel?: string;
  /** Muestra el bloque de convenio (Figma `Show convenio`). Default `true`. */
  showConvenio?: boolean;
  /** Muestra la fila de características (Figma `Show detalles`). Default `true`. */
  showDetalles?: boolean;
  /** v1: estado del toggle. Default `true`. */
  enabled?: boolean;
  /** v1: cambio del toggle. */
  onToggle?: ChangeEventHandler<HTMLInputElement>;
  /** v1: texto del toggle. Default "Desactivar". */
  toggleLabel?: ReactNode;
  /** v2: texto del badge. Default "Activada". */
  statusLabel?: ReactNode;
  /** v2: color del badge. Default `green`. */
  statusTheme?: 'green' | 'gray' | 'yellow' | 'red';
  /** Servicios activos. Default 5. */
  servicesActive?: number;
  /** Servicios totales. Default 5. */
  servicesTotal?: number;
  /** Estado del convenio: `conectar` muestra el botón; los demás, el texto de estado. Default `conectar`. */
  convenioState?: 'conectar' | 'conectado' | 'apagado' | 'intermitencia' | 'en-curso' | 'error';
  /** Clic en "Conectar convenio". */
  onConectarConvenio?: MouseEventHandler<HTMLButtonElement>;
  /** Clic en configurar (icono en v1, botón con texto en v2). */
  onConfigurar?: MouseEventHandler<HTMLButtonElement>;
  /** Características. Default Recolecciones, Sucursal, Envíos internacionales, Impresora térmica. */
  features?: { label: ReactNode; icon?: ReactNode | 'truck' | 'store' | 'globe' | 'printer' }[];
  /** busqueda: título del estado vacío. */
  emptyTitle?: ReactNode;
  /** busqueda: texto del estado vacío. */
  emptyText?: ReactNode;
}
export declare function CardPaqueteria(props: CardPaqueteriaProps): JSX.Element;

export interface CardPaqueteriaDetallesProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma `device`. Default `desktop`. */
  device?: 'desktop' | 'mobile';
  /** Figma `colapsable=on`: el título es un botón que abre y cierra el panel. Default `false`. */
  collapsible?: boolean;
  /** Estado inicial si es colapsable. Default cerrado si `collapsible`, abierto si no. */
  defaultOpen?: boolean;
  /** Estado controlado de apertura. */
  open?: boolean;
  /** Se llama al abrir o cerrar. */
  onOpenChange?: (open: boolean) => void;
  /** Título ("Características de FedEx"). Default "Características". */
  title?: ReactNode;
  /** Texto bajo el título. */
  description?: ReactNode;
  /** Contenido de Recolecciones; la sección se oculta si no se pasa. */
  recolecciones?: ReactNode;
  /** Contenido de Sucursal. */
  sucursal?: ReactNode;
  /** Contenido de Envíos internacionales. */
  internacionales?: ReactNode;
  /** Contenido de Cargos extra. */
  cargosExtra?: ReactNode;
  /** Contenido de Impresora. */
  impresora?: ReactNode;
}
export declare function CardPaqueteriaDetalles(props: CardPaqueteriaDetallesProps): JSX.Element;

export interface CardPaqueteriasCotizadorProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Type`. Default `paqueteria`. */
  type?: 'paqueteria' | 'convenio' | 'no-disponible' | 'cargos-extra' | 'alerta' | 'sin-beneficio';
  /** Figma `Breakpoints`. Default `desktop`. */
  breakpoints?: 'desktop' | 'mobile';
  /** Paquetería: logo 48×48, nombre y servicio. */
  carrier?: { logo?: ReactNode; name?: ReactNode; service?: ReactNode };
  /** Tipo de recolección: título ("Llevar a sucursal"), detalle y texto del tooltip. */
  pickup?: { title?: ReactNode; detail?: ReactNode; tooltip?: string };
  /** Entrega estimada ("2 días"). */
  eta?: ReactNode;
  /** Precio ya formateado ("$150.00"). */
  price?: ReactNode;
  /** Nota bajo el precio ("*Incluye cargos extra"). */
  priceNote?: ReactNode;
  /** Alias del convenio, con `type="convenio"`. */
  convenioAlias?: ReactNode;
  /** Características de la paquetería. Default Rastreo e Impresora térmica. */
  features?: { label: ReactNode; icon?: ReactNode | 'pin' | 'printer' }[];
  /** Muestra "Con automatización" en la fila de características. */
  automation?: boolean;
  /** Mensaje de la franja inferior en `no-disponible`, `cargos-extra` y `alerta`. */
  message?: ReactNode;
  /** Texto del botón. Default "Crear envío". */
  actionLabel?: ReactNode;
  /** Clic en el botón (deshabilitado en `no-disponible`). */
  onCreate?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CardPaqueteriasCotizador(props: CardPaqueteriasCotizadorProps): JSX.Element;

export interface CardRecoleccionesProps extends HTMLAttributes<HTMLElement> {
  /** Versión móvil (Figma `wl-card-recolecciones-mobile`). Default `false`. */
  mobile?: boolean;
  /** Número de recolección ("123456789"). */
  number?: ReactNode;
  /** Badge de estatus opcional en el encabezado (usa `Caelus.Badge`). */
  status?: ReactNode;
  /** Paquetería: logo 48×48, nombre y servicio opcional. */
  carrier?: { logo?: ReactNode; name?: ReactNode; service?: ReactNode };
  /** Dirección de origen: nombre y CP/colonia. */
  origin?: { name?: ReactNode; detail?: ReactNode };
  /** Fecha y horario programados. */
  schedule?: { date?: ReactNode; time?: ReactNode };
  /** Cantidad de paquetes. */
  packages?: ReactNode;
  /** Peso total ("11kg"). */
  weight?: ReactNode;
  /** Clic en el botón de más opciones. */
  onMore?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CardRecolecciones(props: CardRecoleccionesProps): JSX.Element;

export interface CardServiciosPaqueteriaProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Property 1`. Default `skydropx`. */
  variant?: 'head-paqueteria' | 'convenio' | 'skydropx';
  /** Figma `device`. Default `desktop`. */
  device?: 'desktop' | 'mobile';
  /** Muestra la alerta (skydropx) o la nota (head-paqueteria). Figma `Show Alerts`. Default `true`. */
  showAlerts?: boolean;
  /** skydropx: texto de la alerta de advertencia. */
  alertText?: ReactNode;
  /** head-paqueteria: logo (32×32). */
  logo?: ReactNode;
  /** head-paqueteria: nombre de la paquetería. */
  name?: ReactNode;
  /** head-paqueteria: estado del toggle. Default `true`. */
  enabled?: boolean;
  /** head-paqueteria: cambio del toggle. */
  onToggle?: ChangeEventHandler<HTMLInputElement>;
  /** head-paqueteria: nota bajo el encabezado. */
  headText?: ReactNode;
  /** skydropx: título. Default "Servicios". */
  title?: ReactNode;
  /** skydropx: descripción. */
  description?: ReactNode;
  /** skydropx: grupos de servicios (Nacionales, Internacionales) con sus casillas. */
  groups?: { title: ReactNode; items: { id?: string; label: ReactNode; detail?: ReactNode; checked?: boolean; disabled?: boolean }[] }[];
  /** skydropx: cambio de una casilla. */
  onServiceChange?: (item: { id?: string; label: ReactNode }, checked: boolean, event: unknown) => void;
  /** skydropx: deshabilita "Guardar" (p. ej. sin cambios). */
  saveDisabled?: boolean;
  /** skydropx: clic en "Guardar". */
  onSave?: MouseEventHandler<HTMLButtonElement>;
  /** convenio: props que se pasan a `CardConvenioContenedor`. */
  convenio?: CardConvenioContenedorProps;
}
export declare function CardServiciosPaqueteria(props: CardServiciosPaqueteriaProps): JSX.Element;

export interface CardTiendaIntegradaProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Ecommerce`: define el nombre por defecto de la plataforma. Default `shopify`. */
  ecommerce?: 'shopify' | 'woocommerce' | 'api-key';
  /** Figma `Estatus`. Default `activada`. */
  status?: 'activada' | 'desactivada' | 'actualizar-permisos';
  /** Figma `Versión`. Default `desktop`. */
  version?: 'desktop' | 'mobile';
  /** Logo de la plataforma (24×24). */
  logo?: ReactNode;
  /** Nombre de la plataforma; reemplaza el que viene de `ecommerce`. */
  platform?: ReactNode;
  /** Nombre de la tienda ("Mi tiendita"). */
  storeName?: ReactNode;
  /** URL de la tienda o API key enmascarada. */
  url?: ReactNode;
  /** Si se pasa (y no es API key), la URL es un enlace. */
  href?: string;
  /** Fecha de conexión ("Conectada el 04 de octubre de 2023"). */
  connectedAt?: ReactNode;
  /** Clic en el botón de más opciones. */
  onMenu?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible del botón de opciones. */
  menuLabel?: string;
}
export declare function CardTiendaIntegrada(props: CardTiendaIntegradaProps): JSX.Element;

export interface CargaConveniosProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma `state`. Default `carga`. */
  state?: 'carga' | 'error' | 'exito';
  /** Figma `type`: cambia los textos por defecto. Default `conexion`. */
  type?: 'conexion' | 'edicion';
  /** Avance de 0 a 100 en `carga`. Default 25. En error y éxito la barra va llena. */
  value?: number;
  /** Encabezado; por defecto depende de `state` y `type`. */
  title?: ReactNode;
  /** Texto de apoyo (puede llevar un enlace). */
  description?: ReactNode;
  /** Texto sobre la barra. Default "Conexión del convenio" / "Edición del convenio". */
  progressLabel?: string;
  /** Texto bajo la barra (p. ej. "Tiempo estimado 1 seg"). */
  statusText?: ReactNode;
  /** error: clic en "Recibir ayuda". */
  onHelp?: MouseEventHandler<HTMLButtonElement>;
  /** error: clic en "Reintentar". */
  onRetry?: MouseEventHandler<HTMLButtonElement>;
  /** exito: clic en "Entendido". */
  onDone?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CargaConvenios(props: CargaConveniosProps): JSX.Element;

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  /** Distribución (Figma `Vista`): desktop muestra varias diapositivas con flechas a los lados; mobile una sola con flechas encima. Default `desktop`. */
  view?: 'desktop' | 'mobile';
  /** Indicadores (Figma `Indicadores`: No → `none`, Si → `overlay` sobre las diapositivas, Abajo → `below` entre las flechas). Default `none`. */
  indicators?: 'none' | 'overlay' | 'below';
  /** Diapositivas visibles a la vez en desktop. Default 3. */
  perView?: number;
  /** Índice controlado de la primera diapositiva visible. */
  index?: number;
  /** Índice inicial si no se controla. Default 0. */
  defaultIndex?: number;
  /** Se llama al cambiar de diapositiva. */
  onIndexChange?: (index: number) => void;
  /** `aria-label` del botón anterior. Default “Anterior”. */
  prevLabel?: string;
  /** `aria-label` del botón siguiente. Default “Siguiente”. */
  nextLabel?: string;
  /** Las diapositivas (imágenes, tarjetas, banners). */
  children?: ReactNode;
}
export declare function Carousel(props: CarouselProps): JSX.Element;

export interface ChatAction {
  /** Texto de la opción del menú. */
  label: ReactNode;
  /** Acción al elegir la opción. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface ChatMessage {
  /** Clave única del mensaje. */
  id?: string | number;
  /** Quién lo envía (Figma `Usuario`: Agente → `agent`, Cliente → `client`). */
  from: 'agent' | 'client';
  /** Nombre de quien escribe. */
  author?: ReactNode;
  /** Hora del mensaje. */
  time?: ReactNode;
  /** Texto del mensaje. */
  text?: ReactNode;
  /** Estado de entrega, p. ej. “Entregado”. */
  status?: ReactNode;
  /** Avatar de 32px; si falta se muestra la inicial del autor. */
  avatar?: ReactNode;
  /** Archivo adjunto (Figma `Mensaje=Adjunto`). */
  attachment?: { name: ReactNode; meta?: ReactNode; href?: string; onClick?: MouseEventHandler<HTMLAnchorElement> };
  /** Enlace con vista previa (Figma `Mensaje=Link`). */
  link?: { url: string; title?: ReactNode; domain?: ReactNode; image?: ReactNode };
  /** Opciones del menú “más acciones” (`.chat-button-more`); sin ellas no se muestra el botón. */
  actions?: ChatAction[];
  /** `aria-label` del botón de más acciones. Default “Más acciones”. */
  actionsLabel?: string;
}
export interface ChatProps extends HTMLAttributes<HTMLDivElement> {
  /** Mensajes en orden cronológico. */
  messages?: ChatMessage[];
}
export declare function Chat(props: ChatProps): JSX.Element;

export interface DrawerHistorialAddress {
  /** Tienda o persona (ej. "Mi tiendita | Dalia Martínez"). */
  name?: ReactNode;
  /** Dirección completa. */
  address?: ReactNode;
  /** Teléfono. */
  phone?: ReactNode;
  /** Correo. */
  email?: ReactNode;
}
export interface DrawerHistorialRow {
  /** Etiqueta (ej. "Paquetería:"). */
  label: ReactNode;
  /** Valor en semibold. */
  value: ReactNode;
  /** `link` pinta el valor en color primario (número de rastreo); `muted` lo pinta en gris. */
  tone?: 'link' | 'muted';
  /** Logo pequeño antes del valor (paquetería, 24px). */
  icon?: ReactNode;
}
export interface DrawerHistorialProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Figma `Eventos`. Los estados del flujo muestran `StatusRecord`; `en-creacion`, `error-en-creacion` y `cancelado` muestran una etiqueta de estatus. Default `creado`. */
  status?: 'en-creacion' | 'error-en-creacion' | 'cancelado' | 'creado' | 'recolectado' | 'en-camino' | 'error-en-camino' | 'por-llegar' | 'entregado' | 'en-devolucion' | 'incidencia';
  /** Título del panel. Default "Detalles del envío". */
  title?: ReactNode;
  /** Muestra la X y la llama al hacer clic. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible de la X. Default "Cerrar". */
  closeLabel?: string;
  /** Nombre de la paquetería para el botón de rastreo. */
  carrierName?: string;
  /** Acción del botón "Rastrear en …"; `null` lo oculta. Se deshabilita en `error-en-creacion`. */
  onTrack?: MouseEventHandler<HTMLButtonElement> | null;
  /** Texto del botón de rastreo. */
  trackLabel?: ReactNode;
  /** Alerta bajo el estatus (por ejemplo un `Alert` rojo en `incidencia`). */
  alert?: ReactNode;
  /** Eventos de rastreo, del más reciente al más antiguo. */
  events?: { title: ReactNode; date?: ReactNode }[];
  /** Texto bajo la etiqueta en `en-creacion`, `error-en-creacion` y `cancelado`. */
  statusDescription?: ReactNode;
  /** Fecha bajo la etiqueta en esos mismos estados. */
  statusDate?: ReactNode;
  /** Datos logísticos (paquetería, rastreo, entrega estimada, creado por). */
  details?: DrawerHistorialRow[];
  /** Desglose de costos. */
  charges?: DrawerHistorialRow[];
  /** Total en negritas. */
  total?: { label?: ReactNode; value: ReactNode };
  /** Dirección de origen (sección plegable). */
  origin?: DrawerHistorialAddress;
  /** Dirección de destino (sección plegable). */
  destination?: DrawerHistorialAddress;
  /** Medidas y peso del paquete (sección plegable con badges). */
  packageInfo?: { dimensions?: ReactNode; weight?: ReactNode };
  /** Contenido extra al final. */
  children?: ReactNode;
}
export declare function DrawerHistorial(props: DrawerHistorialProps): JSX.Element;

export interface DrawerNotificationItem {
  /** Identificador estable. */
  id?: string | number;
  /** Título de la notificación. */
  title: ReactNode;
  /** Mensaje breve. */
  message?: ReactNode;
  /** Antigüedad (ej. "10min"). */
  time?: ReactNode;
  /** `false` la pinta como no leída (fondo índigo y punto). */
  read?: boolean;
  /** Ícono de 20px dentro del círculo gris de 48px. Default regalo. */
  icon?: ReactNode;
}
export interface DrawerNotificationFilter {
  /** Valor del filtro. */
  value: string;
  /** Texto del filtro. */
  label: ReactNode;
  /** Conteo entre paréntesis. En `no-leidas` se calcula solo si no lo pasas. */
  count?: number;
  /** Ícono de 16px. Default barras. */
  icon?: ReactNode;
}
export interface DrawerNotificationProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Título del panel. Default "Notificaciones". */
  title?: ReactNode;
  /** Muestra la X y la llama al hacer clic. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible de la X. Default "Cerrar". */
  closeLabel?: string;
  /** Notificaciones a listar. */
  notifications?: DrawerNotificationItem[];
  /** Filtros (Figma `.filtro-notificaciones`). Default Todas / No leídas / Con incidencia. */
  filters?: DrawerNotificationFilter[];
  /** Filtro activo controlado. */
  filter?: string;
  /** Filtro activo inicial sin controlar. */
  defaultFilter?: string;
  /** Cambio de filtro (el filtrado de la lista lo hace la app). */
  onFilterChange?: (value: string) => void;
  /** "Marcar como leídas"; se deshabilita sin no leídas. `null` lo oculta. */
  onMarkAllRead?: MouseEventHandler<HTMLButtonElement> | null;
  /** Texto de ese botón. */
  markAllLabel?: string;
  /** Muestra "Ver más" al final. */
  onSeeMore?: MouseEventHandler<HTMLButtonElement>;
  /** Texto de "Ver más". */
  seeMoreLabel?: string;
  /** Hace cada notificación un botón. */
  onNotificationClick?: (item: DrawerNotificationItem, event: unknown) => void;
  /** Contenido cuando no hay notificaciones (por ejemplo un `EmptyDrawer` o tu propio empty state). */
  emptyState?: ReactNode;
  /** Contenido extra antes del footer. */
  children?: ReactNode;
}
export declare function DrawerNotification(props: DrawerNotificationProps): JSX.Element;

export interface DropdownItem {
  /** Item kind: selectable row, non-interactive section title or divider line. */
  type?: 'item' | 'title' | 'separator';
  /** Stable key; falls back to `value` or the index. */
  id?: string;
  /** Value handed back in `onSelect`. */
  value?: string;
  /** Visible text (or section title). */
  label?: ReactNode;
  /** Secondary line under the label. */
  helper?: ReactNode;
  /** 18px leading icon. */
  icon?: ReactNode;
  /** Leading logo or flag (20x14). Used by DropdownLogos. */
  logo?: ReactNode;
  /** Small trailing icon (14px), e.g. an external-link or sign-out glyph. */
  trailing?: ReactNode;
  /** Marks the current choice: shows the check and sets aria-selected. */
  selected?: boolean;
  /** Greys the row out and skips it in keyboard navigation. */
  disabled?: boolean;
  /** Destructive action (red text), e.g. "Cerrar sesión". */
  danger?: boolean;
  /** Called when this row is activated. */
  onSelect?: (item: DropdownItem) => void;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect' | 'role'> {
  /** Rows of the panel, in order. */
  items: DropdownItem[];
  /** `listbox` for choosing a value (default), `menu` for a list of actions. */
  role?: 'listbox' | 'menu';
  /** Show the check on selected rows. Default true. */
  showCheck?: boolean;
  /** Called with the activated item. */
  onSelect?: (item: DropdownItem) => void;
  /** Max height in px (or CSS length); the list scrolls past it. */
  maxHeight?: number | string;
  /** Move focus into the list on mount (use when it opens from a trigger). */
  autoFocus?: boolean;
}

export declare function Dropdown(props: DropdownProps): JSX.Element;

export interface DropdownButtonItem {
  /** Row kind: action, section title or divider. */
  type?: 'item' | 'title' | 'separator';
  /** Stable key. */
  id?: string;
  /** Value handed back in `onSelect`. */
  value?: string;
  /** Action text. */
  label?: ReactNode;
  /** 18px leading icon. */
  icon?: ReactNode;
  /** 14px trailing icon (e.g. sign-out arrow). */
  trailing?: ReactNode;
  /** Destructive action in red. */
  danger?: boolean;
  /** Not available right now. */
  disabled?: boolean;
  /** Called when this action is chosen. */
  onSelect?: (item: DropdownButtonItem) => void;
}

export interface DropdownButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** `default`: text + chevron. `icon`: square icon-only trigger. */
  type?: 'default' | 'icon';
  /** Trigger text; with `type="icon"` it becomes the aria-label. */
  label?: ReactNode;
  /** Icon for `type="icon"` (defaults to three dots). */
  icon?: ReactNode;
  /** Actions shown in the menu. */
  items: DropdownButtonItem[];
  /** Controlled open state. */
  open?: boolean;
  /** Called when the menu opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Called with the chosen action; the menu then closes. */
  onSelect?: (item: DropdownButtonItem) => void;
  /** Align the menu to the trigger's start (default) or end edge. */
  align?: 'start' | 'end';
  /** Accessible name of the menu (defaults to the label). */
  menuLabel?: string;
  /** Button type of the trigger. Default `secondary`. */
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  /** Trigger size. Default `base`. */
  size?: 'xs' | 'sm' | 'base';
  /** Disable the trigger. */
  disabled?: boolean;
}

export declare function DropdownButton(props: DropdownButtonProps): JSX.Element;

export interface DropdownLogosItem {
  /** Stable key; falls back to `value` or the index. */
  id?: string;
  /** Value handed back in `onSelect`. */
  value?: string;
  /** Row type; defaults to a selectable row. */
  type?: 'item' | 'title' | 'separator';
  /** Visible text, e.g. the country or carrier name. */
  label?: ReactNode;
  /** Optional second line. */
  helper?: ReactNode;
  /** Logo or flag shown at 20x14 before the label. */
  logo?: ReactNode;
  /** Marks the current choice (check + aria-selected). */
  selected?: boolean;
  /** Greys the row out and skips it with the keyboard. */
  disabled?: boolean;
  /** Called when this row is activated. */
  onSelect?: (item: DropdownLogosItem) => void;
}

export interface DropdownLogosProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect' | 'role'> {
  /** Rows with their logos. */
  items: DropdownLogosItem[];
  /** `listbox` (default) or `menu`. */
  role?: 'listbox' | 'menu';
  /** Show the check on the selected row. Default true. */
  showCheck?: boolean;
  /** Called with the activated item. */
  onSelect?: (item: DropdownLogosItem) => void;
  /** Max height before the list scrolls. */
  maxHeight?: number | string;
  /** Focus the selected (or first) row on mount. */
  autoFocus?: boolean;
}

export declare function DropdownLogos(props: DropdownLogosProps): JSX.Element;

export interface DropdownMultiselectOption {
  /** Unique value stored in `value`. */
  value: string;
  /** Visible label. */
  label: ReactNode;
  /** Secondary line under the label. */
  helper?: ReactNode;
  /** Not selectable. */
  disabled?: boolean;
  /** Sub-options (hierarchical type). The parent checkbox selects them all. */
  children?: DropdownMultiselectOption[];
  /** Start expanded (hierarchical type). */
  defaultExpanded?: boolean;
}

export interface DropdownMultiselectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Options; add `children` for the hierarchical type. */
  options: DropdownMultiselectOption[];
  /** Selected leaf values. */
  value: string[];
  /** Called with the new list of selected values. */
  onChange?: (value: string[]) => void;
  /** Show the search field. Default true. */
  searchable?: boolean;
  /** Show the "Seleccionar todos" checkbox. Default true. */
  showSelectAll?: boolean;
  /** Controlled search text. */
  search?: string;
  /** Called when the search text changes. */
  onSearchChange?: (search: string) => void;
  /** Search placeholder. Default "Búsqueda". */
  searchPlaceholder?: string;
  /** Accessible name of the search field. */
  searchLabel?: string;
  /** Text of the select-all checkbox. */
  selectAllLabel?: ReactNode;
  /** Empty-state message. */
  emptyText?: ReactNode;
  /** Text of the clear-search button in the empty state. */
  clearSearchLabel?: ReactNode;
  /** Max height of the list before it scrolls. */
  maxHeight?: number | string;
}

export declare function DropdownMultiselect(props: DropdownMultiselectProps): JSX.Element;

export interface EmptyDrawerAction {
  /** Texto del botón. */
  label: ReactNode;
  /** Se llama al hacer clic. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Deshabilita el botón. */
  disabled?: boolean;
}
export interface EmptyDrawerProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Título del drawer, coherente con la sección que lo abrió. */
  title: ReactNode;
  /** Muestra la X y la llama al hacer clic. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible de la X. Default "Cerrar". */
  closeLabel?: string;
  /** Ilustración de 128px (Figma `.Ilustración`, distinta para Pro y para SE/WL). */
  illustration?: ReactNode;
  /** Encabezado del estado vacío. */
  heading?: ReactNode;
  /** Explicación de por qué está vacío y qué hacer. */
  description?: ReactNode;
  /** Botón primario (crear el primer elemento). */
  primaryAction?: EmptyDrawerAction;
  /** Botón secundario (aprender más, otra vía). */
  secondaryAction?: EmptyDrawerAction;
  /** Contenido extra bajo el estado vacío. */
  children?: ReactNode;
}
export declare function EmptyDrawer(props: EmptyDrawerProps): JSX.Element;

export interface EmptyStateAction {
  /** Texto del botón. */
  label: ReactNode;
  /** Acción del botón. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Ancho y tamaño de ilustración (Figma `Dispositivo`): desktop 736px / 128px, mobile 352px / 96px. Default `desktop`. */
  device?: 'desktop' | 'mobile';
  /** Ilustración decorativa (Figma `Ilustración`); se marca `aria-hidden`. */
  illustration?: ReactNode;
  /** Título en semibold 16px. */
  title?: ReactNode;
  /** Etiqueta del título. Default `h2`. */
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  /** Descripción breve. */
  children?: ReactNode;
  /** CTA principal (botón naranja `primary`). */
  primaryAction?: EmptyStateAction;
  /** CTA secundario (botón `secondary`, Figma `Mostrar CTA secundario`). */
  secondaryAction?: EmptyStateAction;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;

export interface ErrorScreenAction {
  /** Texto del botón. */
  label: ReactNode;
  /** Acción del botón. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface ErrorScreenProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Distribución (Figma `Breakpoints`: desktop / movil). Default `desktop`. */
  breakpoint?: 'desktop' | 'mobile';
  /** Código del error, p. ej. `400` o `500` (Figma `Tipo de error`). */
  code?: ReactNode;
  /** Título del error en bold 20px (se pinta como `h1`). */
  title?: ReactNode;
  /** Mensaje en lenguaje humano; respeta saltos de línea. */
  children?: ReactNode;
  /** Ilustración decorativa (Figma `.ilustration`, tipos 400 y 500); se marca `aria-hidden`. */
  illustration?: ReactNode;
  /** CTA principal (botón `primary`), p. ej. “Regresar”. */
  primaryAction?: ErrorScreenAction;
  /** CTA secundario (botón `secondary`, Figma `Button Secondary`). */
  secondaryAction?: ErrorScreenAction;
}
export declare function ErrorScreen(props: ErrorScreenProps): JSX.Element;

export interface FilterOption {
  /** Value stored in `value[categoryId]`. */
  value: string;
  /** Visible label. */
  label: ReactNode;
  /** Not selectable. */
  disabled?: boolean;
}

export interface FilterCategory {
  /** Key used in `value` and `onChange`. */
  id: string;
  /** Section title, e.g. "Paquetería". */
  label: ReactNode;
  /** Checkbox options of this category. */
  options: FilterOption[];
  /** Text of the select-all checkbox ("Todos"); `null` hides it. */
  allLabel?: ReactNode | null;
  /** Start expanded. Default true. */
  defaultOpen?: boolean;
}

export interface FilterAppliedItem {
  /** Key passed to `onRemoveApplied`. */
  id: string;
  /** Badge text. */
  label: ReactNode;
}

export interface FilterToggle {
  /** Switch label. */
  label: ReactNode;
  /** Explanation under the label. */
  helper?: ReactNode;
  /** Optional badge next to the label (e.g. "Con convenio"). */
  badge?: ReactNode;
  /** On/off state. */
  checked: boolean;
  /** Called with the new state. */
  onChange?: (checked: boolean) => void;
  /** Disable the switch. */
  disabled?: boolean;
}

export interface FilterProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** `desktop`: floating 512px panel. `mobile`: full width, no border or shadow. */
  breakpoint?: 'desktop' | 'mobile';
  /** Panel title. Default "Filtros". */
  title?: ReactNode;
  /** Shows the close X and is called when it is pressed. */
  onClose?: () => void;
  /** Accessible name of the close button. */
  closeLabel?: string;
  /** Shows the "Limpiar" button and is called when it is pressed. */
  onClear?: () => void;
  /** Text of the clear button. */
  clearLabel?: ReactNode;
  /** Active filters shown as removable badges. */
  applied?: FilterAppliedItem[];
  /** Title of the applied-filters section. */
  appliedTitle?: ReactNode;
  /** Called with the id of the badge removed. */
  onRemoveApplied?: (id: string) => void;
  /** Date control (e.g. a date-range picker) shown under `dateLabel`. */
  date?: ReactNode;
  /** Title of the date section. Default "Fecha". */
  dateLabel?: ReactNode;
  /** Checkbox categories. */
  categories?: FilterCategory[];
  /** Selected values per category id. */
  value?: Record<string, string[]>;
  /** Called with the category id and its new selected values. */
  onChange?: (categoryId: string, values: string[]) => void;
  /** On/off filters shown at the end. */
  toggles?: FilterToggle[];
  /** Extra content appended at the end of the body. */
  children?: ReactNode;
}

export declare function Filter(props: FilterProps): JSX.Element;

export interface HeaderSearch {
  /** Current search text. */
  value: string;
  /** Called on every keystroke. */
  onChange?: (value: string) => void;
  /** Called on Enter or the search button. */
  onSubmit?: (value: string) => void;
  /** Placeholder. Default "Busca por nombre o número de rastreo". */
  placeholder?: string;
  /** Accessible name of the field. */
  label?: string;
  /** Accessible name of the search button. Default "Buscar". */
  buttonLabel?: string;
}

export interface HeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Page title, e.g. "Mis envíos". */
  title: ReactNode;
  /** Heading level of the title. Default `h1`. */
  titleAs?: 'h1' | 'h2' | 'h3';
  /** Short line under the title. */
  description?: ReactNode;
  /** Text buttons on the right of the title (e.g. a secondary Button). */
  actions?: ReactNode;
  /** Round icon buttons shown after a divider. */
  iconActions?: ReactNode;
  /** Tabs row, usually a TabFilter. */
  tabs?: ReactNode;
  /** Shows the table search field. */
  search?: HeaderSearch;
  /** Shows the "Filtros" button and is called when it is pressed. */
  onFilterClick?: MouseEventHandler<HTMLButtonElement>;
  /** Text of the filter button. Default "Filtros". */
  filterLabel?: ReactNode;
  /** Number of active filters shown in the filter button. */
  filterCount?: number;
  /** Desktop: one row for tabs and tools. Mobile: stacked. */
  breakpoint?: 'desktop' | 'mobile';
  /** Extra content at the bottom. */
  children?: ReactNode;
}

export declare function Header(props: HeaderProps): JSX.Element;

export interface IconBackgroundProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color semántico del fondo y del ícono. */
  color?: 'white' | 'dark' | 'green' | 'red' | 'blue' | 'yellow' | 'orange' | 'purple' | 'gray' | 'teal' | 'secondary' | 'indigo' | 'pink';
  /** Contenedor circular o cuadrado (radio 8px). */
  shape?: 'circle' | 'square';
  /** xxs 20, xs 24, sm 32, md 48, lg 64, xl 96 px. */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Ícono (usa stroke/fill currentColor); por defecto una palomita. */
  icon?: ReactNode;
  /** Alternativa a icon. */
  children?: ReactNode;
}
export declare function IconBackground(props: IconBackgroundProps): JSX.Element;

export interface IndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /** dot (punto + texto), alert (contador rojo), counter (contador primario), icon (círculo con ícono), stepper (paso actual), charge (pastilla de carga). */
  type?: 'dot' | 'alert' | 'counter' | 'icon' | 'stepper' | 'charge';
  /** Solo type="dot": color del punto. */
  color?: 'blue' | 'gray' | 'green' | 'indigo' | 'orange' | 'primary' | 'red' | 'yellow';
  /** Solo alert / counter: número a mostrar. */
  count?: number | string;
  /** Solo type="icon": ícono de 16px; por defecto una palomita. */
  icon?: ReactNode;
  /** Texto del indicador (dot y charge). */
  children?: ReactNode;
}
export declare function Indicator(props: IndicatorProps): JSX.Element;

export interface IndicatorBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color del estado (fondo, punto y texto de la familia indicators-*). */
  color?: 'blue' | 'gray' | 'green' | 'indigo' | 'orange' | 'primary' | 'red' | 'yellow';
  /** Texto del estado (una o dos palabras). */
  children?: ReactNode;
}
export declare function IndicatorBadge(props: IndicatorBadgeProps): JSX.Element;

export interface InputAmountProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Texto de la etiqueta (qué monto se captura). */
  label?: ReactNode;
  /** Si se pasa, muestra el icono de información junto a la etiqueta con este texto accesible. */
  labelInfo?: string;
  /** Texto de apoyo o de error, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Muestra el check verde de monto válido. */
  valid?: boolean;
  /** Bandera del país (18×18), como ReactNode. */
  flag?: ReactNode;
  /** Código de moneda visible, p. ej. "MXN" o "USD". Default "MXN". Pasa "" para ocultarlo. */
  currency?: string;
  /** Símbolo antes del número. Default "$". Pasa "" para ocultarlo. */
  symbol?: string;
}
export declare function InputAmount(props: InputAmountProps): JSX.Element;

export interface InputBadgeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Texto de la etiqueta, ligada al input con htmlFor/id. */
  label?: ReactNode;
  /** Texto de apoyo o de error, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px de alto mínimo. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Valores controlados que se muestran como badges. */
  values?: string[];
  /** Valores iniciales si no es controlado. */
  defaultValues?: string[];
  /** Se llama con la lista nueva al agregar (Enter, coma o salir del campo) o quitar un valor. */
  onValuesChange?: (values: string[]) => void;
  /** Alto máximo de la zona de badges antes de hacer scroll (Figma `Scroll`). Default 112. */
  maxHeight?: number;
  /** Prefijo de la etiqueta accesible de cada X. Default "Quitar". */
  removeLabel?: string;
}
export declare function InputBadge(props: InputBadgeProps): JSX.Element;

export interface InputChatroomProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue'> {
  /** Mensaje controlado. */
  value?: string;
  /** Mensaje inicial si no es controlado. */
  defaultValue?: string;
  /** Se llama con el texto al pulsar enviar o Enter (Shift+Enter hace salto de línea). Si no es controlado, el campo se limpia. */
  onSend?: (text: string) => void;
  /** Clic en el clip de adjuntar. */
  onAttach?: MouseEventHandler<HTMLButtonElement>;
  /** Clic en el icono de imagen. */
  onAddImage?: MouseEventHandler<HTMLButtonElement>;
  /** Muestra el botón de adjuntar. Default true. */
  showAttach?: boolean;
  /** Muestra el botón de imagen. Default true. */
  showImage?: boolean;
  /** Etiqueta accesible del botón enviar. Default "Enviar mensaje". */
  sendLabel?: string;
  /** Etiqueta accesible del botón adjuntar. Default "Adjuntar archivo". */
  attachLabel?: string;
  /** Etiqueta accesible del botón imagen. Default "Agregar imagen". */
  imageLabel?: string;
}
export declare function InputChatroom(props: InputChatroomProps): JSX.Element;

export interface InputCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Texto de la etiqueta; toda la etiqueta es área de clic. Sin él pasa `aria-label`. */
  label?: ReactNode;
  /** Texto de apoyo bajo la etiqueta, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Partial selection`: selección parcial (p. ej. "seleccionar todo" con algunas filas marcadas). */
  indeterminate?: boolean;
}
export declare function InputCheckbox(props: InputCheckboxProps): JSX.Element;

export interface InputCodeParam {
  /** Nombre del parámetro, p. ej. "client_id". */
  name: string;
  /** Tipo de dato. Default "string". */
  type?: string;
  /** Muestra el badge rojo de obligatorio. */
  required?: boolean;
}
export interface InputCodeProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma `Type`: token = endpoint en una línea, post = comando, esquema = JSON preformateado, cuerpo = tabla de parámetros. Default `token`. */
  type?: 'token' | 'post' | 'esquema' | 'cuerpo';
  /** Texto del bloque (token, post, esquema); también es lo que se copia. */
  code?: string;
  /** Parámetros para `type="cuerpo"`. */
  params?: InputCodeParam[];
  /** Muestra el botón de copiar. Default true en token y post. */
  showCopy?: boolean;
  /** Etiqueta accesible del botón de copiar. Default "Copiar". */
  copyLabel?: string;
  /** Reemplaza la copia al portapapeles por defecto. */
  onCopy?: (code: string) => void;
  /** Texto del badge de obligatorio. Default "Requerido". */
  requiredLabel?: string;
  /** Prefijo de la línea de tipo. Default "Type". */
  typeLabel?: string;
  children?: ReactNode;
}
export declare function InputCode(props: InputCodeProps): JSX.Element;

/** Muestra de color + campo hexadecimal. */
export interface InputColorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Label sobre el campo. */
  label?: ReactNode;
  /** Color "#RRGGBB" (controlado). */
  value?: string;
  /** Color inicial. Default "#D68205". */
  defaultValue?: string;
  /** Se llama con "#RRGGBB" válido. */
  onChange?: (value: string) => void;
  /** Etiqueta accesible de la muestra. Default "Elegir color". */
  swatchLabel?: string;
}
export declare function InputColor(props: InputColorProps): JSX.Element;

export interface CaelusOption {
  /** Valor único de la opción. */
  value: string | number;
  /** Texto visible. */
  label: string;
  /** Título de sección: opciones seguidas con el mismo `group` se agrupan. */
  group?: string;
  /** Icono o bandera a la izquierda (también se muestra en el campo al seleccionarla). */
  icon?: ReactNode;
  /** Opción no seleccionable. */
  disabled?: boolean;
}
/** Campo con lista desplegable y búsqueda predictiva de una sola opción. */
export interface InputComboboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Texto del label (Medium 14px). */
  label?: ReactNode;
  /** Texto del icono de información junto al label; si existe, se muestra el icono. */
  info?: string;
  /** Texto de ayuda bajo el campo. */
  helperText?: ReactNode;
  /** Estado de error. Si es texto, reemplaza al helper. */
  error?: boolean | string;
  /** Desactiva el campo. */
  disabled?: boolean;
  /** Opciones de la lista. */
  options?: CaelusOption[];
  /** Valor seleccionado (controlado). `null` = sin selección. */
  value?: string | number | null;
  /** Valor inicial (no controlado). */
  defaultValue?: string | number | null;
  /** Se llama al elegir o borrar una opción. */
  onChange?: (value: string | number | null, option: CaelusOption | null) => void;
  /** Se llama cada vez que cambia el texto escrito. */
  onInputChange?: (text: string) => void;
  /** Placeholder del campo. */
  placeholder?: string;
  /** Figma `Size`: sm = 37px, base = 42px. Default `base`. */
  size?: 'sm' | 'base';
  /** Icono a la izquierda del texto. */
  leftIcon?: ReactNode;
  /** Abre la lista al montar (útil para demos). */
  defaultOpen?: boolean;
  /** Texto inicial escrito en el buscador (útil para demos). */
  defaultInputValue?: string;
  /** Texto cuando no hay coincidencias. Default "Sin resultados". */
  emptyText?: string;
  /** Etiqueta accesible del botón X. Default "Borrar". */
  clearLabel?: string;
  /** Muestra el chevron. Default true. */
  showChevron?: boolean;
  /** Muestra la X para borrar. Default true. */
  clearable?: boolean;
  /** Caracteres mínimos antes de abrir la lista. Default 0. */
  minChars?: number;
  /** Clase extra para la caja del campo. */
  controlClassName?: string;
}
export declare function InputCombobox(props: InputComboboxProps): JSX.Element;

/** Combobox con bandera por opción (países). */
export interface InputComboboxFlagProps extends Omit<InputComboboxProps, 'options'> {
  /** Opciones; `flag` se dibuja en una caja de 28×20 (gris si no se pasa). */
  options?: (CaelusOption & { flag?: ReactNode })[];
}
export declare function InputComboboxFlag(props: InputComboboxFlagProps): JSX.Element;

export interface InputCounterProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'min' | 'max' | 'step' | 'onChange' | 'type'> {
  /** Texto de la etiqueta, ligada con htmlFor/id. */
  label?: ReactNode;
  /** Si se pasa, muestra el icono de información junto a la etiqueta con este texto accesible. */
  labelInfo?: string;
  /** Texto de apoyo o de error, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Valor controlado. */
  value?: number;
  /** Valor inicial si no es controlado. Default `min` o 0. */
  defaultValue?: number;
  /** Límite inferior; el botón − se deshabilita al llegar. */
  min?: number;
  /** Límite superior; el botón + se deshabilita al llegar. */
  max?: number;
  /** Incremento de cada clic o flecha. Default 1. */
  step?: number;
  /** Se llama con el nuevo número (ya limitado a min/max). */
  onValueChange?: (value: number) => void;
  /** Etiqueta accesible del botón −. Default "Disminuir". */
  decrementLabel?: string;
  /** Etiqueta accesible del botón +. Default "Aumentar". */
  incrementLabel?: string;
}
export declare function InputCounter(props: InputCounterProps): JSX.Element;

/** Campo de fecha (única o rango) con calendario desplegable. */
export interface InputDatepickerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Label opcional (Figma `Show Label`). */
  label?: ReactNode;
  /** `single` = una fecha, `range` = rango. Default `single`. */
  mode?: 'single' | 'range';
  /** Fecha o rango (controlado). */
  value?: Date | [Date, Date] | null;
  /** Fecha o rango inicial (no controlado). */
  defaultValue?: Date | [Date, Date] | null;
  /** Se llama al elegir fecha o completar el rango. */
  onChange?: (value: Date | [Date, Date]) => void;
  /** Texto sin fecha. Default "Selecciona una fecha". */
  placeholder?: string;
  /** Texto fijo del campo, p. ej. un preset como "Últimos 30 días". */
  displayText?: string;
  /** Abre el calendario al montar (demos). */
  defaultOpen?: boolean;
  /** Mes que se muestra si no hay valor. */
  defaultMonth?: Date;
  /** Fecha de "hoy" (para demos o pruebas). Default la fecha actual. */
  today?: Date;
}
export declare function InputDatepicker(props: InputDatepickerProps): JSX.Element;

/** Zona para arrastrar o elegir archivos, con estados de carga y archivo listo. */
export interface InputDropfileProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'title'> {
  /** Figma `Type`: `img` (con vista previa) o `file`. Default `img`. */
  type?: 'img' | 'file';
  /** Figma `Status`. Default `default`. */
  status?: 'default' | 'uploading' | 'value';
  /** Label sobre la zona. */
  label?: ReactNode;
  /** Texto del icono de información junto al label. */
  info?: string;
  /** Título de la zona (reemplaza el texto por defecto). */
  title?: ReactNode;
  /** Formatos y peso permitidos. */
  hint?: ReactNode;
  /** Texto de ayuda bajo la zona. */
  helperText?: ReactNode;
  /** Nombre del archivo en carga o cargado. */
  fileName?: string;
  /** Progreso 0–100 en `uploading`. Default 50. */
  progress?: number;
  /** Texto bajo la barra. Default "Subiendo y validando". */
  progressText?: string;
  /** URL de la vista previa (`type="img"`, `status="value"`). */
  previewSrc?: string;
  /** Texto alternativo de la vista previa. */
  previewAlt?: string;
  /** Archivos elegidos o soltados. */
  onFiles?: (files: FileList | null) => void;
  /** Botón de eliminar. */
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible del botón eliminar. */
  removeLabel?: string;
}
export declare function InputDropfile(props: InputDropfileProps): JSX.Element;

/** Selector de archivo compacto con botón integrado. */
export interface InputFileProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label sobre el campo. */
  label?: ReactNode;
  /** Nota bajo el campo. */
  helperText?: ReactNode;
  /** Figma `Size`: default = 42px, large = 52px. */
  size?: 'default' | 'large';
  /** Texto del botón. Default "Seleccionar archivo". */
  buttonLabel?: ReactNode;
  /** Texto sin archivo. Default "Ningún archivo seleccionado". */
  placeholder?: string;
  /** Nombre a mostrar (si lo controlas tú). */
  fileName?: string;
}
export declare function InputFile(props: InputFileProps): JSX.Element;

/** Lista desplegable de selección múltiple con badges eliminables. */
export interface InputMultiselectProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Texto del label (Medium 14px). */
  label?: ReactNode;
  /** Texto del icono de información junto al label; si existe, se muestra el icono. */
  info?: string;
  /** Texto de ayuda bajo el campo. */
  helperText?: ReactNode;
  /** Estado de error. Si es texto, reemplaza al helper. */
  error?: boolean | string;
  /** Desactiva el campo. */
  disabled?: boolean;
  /** Figma `Size`. Default `base`. */
  size?: 'sm' | 'base';
  /** Opciones. */
  options?: { value: string | number; label: string; disabled?: boolean }[];
  /** Valores seleccionados (controlado). */
  value?: (string | number)[];
  /** Valores iniciales (no controlado). */
  defaultValue?: (string | number)[];
  /** Se llama con la nueva lista de valores. */
  onChange?: (value: (string | number)[]) => void;
  /** Texto cuando no hay selección. */
  placeholder?: string;
  /** Badges visibles antes de agrupar en "+N". Default 8. */
  maxBadges?: number;
  /** Placeholder del buscador interno. Default "Búsqueda". */
  searchPlaceholder?: string;
  /** Texto del check general. Default "Seleccionar todo". */
  selectAllLabel?: string;
  /** Texto sin coincidencias. Default "Sin resultados". */
  emptyText?: string;
  /** Abre la lista al montar (demos). */
  defaultOpen?: boolean;
  /** Búsqueda inicial (demos). */
  defaultSearch?: string;
}
export declare function InputMultiselect(props: InputMultiselectProps): JSX.Element;

export interface InputPasswordRequirement {
  /** Texto del requisito, p. ej. "Mínimo 8 caracteres". */
  label: ReactNode;
  /** true = check verde, false = cruz roja, undefined = sin icono (aún no se evalúa). */
  met?: boolean;
}
export interface InputPasswordProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Texto de la etiqueta. Figma usa "Contraseña*". */
  label?: ReactNode;
  /** Mensaje bajo el campo (en error, qué falta). Ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Lista de requisitos que se valida mientras se escribe; en dos columnas. */
  requirements?: InputPasswordRequirement[];
  /** Título de la lista de requisitos. Default "Debe contener:". */
  requirementsTitle?: ReactNode;
  /** Etiqueta accesible del botón del ojo para mostrar. Default "Mostrar contraseña". */
  showLabel?: string;
  /** Etiqueta accesible del botón del ojo para ocultar. Default "Ocultar contraseña". */
  hideLabel?: string;
}
export declare function InputPassword(props: InputPasswordProps): JSX.Element;

export interface InputPhoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Texto de la etiqueta. Figma usa "Celular*". */
  label?: ReactNode;
  /** Instrucción bajo el campo (p. ej. no repetir el código de país) o mensaje de error. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Muestra el check verde de número válido. */
  valid?: boolean;
  /** Código de país visible en el selector. Default "+52". */
  countryCode?: string;
  /** Bandera (20×14) del país, como ReactNode. */
  flag?: ReactNode;
  /** Abre el selector de país (el listado lo implementa el consumidor). */
  onCountryClick?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible del botón de país. Default "Código de país +52, cambiar". */
  countryLabel?: string;
  /** Texto del botón primario debajo del campo (Figma `Show button`, "Enviar código"). Sin él no se muestra. */
  actionLabel?: ReactNode;
  /** Clic del botón primario. */
  onAction?: MouseEventHandler<HTMLButtonElement>;
}
export declare function InputPhone(props: InputPhoneProps): JSX.Element;

export interface InputPincodeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'size'> {
  /** Texto sobre las casillas. Figma usa "Tu código". */
  label?: ReactNode;
  /** Texto de apoyo o de error, ligado a cada casilla con aria-describedby. */
  helperText?: ReactNode;
  /** Estados no alcanzables por CSS. Figma `Estado` Error. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Número de casillas. Default 6. */
  length?: number;
  /** Código controlado (solo dígitos). */
  value?: string;
  /** Código inicial si no es controlado. */
  defaultValue?: string;
  /** Se llama con el código (solo dígitos) cada vez que cambia. */
  onValueChange?: (code: string) => void;
  /** Se llama cuando se llenan todas las casillas. */
  onComplete?: (code: string) => void;
  /** Placeholder de cada casilla. Default "0". */
  placeholder?: string;
}
export declare function InputPincode(props: InputPincodeProps): JSX.Element;

export interface InputRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Texto de la etiqueta; toda la etiqueta es área de clic. Sin él pasa `aria-label`. */
  label?: ReactNode;
  /** Texto de apoyo bajo la etiqueta, ligado con aria-describedby. */
  helperText?: ReactNode;
}
export declare function InputRadio(props: InputRadioProps): JSX.Element;

/** Buscador simple con lupa y X para borrar (navbars, bases de otros buscadores). */
export interface InputSearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Figma `Size`: sm = 37px, base = 42px. Default `base`. */
  size?: 'sm' | 'base';
  /** Se llama al pulsar la X. */
  onClear?: () => void;
  /** Etiqueta accesible de la X. Default "Borrar búsqueda". */
  clearLabel?: string;
}
export declare function InputSearch(props: InputSearchProps): JSX.Element;

/** Buscador con botón "Buscar" visible (página de rastreo). */
export interface InputSearchBtProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Se llama con el texto al enviar. */
  onSearch?: (value: string) => void;
  /** Se llama al pulsar la X. */
  onClear?: () => void;
  /** Etiqueta accesible de la X. */
  clearLabel?: string;
  /** Texto del botón. Default "Buscar". */
  buttonLabel?: ReactNode;
}
export declare function InputSearchBt(props: InputSearchBtProps): JSX.Element;

/** Buscador que muestra resultados en una lista al escribir. */
export interface InputSearchSelectProps extends Omit<InputComboboxProps, 'showChevron'> {
  /** Caracteres mínimos antes de mostrar resultados. Default 2. */
  minChars?: number;
}
export declare function InputSearchSelect(props: InputSearchSelectProps): JSX.Element;

/** Selector de país + buscador de C. P. o dirección guardada (cotizador). */
export interface InputSearchSelectFlagProps extends Omit<InputSearchSelectProps, 'options'> {
  /** Países: `label` es el código visible (ej. "MX"), `name` el nombre para lectores de pantalla. */
  countries?: { value: string; label: string; name?: string; flag?: ReactNode }[];
  /** País seleccionado (controlado). */
  country?: string;
  /** País inicial (no controlado). Default el primero. */
  defaultCountry?: string;
  /** Se llama al cambiar el país. */
  onCountryChange?: (value: string) => void;
  /** Etiqueta accesible del selector de país. Default "País". */
  countryLabel?: string;
  /** Resultados; `saved: true` muestra el icono de dirección guardada. */
  options?: (CaelusOption & { saved?: boolean })[];
}
export declare function InputSearchSelectFlag(props: InputSearchSelectFlagProps): JSX.Element;

/** Buscador compacto para filtrar tablas, con botón de lupa. */
export interface InputSearchTablesProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Se llama con el texto al pulsar Enter o el botón. */
  onSearch?: (value: string) => void;
  /** Se llama al pulsar la X. */
  onClear?: () => void;
  /** Etiqueta accesible de la X. */
  clearLabel?: string;
  /** Etiqueta accesible del botón. Default "Buscar". */
  buttonLabel?: string;
}
export declare function InputSearchTables(props: InputSearchTablesProps): JSX.Element;

/** Select nativo con label, helper y estados de Caelus. */
export interface InputSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Texto del label (Medium 14px). */
  label?: ReactNode;
  /** Texto del icono de información junto al label; si existe, se muestra el icono. */
  info?: string;
  /** Texto de ayuda bajo el campo. */
  helperText?: ReactNode;
  /** Estado de error. Si es texto, reemplaza al helper. */
  error?: boolean | string;
  /** Desactiva el campo. */
  disabled?: boolean;
  /** Figma `Sizes`: sm = 37px, base = 42px. Default `base`. */
  size?: 'sm' | 'base';
  /** Opciones; también puedes pasar `<option>` como children. */
  options?: { value: string; label: string; disabled?: boolean }[];
  /** Primera opción vacía y no seleccionable. */
  placeholder?: string;
  /** Icono o logo a la izquierda (Figma `Type=Logos`). */
  leftIcon?: ReactNode;
  children?: ReactNode;
}
export declare function InputSelect(props: InputSelectProps): JSX.Element;

export interface InputSliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'min' | 'max' | 'step' | 'onChange'> {
  /** Figma `Type`: value = un valor, range = rango con dos thumbs, volume = con iconos de volumen, with-data = con marcas debajo. Default `value`. */
  type?: 'value' | 'range' | 'volume' | 'with-data';
  /** Mínimo. Default 0. */
  min?: number;
  /** Máximo. Default 100. */
  max?: number;
  /** Incremento. Default 1. */
  step?: number;
  /** Valor controlado: número, o `[desde, hasta]` en `range`. */
  value?: number | [number, number];
  /** Valor inicial si no es controlado. */
  defaultValue?: number | [number, number];
  /** Se llama con el nuevo valor (número o par en `range`). */
  onValueChange?: (value: number | [number, number]) => void;
  /** Figma `Tooltip`: muestra el valor en una burbuja oscura sobre el thumb (no aplica a `range`). */
  tooltip?: boolean;
  /** Da formato al valor del tooltip, de las marcas y de aria-valuetext (p. ej. "$500"). */
  formatValue?: (value: number) => string;
  /** Valores de las marcas en `with-data`. Default: 4 marcas parejas de min a max. */
  marks?: number[];
  /** Etiqueta accesible del thumb inferior en `range`. Default "Valor mínimo". */
  minLabel?: string;
  /** Etiqueta accesible del thumb superior en `range`. Default "Valor máximo". */
  maxLabel?: string;
}
export declare function InputSlider(props: InputSliderProps): JSX.Element;

export interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Texto de la etiqueta, ligada al input con htmlFor/id. */
  label?: ReactNode;
  /** Si se pasa, muestra el icono de información junto a la etiqueta con este texto accesible. */
  labelInfo?: string;
  /** Texto de apoyo debajo del campo; en error se usa como mensaje de error. Ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px de alto. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. `disabled` también se activa con la prop nativa `disabled`. */
  state?: 'default' | 'error' | 'disabled';
  /** Muestra el check verde de valor válido (Figma `Show check icon` en Value). */
  valid?: boolean;
  /** Icono a la izquierda del texto (18px). */
  leftIcon?: ReactNode;
  /** Icono a la derecha del texto (18px). */
  rightIcon?: ReactNode;
}
export declare function InputText(props: InputTextProps): JSX.Element;

export type InputTextareaAction =
  | 'bold' | 'italic' | 'underline' | 'strikethrough'
  | 'align-left' | 'align-center' | 'align-right' | 'align-justify'
  | 'bullet-list' | 'numbered-list' | 'image' | 'link';
export interface InputTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Texto de la etiqueta, ligada con htmlFor/id. */
  label?: ReactNode;
  /** Si se pasa, muestra el icono de información junto a la etiqueta con este texto accesible. */
  labelInfo?: string;
  /** Texto de apoyo o de error, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Muestra la barra de formato (Figma `Show .rich text`). Default true. */
  toolbar?: boolean;
  /** Se llama con la acción del botón de la barra que se pulsó; el formato lo implementa el consumidor. */
  onToolbarAction?: (action: InputTextareaAction) => void;
  /** Permite estirar el campo en vertical (Figma `Resize`). Default true. */
  resize?: boolean;
}
export declare function InputTextarea(props: InputTextareaProps): JSX.Element;

/** Campo de hora en formato 12 h (HH:MM am/pm) con columnas desplegables. */
export interface InputTimepickerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Label sobre el campo. */
  label?: ReactNode;
  /** Hora "hh:mm am" (controlado). */
  value?: string | null;
  /** Hora inicial (no controlado). */
  defaultValue?: string | null;
  /** Se llama con la hora "hh:mm am|pm". */
  onChange?: (value: string) => void;
  /** Texto sin hora. Default "--:-- --". */
  placeholder?: string;
  /** Intervalo de minutos. Default 1. */
  minuteStep?: number;
  /** Abre el selector al montar (demos). */
  defaultOpen?: boolean;
}
export declare function InputTimepicker(props: InputTimepickerProps): JSX.Element;

export interface InputToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Texto de la etiqueta (qué se activa). Sin él pasa `aria-label`. */
  label?: ReactNode;
  /** Texto de apoyo bajo la etiqueta, ligado con aria-describedby. */
  helperText?: ReactNode;
}
export declare function InputToggle(props: InputToggleProps): JSX.Element;

export interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  /** sm 50px, default 75px o lg 100px. */
  size?: 'sm' | 'default' | 'lg';
  /** Colores para fondos oscuros. */
  dark?: boolean;
  /** Muestra el anillo de fondo (true por defecto). */
  track?: boolean;
  /** Texto para lectores de pantalla; por defecto "Cargando". */
  label?: string;
}
export declare function Loader(props: LoaderProps): JSX.Element;

export interface MenuItem {
  /** Row kind: main link, highlighted call to action, section label or divider. */
  type?: 'link' | 'cta' | 'label' | 'separator';
  /** Stable key. */
  id?: string;
  /** Text of the link or label. */
  label?: ReactNode;
  /** 18px icon before the text. */
  icon?: ReactNode;
  /** Destination; renders an `a`. Without it, a `button`. */
  href?: string;
  /** Click handler. */
  onClick?: MouseEventHandler<HTMLElement>;
  /** Current page (aria-current="page"). */
  active?: boolean;
  /** Small trailing icon, e.g. external-link or sign-out. */
  trailing?: ReactNode;
  /** Badge after the label (e.g. "Nuevo"). */
  badge?: ReactNode;
  /** Sub-links; the row becomes a collapsible group with a chevron. */
  children?: MenuItem[];
  /** Initial open state of a group (defaults to open if a child is active). */
  defaultExpanded?: boolean;
  /** Controlled open state of a group. */
  expanded?: boolean;
  /** Called when a group is toggled. */
  onExpandedChange?: (expanded: boolean) => void;
}

export interface MenuProps extends HTMLAttributes<HTMLElement> {
  /** Platform look: Skydropx Pro (white), Soloenvíos (primary), Envíos Internacionales (orange), MyShipHub (dark). */
  variant?: 'skydropx' | 'soloenvios' | 'internacional' | 'msh';
  /** Navigation rows in order. */
  items: MenuItem[];
  /** Rows pinned to the bottom (e.g. "Gestión interna"). */
  footer?: MenuItem[];
  /** Extra content at the end. */
  children?: ReactNode;
}

export declare function Menu(props: MenuProps): JSX.Element;

export interface MenuBreakpointsProps extends HTMLAttributes<HTMLDivElement> {
  /** Top bar, usually a Navbar. */
  navbar?: ReactNode;
  /** Side menu, usually a Menu. */
  menu?: ReactNode;
  /** Page content, rendered in `main` with 16px padding. */
  children?: ReactNode;
  /** Render the side menu. Default true. */
  showMenu?: boolean;
  /** Render the content area. Default true. */
  showContent?: boolean;
  /** Overlay menu open (below 1024px or with layout="overlay"). */
  menuOpen?: boolean;
  /** Called on backdrop click or Escape while the overlay is open. */
  onMenuClose?: () => void;
  /** Force a layout instead of the 1024px media query. */
  layout?: 'docked' | 'overlay';
}

export declare function MenuBreakpoints(props: MenuBreakpointsProps): JSX.Element;

export interface ModalAction {
  /** Texto del botón. */
  label: ReactNode;
  /** Se llama al hacer clic. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Deshabilita el botón. */
  disabled?: boolean;
}
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Figma `Type`: informativo (título en el header), confirmacion (título centrado con ilustración) o critico (acción destructiva). Default `informativo`. */
  type?: 'informativo' | 'confirmacion' | 'critico';
  /** Título del modal; también nombra el diálogo (`aria-labelledby`). */
  title?: ReactNode;
  /** Figma `Show title`. Default `true`. */
  showTitle?: boolean;
  /** Texto de apoyo (Figma `Body`); se enlaza con `aria-describedby`. */
  description?: ReactNode;
  /** Ilustración opcional sobre el texto (96px en Figma). */
  illustration?: ReactNode;
  /** Contenido libre del cuerpo, después del texto. */
  children?: ReactNode;
  /** Cierra el modal: botón X, tecla Escape y clic en el fondo (no en modo `inline`). */
  onClose?: (event: unknown) => void;
  /** Etiqueta accesible de la X. Default "Cerrar". */
  closeLabel?: string;
  /** Botón principal (naranja/primario; rojo `alert` en `critico`). */
  primaryAction?: ModalAction;
  /** Botón secundario (cancelar / salida clara). */
  secondaryAction?: ModalAction;
  /** Sustituye el footer completo; `null` lo oculta. */
  footer?: ReactNode;
  /** Figma `.modal-footer`: primary (alineado a la derecha), secondary (centrado, acción roja) o ver-mas. Default según `type`. */
  footerVariant?: 'primary' | 'secondary' | 'ver-mas';
  /** Línea divisoria entre contenido y footer. Default `true` en `informativo`. */
  separator?: boolean;
  /** Ancho del diálogo (número = px). Default 416px; se ajusta al 100% en pantallas chicas. */
  width?: number | string;
  /** Renderiza el fondo y el diálogo en el flujo del documento (para documentación o previews) en vez de `position: fixed`. */
  inline?: boolean;
  /** Clase extra para el contenedor del cuerpo. */
  bodyClassName?: string;
}
export declare function Modal(props: ModalProps): JSX.Element;

export interface EcommerceIntegrationField {
  /** Nombre del campo (`name` del input). */
  name?: string;
  /** Etiqueta visible, ligada al input. */
  label: ReactNode;
  /** Placeholder. */
  placeholder?: string;
  /** Tipo nativo del input. Default `text`. */
  type?: string;
  /** Valor controlado. */
  value?: string;
  /** Valor inicial sin controlar. */
  defaultValue?: string;
  /** Cambio del input. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Mensaje de error; marca el input con `aria-invalid`. */
  error?: ReactNode;
}
export interface ModalEcommerceIntegrationProps extends Omit<ModalProps, 'type' | 'children'> {
  /** Figma `Type`: tienda (URL de ecommerce) o api (credenciales). Default `tienda`. */
  type?: 'tienda' | 'api';
  /** Nombre de la plataforma (ej. Shopify). */
  platformName?: ReactNode;
  /** Categoría bajo el nombre (Ecommerce, Aplicación). */
  platformCategory?: ReactNode;
  /** Logo de la plataforma (35px). */
  logo?: ReactNode;
  /** Instrucción principal; `null` la oculta. */
  instructions?: ReactNode;
  /** Caja gris con el formato esperado o ayuda extra. */
  hint?: ReactNode;
  /** Campos del formulario; por defecto según `type`. */
  fields?: EcommerceIntegrationField[];
  /** Enlace "Consultar documentación". */
  docsHref?: string;
  /** Texto del enlace de documentación. Default "documentación". */
  docsLabel?: string;
  /** Contenido extra después de los campos. */
  children?: ReactNode;
}
export declare function ModalEcommerceIntegration(props: ModalEcommerceIntegrationProps): JSX.Element;

export interface ModalMultimediaProps extends Omit<ModalProps, 'type' | 'children'> {
  /** Reproductor o imagen (`video`, `iframe`, `img` o un componente propio). Sin él se pinta un placeholder. */
  media?: ReactNode;
  /** Texto corto bajo el video. */
  caption?: ReactNode;
  /** Contenido extra bajo el video. */
  children?: ReactNode;
}
export declare function ModalMultimedia(props: ModalMultimediaProps): JSX.Element;

export interface StatusDeliveryItem {
  /** Nombre del estatus. */
  label: ReactNode;
  /** Explicación en una frase. */
  description?: ReactNode;
  /** Color del punto; debe coincidir con el del dashboard de envíos. Default `indigo`. */
  color?: 'blue' | 'primary' | 'indigo' | 'green' | 'red' | 'orange';
}
export interface ModalStatusDeliveryProps extends Omit<ModalProps, 'type' | 'children'> {
  /** Columnas de estatus; por defecto flujo normal a la izquierda y excepciones a la derecha. */
  columns?: StatusDeliveryItem[][];
  /** Texto del botón del footer, que llama a `onClose`. Default "Cerrar". */
  closeActionLabel?: string;
  /** Contenido extra bajo las columnas. */
  children?: ReactNode;
}
export declare function ModalStatusDelivery(props: ModalStatusDeliveryProps): JSX.Element;

export interface ModalVerificationCodeProps extends Omit<HTMLAttributes<HTMLFormElement>, 'title' | 'onChange' | 'onSubmit'> {
  /** Figma `Type`: code (correo) o code-sms. Cambia los textos por defecto y muestra la nota de seguridad en SMS. Default `code`. */
  variant?: 'code' | 'code-sms';
  /** Encabezado; tiene un texto por defecto según `variant`. */
  title?: ReactNode;
  /** Texto que explica a dónde se envió el código. */
  message?: ReactNode;
  /** Correo o número enmascarado que se resalta al final del mensaje. */
  destination?: ReactNode;
  /** Etiqueta del campo. Default "Tu código". */
  label?: string;
  /** Placeholder del campo. Default "0 - 0 - 0 - 0". */
  placeholder?: string;
  /** Nota bajo el campo. En `code-sms` trae una advertencia de seguridad por defecto. */
  caption?: ReactNode;
  /** Número de dígitos. Default 4. */
  length?: number;
  /** Valor controlado (solo dígitos). */
  value?: string;
  /** Valor inicial sin controlar. */
  defaultValue?: string;
  /** Recibe el código limpio (solo dígitos) en cada cambio. */
  onChange?: (code: string, event: unknown) => void;
  /** Se llama al enviar con el código completo. */
  onSubmit?: (code: string, event: unknown) => void;
  /** Texto del botón. Default "Verificar". */
  submitLabel?: string;
  /** Muestra el botón en espera mientras se valida. */
  loading?: boolean;
  /** Texto del botón en espera. Default "Verificando…". */
  loadingLabel?: string;
  /** Mensaje de error; marca el campo con `aria-invalid`. */
  error?: ReactNode;
  /** Acción de "Reenviar código". */
  onResend?: MouseEventHandler<HTMLButtonElement>;
  /** Texto del enlace de reenvío. Default "Reenviar código". */
  resendLabel?: string;
  /** Acción de "Necesito ayuda"; `null` lo oculta. */
  onHelp?: MouseEventHandler<HTMLButtonElement> | null;
  /** Texto del enlace de ayuda. Default "Necesito ayuda". */
  helpLabel?: string;
}
export declare function ModalVerificationCode(props: ModalVerificationCodeProps): JSX.Element;

export interface WithdrawalOption {
  /** Identificador estable de la opción. */
  key?: string;
  /** Color de la tarjeta: primary (créditos) o teal (cuenta bancaria). Default `primary`. */
  tone?: 'primary' | 'teal';
  /** Ilustración o logo de 48px. */
  illustration?: ReactNode;
  /** Título de la opción. */
  title: ReactNode;
  /** Frase de apoyo bajo el título. */
  description?: ReactNode;
  /** Beneficios o condiciones (máx. ~10 palabras cada uno). */
  benefits?: ReactNode[];
  /** Texto del botón (acción concreta). */
  actionLabel: ReactNode;
  /** Se llama al elegir la opción. */
  onSelect?: MouseEventHandler<HTMLButtonElement>;
  /** Deshabilita el botón de la opción. */
  disabled?: boolean;
}
export interface ModalWithdrawalProps extends Omit<ModalProps, 'type' | 'children'> {
  /** Tarjetas comparativas; por defecto créditos y cuenta bancaria. */
  options?: WithdrawalOption[];
  /** Frase sobre las tarjetas; `null` la oculta. Default "Selecciona cómo quieres recibir tu dinero.". */
  intro?: ReactNode;
  /** Contenido extra bajo las tarjetas. */
  children?: ReactNode;
}
export declare function ModalWithdrawal(props: ModalWithdrawalProps): JSX.Element;

export interface NavbarLink {
  /** Stable key. */
  id?: string;
  /** Link text. */
  label: ReactNode;
  /** 18px icon before the text. */
  icon?: ReactNode;
  /** Destination; renders an `a`. Without it, a `button`. */
  href?: string;
  /** Click handler. */
  onClick?: MouseEventHandler<HTMLElement>;
  /** Current section (aria-current="page"). */
  active?: boolean;
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Platform look: Skydropx Pro (dark), Soloenvíos and Envíos Internacionales (light), MyShipHub (dark violet). */
  variant?: 'skydropx' | 'soloenvios' | 'internacional' | 'msh';
  /** `desktop` (desktop and tablet) or `mobile` (compact, hides country text). */
  type?: 'desktop' | 'mobile';
  /** Brand logo (pass the platform logo; use the inverted one on dark variants). */
  logo?: ReactNode;
  /** Shows the hamburger button and is called when it is pressed. */
  onMenuClick?: MouseEventHandler<HTMLButtonElement>;
  /** Accessible name of the hamburger. Default "Abrir menú". */
  menuLabel?: string;
  /** Whether the side menu it controls is open (aria-expanded). */
  menuExpanded?: boolean;
  /** Balance button, e.g. "$0.00 MXN" with a plus to top up. */
  balance?: { label: ReactNode; icon?: ReactNode; onAdd?: MouseEventHandler<HTMLButtonElement>; onClick?: MouseEventHandler<HTMLButtonElement>; addLabel?: string };
  /** Country selector button (.button-pais). Open your DropdownLogos from `onClick`. */
  country?: { code?: string; flag?: ReactNode; label?: string; expanded?: boolean; onClick?: MouseEventHandler<HTMLButtonElement> };
  /** Extra toolbar buttons (help, automations, notifications, referrals). */
  actions?: ReactNode;
  /** Account button with initials or avatar (.acount-desktop / .acount-mobile). */
  account?: { initials?: string; avatar?: ReactNode; label?: string; expanded?: boolean; onClick?: MouseEventHandler<HTMLButtonElement> };
  /** Center links (MyShipHub top navigation). */
  links?: NavbarLink[];
  /** Accessible name of the links nav. */
  navLabel?: string;
  /** Extra content at the end. */
  children?: ReactNode;
}

export declare function Navbar(props: NavbarProps): JSX.Element;

export interface NotificationPushupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Figma `Property 1`: tipo de evento; define el texto por defecto. Default `referido`. */
  kind?: 'referido' | 'creditos' | 'beneficio';
  /** Figma `Plataforma`: pro (degradado morado) o se / ei (degradado azul). Default `pro`. */
  platform?: 'pro' | 'se' | 'ei';
  /** Título celebratorio. */
  title?: ReactNode;
  /** Mensaje de apoyo. */
  message?: ReactNode;
  /** Emoji o ícono decorativo; `null` lo oculta. Default 🎉 (🥳 en SE). */
  icon?: ReactNode;
  /** Figma `Show date`: fecha opcional bajo el mensaje. */
  date?: ReactNode;
  /** Muestra la X y la llama al hacer clic. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible de la X. Default "Cerrar notificación". */
  closeLabel?: string;
  /** Contenido extra bajo el mensaje (Figma `Show Section`). */
  children?: ReactNode;
}
export declare function NotificationPushup(props: NotificationPushupProps): JSX.Element;

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  /** Current page, starting at 1. */
  page: number;
  /** Rows per page. Default 20. */
  pageSize?: number;
  /** Total rows. */
  total: number;
  /** Called with the page requested by the previous/next arrows. */
  onPageChange?: (page: number) => void;
  /** Row selection state of the table. Default `none`. */
  selection?: 'none' | 'partial' | 'all';
  /** Called when the select-all checkbox changes. */
  onSelectAllChange?: (checked: boolean) => void;
  /** Text of the select-all checkbox. Default "Seleccionar". */
  selectLabel?: ReactNode;
  /** Show the select-all checkbox. Default true. */
  showSelectAll?: boolean;
  /** Bulk-action icon buttons (pass Button with shape="square" and aria-label). */
  actions?: ReactNode;
  /** Summary shown while rows are selected, e.g. "14 envíos seleccionados.". */
  selectionText?: ReactNode;
  /** Link next to the summary ("Incluir todos los envíos", "Anular selección"). */
  selectionAction?: { label: ReactNode; onClick?: MouseEventHandler<HTMLButtonElement> };
  /** Shows the round sort button and is called when it is pressed. */
  onSortClick?: MouseEventHandler<HTMLButtonElement>;
  /** Accessible name of the sort button. */
  sortLabel?: string;
  /** Custom sort icon. */
  sortIcon?: ReactNode;
  /** Shows the three-dot button and is called when it is pressed. */
  onMoreClick?: MouseEventHandler<HTMLButtonElement>;
  /** Accessible name of the three-dot button. */
  moreLabel?: string;
  /** Desktop: one row. Mobile: stacked rows. */
  breakpoint?: 'desktop' | 'mobile';
  /** Word between range and total. Default "de". */
  ofLabel?: string;
  /** Accessible name of the previous arrow. */
  prevLabel?: string;
  /** Accessible name of the next arrow. */
  nextLabel?: string;
  /** Accessible name of the nav landmark. Default "Paginación". */
  navLabel?: string;
}

export declare function Pagination(props: PaginationProps): JSX.Element;

export interface PopoverLink {
  /** Texto del enlace. */
  label: ReactNode;
  /** Destino del enlace. */
  href?: string;
  /** Abre en otra pestaña (`target="_blank"`). */
  external?: boolean;
  /** Acción al hacer clic. */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  /** Lado del disparador donde aparece y alineación de la flecha (Figma `Position`). Default `top-center`. */
  position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'left-center' | 'left-top' | 'left-bottom' | 'right-center' | 'right-top' | 'right-bottom';
  /** Título en bold 12px (Figma `Show header`). */
  header?: ReactNode;
  /** Contenido (Figma `Show body`). */
  children?: ReactNode;
  /** Enlace opcional con icono de enlace externo (Figma `Show link`). */
  link?: PopoverLink;
  /** Si existe, muestra la “x” (Figma `Show close icon`). */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** `aria-label` del botón de cerrar. Default “Cerrar”. */
  closeLabel?: string;
}
export declare function Popover(props: PopoverProps): JSX.Element;

export interface PopoverAlertAction {
  /** Texto del botón (CTA de redirección). */
  label: ReactNode;
  /** Acción del botón. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Icono a la derecha del texto; por defecto una flecha. */
  icon?: ReactNode;
}
export interface PopoverAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Severidad (Figma `style`: Warning, Info, Wrong → `danger`, Primary). Default `warning`. */
  severity?: 'warning' | 'info' | 'danger' | 'primary';
  /** Lado del punto donde aparece la tarjeta (Figma `direction`). Default `right`. */
  direction?: 'top' | 'right' | 'bottom' | 'left';
  /** Título en semibold 16px (solo se muestra en la variante con botón o si se pasa). */
  title?: ReactNode;
  /** Descripción. */
  children?: ReactNode;
  /** Icono de 14px dentro del círculo; por defecto un glifo según la severidad. */
  icon?: ReactNode;
  /** CTA (Figma `type=Con botón`). Sin él se usa la variante compacta `Sin botón`. */
  action?: PopoverAlertAction;
  /** Si existe, muestra la “x”. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** `aria-label` del botón de cerrar. Default “Cerrar”. */
  closeLabel?: string;
  /** `false` deja solo el punto indicador (Figma `Show Popover`). Default `true`. */
  showPopover?: boolean;
}
export declare function PopoverAlert(props: PopoverAlertProps): JSX.Element;

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Color de la barra de avance. */
  color?: 'primary' | 'green' | 'dark' | 'orange' | 'purple' | 'yellow' | 'red' | 'indigo';
  /** Valor actual (0 a max). Se ignora si indeterminate. */
  value?: number;
  /** Valor máximo; por defecto 100. */
  max?: number;
  /** Progreso sin duración conocida: animación continua, sin aria-valuenow. */
  indeterminate?: boolean;
  /** Texto arriba a la izquierda (p. ej. el paso o el nombre del archivo). */
  leftLabel?: ReactNode;
  /** Texto arriba a la derecha (p. ej. "50%"). */
  rightLabel?: ReactNode;
  /** Nombre accesible de la barra; por defecto "Progreso". */
  label?: string;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;

export interface ProtectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Figma `Protección`: sos (verde), se (color primario) o internacional (gris). Default `sos`. */
  type?: 'sos' | 'se' | 'internacional';
  /** Figma `Mensaje`: default (switch apagado por defecto), activada (switch encendido + valor declarado) o automatica (sin switch, ya protegido). Default `default`. */
  mode?: 'default' | 'activada' | 'automatica';
  /** Sustituye el título por defecto ("SOS Protección", "Protección SE", "Protección"). */
  title?: ReactNode;
  /** Sustituye la etiqueta junto al switch. */
  label?: ReactNode;
  /** Estado controlado del switch. */
  checked?: boolean;
  /** Estado inicial sin controlar. */
  defaultChecked?: boolean;
  /** Recibe el nuevo estado del switch. */
  onCheckedChange?: (checked: boolean, event: unknown) => void;
  /** Deshabilita el switch. */
  disabled?: boolean;
  /** Valor declarado controlado. */
  declaredValue?: string;
  /** Valor declarado inicial sin controlar. */
  defaultDeclaredValue?: string;
  /** Cambio del valor declarado. */
  onDeclaredValueChange?: ChangeEventHandler<HTMLInputElement>;
  /** Moneda junto al campo. Default "MXN". */
  currency?: string;
  /** Muestra el campo "Valor declarado" cuando la protección está activa. Default `true`. */
  showDeclaredValue?: boolean;
  /** Enlace a las políticas de uso. */
  policiesHref?: string;
  /** Clic en "políticas de uso". */
  onPoliciesClick?: MouseEventHandler<HTMLAnchorElement>;
  /** Enlace a la configuración de protección (modo `automatica`). */
  settingsHref?: string;
  /** Clic en el enlace de configuración. */
  onSettingsClick?: MouseEventHandler<HTMLAnchorElement>;
}
export declare function Protection(props: ProtectionProps): JSX.Element;

export interface ResumenDePagoProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Type`. Default `normal`. */
  type?: 'normal' | 'convenio';
  /** Figma `Breakpoint`. Default `desktop`. */
  breakpoint?: 'desktop' | 'mobile';
  /** Paquetería: logo 48×48 y nombre con servicio ("Fedex Standard Overnight"). */
  carrier?: { logo?: ReactNode; name?: ReactNode };
  /** Línea bajo el nombre ("Entrega estimada: 2 días"). */
  eta?: ReactNode;
  /** Tipo de recolección: título, detalle y tooltip. */
  pickup?: { title?: ReactNode; detail?: ReactNode; tooltip?: string };
  /** Precio ya formateado (tipo `normal`). */
  price?: ReactNode;
  /** Alias del convenio (tipo `convenio`). */
  convenioAlias?: ReactNode;
  /** Características. Default Rastreo e Impresora térmica. */
  features?: { label: ReactNode; icon?: ReactNode | 'pin' | 'printer' }[];
}
export declare function ResumenDePago(props: ResumenDePagoProps): JSX.Element;

export interface StatusRecordProps extends HTMLAttributes<HTMLOListElement> {
  /** Figma `Estatus`: etapa actual. `incidencia` marca En camino en rojo; `en-devolucion` cambia el último paso. Default `creado`. */
  status?: 'creado' | 'recolectado' | 'en-camino' | 'por-llegar' | 'entregado' | 'incidencia' | 'en-devolucion';
  /** Figma `Breakpoints`: desktop (círculos de 32px) o mobile (24px). Default `desktop`. */
  size?: 'desktop' | 'mobile';
  /** Sustituye textos de los pasos por clave (`creado`, `recolectado`, `en-camino`, `por-llegar`, `entregado`, `en-devolucion`). */
  labels?: Partial<Record<string, ReactNode>>;
}
export declare function StatusRecord(props: StatusRecordProps): JSX.Element;

export interface TabFilterTab {
  /** Unique id; compared with `value`. */
  id: string;
  /** Filter name, e.g. "Con incidencia". */
  label: ReactNode;
  /** 16px icon before the text. */
  icon?: ReactNode;
  /** Optional count shown after the label. */
  count?: ReactNode;
  /** Not selectable. */
  disabled?: boolean;
  /** DOM id of the content it filters (aria-controls). */
  panelId?: string;
}

export interface TabFilterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Filter tabs in order. */
  tabs: TabFilterTab[];
  /** Id of the active filter. */
  value?: string;
  /** Called with the id of the filter chosen. */
  onChange?: (id: string) => void;
}

export declare function TabFilter(props: TabFilterProps): JSX.Element;

export interface TabNavTab {
  /** Unique id; compared with `value`. */
  id: string;
  /** Tab text. */
  label: ReactNode;
  /** 18px icon before the text. */
  icon?: ReactNode;
  /** Not selectable; skipped by arrow keys. */
  disabled?: boolean;
  /** DOM id of the tab button (to label the panel with aria-labelledby). */
  tabId?: string;
  /** DOM id of the panel it controls (aria-controls). */
  panelId?: string;
}

export interface TabNavProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tabs in order. */
  tabs: TabNavTab[];
  /** Id of the selected tab. */
  value?: string;
  /** Called with the id of the tab chosen by click or arrow keys. */
  onChange?: (id: string) => void;
  /** Visual style: filled tab, pills or underline. Default `tab`. */
  variant?: 'tab' | 'pills' | 'underline';
  /** Dark surface version (MyShipHub). */
  dark?: boolean;
}

export declare function TabNav(props: TabNavProps): JSX.Element;

export interface TablaPaqueteriasProps extends HTMLAttributes<HTMLElement> {
  /** Una entrada por paquetería; cada objeto son las props de `CardPaqueteria` (más un `id` opcional para la key). */
  items?: (CardPaqueteriaProps & { id?: string | number })[];
  /** Variante de las cards. Default `v2`. */
  variant?: 'v1' | 'v2';
  /** `device` que se pasa a cada card. Default `desktop`. */
  device?: 'desktop' | 'mobile';
  /** Título del estado vacío cuando `items` está vacío. */
  emptyTitle?: ReactNode;
  /** Texto del estado vacío. */
  emptyText?: ReactNode;
  /** Alternativa a `items`: cards propias. */
  children?: ReactNode;
}
export declare function TablaPaqueterias(props: TablaPaqueteriasProps): JSX.Element;

export interface ToastLink {
  /** Texto del enlace (Figma “Text link”). */
  label: ReactNode;
  /** Destino del enlace. */
  href?: string;
  /** Acción al hacer clic. */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Severidad (Figma `Type`). Pinta la barra y el cuadro del icono. Default `info`. */
  type?: 'info' | 'warning' | 'success' | 'danger';
  /** Título corto, idealmente menos de 3 palabras. */
  title?: ReactNode;
  /** Descripción opcional (Figma `Show body`), máximo 2 líneas. */
  children?: ReactNode;
  /** Fecha y hora opcional (Figma `Show date`). */
  date?: ReactNode;
  /** Enlace opcional (Figma `Show link`). */
  link?: ToastLink;
  /** Icono de 24px que sustituye al glifo por defecto del tipo. */
  icon?: ReactNode;
  /** Si existe, muestra el botón de cerrar y se llama al pulsarlo. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** `aria-label` del botón de cerrar. Default “Cerrar notificación”. */
  closeLabel?: string;
  /** Ancho móvil de 310px en lugar de 394px (Figma `Mobile`). */
  mobile?: boolean;
}
export declare function Toast(props: ToastProps): JSX.Element;

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Lado del elemento disparador en el que aparece el tooltip (Figma `Position`); la flecha apunta al lado contrario. Default `top`. */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Título opcional (Figma `Con título`). Cambia a la versión de 192px de ancho. */
  title?: ReactNode;
  /** Texto del tooltip, máximo 50 caracteres. */
  children?: ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;

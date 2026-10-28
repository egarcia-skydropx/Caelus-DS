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

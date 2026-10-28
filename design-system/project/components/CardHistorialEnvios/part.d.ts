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

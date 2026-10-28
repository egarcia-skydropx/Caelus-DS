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

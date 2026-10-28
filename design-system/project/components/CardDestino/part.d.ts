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

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

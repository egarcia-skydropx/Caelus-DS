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

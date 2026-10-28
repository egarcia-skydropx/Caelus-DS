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

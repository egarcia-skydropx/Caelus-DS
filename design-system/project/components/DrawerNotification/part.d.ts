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

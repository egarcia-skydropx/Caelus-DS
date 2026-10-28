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

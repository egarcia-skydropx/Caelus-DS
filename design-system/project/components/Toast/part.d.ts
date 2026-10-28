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

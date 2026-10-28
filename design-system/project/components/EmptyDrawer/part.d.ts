export interface EmptyDrawerAction {
  /** Texto del botón. */
  label: ReactNode;
  /** Se llama al hacer clic. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Deshabilita el botón. */
  disabled?: boolean;
}
export interface EmptyDrawerProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Título del drawer, coherente con la sección que lo abrió. */
  title: ReactNode;
  /** Muestra la X y la llama al hacer clic. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible de la X. Default "Cerrar". */
  closeLabel?: string;
  /** Ilustración de 128px (Figma `.Ilustración`, distinta para Pro y para SE/WL). */
  illustration?: ReactNode;
  /** Encabezado del estado vacío. */
  heading?: ReactNode;
  /** Explicación de por qué está vacío y qué hacer. */
  description?: ReactNode;
  /** Botón primario (crear el primer elemento). */
  primaryAction?: EmptyDrawerAction;
  /** Botón secundario (aprender más, otra vía). */
  secondaryAction?: EmptyDrawerAction;
  /** Contenido extra bajo el estado vacío. */
  children?: ReactNode;
}
export declare function EmptyDrawer(props: EmptyDrawerProps): JSX.Element;

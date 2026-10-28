export interface PopoverLink {
  /** Texto del enlace. */
  label: ReactNode;
  /** Destino del enlace. */
  href?: string;
  /** Abre en otra pestaña (`target="_blank"`). */
  external?: boolean;
  /** Acción al hacer clic. */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  /** Lado del disparador donde aparece y alineación de la flecha (Figma `Position`). Default `top-center`. */
  position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'left-center' | 'left-top' | 'left-bottom' | 'right-center' | 'right-top' | 'right-bottom';
  /** Título en bold 12px (Figma `Show header`). */
  header?: ReactNode;
  /** Contenido (Figma `Show body`). */
  children?: ReactNode;
  /** Enlace opcional con icono de enlace externo (Figma `Show link`). */
  link?: PopoverLink;
  /** Si existe, muestra la “x” (Figma `Show close icon`). */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** `aria-label` del botón de cerrar. Default “Cerrar”. */
  closeLabel?: string;
}
export declare function Popover(props: PopoverProps): JSX.Element;

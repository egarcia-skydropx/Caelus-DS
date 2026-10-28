export interface PopoverAlertAction {
  /** Texto del botón (CTA de redirección). */
  label: ReactNode;
  /** Acción del botón. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Icono a la derecha del texto; por defecto una flecha. */
  icon?: ReactNode;
}
export interface PopoverAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Severidad (Figma `style`: Warning, Info, Wrong → `danger`, Primary). Default `warning`. */
  severity?: 'warning' | 'info' | 'danger' | 'primary';
  /** Lado del punto donde aparece la tarjeta (Figma `direction`). Default `right`. */
  direction?: 'top' | 'right' | 'bottom' | 'left';
  /** Título en semibold 16px (solo se muestra en la variante con botón o si se pasa). */
  title?: ReactNode;
  /** Descripción. */
  children?: ReactNode;
  /** Icono de 14px dentro del círculo; por defecto un glifo según la severidad. */
  icon?: ReactNode;
  /** CTA (Figma `type=Con botón`). Sin él se usa la variante compacta `Sin botón`. */
  action?: PopoverAlertAction;
  /** Si existe, muestra la “x”. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** `aria-label` del botón de cerrar. Default “Cerrar”. */
  closeLabel?: string;
  /** `false` deja solo el punto indicador (Figma `Show Popover`). Default `true`. */
  showPopover?: boolean;
}
export declare function PopoverAlert(props: PopoverAlertProps): JSX.Element;

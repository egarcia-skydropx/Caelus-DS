export interface ModalAction {
  /** Texto del botón. */
  label: ReactNode;
  /** Se llama al hacer clic. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Deshabilita el botón. */
  disabled?: boolean;
}
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Figma `Type`: informativo (título en el header), confirmacion (título centrado con ilustración) o critico (acción destructiva). Default `informativo`. */
  type?: 'informativo' | 'confirmacion' | 'critico';
  /** Título del modal; también nombra el diálogo (`aria-labelledby`). */
  title?: ReactNode;
  /** Figma `Show title`. Default `true`. */
  showTitle?: boolean;
  /** Texto de apoyo (Figma `Body`); se enlaza con `aria-describedby`. */
  description?: ReactNode;
  /** Ilustración opcional sobre el texto (96px en Figma). */
  illustration?: ReactNode;
  /** Contenido libre del cuerpo, después del texto. */
  children?: ReactNode;
  /** Cierra el modal: botón X, tecla Escape y clic en el fondo (no en modo `inline`). */
  onClose?: (event: unknown) => void;
  /** Etiqueta accesible de la X. Default "Cerrar". */
  closeLabel?: string;
  /** Botón principal (naranja/primario; rojo `alert` en `critico`). */
  primaryAction?: ModalAction;
  /** Botón secundario (cancelar / salida clara). */
  secondaryAction?: ModalAction;
  /** Sustituye el footer completo; `null` lo oculta. */
  footer?: ReactNode;
  /** Figma `.modal-footer`: primary (alineado a la derecha), secondary (centrado, acción roja) o ver-mas. Default según `type`. */
  footerVariant?: 'primary' | 'secondary' | 'ver-mas';
  /** Línea divisoria entre contenido y footer. Default `true` en `informativo`. */
  separator?: boolean;
  /** Ancho del diálogo (número = px). Default 416px; se ajusta al 100% en pantallas chicas. */
  width?: number | string;
  /** Renderiza el fondo y el diálogo en el flujo del documento (para documentación o previews) en vez de `position: fixed`. */
  inline?: boolean;
  /** Clase extra para el contenedor del cuerpo. */
  bodyClassName?: string;
}
export declare function Modal(props: ModalProps): JSX.Element;

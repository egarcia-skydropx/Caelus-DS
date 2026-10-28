export interface StatusDeliveryItem {
  /** Nombre del estatus. */
  label: ReactNode;
  /** Explicación en una frase. */
  description?: ReactNode;
  /** Color del punto; debe coincidir con el del dashboard de envíos. Default `indigo`. */
  color?: 'blue' | 'primary' | 'indigo' | 'green' | 'red' | 'orange';
}
export interface ModalStatusDeliveryProps extends Omit<ModalProps, 'type' | 'children'> {
  /** Columnas de estatus; por defecto flujo normal a la izquierda y excepciones a la derecha. */
  columns?: StatusDeliveryItem[][];
  /** Texto del botón del footer, que llama a `onClose`. Default "Cerrar". */
  closeActionLabel?: string;
  /** Contenido extra bajo las columnas. */
  children?: ReactNode;
}
export declare function ModalStatusDelivery(props: ModalStatusDeliveryProps): JSX.Element;

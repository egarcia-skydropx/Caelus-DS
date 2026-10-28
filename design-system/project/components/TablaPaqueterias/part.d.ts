export interface TablaPaqueteriasProps extends HTMLAttributes<HTMLElement> {
  /** Una entrada por paquetería; cada objeto son las props de `CardPaqueteria` (más un `id` opcional para la key). */
  items?: (CardPaqueteriaProps & { id?: string | number })[];
  /** Variante de las cards. Default `v2`. */
  variant?: 'v1' | 'v2';
  /** `device` que se pasa a cada card. Default `desktop`. */
  device?: 'desktop' | 'mobile';
  /** Título del estado vacío cuando `items` está vacío. */
  emptyTitle?: ReactNode;
  /** Texto del estado vacío. */
  emptyText?: ReactNode;
  /** Alternativa a `items`: cards propias. */
  children?: ReactNode;
}
export declare function TablaPaqueterias(props: TablaPaqueteriasProps): JSX.Element;

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  /** Distribución (Figma `Vista`): desktop muestra varias diapositivas con flechas a los lados; mobile una sola con flechas encima. Default `desktop`. */
  view?: 'desktop' | 'mobile';
  /** Indicadores (Figma `Indicadores`: No → `none`, Si → `overlay` sobre las diapositivas, Abajo → `below` entre las flechas). Default `none`. */
  indicators?: 'none' | 'overlay' | 'below';
  /** Diapositivas visibles a la vez en desktop. Default 3. */
  perView?: number;
  /** Índice controlado de la primera diapositiva visible. */
  index?: number;
  /** Índice inicial si no se controla. Default 0. */
  defaultIndex?: number;
  /** Se llama al cambiar de diapositiva. */
  onIndexChange?: (index: number) => void;
  /** `aria-label` del botón anterior. Default “Anterior”. */
  prevLabel?: string;
  /** `aria-label` del botón siguiente. Default “Siguiente”. */
  nextLabel?: string;
  /** Las diapositivas (imágenes, tarjetas, banners). */
  children?: ReactNode;
}
export declare function Carousel(props: CarouselProps): JSX.Element;

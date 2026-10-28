export interface IndicatorBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color del estado (fondo, punto y texto de la familia indicators-*). */
  color?: 'blue' | 'gray' | 'green' | 'indigo' | 'orange' | 'primary' | 'red' | 'yellow';
  /** Texto del estado (una o dos palabras). */
  children?: ReactNode;
}
export declare function IndicatorBadge(props: IndicatorBadgeProps): JSX.Element;

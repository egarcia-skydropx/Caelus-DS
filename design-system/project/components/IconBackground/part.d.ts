export interface IconBackgroundProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color semántico del fondo y del ícono. */
  color?: 'white' | 'dark' | 'green' | 'red' | 'blue' | 'yellow' | 'orange' | 'purple' | 'gray' | 'teal' | 'secondary' | 'indigo' | 'pink';
  /** Contenedor circular o cuadrado (radio 8px). */
  shape?: 'circle' | 'square';
  /** xxs 20, xs 24, sm 32, md 48, lg 64, xl 96 px. */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Ícono (usa stroke/fill currentColor); por defecto una palomita. */
  icon?: ReactNode;
  /** Alternativa a icon. */
  children?: ReactNode;
}
export declare function IconBackground(props: IconBackgroundProps): JSX.Element;

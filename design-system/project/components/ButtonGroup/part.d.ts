export interface ButtonGroupItem {
  /** Llave estable para React (por defecto, el índice). */
  key?: string | number;
  /** Texto del segmento. Sin label y con icon, el segmento es solo ícono. */
  label?: ReactNode;
  /** Ícono de 20px a la izquierda del texto. */
  icon?: ReactNode;
  /** Obligatorio en segmentos de solo ícono. */
  'aria-label'?: string;
  /** Segmento seleccionado (filtros exclusivos tipo Años / Meses / Días); pone aria-pressed. */
  selected?: boolean;
  /** Segmento informativo, no clicable (p. ej. el conteo "12k"). */
  stat?: boolean;
  /** Texto de ayuda que aparece arriba al pasar el mouse o enfocar. */
  tooltip?: ReactNode;
  /** Deshabilita el segmento. */
  disabled?: boolean;
  /** Acción del segmento. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Segmentos del grupo, de izquierda a derecha. */
  items: ButtonGroupItem[];
}
export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;

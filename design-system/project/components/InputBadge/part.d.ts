export interface InputBadgeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Texto de la etiqueta, ligada al input con htmlFor/id. */
  label?: ReactNode;
  /** Texto de apoyo o de error, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px de alto mínimo. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Valores controlados que se muestran como badges. */
  values?: string[];
  /** Valores iniciales si no es controlado. */
  defaultValues?: string[];
  /** Se llama con la lista nueva al agregar (Enter, coma o salir del campo) o quitar un valor. */
  onValuesChange?: (values: string[]) => void;
  /** Alto máximo de la zona de badges antes de hacer scroll (Figma `Scroll`). Default 112. */
  maxHeight?: number;
  /** Prefijo de la etiqueta accesible de cada X. Default "Quitar". */
  removeLabel?: string;
}
export declare function InputBadge(props: InputBadgeProps): JSX.Element;

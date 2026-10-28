export interface InputCounterProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'min' | 'max' | 'step' | 'onChange' | 'type'> {
  /** Texto de la etiqueta, ligada con htmlFor/id. */
  label?: ReactNode;
  /** Si se pasa, muestra el icono de información junto a la etiqueta con este texto accesible. */
  labelInfo?: string;
  /** Texto de apoyo o de error, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Valor controlado. */
  value?: number;
  /** Valor inicial si no es controlado. Default `min` o 0. */
  defaultValue?: number;
  /** Límite inferior; el botón − se deshabilita al llegar. */
  min?: number;
  /** Límite superior; el botón + se deshabilita al llegar. */
  max?: number;
  /** Incremento de cada clic o flecha. Default 1. */
  step?: number;
  /** Se llama con el nuevo número (ya limitado a min/max). */
  onValueChange?: (value: number) => void;
  /** Etiqueta accesible del botón −. Default "Disminuir". */
  decrementLabel?: string;
  /** Etiqueta accesible del botón +. Default "Aumentar". */
  incrementLabel?: string;
}
export declare function InputCounter(props: InputCounterProps): JSX.Element;

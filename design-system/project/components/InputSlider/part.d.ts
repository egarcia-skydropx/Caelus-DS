export interface InputSliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'min' | 'max' | 'step' | 'onChange'> {
  /** Figma `Type`: value = un valor, range = rango con dos thumbs, volume = con iconos de volumen, with-data = con marcas debajo. Default `value`. */
  type?: 'value' | 'range' | 'volume' | 'with-data';
  /** Mínimo. Default 0. */
  min?: number;
  /** Máximo. Default 100. */
  max?: number;
  /** Incremento. Default 1. */
  step?: number;
  /** Valor controlado: número, o `[desde, hasta]` en `range`. */
  value?: number | [number, number];
  /** Valor inicial si no es controlado. */
  defaultValue?: number | [number, number];
  /** Se llama con el nuevo valor (número o par en `range`). */
  onValueChange?: (value: number | [number, number]) => void;
  /** Figma `Tooltip`: muestra el valor en una burbuja oscura sobre el thumb (no aplica a `range`). */
  tooltip?: boolean;
  /** Da formato al valor del tooltip, de las marcas y de aria-valuetext (p. ej. "$500"). */
  formatValue?: (value: number) => string;
  /** Valores de las marcas en `with-data`. Default: 4 marcas parejas de min a max. */
  marks?: number[];
  /** Etiqueta accesible del thumb inferior en `range`. Default "Valor mínimo". */
  minLabel?: string;
  /** Etiqueta accesible del thumb superior en `range`. Default "Valor máximo". */
  maxLabel?: string;
}
export declare function InputSlider(props: InputSliderProps): JSX.Element;

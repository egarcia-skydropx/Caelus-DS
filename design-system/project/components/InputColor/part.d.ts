/** Muestra de color + campo hexadecimal. */
export interface InputColorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Label sobre el campo. */
  label?: ReactNode;
  /** Color "#RRGGBB" (controlado). */
  value?: string;
  /** Color inicial. Default "#D68205". */
  defaultValue?: string;
  /** Se llama con "#RRGGBB" válido. */
  onChange?: (value: string) => void;
  /** Etiqueta accesible de la muestra. Default "Elegir color". */
  swatchLabel?: string;
}
export declare function InputColor(props: InputColorProps): JSX.Element;

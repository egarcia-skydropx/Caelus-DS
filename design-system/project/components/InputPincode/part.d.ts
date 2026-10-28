export interface InputPincodeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'size'> {
  /** Texto sobre las casillas. Figma usa "Tu código". */
  label?: ReactNode;
  /** Texto de apoyo o de error, ligado a cada casilla con aria-describedby. */
  helperText?: ReactNode;
  /** Estados no alcanzables por CSS. Figma `Estado` Error. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Número de casillas. Default 6. */
  length?: number;
  /** Código controlado (solo dígitos). */
  value?: string;
  /** Código inicial si no es controlado. */
  defaultValue?: string;
  /** Se llama con el código (solo dígitos) cada vez que cambia. */
  onValueChange?: (code: string) => void;
  /** Se llama cuando se llenan todas las casillas. */
  onComplete?: (code: string) => void;
  /** Placeholder de cada casilla. Default "0". */
  placeholder?: string;
}
export declare function InputPincode(props: InputPincodeProps): JSX.Element;

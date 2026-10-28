export interface InputAmountProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Texto de la etiqueta (qué monto se captura). */
  label?: ReactNode;
  /** Si se pasa, muestra el icono de información junto a la etiqueta con este texto accesible. */
  labelInfo?: string;
  /** Texto de apoyo o de error, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Muestra el check verde de monto válido. */
  valid?: boolean;
  /** Bandera del país (18×18), como ReactNode. */
  flag?: ReactNode;
  /** Código de moneda visible, p. ej. "MXN" o "USD". Default "MXN". Pasa "" para ocultarlo. */
  currency?: string;
  /** Símbolo antes del número. Default "$". Pasa "" para ocultarlo. */
  symbol?: string;
}
export declare function InputAmount(props: InputAmountProps): JSX.Element;

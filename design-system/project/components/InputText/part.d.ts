export interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Texto de la etiqueta, ligada al input con htmlFor/id. */
  label?: ReactNode;
  /** Si se pasa, muestra el icono de información junto a la etiqueta con este texto accesible. */
  labelInfo?: string;
  /** Texto de apoyo debajo del campo; en error se usa como mensaje de error. Ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px de alto. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. `disabled` también se activa con la prop nativa `disabled`. */
  state?: 'default' | 'error' | 'disabled';
  /** Muestra el check verde de valor válido (Figma `Show check icon` en Value). */
  valid?: boolean;
  /** Icono a la izquierda del texto (18px). */
  leftIcon?: ReactNode;
  /** Icono a la derecha del texto (18px). */
  rightIcon?: ReactNode;
}
export declare function InputText(props: InputTextProps): JSX.Element;

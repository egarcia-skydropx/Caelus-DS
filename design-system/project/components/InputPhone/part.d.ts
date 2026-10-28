export interface InputPhoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Texto de la etiqueta. Figma usa "Celular*". */
  label?: ReactNode;
  /** Instrucción bajo el campo (p. ej. no repetir el código de país) o mensaje de error. */
  helperText?: ReactNode;
  /** Figma `Size`: base = 42px, sm = 37px. Default `base`. */
  size?: 'sm' | 'base';
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Muestra el check verde de número válido. */
  valid?: boolean;
  /** Código de país visible en el selector. Default "+52". */
  countryCode?: string;
  /** Bandera (20×14) del país, como ReactNode. */
  flag?: ReactNode;
  /** Abre el selector de país (el listado lo implementa el consumidor). */
  onCountryClick?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible del botón de país. Default "Código de país +52, cambiar". */
  countryLabel?: string;
  /** Texto del botón primario debajo del campo (Figma `Show button`, "Enviar código"). Sin él no se muestra. */
  actionLabel?: ReactNode;
  /** Clic del botón primario. */
  onAction?: MouseEventHandler<HTMLButtonElement>;
}
export declare function InputPhone(props: InputPhoneProps): JSX.Element;

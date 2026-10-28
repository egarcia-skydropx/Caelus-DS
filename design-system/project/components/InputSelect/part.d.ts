/** Select nativo con label, helper y estados de Caelus. */
export interface InputSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Texto del label (Medium 14px). */
  label?: ReactNode;
  /** Texto del icono de información junto al label; si existe, se muestra el icono. */
  info?: string;
  /** Texto de ayuda bajo el campo. */
  helperText?: ReactNode;
  /** Estado de error. Si es texto, reemplaza al helper. */
  error?: boolean | string;
  /** Desactiva el campo. */
  disabled?: boolean;
  /** Figma `Sizes`: sm = 37px, base = 42px. Default `base`. */
  size?: 'sm' | 'base';
  /** Opciones; también puedes pasar `<option>` como children. */
  options?: { value: string; label: string; disabled?: boolean }[];
  /** Primera opción vacía y no seleccionable. */
  placeholder?: string;
  /** Icono o logo a la izquierda (Figma `Type=Logos`). */
  leftIcon?: ReactNode;
  children?: ReactNode;
}
export declare function InputSelect(props: InputSelectProps): JSX.Element;

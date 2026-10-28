/** Lista desplegable de selección múltiple con badges eliminables. */
export interface InputMultiselectProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'defaultValue' | 'onChange'> {
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
  /** Figma `Size`. Default `base`. */
  size?: 'sm' | 'base';
  /** Opciones. */
  options?: { value: string | number; label: string; disabled?: boolean }[];
  /** Valores seleccionados (controlado). */
  value?: (string | number)[];
  /** Valores iniciales (no controlado). */
  defaultValue?: (string | number)[];
  /** Se llama con la nueva lista de valores. */
  onChange?: (value: (string | number)[]) => void;
  /** Texto cuando no hay selección. */
  placeholder?: string;
  /** Badges visibles antes de agrupar en "+N". Default 8. */
  maxBadges?: number;
  /** Placeholder del buscador interno. Default "Búsqueda". */
  searchPlaceholder?: string;
  /** Texto del check general. Default "Seleccionar todo". */
  selectAllLabel?: string;
  /** Texto sin coincidencias. Default "Sin resultados". */
  emptyText?: string;
  /** Abre la lista al montar (demos). */
  defaultOpen?: boolean;
  /** Búsqueda inicial (demos). */
  defaultSearch?: string;
}
export declare function InputMultiselect(props: InputMultiselectProps): JSX.Element;

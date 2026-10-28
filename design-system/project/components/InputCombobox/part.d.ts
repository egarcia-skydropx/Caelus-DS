export interface CaelusOption {
  /** Valor único de la opción. */
  value: string | number;
  /** Texto visible. */
  label: string;
  /** Título de sección: opciones seguidas con el mismo `group` se agrupan. */
  group?: string;
  /** Icono o bandera a la izquierda (también se muestra en el campo al seleccionarla). */
  icon?: ReactNode;
  /** Opción no seleccionable. */
  disabled?: boolean;
}
/** Campo con lista desplegable y búsqueda predictiva de una sola opción. */
export interface InputComboboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
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
  /** Opciones de la lista. */
  options?: CaelusOption[];
  /** Valor seleccionado (controlado). `null` = sin selección. */
  value?: string | number | null;
  /** Valor inicial (no controlado). */
  defaultValue?: string | number | null;
  /** Se llama al elegir o borrar una opción. */
  onChange?: (value: string | number | null, option: CaelusOption | null) => void;
  /** Se llama cada vez que cambia el texto escrito. */
  onInputChange?: (text: string) => void;
  /** Placeholder del campo. */
  placeholder?: string;
  /** Figma `Size`: sm = 37px, base = 42px. Default `base`. */
  size?: 'sm' | 'base';
  /** Icono a la izquierda del texto. */
  leftIcon?: ReactNode;
  /** Abre la lista al montar (útil para demos). */
  defaultOpen?: boolean;
  /** Texto inicial escrito en el buscador (útil para demos). */
  defaultInputValue?: string;
  /** Texto cuando no hay coincidencias. Default "Sin resultados". */
  emptyText?: string;
  /** Etiqueta accesible del botón X. Default "Borrar". */
  clearLabel?: string;
  /** Muestra el chevron. Default true. */
  showChevron?: boolean;
  /** Muestra la X para borrar. Default true. */
  clearable?: boolean;
  /** Caracteres mínimos antes de abrir la lista. Default 0. */
  minChars?: number;
  /** Clase extra para la caja del campo. */
  controlClassName?: string;
}
export declare function InputCombobox(props: InputComboboxProps): JSX.Element;

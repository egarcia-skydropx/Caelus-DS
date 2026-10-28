/** Buscador que muestra resultados en una lista al escribir. */
export interface InputSearchSelectProps extends Omit<InputComboboxProps, 'showChevron'> {
  /** Caracteres mínimos antes de mostrar resultados. Default 2. */
  minChars?: number;
}
export declare function InputSearchSelect(props: InputSearchSelectProps): JSX.Element;

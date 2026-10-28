/** Combobox con bandera por opción (países). */
export interface InputComboboxFlagProps extends Omit<InputComboboxProps, 'options'> {
  /** Opciones; `flag` se dibuja en una caja de 28×20 (gris si no se pasa). */
  options?: (CaelusOption & { flag?: ReactNode })[];
}
export declare function InputComboboxFlag(props: InputComboboxFlagProps): JSX.Element;

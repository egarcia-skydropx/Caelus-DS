export interface InputCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Texto de la etiqueta; toda la etiqueta es área de clic. Sin él pasa `aria-label`. */
  label?: ReactNode;
  /** Texto de apoyo bajo la etiqueta, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Figma `Partial selection`: selección parcial (p. ej. "seleccionar todo" con algunas filas marcadas). */
  indeterminate?: boolean;
}
export declare function InputCheckbox(props: InputCheckboxProps): JSX.Element;

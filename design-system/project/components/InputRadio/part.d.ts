export interface InputRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Texto de la etiqueta; toda la etiqueta es área de clic. Sin él pasa `aria-label`. */
  label?: ReactNode;
  /** Texto de apoyo bajo la etiqueta, ligado con aria-describedby. */
  helperText?: ReactNode;
}
export declare function InputRadio(props: InputRadioProps): JSX.Element;

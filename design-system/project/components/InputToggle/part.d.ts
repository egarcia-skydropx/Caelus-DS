export interface InputToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Texto de la etiqueta (qué se activa). Sin él pasa `aria-label`. */
  label?: ReactNode;
  /** Texto de apoyo bajo la etiqueta, ligado con aria-describedby. */
  helperText?: ReactNode;
}
export declare function InputToggle(props: InputToggleProps): JSX.Element;

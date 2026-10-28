/** Selector de archivo compacto con botón integrado. */
export interface InputFileProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label sobre el campo. */
  label?: ReactNode;
  /** Nota bajo el campo. */
  helperText?: ReactNode;
  /** Figma `Size`: default = 42px, large = 52px. */
  size?: 'default' | 'large';
  /** Texto del botón. Default "Seleccionar archivo". */
  buttonLabel?: ReactNode;
  /** Texto sin archivo. Default "Ningún archivo seleccionado". */
  placeholder?: string;
  /** Nombre a mostrar (si lo controlas tú). */
  fileName?: string;
}
export declare function InputFile(props: InputFileProps): JSX.Element;

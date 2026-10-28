/** Buscador con botón "Buscar" visible (página de rastreo). */
export interface InputSearchBtProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Se llama con el texto al enviar. */
  onSearch?: (value: string) => void;
  /** Se llama al pulsar la X. */
  onClear?: () => void;
  /** Etiqueta accesible de la X. */
  clearLabel?: string;
  /** Texto del botón. Default "Buscar". */
  buttonLabel?: ReactNode;
}
export declare function InputSearchBt(props: InputSearchBtProps): JSX.Element;

/** Buscador compacto para filtrar tablas, con botón de lupa. */
export interface InputSearchTablesProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Se llama con el texto al pulsar Enter o el botón. */
  onSearch?: (value: string) => void;
  /** Se llama al pulsar la X. */
  onClear?: () => void;
  /** Etiqueta accesible de la X. */
  clearLabel?: string;
  /** Etiqueta accesible del botón. Default "Buscar". */
  buttonLabel?: string;
}
export declare function InputSearchTables(props: InputSearchTablesProps): JSX.Element;

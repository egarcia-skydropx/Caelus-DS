/** Buscador simple con lupa y X para borrar (navbars, bases de otros buscadores). */
export interface InputSearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Figma `Size`: sm = 37px, base = 42px. Default `base`. */
  size?: 'sm' | 'base';
  /** Se llama al pulsar la X. */
  onClear?: () => void;
  /** Etiqueta accesible de la X. Default "Borrar búsqueda". */
  clearLabel?: string;
}
export declare function InputSearch(props: InputSearchProps): JSX.Element;

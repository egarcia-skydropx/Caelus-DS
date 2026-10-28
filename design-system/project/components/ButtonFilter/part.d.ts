export interface ButtonFilterProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Forma del botón: con texto, circular o cuadrado (solo ícono; requiere aria-label). */
  shape?: 'button' | 'circle' | 'square';
  /** Hay filtros aplicados: fondo índigo y aria-pressed. */
  active?: boolean;
  /** Ícono de 18px; por defecto un embudo. */
  icon?: ReactNode;
  /** Etiqueta visible (solo shape="button"); por defecto "Filtros". */
  children?: ReactNode;
}
export declare function ButtonFilter(props: ButtonFilterProps): JSX.Element;

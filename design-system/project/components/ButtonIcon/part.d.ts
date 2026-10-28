export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Ícono de 24px que se muestra (también acepta children). */
  icon?: ReactNode;
  /** Con fondo gris (true, por defecto) o transparente (false). */
  background?: boolean;
  /** Herramienta seleccionada: borde de 2px y aria-pressed. */
  active?: boolean;
  /** Obligatorio: el botón no tiene texto visible. */
  'aria-label': string;
}
export declare function ButtonIcon(props: ButtonIconProps): JSX.Element;

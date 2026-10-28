export interface ButtonSocialProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tamaño: xs (34px), sm (37px), base (41px) o lg (48px). */
  size?: 'xs' | 'sm' | 'base' | 'lg';
  /** Con borde gris (true, por defecto) o solo fondo blanco (false). */
  outline?: boolean;
  /** Proveedor: colorea el ícono con su token core-social-*. */
  provider?: 'facebook' | 'twitter' | 'google' | 'dribbble' | 'github';
  /** Logo oficial del proveedor (el consumidor lo provee; usa currentColor si es monocromo). */
  icon?: ReactNode;
  /** Texto del botón, por ejemplo "Continuar con Google". */
  children?: ReactNode;
}
export declare function ButtonSocial(props: ButtonSocialProps): JSX.Element;

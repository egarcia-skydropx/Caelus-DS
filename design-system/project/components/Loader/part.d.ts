export interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  /** sm 50px, default 75px o lg 100px. */
  size?: 'sm' | 'default' | 'lg';
  /** Colores para fondos oscuros. */
  dark?: boolean;
  /** Muestra el anillo de fondo (true por defecto). */
  track?: boolean;
  /** Texto para lectores de pantalla; por defecto "Cargando". */
  label?: string;
}
export declare function Loader(props: LoaderProps): JSX.Element;

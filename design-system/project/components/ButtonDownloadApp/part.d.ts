export interface ButtonDownloadAppProps extends HTMLAttributes<HTMLElement> {
  /** Tienda: define el nombre por defecto. */
  store?: 'appstore' | 'googleplay';
  /** Logo oficial de la tienda (38px), lo provee el consumidor. */
  badge?: ReactNode;
  /** Primera línea; por defecto "Descárgala en". */
  caption?: ReactNode;
  /** Segunda línea; por defecto "App Store" o "Google Play". */
  storeName?: ReactNode;
  /** Si se pasa, se renderiza como enlace <a>; si no, como <button>. */
  href?: string;
  /** Destino del enlace (solo con href). */
  target?: string;
  /** Relación del enlace (solo con href). */
  rel?: string;
}
export declare function ButtonDownloadApp(props: ButtonDownloadAppProps): JSX.Element;

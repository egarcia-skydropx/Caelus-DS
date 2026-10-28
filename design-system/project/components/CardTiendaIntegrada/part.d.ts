export interface CardTiendaIntegradaProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Ecommerce`: define el nombre por defecto de la plataforma. Default `shopify`. */
  ecommerce?: 'shopify' | 'woocommerce' | 'api-key';
  /** Figma `Estatus`. Default `activada`. */
  status?: 'activada' | 'desactivada' | 'actualizar-permisos';
  /** Figma `Versión`. Default `desktop`. */
  version?: 'desktop' | 'mobile';
  /** Logo de la plataforma (24×24). */
  logo?: ReactNode;
  /** Nombre de la plataforma; reemplaza el que viene de `ecommerce`. */
  platform?: ReactNode;
  /** Nombre de la tienda ("Mi tiendita"). */
  storeName?: ReactNode;
  /** URL de la tienda o API key enmascarada. */
  url?: ReactNode;
  /** Si se pasa (y no es API key), la URL es un enlace. */
  href?: string;
  /** Fecha de conexión ("Conectada el 04 de octubre de 2023"). */
  connectedAt?: ReactNode;
  /** Clic en el botón de más opciones. */
  onMenu?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible del botón de opciones. */
  menuLabel?: string;
}
export declare function CardTiendaIntegrada(props: CardTiendaIntegradaProps): JSX.Element;

export interface CardPaqueteriasCotizadorProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Type`. Default `paqueteria`. */
  type?: 'paqueteria' | 'convenio' | 'no-disponible' | 'cargos-extra' | 'alerta' | 'sin-beneficio';
  /** Figma `Breakpoints`. Default `desktop`. */
  breakpoints?: 'desktop' | 'mobile';
  /** Paquetería: logo 48×48, nombre y servicio. */
  carrier?: { logo?: ReactNode; name?: ReactNode; service?: ReactNode };
  /** Tipo de recolección: título ("Llevar a sucursal"), detalle y texto del tooltip. */
  pickup?: { title?: ReactNode; detail?: ReactNode; tooltip?: string };
  /** Entrega estimada ("2 días"). */
  eta?: ReactNode;
  /** Precio ya formateado ("$150.00"). */
  price?: ReactNode;
  /** Nota bajo el precio ("*Incluye cargos extra"). */
  priceNote?: ReactNode;
  /** Alias del convenio, con `type="convenio"`. */
  convenioAlias?: ReactNode;
  /** Características de la paquetería. Default Rastreo e Impresora térmica. */
  features?: { label: ReactNode; icon?: ReactNode | 'pin' | 'printer' }[];
  /** Muestra "Con automatización" en la fila de características. */
  automation?: boolean;
  /** Mensaje de la franja inferior en `no-disponible`, `cargos-extra` y `alerta`. */
  message?: ReactNode;
  /** Texto del botón. Default "Crear envío". */
  actionLabel?: ReactNode;
  /** Clic en el botón (deshabilitado en `no-disponible`). */
  onCreate?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CardPaqueteriasCotizador(props: CardPaqueteriasCotizadorProps): JSX.Element;

export interface ResumenDePagoProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Type`. Default `normal`. */
  type?: 'normal' | 'convenio';
  /** Figma `Breakpoint`. Default `desktop`. */
  breakpoint?: 'desktop' | 'mobile';
  /** Paquetería: logo 48×48 y nombre con servicio ("Fedex Standard Overnight"). */
  carrier?: { logo?: ReactNode; name?: ReactNode };
  /** Línea bajo el nombre ("Entrega estimada: 2 días"). */
  eta?: ReactNode;
  /** Tipo de recolección: título, detalle y tooltip. */
  pickup?: { title?: ReactNode; detail?: ReactNode; tooltip?: string };
  /** Precio ya formateado (tipo `normal`). */
  price?: ReactNode;
  /** Alias del convenio (tipo `convenio`). */
  convenioAlias?: ReactNode;
  /** Características. Default Rastreo e Impresora térmica. */
  features?: { label: ReactNode; icon?: ReactNode | 'pin' | 'printer' }[];
}
export declare function ResumenDePago(props: ResumenDePagoProps): JSX.Element;

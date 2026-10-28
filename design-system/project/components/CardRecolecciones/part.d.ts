export interface CardRecoleccionesProps extends HTMLAttributes<HTMLElement> {
  /** Versión móvil (Figma `wl-card-recolecciones-mobile`). Default `false`. */
  mobile?: boolean;
  /** Número de recolección ("123456789"). */
  number?: ReactNode;
  /** Badge de estatus opcional en el encabezado (usa `Caelus.Badge`). */
  status?: ReactNode;
  /** Paquetería: logo 48×48, nombre y servicio opcional. */
  carrier?: { logo?: ReactNode; name?: ReactNode; service?: ReactNode };
  /** Dirección de origen: nombre y CP/colonia. */
  origin?: { name?: ReactNode; detail?: ReactNode };
  /** Fecha y horario programados. */
  schedule?: { date?: ReactNode; time?: ReactNode };
  /** Cantidad de paquetes. */
  packages?: ReactNode;
  /** Peso total ("11kg"). */
  weight?: ReactNode;
  /** Clic en el botón de más opciones. */
  onMore?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CardRecolecciones(props: CardRecoleccionesProps): JSX.Element;

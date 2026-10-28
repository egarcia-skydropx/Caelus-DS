export interface CardServiciosPaqueteriaProps extends HTMLAttributes<HTMLElement> {
  /** Figma `Property 1`. Default `skydropx`. */
  variant?: 'head-paqueteria' | 'convenio' | 'skydropx';
  /** Figma `device`. Default `desktop`. */
  device?: 'desktop' | 'mobile';
  /** Muestra la alerta (skydropx) o la nota (head-paqueteria). Figma `Show Alerts`. Default `true`. */
  showAlerts?: boolean;
  /** skydropx: texto de la alerta de advertencia. */
  alertText?: ReactNode;
  /** head-paqueteria: logo (32×32). */
  logo?: ReactNode;
  /** head-paqueteria: nombre de la paquetería. */
  name?: ReactNode;
  /** head-paqueteria: estado del toggle. Default `true`. */
  enabled?: boolean;
  /** head-paqueteria: cambio del toggle. */
  onToggle?: ChangeEventHandler<HTMLInputElement>;
  /** head-paqueteria: nota bajo el encabezado. */
  headText?: ReactNode;
  /** skydropx: título. Default "Servicios". */
  title?: ReactNode;
  /** skydropx: descripción. */
  description?: ReactNode;
  /** skydropx: grupos de servicios (Nacionales, Internacionales) con sus casillas. */
  groups?: { title: ReactNode; items: { id?: string; label: ReactNode; detail?: ReactNode; checked?: boolean; disabled?: boolean }[] }[];
  /** skydropx: cambio de una casilla. */
  onServiceChange?: (item: { id?: string; label: ReactNode }, checked: boolean, event: unknown) => void;
  /** skydropx: deshabilita "Guardar" (p. ej. sin cambios). */
  saveDisabled?: boolean;
  /** skydropx: clic en "Guardar". */
  onSave?: MouseEventHandler<HTMLButtonElement>;
  /** convenio: props que se pasan a `CardConvenioContenedor`. */
  convenio?: CardConvenioContenedorProps;
}
export declare function CardServiciosPaqueteria(props: CardServiciosPaqueteriaProps): JSX.Element;

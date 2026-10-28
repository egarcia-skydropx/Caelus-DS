export interface CargaConveniosProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma `state`. Default `carga`. */
  state?: 'carga' | 'error' | 'exito';
  /** Figma `type`: cambia los textos por defecto. Default `conexion`. */
  type?: 'conexion' | 'edicion';
  /** Avance de 0 a 100 en `carga`. Default 25. En error y éxito la barra va llena. */
  value?: number;
  /** Encabezado; por defecto depende de `state` y `type`. */
  title?: ReactNode;
  /** Texto de apoyo (puede llevar un enlace). */
  description?: ReactNode;
  /** Texto sobre la barra. Default "Conexión del convenio" / "Edición del convenio". */
  progressLabel?: string;
  /** Texto bajo la barra (p. ej. "Tiempo estimado 1 seg"). */
  statusText?: ReactNode;
  /** error: clic en "Recibir ayuda". */
  onHelp?: MouseEventHandler<HTMLButtonElement>;
  /** error: clic en "Reintentar". */
  onRetry?: MouseEventHandler<HTMLButtonElement>;
  /** exito: clic en "Entendido". */
  onDone?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CargaConvenios(props: CargaConveniosProps): JSX.Element;

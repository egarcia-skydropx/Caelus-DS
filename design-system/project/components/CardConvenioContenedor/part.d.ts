export interface CardConvenioContenedorProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma `convenio detalle`: empty, convenio simple v1 (`conectado`), convenio desactiva (`desactivado`), intermitencia, curso (`en-curso`), error. Default `conectado`. */
  state?: 'empty' | 'conectado' | 'desactivado' | 'intermitencia' | 'en-curso' | 'error';
  /** Alias del convenio; es el texto bajo el título en `conectado`. */
  alias?: ReactNode;
  /** Estado del toggle (conectado, intermitencia). Default `true`. */
  enabled?: boolean;
  /** Cambio del toggle (Desactivar / Activar). */
  onToggle?: ChangeEventHandler<HTMLInputElement>;
  /** Texto bajo el título; reemplaza al alias (intermitencia, en curso, error). */
  message?: ReactNode;
  /** Habilidades del convenio; `ok: false` las marca con fallas. Default Cotización, Creación de envíos, Cancelación de envíos, Recolección. */
  skills?: { label: ReactNode; ok?: boolean }[];
  /** Muestra el panel de habilidades (Figma `Habilidad`). Default `true`. */
  showSkills?: boolean;
  /** empty: muestra el botón "Conectar convenio" (Figma `Show añadir convenio`). Default `true`. */
  showAddConvenio?: boolean;
  /** empty: texto de invitación. */
  emptyText?: ReactNode;
  /** empty: clic en "Conectar convenio". */
  onConnect?: MouseEventHandler<HTMLButtonElement>;
  /** Clic en "Editar". */
  onEdit?: MouseEventHandler<HTMLButtonElement>;
  /** Clic en "Eliminar". */
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  /** error: clic en "Cancelar conexión". */
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  /** error: clic en "Reintentar". */
  onRetry?: MouseEventHandler<HTMLButtonElement>;
}
export declare function CardConvenioContenedor(props: CardConvenioContenedorProps): JSX.Element;

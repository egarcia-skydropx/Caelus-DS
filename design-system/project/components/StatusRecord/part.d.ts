export interface StatusRecordProps extends HTMLAttributes<HTMLOListElement> {
  /** Figma `Estatus`: etapa actual. `incidencia` marca En camino en rojo; `en-devolucion` cambia el último paso. Default `creado`. */
  status?: 'creado' | 'recolectado' | 'en-camino' | 'por-llegar' | 'entregado' | 'incidencia' | 'en-devolucion';
  /** Figma `Breakpoints`: desktop (círculos de 32px) o mobile (24px). Default `desktop`. */
  size?: 'desktop' | 'mobile';
  /** Sustituye textos de los pasos por clave (`creado`, `recolectado`, `en-camino`, `por-llegar`, `entregado`, `en-devolucion`). */
  labels?: Partial<Record<string, ReactNode>>;
}
export declare function StatusRecord(props: StatusRecordProps): JSX.Element;

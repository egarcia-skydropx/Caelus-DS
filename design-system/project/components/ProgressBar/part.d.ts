export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Color de la barra de avance. */
  color?: 'primary' | 'green' | 'dark' | 'orange' | 'purple' | 'yellow' | 'red' | 'indigo';
  /** Valor actual (0 a max). Se ignora si indeterminate. */
  value?: number;
  /** Valor máximo; por defecto 100. */
  max?: number;
  /** Progreso sin duración conocida: animación continua, sin aria-valuenow. */
  indeterminate?: boolean;
  /** Texto arriba a la izquierda (p. ej. el paso o el nombre del archivo). */
  leftLabel?: ReactNode;
  /** Texto arriba a la derecha (p. ej. "50%"). */
  rightLabel?: ReactNode;
  /** Nombre accesible de la barra; por defecto "Progreso". */
  label?: string;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;

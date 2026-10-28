export interface EmptyStateAction {
  /** Texto del botón. */
  label: ReactNode;
  /** Acción del botón. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Ancho y tamaño de ilustración (Figma `Dispositivo`): desktop 736px / 128px, mobile 352px / 96px. Default `desktop`. */
  device?: 'desktop' | 'mobile';
  /** Ilustración decorativa (Figma `Ilustración`); se marca `aria-hidden`. */
  illustration?: ReactNode;
  /** Título en semibold 16px. */
  title?: ReactNode;
  /** Etiqueta del título. Default `h2`. */
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  /** Descripción breve. */
  children?: ReactNode;
  /** CTA principal (botón naranja `primary`). */
  primaryAction?: EmptyStateAction;
  /** CTA secundario (botón `secondary`, Figma `Mostrar CTA secundario`). */
  secondaryAction?: EmptyStateAction;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;

export interface ErrorScreenAction {
  /** Texto del botón. */
  label: ReactNode;
  /** Acción del botón. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface ErrorScreenProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Distribución (Figma `Breakpoints`: desktop / movil). Default `desktop`. */
  breakpoint?: 'desktop' | 'mobile';
  /** Código del error, p. ej. `400` o `500` (Figma `Tipo de error`). */
  code?: ReactNode;
  /** Título del error en bold 20px (se pinta como `h1`). */
  title?: ReactNode;
  /** Mensaje en lenguaje humano; respeta saltos de línea. */
  children?: ReactNode;
  /** Ilustración decorativa (Figma `.ilustration`, tipos 400 y 500); se marca `aria-hidden`. */
  illustration?: ReactNode;
  /** CTA principal (botón `primary`), p. ej. “Regresar”. */
  primaryAction?: ErrorScreenAction;
  /** CTA secundario (botón `secondary`, Figma `Button Secondary`). */
  secondaryAction?: ErrorScreenAction;
}
export declare function ErrorScreen(props: ErrorScreenProps): JSX.Element;

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Lado del elemento disparador en el que aparece el tooltip (Figma `Position`); la flecha apunta al lado contrario. Default `top`. */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Título opcional (Figma `Con título`). Cambia a la versión de 192px de ancho. */
  title?: ReactNode;
  /** Texto del tooltip, máximo 50 caracteres. */
  children?: ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;

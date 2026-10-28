export interface ModalMultimediaProps extends Omit<ModalProps, 'type' | 'children'> {
  /** Reproductor o imagen (`video`, `iframe`, `img` o un componente propio). Sin él se pinta un placeholder. */
  media?: ReactNode;
  /** Texto corto bajo el video. */
  caption?: ReactNode;
  /** Contenido extra bajo el video. */
  children?: ReactNode;
}
export declare function ModalMultimedia(props: ModalMultimediaProps): JSX.Element;

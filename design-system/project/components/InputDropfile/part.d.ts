/** Zona para arrastrar o elegir archivos, con estados de carga y archivo listo. */
export interface InputDropfileProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'title'> {
  /** Figma `Type`: `img` (con vista previa) o `file`. Default `img`. */
  type?: 'img' | 'file';
  /** Figma `Status`. Default `default`. */
  status?: 'default' | 'uploading' | 'value';
  /** Label sobre la zona. */
  label?: ReactNode;
  /** Texto del icono de información junto al label. */
  info?: string;
  /** Título de la zona (reemplaza el texto por defecto). */
  title?: ReactNode;
  /** Formatos y peso permitidos. */
  hint?: ReactNode;
  /** Texto de ayuda bajo la zona. */
  helperText?: ReactNode;
  /** Nombre del archivo en carga o cargado. */
  fileName?: string;
  /** Progreso 0–100 en `uploading`. Default 50. */
  progress?: number;
  /** Texto bajo la barra. Default "Subiendo y validando". */
  progressText?: string;
  /** URL de la vista previa (`type="img"`, `status="value"`). */
  previewSrc?: string;
  /** Texto alternativo de la vista previa. */
  previewAlt?: string;
  /** Archivos elegidos o soltados. */
  onFiles?: (files: FileList | null) => void;
  /** Botón de eliminar. */
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible del botón eliminar. */
  removeLabel?: string;
}
export declare function InputDropfile(props: InputDropfileProps): JSX.Element;

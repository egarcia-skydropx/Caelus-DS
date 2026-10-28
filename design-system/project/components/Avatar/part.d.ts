export interface AvatarItem {
  /** Llave estable para React. */
  key?: string | number;
  /** URL de la foto. */
  src?: string;
  /** Nombre de la persona (texto alternativo). */
  alt?: string;
  /** Iniciales si no hay foto. */
  initials?: string;
}
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Forma, o grupo apilado de avatares circulares. */
  type?: 'circle' | 'rounded' | 'stacked';
  /** sm 24px, regular 32px, md 48px, lg 80px, xl 144px. */
  size?: 'sm' | 'regular' | 'md' | 'lg' | 'xl';
  /** URL de la foto; sin src se muestran las iniciales (placeholder). */
  src?: string;
  /** Nombre de la persona: alt de la imagen o etiqueta del placeholder. */
  alt?: string;
  /** Iniciales para el placeholder. */
  initials?: string;
  /** Muestra el punto verde de notificación / en línea. */
  dot?: boolean;
  /** Texto para lectores de pantalla que explica el punto (p. ej. "En línea"). */
  dotLabel?: string;
  /** Convierte el punto en un botón para quitar al usuario. */
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  /** aria-label del botón de quitar; por defecto "Quitar". */
  removeLabel?: string;
  /** Solo type="stacked": personas del grupo. */
  avatars?: AvatarItem[];
  /** Solo type="stacked": cuántas mostrar antes del contador "+N". */
  max?: number;
}
export declare function Avatar(props: AvatarProps): JSX.Element;

export interface AvatarTextProps extends HTMLAttributes<HTMLDivElement> {
  /** sm (avatar 24px), regular (32px), md (48px) o lg (80px). */
  size?: 'sm' | 'regular' | 'md' | 'lg';
  /** Nombre o título (texto principal). */
  title: ReactNode;
  /** Texto de apoyo debajo del título. */
  description?: ReactNode;
  /** URL de la foto. */
  src?: string;
  /** Nombre para el placeholder (la foto es decorativa porque el nombre ya está escrito). */
  alt?: string;
  /** Iniciales si no hay foto. */
  initials?: string;
  /** Reemplaza el avatar por otro nodo (p. ej. un Avatar con punto). */
  avatar?: ReactNode;
}
export declare function AvatarText(props: AvatarTextProps): JSX.Element;

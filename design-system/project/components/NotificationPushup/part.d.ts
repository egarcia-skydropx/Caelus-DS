export interface NotificationPushupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Figma `Property 1`: tipo de evento; define el texto por defecto. Default `referido`. */
  kind?: 'referido' | 'creditos' | 'beneficio';
  /** Figma `Plataforma`: pro (degradado morado) o se / ei (degradado azul). Default `pro`. */
  platform?: 'pro' | 'se' | 'ei';
  /** Título celebratorio. */
  title?: ReactNode;
  /** Mensaje de apoyo. */
  message?: ReactNode;
  /** Emoji o ícono decorativo; `null` lo oculta. Default 🎉 (🥳 en SE). */
  icon?: ReactNode;
  /** Figma `Show date`: fecha opcional bajo el mensaje. */
  date?: ReactNode;
  /** Muestra la X y la llama al hacer clic. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** Etiqueta accesible de la X. Default "Cerrar notificación". */
  closeLabel?: string;
  /** Contenido extra bajo el mensaje (Figma `Show Section`). */
  children?: ReactNode;
}
export declare function NotificationPushup(props: NotificationPushupProps): JSX.Element;

export interface ChatAction {
  /** Texto de la opción del menú. */
  label: ReactNode;
  /** Acción al elegir la opción. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface ChatMessage {
  /** Clave única del mensaje. */
  id?: string | number;
  /** Quién lo envía (Figma `Usuario`: Agente → `agent`, Cliente → `client`). */
  from: 'agent' | 'client';
  /** Nombre de quien escribe. */
  author?: ReactNode;
  /** Hora del mensaje. */
  time?: ReactNode;
  /** Texto del mensaje. */
  text?: ReactNode;
  /** Estado de entrega, p. ej. “Entregado”. */
  status?: ReactNode;
  /** Avatar de 32px; si falta se muestra la inicial del autor. */
  avatar?: ReactNode;
  /** Archivo adjunto (Figma `Mensaje=Adjunto`). */
  attachment?: { name: ReactNode; meta?: ReactNode; href?: string; onClick?: MouseEventHandler<HTMLAnchorElement> };
  /** Enlace con vista previa (Figma `Mensaje=Link`). */
  link?: { url: string; title?: ReactNode; domain?: ReactNode; image?: ReactNode };
  /** Opciones del menú “más acciones” (`.chat-button-more`); sin ellas no se muestra el botón. */
  actions?: ChatAction[];
  /** `aria-label` del botón de más acciones. Default “Más acciones”. */
  actionsLabel?: string;
}
export interface ChatProps extends HTMLAttributes<HTMLDivElement> {
  /** Mensajes en orden cronológico. */
  messages?: ChatMessage[];
}
export declare function Chat(props: ChatProps): JSX.Element;

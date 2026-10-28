export interface InputChatroomProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue'> {
  /** Mensaje controlado. */
  value?: string;
  /** Mensaje inicial si no es controlado. */
  defaultValue?: string;
  /** Se llama con el texto al pulsar enviar o Enter (Shift+Enter hace salto de línea). Si no es controlado, el campo se limpia. */
  onSend?: (text: string) => void;
  /** Clic en el clip de adjuntar. */
  onAttach?: MouseEventHandler<HTMLButtonElement>;
  /** Clic en el icono de imagen. */
  onAddImage?: MouseEventHandler<HTMLButtonElement>;
  /** Muestra el botón de adjuntar. Default true. */
  showAttach?: boolean;
  /** Muestra el botón de imagen. Default true. */
  showImage?: boolean;
  /** Etiqueta accesible del botón enviar. Default "Enviar mensaje". */
  sendLabel?: string;
  /** Etiqueta accesible del botón adjuntar. Default "Adjuntar archivo". */
  attachLabel?: string;
  /** Etiqueta accesible del botón imagen. Default "Agregar imagen". */
  imageLabel?: string;
}
export declare function InputChatroom(props: InputChatroomProps): JSX.Element;

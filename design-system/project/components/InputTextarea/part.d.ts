export type InputTextareaAction =
  | 'bold' | 'italic' | 'underline' | 'strikethrough'
  | 'align-left' | 'align-center' | 'align-right' | 'align-justify'
  | 'bullet-list' | 'numbered-list' | 'image' | 'link';
export interface InputTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Texto de la etiqueta, ligada con htmlFor/id. */
  label?: ReactNode;
  /** Si se pasa, muestra el icono de información junto a la etiqueta con este texto accesible. */
  labelInfo?: string;
  /** Texto de apoyo o de error, ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Muestra la barra de formato (Figma `Show .rich text`). Default true. */
  toolbar?: boolean;
  /** Se llama con la acción del botón de la barra que se pulsó; el formato lo implementa el consumidor. */
  onToolbarAction?: (action: InputTextareaAction) => void;
  /** Permite estirar el campo en vertical (Figma `Resize`). Default true. */
  resize?: boolean;
}
export declare function InputTextarea(props: InputTextareaProps): JSX.Element;

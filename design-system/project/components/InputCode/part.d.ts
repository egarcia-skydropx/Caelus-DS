export interface InputCodeParam {
  /** Nombre del parámetro, p. ej. "client_id". */
  name: string;
  /** Tipo de dato. Default "string". */
  type?: string;
  /** Muestra el badge rojo de obligatorio. */
  required?: boolean;
}
export interface InputCodeProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma `Type`: token = endpoint en una línea, post = comando, esquema = JSON preformateado, cuerpo = tabla de parámetros. Default `token`. */
  type?: 'token' | 'post' | 'esquema' | 'cuerpo';
  /** Texto del bloque (token, post, esquema); también es lo que se copia. */
  code?: string;
  /** Parámetros para `type="cuerpo"`. */
  params?: InputCodeParam[];
  /** Muestra el botón de copiar. Default true en token y post. */
  showCopy?: boolean;
  /** Etiqueta accesible del botón de copiar. Default "Copiar". */
  copyLabel?: string;
  /** Reemplaza la copia al portapapeles por defecto. */
  onCopy?: (code: string) => void;
  /** Texto del badge de obligatorio. Default "Requerido". */
  requiredLabel?: string;
  /** Prefijo de la línea de tipo. Default "Type". */
  typeLabel?: string;
  children?: ReactNode;
}
export declare function InputCode(props: InputCodeProps): JSX.Element;

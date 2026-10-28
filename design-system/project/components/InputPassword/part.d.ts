export interface InputPasswordRequirement {
  /** Texto del requisito, p. ej. "Mínimo 8 caracteres". */
  label: ReactNode;
  /** true = check verde, false = cruz roja, undefined = sin icono (aún no se evalúa). */
  met?: boolean;
}
export interface InputPasswordProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Texto de la etiqueta. Figma usa "Contraseña*". */
  label?: ReactNode;
  /** Mensaje bajo el campo (en error, qué falta). Ligado con aria-describedby. */
  helperText?: ReactNode;
  /** Estados no alcanzables por CSS. Default `default`. */
  state?: 'default' | 'error' | 'disabled';
  /** Lista de requisitos que se valida mientras se escribe; en dos columnas. */
  requirements?: InputPasswordRequirement[];
  /** Título de la lista de requisitos. Default "Debe contener:". */
  requirementsTitle?: ReactNode;
  /** Etiqueta accesible del botón del ojo para mostrar. Default "Mostrar contraseña". */
  showLabel?: string;
  /** Etiqueta accesible del botón del ojo para ocultar. Default "Ocultar contraseña". */
  hideLabel?: string;
}
export declare function InputPassword(props: InputPasswordProps): JSX.Element;

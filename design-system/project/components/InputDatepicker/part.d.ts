/** Campo de fecha (única o rango) con calendario desplegable. */
export interface InputDatepickerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Label opcional (Figma `Show Label`). */
  label?: ReactNode;
  /** `single` = una fecha, `range` = rango. Default `single`. */
  mode?: 'single' | 'range';
  /** Fecha o rango (controlado). */
  value?: Date | [Date, Date] | null;
  /** Fecha o rango inicial (no controlado). */
  defaultValue?: Date | [Date, Date] | null;
  /** Se llama al elegir fecha o completar el rango. */
  onChange?: (value: Date | [Date, Date]) => void;
  /** Texto sin fecha. Default "Selecciona una fecha". */
  placeholder?: string;
  /** Texto fijo del campo, p. ej. un preset como "Últimos 30 días". */
  displayText?: string;
  /** Abre el calendario al montar (demos). */
  defaultOpen?: boolean;
  /** Mes que se muestra si no hay valor. */
  defaultMonth?: Date;
  /** Fecha de "hoy" (para demos o pruebas). Default la fecha actual. */
  today?: Date;
}
export declare function InputDatepicker(props: InputDatepickerProps): JSX.Element;

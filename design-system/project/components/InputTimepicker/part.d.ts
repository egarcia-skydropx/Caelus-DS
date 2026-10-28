/** Campo de hora en formato 12 h (HH:MM am/pm) con columnas desplegables. */
export interface InputTimepickerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Label sobre el campo. */
  label?: ReactNode;
  /** Hora "hh:mm am" (controlado). */
  value?: string | null;
  /** Hora inicial (no controlado). */
  defaultValue?: string | null;
  /** Se llama con la hora "hh:mm am|pm". */
  onChange?: (value: string) => void;
  /** Texto sin hora. Default "--:-- --". */
  placeholder?: string;
  /** Intervalo de minutos. Default 1. */
  minuteStep?: number;
  /** Abre el selector al montar (demos). */
  defaultOpen?: boolean;
}
export declare function InputTimepicker(props: InputTimepickerProps): JSX.Element;

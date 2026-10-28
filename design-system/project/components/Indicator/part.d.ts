export interface IndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /** dot (punto + texto), alert (contador rojo), counter (contador primario), icon (círculo con ícono), stepper (paso actual), charge (pastilla de carga). */
  type?: 'dot' | 'alert' | 'counter' | 'icon' | 'stepper' | 'charge';
  /** Solo type="dot": color del punto. */
  color?: 'blue' | 'gray' | 'green' | 'indigo' | 'orange' | 'primary' | 'red' | 'yellow';
  /** Solo alert / counter: número a mostrar. */
  count?: number | string;
  /** Solo type="icon": ícono de 16px; por defecto una palomita. */
  icon?: ReactNode;
  /** Texto del indicador (dot y charge). */
  children?: ReactNode;
}
export declare function Indicator(props: IndicatorProps): JSX.Element;

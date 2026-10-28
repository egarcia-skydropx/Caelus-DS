export interface ProtectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Figma `Protección`: sos (verde), se (color primario) o internacional (gris). Default `sos`. */
  type?: 'sos' | 'se' | 'internacional';
  /** Figma `Mensaje`: default (switch apagado por defecto), activada (switch encendido + valor declarado) o automatica (sin switch, ya protegido). Default `default`. */
  mode?: 'default' | 'activada' | 'automatica';
  /** Sustituye el título por defecto ("SOS Protección", "Protección SE", "Protección"). */
  title?: ReactNode;
  /** Sustituye la etiqueta junto al switch. */
  label?: ReactNode;
  /** Estado controlado del switch. */
  checked?: boolean;
  /** Estado inicial sin controlar. */
  defaultChecked?: boolean;
  /** Recibe el nuevo estado del switch. */
  onCheckedChange?: (checked: boolean, event: unknown) => void;
  /** Deshabilita el switch. */
  disabled?: boolean;
  /** Valor declarado controlado. */
  declaredValue?: string;
  /** Valor declarado inicial sin controlar. */
  defaultDeclaredValue?: string;
  /** Cambio del valor declarado. */
  onDeclaredValueChange?: ChangeEventHandler<HTMLInputElement>;
  /** Moneda junto al campo. Default "MXN". */
  currency?: string;
  /** Muestra el campo "Valor declarado" cuando la protección está activa. Default `true`. */
  showDeclaredValue?: boolean;
  /** Enlace a las políticas de uso. */
  policiesHref?: string;
  /** Clic en "políticas de uso". */
  onPoliciesClick?: MouseEventHandler<HTMLAnchorElement>;
  /** Enlace a la configuración de protección (modo `automatica`). */
  settingsHref?: string;
  /** Clic en el enlace de configuración. */
  onSettingsClick?: MouseEventHandler<HTMLAnchorElement>;
}
export declare function Protection(props: ProtectionProps): JSX.Element;

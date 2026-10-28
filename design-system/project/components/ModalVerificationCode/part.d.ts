export interface ModalVerificationCodeProps extends Omit<HTMLAttributes<HTMLFormElement>, 'title' | 'onChange' | 'onSubmit'> {
  /** Figma `Type`: code (correo) o code-sms. Cambia los textos por defecto y muestra la nota de seguridad en SMS. Default `code`. */
  variant?: 'code' | 'code-sms';
  /** Encabezado; tiene un texto por defecto según `variant`. */
  title?: ReactNode;
  /** Texto que explica a dónde se envió el código. */
  message?: ReactNode;
  /** Correo o número enmascarado que se resalta al final del mensaje. */
  destination?: ReactNode;
  /** Etiqueta del campo. Default "Tu código". */
  label?: string;
  /** Placeholder del campo. Default "0 - 0 - 0 - 0". */
  placeholder?: string;
  /** Nota bajo el campo. En `code-sms` trae una advertencia de seguridad por defecto. */
  caption?: ReactNode;
  /** Número de dígitos. Default 4. */
  length?: number;
  /** Valor controlado (solo dígitos). */
  value?: string;
  /** Valor inicial sin controlar. */
  defaultValue?: string;
  /** Recibe el código limpio (solo dígitos) en cada cambio. */
  onChange?: (code: string, event: unknown) => void;
  /** Se llama al enviar con el código completo. */
  onSubmit?: (code: string, event: unknown) => void;
  /** Texto del botón. Default "Verificar". */
  submitLabel?: string;
  /** Muestra el botón en espera mientras se valida. */
  loading?: boolean;
  /** Texto del botón en espera. Default "Verificando…". */
  loadingLabel?: string;
  /** Mensaje de error; marca el campo con `aria-invalid`. */
  error?: ReactNode;
  /** Acción de "Reenviar código". */
  onResend?: MouseEventHandler<HTMLButtonElement>;
  /** Texto del enlace de reenvío. Default "Reenviar código". */
  resendLabel?: string;
  /** Acción de "Necesito ayuda"; `null` lo oculta. */
  onHelp?: MouseEventHandler<HTMLButtonElement> | null;
  /** Texto del enlace de ayuda. Default "Necesito ayuda". */
  helpLabel?: string;
}
export declare function ModalVerificationCode(props: ModalVerificationCodeProps): JSX.Element;

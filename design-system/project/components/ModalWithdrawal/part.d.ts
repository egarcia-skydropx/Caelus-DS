export interface WithdrawalOption {
  /** Identificador estable de la opción. */
  key?: string;
  /** Color de la tarjeta: primary (créditos) o teal (cuenta bancaria). Default `primary`. */
  tone?: 'primary' | 'teal';
  /** Ilustración o logo de 48px. */
  illustration?: ReactNode;
  /** Título de la opción. */
  title: ReactNode;
  /** Frase de apoyo bajo el título. */
  description?: ReactNode;
  /** Beneficios o condiciones (máx. ~10 palabras cada uno). */
  benefits?: ReactNode[];
  /** Texto del botón (acción concreta). */
  actionLabel: ReactNode;
  /** Se llama al elegir la opción. */
  onSelect?: MouseEventHandler<HTMLButtonElement>;
  /** Deshabilita el botón de la opción. */
  disabled?: boolean;
}
export interface ModalWithdrawalProps extends Omit<ModalProps, 'type' | 'children'> {
  /** Tarjetas comparativas; por defecto créditos y cuenta bancaria. */
  options?: WithdrawalOption[];
  /** Frase sobre las tarjetas; `null` la oculta. Default "Selecciona cómo quieres recibir tu dinero.". */
  intro?: ReactNode;
  /** Contenido extra bajo las tarjetas. */
  children?: ReactNode;
}
export declare function ModalWithdrawal(props: ModalWithdrawalProps): JSX.Element;

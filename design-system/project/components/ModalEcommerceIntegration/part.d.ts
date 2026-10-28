export interface EcommerceIntegrationField {
  /** Nombre del campo (`name` del input). */
  name?: string;
  /** Etiqueta visible, ligada al input. */
  label: ReactNode;
  /** Placeholder. */
  placeholder?: string;
  /** Tipo nativo del input. Default `text`. */
  type?: string;
  /** Valor controlado. */
  value?: string;
  /** Valor inicial sin controlar. */
  defaultValue?: string;
  /** Cambio del input. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Mensaje de error; marca el input con `aria-invalid`. */
  error?: ReactNode;
}
export interface ModalEcommerceIntegrationProps extends Omit<ModalProps, 'type' | 'children'> {
  /** Figma `Type`: tienda (URL de ecommerce) o api (credenciales). Default `tienda`. */
  type?: 'tienda' | 'api';
  /** Nombre de la plataforma (ej. Shopify). */
  platformName?: ReactNode;
  /** Categoría bajo el nombre (Ecommerce, Aplicación). */
  platformCategory?: ReactNode;
  /** Logo de la plataforma (35px). */
  logo?: ReactNode;
  /** Instrucción principal; `null` la oculta. */
  instructions?: ReactNode;
  /** Caja gris con el formato esperado o ayuda extra. */
  hint?: ReactNode;
  /** Campos del formulario; por defecto según `type`. */
  fields?: EcommerceIntegrationField[];
  /** Enlace "Consultar documentación". */
  docsHref?: string;
  /** Texto del enlace de documentación. Default "documentación". */
  docsLabel?: string;
  /** Contenido extra después de los campos. */
  children?: ReactNode;
}
export declare function ModalEcommerceIntegration(props: ModalEcommerceIntegrationProps): JSX.Element;

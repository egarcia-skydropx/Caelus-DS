/** Selector de país + buscador de C. P. o dirección guardada (cotizador). */
export interface InputSearchSelectFlagProps extends Omit<InputSearchSelectProps, 'options'> {
  /** Países: `label` es el código visible (ej. "MX"), `name` el nombre para lectores de pantalla. */
  countries?: { value: string; label: string; name?: string; flag?: ReactNode }[];
  /** País seleccionado (controlado). */
  country?: string;
  /** País inicial (no controlado). Default el primero. */
  defaultCountry?: string;
  /** Se llama al cambiar el país. */
  onCountryChange?: (value: string) => void;
  /** Etiqueta accesible del selector de país. Default "País". */
  countryLabel?: string;
  /** Resultados; `saved: true` muestra el icono de dirección guardada. */
  options?: (CaelusOption & { saved?: boolean })[];
}
export declare function InputSearchSelectFlag(props: InputSearchSelectFlagProps): JSX.Element;

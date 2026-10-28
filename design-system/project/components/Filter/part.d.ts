export interface FilterOption {
  /** Value stored in `value[categoryId]`. */
  value: string;
  /** Visible label. */
  label: ReactNode;
  /** Not selectable. */
  disabled?: boolean;
}

export interface FilterCategory {
  /** Key used in `value` and `onChange`. */
  id: string;
  /** Section title, e.g. "Paquetería". */
  label: ReactNode;
  /** Checkbox options of this category. */
  options: FilterOption[];
  /** Text of the select-all checkbox ("Todos"); `null` hides it. */
  allLabel?: ReactNode | null;
  /** Start expanded. Default true. */
  defaultOpen?: boolean;
}

export interface FilterAppliedItem {
  /** Key passed to `onRemoveApplied`. */
  id: string;
  /** Badge text. */
  label: ReactNode;
}

export interface FilterToggle {
  /** Switch label. */
  label: ReactNode;
  /** Explanation under the label. */
  helper?: ReactNode;
  /** Optional badge next to the label (e.g. "Con convenio"). */
  badge?: ReactNode;
  /** On/off state. */
  checked: boolean;
  /** Called with the new state. */
  onChange?: (checked: boolean) => void;
  /** Disable the switch. */
  disabled?: boolean;
}

export interface FilterProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** `desktop`: floating 512px panel. `mobile`: full width, no border or shadow. */
  breakpoint?: 'desktop' | 'mobile';
  /** Panel title. Default "Filtros". */
  title?: ReactNode;
  /** Shows the close X and is called when it is pressed. */
  onClose?: () => void;
  /** Accessible name of the close button. */
  closeLabel?: string;
  /** Shows the "Limpiar" button and is called when it is pressed. */
  onClear?: () => void;
  /** Text of the clear button. */
  clearLabel?: ReactNode;
  /** Active filters shown as removable badges. */
  applied?: FilterAppliedItem[];
  /** Title of the applied-filters section. */
  appliedTitle?: ReactNode;
  /** Called with the id of the badge removed. */
  onRemoveApplied?: (id: string) => void;
  /** Date control (e.g. a date-range picker) shown under `dateLabel`. */
  date?: ReactNode;
  /** Title of the date section. Default "Fecha". */
  dateLabel?: ReactNode;
  /** Checkbox categories. */
  categories?: FilterCategory[];
  /** Selected values per category id. */
  value?: Record<string, string[]>;
  /** Called with the category id and its new selected values. */
  onChange?: (categoryId: string, values: string[]) => void;
  /** On/off filters shown at the end. */
  toggles?: FilterToggle[];
  /** Extra content appended at the end of the body. */
  children?: ReactNode;
}

export declare function Filter(props: FilterProps): JSX.Element;

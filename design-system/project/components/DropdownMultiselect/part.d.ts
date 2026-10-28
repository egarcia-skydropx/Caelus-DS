export interface DropdownMultiselectOption {
  /** Unique value stored in `value`. */
  value: string;
  /** Visible label. */
  label: ReactNode;
  /** Secondary line under the label. */
  helper?: ReactNode;
  /** Not selectable. */
  disabled?: boolean;
  /** Sub-options (hierarchical type). The parent checkbox selects them all. */
  children?: DropdownMultiselectOption[];
  /** Start expanded (hierarchical type). */
  defaultExpanded?: boolean;
}

export interface DropdownMultiselectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Options; add `children` for the hierarchical type. */
  options: DropdownMultiselectOption[];
  /** Selected leaf values. */
  value: string[];
  /** Called with the new list of selected values. */
  onChange?: (value: string[]) => void;
  /** Show the search field. Default true. */
  searchable?: boolean;
  /** Show the "Seleccionar todos" checkbox. Default true. */
  showSelectAll?: boolean;
  /** Controlled search text. */
  search?: string;
  /** Called when the search text changes. */
  onSearchChange?: (search: string) => void;
  /** Search placeholder. Default "Búsqueda". */
  searchPlaceholder?: string;
  /** Accessible name of the search field. */
  searchLabel?: string;
  /** Text of the select-all checkbox. */
  selectAllLabel?: ReactNode;
  /** Empty-state message. */
  emptyText?: ReactNode;
  /** Text of the clear-search button in the empty state. */
  clearSearchLabel?: ReactNode;
  /** Max height of the list before it scrolls. */
  maxHeight?: number | string;
}

export declare function DropdownMultiselect(props: DropdownMultiselectProps): JSX.Element;

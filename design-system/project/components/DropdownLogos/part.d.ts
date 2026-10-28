export interface DropdownLogosItem {
  /** Stable key; falls back to `value` or the index. */
  id?: string;
  /** Value handed back in `onSelect`. */
  value?: string;
  /** Row type; defaults to a selectable row. */
  type?: 'item' | 'title' | 'separator';
  /** Visible text, e.g. the country or carrier name. */
  label?: ReactNode;
  /** Optional second line. */
  helper?: ReactNode;
  /** Logo or flag shown at 20x14 before the label. */
  logo?: ReactNode;
  /** Marks the current choice (check + aria-selected). */
  selected?: boolean;
  /** Greys the row out and skips it with the keyboard. */
  disabled?: boolean;
  /** Called when this row is activated. */
  onSelect?: (item: DropdownLogosItem) => void;
}

export interface DropdownLogosProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect' | 'role'> {
  /** Rows with their logos. */
  items: DropdownLogosItem[];
  /** `listbox` (default) or `menu`. */
  role?: 'listbox' | 'menu';
  /** Show the check on the selected row. Default true. */
  showCheck?: boolean;
  /** Called with the activated item. */
  onSelect?: (item: DropdownLogosItem) => void;
  /** Max height before the list scrolls. */
  maxHeight?: number | string;
  /** Focus the selected (or first) row on mount. */
  autoFocus?: boolean;
}

export declare function DropdownLogos(props: DropdownLogosProps): JSX.Element;

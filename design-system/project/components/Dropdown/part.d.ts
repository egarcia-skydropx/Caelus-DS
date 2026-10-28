export interface DropdownItem {
  /** Item kind: selectable row, non-interactive section title or divider line. */
  type?: 'item' | 'title' | 'separator';
  /** Stable key; falls back to `value` or the index. */
  id?: string;
  /** Value handed back in `onSelect`. */
  value?: string;
  /** Visible text (or section title). */
  label?: ReactNode;
  /** Secondary line under the label. */
  helper?: ReactNode;
  /** 18px leading icon. */
  icon?: ReactNode;
  /** Leading logo or flag (20x14). Used by DropdownLogos. */
  logo?: ReactNode;
  /** Small trailing icon (14px), e.g. an external-link or sign-out glyph. */
  trailing?: ReactNode;
  /** Marks the current choice: shows the check and sets aria-selected. */
  selected?: boolean;
  /** Greys the row out and skips it in keyboard navigation. */
  disabled?: boolean;
  /** Destructive action (red text), e.g. "Cerrar sesión". */
  danger?: boolean;
  /** Called when this row is activated. */
  onSelect?: (item: DropdownItem) => void;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect' | 'role'> {
  /** Rows of the panel, in order. */
  items: DropdownItem[];
  /** `listbox` for choosing a value (default), `menu` for a list of actions. */
  role?: 'listbox' | 'menu';
  /** Show the check on selected rows. Default true. */
  showCheck?: boolean;
  /** Called with the activated item. */
  onSelect?: (item: DropdownItem) => void;
  /** Max height in px (or CSS length); the list scrolls past it. */
  maxHeight?: number | string;
  /** Move focus into the list on mount (use when it opens from a trigger). */
  autoFocus?: boolean;
}

export declare function Dropdown(props: DropdownProps): JSX.Element;

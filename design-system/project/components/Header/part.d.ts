export interface HeaderSearch {
  /** Current search text. */
  value: string;
  /** Called on every keystroke. */
  onChange?: (value: string) => void;
  /** Called on Enter or the search button. */
  onSubmit?: (value: string) => void;
  /** Placeholder. Default "Busca por nombre o número de rastreo". */
  placeholder?: string;
  /** Accessible name of the field. */
  label?: string;
  /** Accessible name of the search button. Default "Buscar". */
  buttonLabel?: string;
}

export interface HeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Page title, e.g. "Mis envíos". */
  title: ReactNode;
  /** Heading level of the title. Default `h1`. */
  titleAs?: 'h1' | 'h2' | 'h3';
  /** Short line under the title. */
  description?: ReactNode;
  /** Text buttons on the right of the title (e.g. a secondary Button). */
  actions?: ReactNode;
  /** Round icon buttons shown after a divider. */
  iconActions?: ReactNode;
  /** Tabs row, usually a TabFilter. */
  tabs?: ReactNode;
  /** Shows the table search field. */
  search?: HeaderSearch;
  /** Shows the "Filtros" button and is called when it is pressed. */
  onFilterClick?: MouseEventHandler<HTMLButtonElement>;
  /** Text of the filter button. Default "Filtros". */
  filterLabel?: ReactNode;
  /** Number of active filters shown in the filter button. */
  filterCount?: number;
  /** Desktop: one row for tabs and tools. Mobile: stacked. */
  breakpoint?: 'desktop' | 'mobile';
  /** Extra content at the bottom. */
  children?: ReactNode;
}

export declare function Header(props: HeaderProps): JSX.Element;

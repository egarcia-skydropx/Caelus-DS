export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  /** Current page, starting at 1. */
  page: number;
  /** Rows per page. Default 20. */
  pageSize?: number;
  /** Total rows. */
  total: number;
  /** Called with the page requested by the previous/next arrows. */
  onPageChange?: (page: number) => void;
  /** Row selection state of the table. Default `none`. */
  selection?: 'none' | 'partial' | 'all';
  /** Called when the select-all checkbox changes. */
  onSelectAllChange?: (checked: boolean) => void;
  /** Text of the select-all checkbox. Default "Seleccionar". */
  selectLabel?: ReactNode;
  /** Show the select-all checkbox. Default true. */
  showSelectAll?: boolean;
  /** Bulk-action icon buttons (pass Button with shape="square" and aria-label). */
  actions?: ReactNode;
  /** Summary shown while rows are selected, e.g. "14 envíos seleccionados.". */
  selectionText?: ReactNode;
  /** Link next to the summary ("Incluir todos los envíos", "Anular selección"). */
  selectionAction?: { label: ReactNode; onClick?: MouseEventHandler<HTMLButtonElement> };
  /** Shows the round sort button and is called when it is pressed. */
  onSortClick?: MouseEventHandler<HTMLButtonElement>;
  /** Accessible name of the sort button. */
  sortLabel?: string;
  /** Custom sort icon. */
  sortIcon?: ReactNode;
  /** Shows the three-dot button and is called when it is pressed. */
  onMoreClick?: MouseEventHandler<HTMLButtonElement>;
  /** Accessible name of the three-dot button. */
  moreLabel?: string;
  /** Desktop: one row. Mobile: stacked rows. */
  breakpoint?: 'desktop' | 'mobile';
  /** Word between range and total. Default "de". */
  ofLabel?: string;
  /** Accessible name of the previous arrow. */
  prevLabel?: string;
  /** Accessible name of the next arrow. */
  nextLabel?: string;
  /** Accessible name of the nav landmark. Default "Paginación". */
  navLabel?: string;
}

export declare function Pagination(props: PaginationProps): JSX.Element;

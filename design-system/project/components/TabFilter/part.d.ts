export interface TabFilterTab {
  /** Unique id; compared with `value`. */
  id: string;
  /** Filter name, e.g. "Con incidencia". */
  label: ReactNode;
  /** 16px icon before the text. */
  icon?: ReactNode;
  /** Optional count shown after the label. */
  count?: ReactNode;
  /** Not selectable. */
  disabled?: boolean;
  /** DOM id of the content it filters (aria-controls). */
  panelId?: string;
}

export interface TabFilterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Filter tabs in order. */
  tabs: TabFilterTab[];
  /** Id of the active filter. */
  value?: string;
  /** Called with the id of the filter chosen. */
  onChange?: (id: string) => void;
}

export declare function TabFilter(props: TabFilterProps): JSX.Element;

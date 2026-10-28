export interface TabNavTab {
  /** Unique id; compared with `value`. */
  id: string;
  /** Tab text. */
  label: ReactNode;
  /** 18px icon before the text. */
  icon?: ReactNode;
  /** Not selectable; skipped by arrow keys. */
  disabled?: boolean;
  /** DOM id of the tab button (to label the panel with aria-labelledby). */
  tabId?: string;
  /** DOM id of the panel it controls (aria-controls). */
  panelId?: string;
}

export interface TabNavProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tabs in order. */
  tabs: TabNavTab[];
  /** Id of the selected tab. */
  value?: string;
  /** Called with the id of the tab chosen by click or arrow keys. */
  onChange?: (id: string) => void;
  /** Visual style: filled tab, pills or underline. Default `tab`. */
  variant?: 'tab' | 'pills' | 'underline';
  /** Dark surface version (MyShipHub). */
  dark?: boolean;
}

export declare function TabNav(props: TabNavProps): JSX.Element;

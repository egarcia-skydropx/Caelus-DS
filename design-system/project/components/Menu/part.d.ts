export interface MenuItem {
  /** Row kind: main link, highlighted call to action, section label or divider. */
  type?: 'link' | 'cta' | 'label' | 'separator';
  /** Stable key. */
  id?: string;
  /** Text of the link or label. */
  label?: ReactNode;
  /** 18px icon before the text. */
  icon?: ReactNode;
  /** Destination; renders an `a`. Without it, a `button`. */
  href?: string;
  /** Click handler. */
  onClick?: MouseEventHandler<HTMLElement>;
  /** Current page (aria-current="page"). */
  active?: boolean;
  /** Small trailing icon, e.g. external-link or sign-out. */
  trailing?: ReactNode;
  /** Badge after the label (e.g. "Nuevo"). */
  badge?: ReactNode;
  /** Sub-links; the row becomes a collapsible group with a chevron. */
  children?: MenuItem[];
  /** Initial open state of a group (defaults to open if a child is active). */
  defaultExpanded?: boolean;
  /** Controlled open state of a group. */
  expanded?: boolean;
  /** Called when a group is toggled. */
  onExpandedChange?: (expanded: boolean) => void;
}

export interface MenuProps extends HTMLAttributes<HTMLElement> {
  /** Platform look: Skydropx Pro (white), Soloenvíos (primary), Envíos Internacionales (orange), MyShipHub (dark). */
  variant?: 'skydropx' | 'soloenvios' | 'internacional' | 'msh';
  /** Navigation rows in order. */
  items: MenuItem[];
  /** Rows pinned to the bottom (e.g. "Gestión interna"). */
  footer?: MenuItem[];
  /** Extra content at the end. */
  children?: ReactNode;
}

export declare function Menu(props: MenuProps): JSX.Element;

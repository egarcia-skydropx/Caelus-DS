export interface NavbarLink {
  /** Stable key. */
  id?: string;
  /** Link text. */
  label: ReactNode;
  /** 18px icon before the text. */
  icon?: ReactNode;
  /** Destination; renders an `a`. Without it, a `button`. */
  href?: string;
  /** Click handler. */
  onClick?: MouseEventHandler<HTMLElement>;
  /** Current section (aria-current="page"). */
  active?: boolean;
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Platform look: Skydropx Pro (dark), Soloenvíos and Envíos Internacionales (light), MyShipHub (dark violet). */
  variant?: 'skydropx' | 'soloenvios' | 'internacional' | 'msh';
  /** `desktop` (desktop and tablet) or `mobile` (compact, hides country text). */
  type?: 'desktop' | 'mobile';
  /** Brand logo (pass the platform logo; use the inverted one on dark variants). */
  logo?: ReactNode;
  /** Shows the hamburger button and is called when it is pressed. */
  onMenuClick?: MouseEventHandler<HTMLButtonElement>;
  /** Accessible name of the hamburger. Default "Abrir menú". */
  menuLabel?: string;
  /** Whether the side menu it controls is open (aria-expanded). */
  menuExpanded?: boolean;
  /** Balance button, e.g. "$0.00 MXN" with a plus to top up. */
  balance?: { label: ReactNode; icon?: ReactNode; onAdd?: MouseEventHandler<HTMLButtonElement>; onClick?: MouseEventHandler<HTMLButtonElement>; addLabel?: string };
  /** Country selector button (.button-pais). Open your DropdownLogos from `onClick`. */
  country?: { code?: string; flag?: ReactNode; label?: string; expanded?: boolean; onClick?: MouseEventHandler<HTMLButtonElement> };
  /** Extra toolbar buttons (help, automations, notifications, referrals). */
  actions?: ReactNode;
  /** Account button with initials or avatar (.acount-desktop / .acount-mobile). */
  account?: { initials?: string; avatar?: ReactNode; label?: string; expanded?: boolean; onClick?: MouseEventHandler<HTMLButtonElement> };
  /** Center links (MyShipHub top navigation). */
  links?: NavbarLink[];
  /** Accessible name of the links nav. */
  navLabel?: string;
  /** Extra content at the end. */
  children?: ReactNode;
}

export declare function Navbar(props: NavbarProps): JSX.Element;

export interface MenuBreakpointsProps extends HTMLAttributes<HTMLDivElement> {
  /** Top bar, usually a Navbar. */
  navbar?: ReactNode;
  /** Side menu, usually a Menu. */
  menu?: ReactNode;
  /** Page content, rendered in `main` with 16px padding. */
  children?: ReactNode;
  /** Render the side menu. Default true. */
  showMenu?: boolean;
  /** Render the content area. Default true. */
  showContent?: boolean;
  /** Overlay menu open (below 1024px or with layout="overlay"). */
  menuOpen?: boolean;
  /** Called on backdrop click or Escape while the overlay is open. */
  onMenuClose?: () => void;
  /** Force a layout instead of the 1024px media query. */
  layout?: 'docked' | 'overlay';
}

export declare function MenuBreakpoints(props: MenuBreakpointsProps): JSX.Element;

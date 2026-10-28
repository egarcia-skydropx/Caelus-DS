export interface DropdownButtonItem {
  /** Row kind: action, section title or divider. */
  type?: 'item' | 'title' | 'separator';
  /** Stable key. */
  id?: string;
  /** Value handed back in `onSelect`. */
  value?: string;
  /** Action text. */
  label?: ReactNode;
  /** 18px leading icon. */
  icon?: ReactNode;
  /** 14px trailing icon (e.g. sign-out arrow). */
  trailing?: ReactNode;
  /** Destructive action in red. */
  danger?: boolean;
  /** Not available right now. */
  disabled?: boolean;
  /** Called when this action is chosen. */
  onSelect?: (item: DropdownButtonItem) => void;
}

export interface DropdownButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** `default`: text + chevron. `icon`: square icon-only trigger. */
  type?: 'default' | 'icon';
  /** Trigger text; with `type="icon"` it becomes the aria-label. */
  label?: ReactNode;
  /** Icon for `type="icon"` (defaults to three dots). */
  icon?: ReactNode;
  /** Actions shown in the menu. */
  items: DropdownButtonItem[];
  /** Controlled open state. */
  open?: boolean;
  /** Called when the menu opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Called with the chosen action; the menu then closes. */
  onSelect?: (item: DropdownButtonItem) => void;
  /** Align the menu to the trigger's start (default) or end edge. */
  align?: 'start' | 'end';
  /** Accessible name of the menu (defaults to the label). */
  menuLabel?: string;
  /** Button type of the trigger. Default `secondary`. */
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  /** Trigger size. Default `base`. */
  size?: 'xs' | 'sm' | 'base';
  /** Disable the trigger. */
  disabled?: boolean;
}

export declare function DropdownButton(props: DropdownButtonProps): JSX.Element;

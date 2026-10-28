/* @ds-bundle: {"format":4,"namespace":"Caelus","components":[{"name":"Button"},{"name":"Badge"},{"name":"Alert"},{"name":"Avatar"},{"name":"AvatarText"},{"name":"ButtonDownloadApp"},{"name":"ButtonFilter"},{"name":"ButtonGroup"},{"name":"ButtonIcon"},{"name":"ButtonSocial"},{"name":"CardConvenioContenedor"},{"name":"CardDestino"},{"name":"CardHistorialEnvios"},{"name":"CardOrdenes"},{"name":"CardOrigen"},{"name":"CardPaquete"},{"name":"CardPaqueteria"},{"name":"CardPaqueteriaDetalles"},{"name":"CardPaqueteriasCotizador"},{"name":"CardRecolecciones"},{"name":"CardServiciosPaqueteria"},{"name":"CardTiendaIntegrada"},{"name":"CargaConvenios"},{"name":"Carousel"},{"name":"Chat"},{"name":"DrawerHistorial"},{"name":"DrawerNotification"},{"name":"Dropdown"},{"name":"DropdownButton"},{"name":"DropdownLogos"},{"name":"DropdownMultiselect"},{"name":"EmptyDrawer"},{"name":"EmptyState"},{"name":"ErrorScreen"},{"name":"Filter"},{"name":"Header"},{"name":"IconBackground"},{"name":"Indicator"},{"name":"IndicatorBadge"},{"name":"InputAmount"},{"name":"InputBadge"},{"name":"InputChatroom"},{"name":"InputCheckbox"},{"name":"InputCode"},{"name":"InputColor"},{"name":"InputCombobox"},{"name":"InputComboboxFlag"},{"name":"InputCounter"},{"name":"InputDatepicker"},{"name":"InputDropfile"},{"name":"InputFile"},{"name":"InputMultiselect"},{"name":"InputPassword"},{"name":"InputPhone"},{"name":"InputPincode"},{"name":"InputRadio"},{"name":"InputSearch"},{"name":"InputSearchBt"},{"name":"InputSearchSelect"},{"name":"InputSearchSelectFlag"},{"name":"InputSearchTables"},{"name":"InputSelect"},{"name":"InputSlider"},{"name":"InputText"},{"name":"InputTextarea"},{"name":"InputTimepicker"},{"name":"InputToggle"},{"name":"Loader"},{"name":"Menu"},{"name":"MenuBreakpoints"},{"name":"Modal"},{"name":"ModalEcommerceIntegration"},{"name":"ModalMultimedia"},{"name":"ModalStatusDelivery"},{"name":"ModalVerificationCode"},{"name":"ModalWithdrawal"},{"name":"Navbar"},{"name":"NotificationPushup"},{"name":"Pagination"},{"name":"Popover"},{"name":"PopoverAlert"},{"name":"ProgressBar"},{"name":"Protection"},{"name":"ResumenDePago"},{"name":"StatusRecord"},{"name":"TabFilter"},{"name":"TabNav"},{"name":"TablaPaqueterias"},{"name":"Toast"},{"name":"Tooltip"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }

  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  function XMark(size) {
    return h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M4.5 4.5l7 7m0-7l-7 7', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }

  // Button — Type × State × Forma × Size from the Figma set "button".
  function Button(props) {
    var type = props.type || 'primary';
    var size = props.size || 'base';
    var shape = props.shape || 'button';
    var rest = omit(props, ['type', 'size', 'shape', 'leftIcon', 'rightIcon', 'icon', 'children', 'className', 'htmlType']);
    var iconOnly = shape !== 'button';
    return h('button', Object.assign({}, rest, {
      type: props.htmlType || 'button',
      className: cx('cl-btn', 'cl-btn--' + type, 'cl-btn--' + size, iconOnly && 'cl-btn--icon', shape === 'circle' && 'cl-btn--circle', props.className)
    }),
      iconOnly
        ? h('span', { className: 'cl-btn__icon', 'aria-hidden': true }, props.icon || props.children)
        : [
          props.leftIcon ? h('span', { key: 'l', className: 'cl-btn__icon', 'aria-hidden': true }, props.leftIcon) : null,
          h('span', { key: 't' }, props.children),
          props.rightIcon ? h('span', { key: 'r', className: 'cl-btn__icon', 'aria-hidden': true }, props.rightIcon) : null
        ]);
  }

  // Badge — Type × Theme × Size from the Figma set "badge".
  function Badge(props) {
    var theme = props.theme || 'gray';
    var size = props.size || 'large';
    var iconOnly = props.icon && props.children == null;
    var rest = omit(props, ['theme', 'size', 'icon', 'onRemove', 'removeLabel', 'children', 'className']);
    return h('span', Object.assign({}, rest, {
      className: cx('cl-badge', 'cl-badge--' + theme, 'cl-badge--' + size, iconOnly && 'cl-badge--icon', props.className)
    }),
      props.icon ? h('span', { className: 'cl-badge__icon', 'aria-hidden': true }, props.icon) : null,
      props.children != null ? h('span', null, props.children) : null,
      props.onRemove ? h('button', {
        type: 'button', className: 'cl-badge__remove', onClick: props.onRemove,
        'aria-label': props.removeLabel || 'Quitar'
      }, XMark(size === 'small' ? 14 : 16)) : null);
  }

  // Alert — Type (con botón / sin botón) × Color from the Figma set "alerts".
  function Alert(props) {
    var color = props.color || 'info';
    var rest = omit(props, ['color', 'title', 'icon', 'action', 'children', 'className']);
    var role = color === 'danger' || color === 'warning' ? 'alert' : 'status';
    return h('div', Object.assign({ role: role }, rest, { className: cx('cl-alert', 'cl-alert--' + color, props.className) }),
      h('div', { className: 'cl-alert__row' },
        props.icon ? h('span', { className: 'cl-alert__icon', 'aria-hidden': true }, props.icon) : null,
        h('div', { className: 'cl-alert__text' },
          props.title ? h('p', { className: 'cl-alert__title' }, props.title) : null,
          h('div', { className: 'cl-alert__body' }, props.children))),
      props.action ? h('button', { type: 'button', className: 'cl-alert__action', onClick: props.action.onClick },
        h('span', null, props.action.label),
        props.action.icon ? h('span', { className: 'cl-alert__icon', 'aria-hidden': true }, props.action.icon) : null) : null);
  }

  window.Caelus = { Button: Button, Badge: Badge, Alert: Alert };
})();

/* ---- Avatar ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function XMark() {
    return h('svg', { width: 6, height: 6, viewBox: '0 0 6 6', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M1.2 1.2l3.6 3.6m0-3.6L1.2 4.8', stroke: 'currentColor', strokeWidth: 1.2, strokeLinecap: 'round' }));
  }

  // Renders one avatar. `p.root` holds extra props for the root span (key, id, aria-*, …).
  function renderOne(p) {
    var hasImg = !!p.src;
    var remove = !!p.onRemove;
    var showDot = p.dot && !remove;
    return h('span', Object.assign({}, p.root, {
      className: cx('cl-avatar', 'cl-avatar--' + p.shape, 'cl-avatar--' + p.size, !hasImg && 'cl-avatar--placeholder', p.extraClass)
    }),
      hasImg ? h('img', { className: 'cl-avatar__img', src: p.src, alt: p.alt || '' })
        : h('span', { className: 'cl-avatar__initials', role: 'img', 'aria-label': p.alt || p.initials }, p.initials),
      showDot ? h('span', { className: 'cl-avatar__dot', 'aria-hidden': true }) : null,
      showDot && p.dotLabel ? h('span', { className: 'cl-avatar__sr' }, p.dotLabel) : null,
      remove ? h('button', {
        type: 'button', className: 'cl-avatar__dot cl-avatar__remove', onClick: p.onRemove,
        'aria-label': p.removeLabel || 'Quitar'
      }, XMark()) : null);
  }

  // Avatar — Type × Size × Placeholder × Notification dot from the Figma set "Avatar".
  function Avatar(props) {
    var type = props.type || 'circle';
    var size = props.size || 'regular';
    var own = ['type', 'size', 'src', 'alt', 'initials', 'dot', 'dotLabel', 'onRemove', 'removeLabel', 'avatars', 'max', 'className'];
    var rest = omit(props, own);
    if (type === 'stacked') {
      var list = props.avatars || [];
      var max = props.max != null ? props.max : list.length;
      var shown = list.slice(0, max);
      var extra = list.length - shown.length;
      return h('span', Object.assign({ role: 'group' }, rest, { className: cx('cl-avatar-stack', 'cl-avatar-stack--' + size, props.className) }),
        shown.map(function (a, i) {
          return renderOne({ root: { key: a.key != null ? a.key : i }, src: a.src, alt: a.alt, initials: a.initials, shape: 'circle', size: size, extraClass: 'cl-avatar--stacked' });
        }),
        extra > 0 ? h('span', {
          key: 'more', className: 'cl-avatar cl-avatar--circle cl-avatar--' + size + ' cl-avatar--stacked cl-avatar--counter',
          role: 'img', 'aria-label': '+' + extra + ' más'
        }, h('span', { className: 'cl-avatar__initials', 'aria-hidden': true }, '+' + extra)) : null);
    }
    return renderOne({
      root: rest, shape: type, size: size, src: props.src, alt: props.alt, initials: props.initials,
      dot: props.dot, dotLabel: props.dotLabel, onRemove: props.onRemove, removeLabel: props.removeLabel, extraClass: props.className
    });
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Avatar = Avatar;
})();

/* ---- AvatarText ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // AvatarText — Size from the Figma set "Avatar & text".
  function AvatarText(props) {
    var size = props.size || 'regular';
    var Avatar = window.Caelus && window.Caelus.Avatar;
    var rest = omit(props, ['size', 'src', 'alt', 'initials', 'title', 'description', 'avatar', 'className']);
    var avatar = props.avatar || (Avatar ? h(Avatar, { size: size, src: props.src, alt: props.src ? '' : (props.alt || props.initials), initials: props.initials }) : null);
    return h('div', Object.assign({}, rest, { className: cx('cl-avatar-text', 'cl-avatar-text--' + size, props.className) }),
      avatar,
      h('div', { className: 'cl-avatar-text__text' },
        h('span', { className: 'cl-avatar-text__title' }, props.title),
        props.description != null ? h('span', { className: 'cl-avatar-text__desc' }, props.description) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.AvatarText = AvatarText;
})();

/* ---- ButtonDownloadApp ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  var STORE_NAMES = { appstore: 'App Store', googleplay: 'Google Play' };

  // ButtonDownloadApp — Device (AppStore / Google Play) from the Figma set "button-download-app".
  function ButtonDownloadApp(props) {
    var store = props.store || 'appstore';
    var rest = omit(props, ['store', 'badge', 'caption', 'storeName', 'className', 'children']);
    var tag = props.href ? 'a' : 'button';
    var extra = tag === 'button' ? { type: 'button' } : {};
    return h(tag, Object.assign(extra, rest, {
      className: cx('cl-button-download-app', 'cl-button-download-app--' + store, props.className)
    }),
      props.badge ? h('span', { className: 'cl-button-download-app__badge', 'aria-hidden': true }, props.badge) : null,
      h('span', { className: 'cl-button-download-app__text' },
        h('span', { className: 'cl-button-download-app__caption' }, props.caption == null ? 'Descárgala en' : props.caption),
        h('span', { className: 'cl-button-download-app__store' }, props.storeName || STORE_NAMES[store] || store)));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonDownloadApp = ButtonDownloadApp;
})();

/* ---- ButtonFilter ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Funnel() {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M2.5 3.5h13l-5 6v4.5l-3 1.5v-6l-5-6z', stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round' }));
  }

  // ButtonFilter — State × Forma from the Figma set "button-filter".
  function ButtonFilter(props) {
    var shape = props.shape || 'button';
    var iconOnly = shape !== 'button';
    var rest = omit(props, ['shape', 'active', 'icon', 'children', 'className']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      'aria-pressed': props.active ? true : rest['aria-pressed'],
      className: cx('cl-button-filter', 'cl-button-filter--' + shape, props.active && 'cl-button-filter--active', props.className)
    }),
      h('span', { className: 'cl-button-filter__icon', 'aria-hidden': true }, props.icon || Funnel()),
      iconOnly ? null : h('span', null, props.children == null ? 'Filtros' : props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonFilter = ButtonFilter;
})();

/* ---- ButtonGroup ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  var counter = 0;
  function useStableId() {
    if (React.useId) return React.useId();
    var ref = React.useRef(null);
    if (ref.current == null) ref.current = 'cl-bg-' + (++counter);
    return ref.current;
  }

  // ButtonGroup — Type (group, With stat, Only Icon, With save, With tooltip) from the Figma set "button-group".
  function ButtonGroup(props) {
    var items = props.items || [];
    var base = useStableId();
    var rest = omit(props, ['items', 'className']);
    return h('div', Object.assign({ role: 'group' }, rest, { className: cx('cl-button-group', props.className) }),
      items.map(function (item, i) {
        var key = item.key != null ? item.key : i;
        var iconOnly = item.icon && item.label == null;
        var cls = cx('cl-button-group__item', iconOnly && 'cl-button-group__item--icon',
          item.stat && 'cl-button-group__item--stat', item.selected && 'cl-button-group__item--selected');
        var content = [
          item.icon ? h('span', { key: 'i', className: 'cl-button-group__icon', 'aria-hidden': true }, item.icon) : null,
          item.label != null ? h('span', { key: 't' }, item.label) : null
        ];
        if (item.stat) return h('span', { key: key, className: cls }, content);
        var tipId = item.tooltip ? base + '-tip-' + i : undefined;
        var btn = h('button', {
          key: 'b', type: 'button', className: cls, onClick: item.onClick, disabled: item.disabled,
          'aria-label': item['aria-label'], 'aria-pressed': item.selected != null ? !!item.selected : undefined,
          'aria-describedby': tipId
        }, content);
        if (!item.tooltip) return h(React.Fragment, { key: key }, btn);
        return h('span', { key: key, className: 'cl-button-group__tip-wrap' }, btn,
          h('span', { id: tipId, role: 'tooltip', className: 'cl-button-group__tooltip' }, item.tooltip));
      }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonGroup = ButtonGroup;
})();

/* ---- ButtonIcon ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // ButtonIcon — State × Background from the Figma set "button-icon".
  function ButtonIcon(props) {
    var bg = props.background !== false;
    var rest = omit(props, ['background', 'active', 'icon', 'children', 'className']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      'aria-pressed': props.active != null ? !!props.active : rest['aria-pressed'],
      className: cx('cl-button-icon', bg ? 'cl-button-icon--bg' : 'cl-button-icon--plain', props.active && 'cl-button-icon--active', props.className)
    }), h('span', { className: 'cl-button-icon__icon', 'aria-hidden': true }, props.icon || props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonIcon = ButtonIcon;
})();

/* ---- ButtonSocial ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // ButtonSocial — Size × Outline from the Figma set "button-social".
  function ButtonSocial(props) {
    var size = props.size || 'base';
    var outline = props.outline !== false;
    var rest = omit(props, ['size', 'outline', 'provider', 'icon', 'children', 'className']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      className: cx('cl-button-social', 'cl-button-social--' + size, outline ? 'cl-button-social--outline' : 'cl-button-social--filled',
        props.provider && 'cl-button-social--' + props.provider, props.className)
    }),
      props.icon ? h('span', { className: 'cl-button-social__icon', 'aria-hidden': true }, props.icon) : null,
      h('span', null, props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonSocial = ButtonSocial;
})();

/* ---- CardConvenioContenedor ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    hand: 'M7 11l3-3 3 2 4-4 4 4-8 8-2-2M3 11l4-4 3 1M7 15l2 2',
    info: 'M11.25 11.25l.04-.02a.75.75 0 011.06.85l-.7 2.84a.75.75 0 001.06.85l.04-.02M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.01',
    ok: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ko: 'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    pencil: 'M16.86 4.49l2.65 2.65M18.2 3.15a1.88 1.88 0 112.65 2.65L6.75 19.9 3 21l1.1-3.75L18.2 3.15z',
    trash: 'M14.74 9l-.35 9m-4.78 0L9.26 9m9.97-3.21L18.16 19.67A2.25 2.25 0 0115.92 21.75H8.08a2.25 2.25 0 01-2.24-2.08L4.77 5.79m14.46 0a48 48 0 00-14.46 0M9 5.25V4.5A1.5 1.5 0 0110.5 3h3A1.5 1.5 0 0115 4.5v.75'
  };
  var B = 'cl-card-convenio-contenedor';
  var TITLE = {
    'conectado': 'Convenio activado',
    'desactivado': 'Convenio desactivado',
    'intermitencia': 'Convenio con intermitencia',
    'en-curso': 'Conectando convenio...',
    'error': 'Conexión con error'
  };
  var DEFAULT_SKILLS = [{ label: 'Cotización' }, { label: 'Creación de envíos' }, { label: 'Cancelación de envíos' }, { label: 'Recolección' }];
  var uid = 0;

  function Toggle(p) {
    var idRef = window.React.useRef(null);
    if (!idRef.current) idRef.current = B + '-tg-' + (++uid);
    return h('label', { className: B + '__toggle', htmlFor: idRef.current },
      h('input', { id: idRef.current, type: 'checkbox', role: 'switch', className: B + '__toggle-input', checked: !!p.checked, onChange: p.onChange || function () {} }),
      h('span', { className: B + '__toggle-track', 'aria-hidden': true }),
      h('span', null, p.label));
  }

  function CardConvenioContenedor(props) {
    var state = props.state || 'conectado';
    var Btn = C().Button;
    var rest = omit(props, ['state', 'alias', 'enabled', 'onToggle', 'message', 'skills', 'showSkills', 'showAddConvenio', 'onConnect', 'onEdit', 'onDelete', 'onCancel', 'onRetry', 'emptyText', 'className']);
    var cls = cx(B, B + '--' + state, props.className);

    if (state === 'empty') {
      return h('div', Object.assign({ className: cls }, rest),
        h('p', { className: B + '__empty' }, props.emptyText || 'Conecta y gestiona los convenios que tienes con las paqueterías para cotizar y crear envíos.'),
        props.showAddConvenio !== false && Btn ? h(Btn, { type: 'secondary', size: 'sm', leftIcon: ico(P.hand), onClick: props.onConnect }, 'Conectar convenio') : null);
    }

    var hasToggle = state === 'conectado' || state === 'intermitencia' || state === 'desactivado';
    var enabled = state === 'desactivado' ? false : props.enabled !== false;
    var title = h('div', { className: B + '__titlerow' },
      h('h3', { className: B + '__title' }, ico(P.hand, 24), TITLE[state] || state),
      hasToggle ? h(Toggle, { checked: enabled, onChange: props.onToggle, label: enabled ? 'Desactivar' : 'Activar' }) : null);

    if (state === 'desactivado') return h('div', Object.assign({ className: cls }, rest), title);

    var showSkills = props.showSkills !== false && (state === 'conectado' || state === 'intermitencia');
    var skills = props.skills || DEFAULT_SKILLS;
    var text = props.message != null ? props.message : (state === 'conectado' ? props.alias : null);

    var actions = state === 'error'
      ? [Btn ? h(Btn, { key: 'c', type: 'secondary', size: 'sm', onClick: props.onCancel }, 'Cancelar conexión') : null,
         Btn ? h(Btn, { key: 'r', type: 'primary', size: 'sm', onClick: props.onRetry }, 'Reintentar') : null]
      : [Btn ? h(Btn, { key: 'e', type: 'secondary', size: 'sm', leftIcon: ico(P.pencil), onClick: props.onEdit, disabled: state === 'en-curso' }, 'Editar') : null,
         Btn ? h(Btn, { key: 'd', type: 'secondary', size: 'sm', leftIcon: ico(P.trash), onClick: props.onDelete }, 'Eliminar') : null];

    return h('div', Object.assign({ className: cls }, rest),
      h('div', { className: B + '__head' }, title, text != null ? h('p', { className: B + '__text', role: state === 'error' ? 'alert' : null }, text) : null),
      showSkills ? h('div', { className: B + '__skills' },
        h('span', { className: B + '__skills-title' }, 'Habilidades', h('span', { className: B + '__skills-info', title: 'Acciones que puedes hacer con este convenio' }, ico(P.info, 15))),
        h('ul', { className: B + '__skill-list' }, skills.map(function (s, i) {
          var ok = s.ok !== false;
          return h('li', { key: i, className: cx(B + '__skill', !ok && B + '__skill--ko') }, ico(ok ? P.ok : P.ko, 20), s.label,
            ok ? null : h('span', { className: B + '__sr' }, ' (con fallas)'));
        }))) : null,
      h('div', { className: B + '__actions' }, actions));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardConvenioContenedor = CardConvenioContenedor;
})();

/* ---- CardDestino ---- */
(function () {
  var h = window.React.createElement;
  var HOME = 'M2.25 12l8.95-8.95a1.13 1.13 0 011.59 0L21.75 12M4.5 9.75v10.13c0 .62.5 1.12 1.13 1.12H9.75v-4.88c0-.62.5-1.12 1.13-1.12h2.25c.62 0 1.12.5 1.12 1.12V21h4.13c.62 0 1.12-.5 1.12-1.12V9.75';

  function CardDestino(props) {
    var Origen = (window.Caelus || {}).CardOrigen;
    var icon = props.icon || h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: HOME }));
    if (!Origen) return null;
    return h(Origen, Object.assign({}, props, { title: props.title || 'Dirección de destino', icon: icon }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardDestino = CardDestino;
})();

/* ---- CardHistorialEnvios ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size, sw) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: sw || 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    download: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3',
    eye: 'M2.04 12.32a1 1 0 010-.64C3.42 7.51 7.36 4.5 12 4.5s8.57 3.01 9.96 7.18a1 1 0 010 .64C20.58 16.49 16.64 19.5 12 19.5s-8.57-3.01-9.96-7.18zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    more: 'M6.75 12h.01M12 12h.01M17.25 12h.01',
    copy: 'M8 8h11v13H8zM5 16H4V3h11v1',
    shield: 'M9 12.75L11.25 15 15 9.75M12 2.71A11.96 11.96 0 013.6 6 12 12 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z',
    pin: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 1115 0z',
    warn: 'M12 9v3.75M2.7 16.13c-.87 1.5.22 3.37 1.95 3.37h14.7c1.73 0 2.82-1.87 1.95-3.37L13.95 3.38c-.87-1.5-3.03-1.5-3.9 0L2.7 16.13zM12 15.75h.01',
    bolt: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    hand: 'M7 11l3-3 3 2 4-4 4 4-8 8-2-2M3 11l4-4 3 1M7 15l2 2'
  };
  var B = 'cl-card-historial-envios';

  function Field(label, body, extra) {
    return h('div', { className: cx(B + '__field', extra) }, h('span', { className: B + '__label' }, label), body);
  }
  function iconBtn(kind, label, onClick, iconPath) {
    var Btn = C().Button;
    var icon = ico(iconPath, 18, iconPath === P.more ? 2.5 : 1.5);
    if (Btn) return h(Btn, { type: kind, size: 'sm', shape: 'square', icon: icon, 'aria-label': label, onClick: onClick });
    return h('button', { type: 'button', className: B + '__iconbtn', 'aria-label': label, onClick: onClick }, icon);
  }

  function CardHistorialEnvios(props) {
    var type = props.type || 'default';
    var mobile = props.breakpoint === 'mobile';
    var carrier = props.carrier || {};
    var dest = props.destination || {};
    var services = props.services || [];
    var isError = type === 'error';
    var noProtection = type === 'sin-proteccion' || isError;
    var canDownload = type !== 'cancelado' && !isError;
    var rest = omit(props, ['type', 'breakpoint', 'date', 'author', 'orderNumber', 'platformIcon', 'status', 'carrier', 'tracking', 'destination', 'eta', 'price', 'convenioLabel', 'services', 'selected', 'onSelect', 'onDownload', 'onView', 'onMore', 'onCopyTracking', 'className']);

    var headerLeft = h('div', { className: B + '__head-left' },
      h('input', { type: 'checkbox', className: B + '__check', checked: !!props.selected, onChange: props.onSelect || function () {}, 'aria-label': 'Seleccionar envío' }),
      h('span', { className: B + '__platform' }, props.platformIcon || null),
      type === 'ordenes'
        ? h('span', { className: B + '__meta' }, h('strong', { className: B + '__order' }, 'Núm. de orden'), ' ', h('span', null, props.orderNumber || ''), ' ', h('span', { className: B + '__date' }, props.date))
        : h('span', { className: B + '__meta' }, h('span', { className: B + '__date' }, props.date), props.author ? h('span', { className: B + '__author' }, 'Por: ' + props.author) : null)
    );
    var headerRight = h('div', { className: B + '__head-right' },
      props.status || null,
      isError ? h('span', { className: B + '__warn', role: 'img', 'aria-label': 'Error en creación' }, ico(P.warn, 18)) : h('span', { className: B + '__auto', title: 'Automatización' }, ico(P.bolt, 18))
    );

    var carrierEl = Field('Paquetería', h('div', { className: B + '__carrier' },
      h('span', { className: B + '__logo' }, carrier.logo || null),
      h('span', { className: B + '__stack' }, h('span', { className: B + '__value' }, carrier.name), h('span', { className: B + '__sub' }, carrier.service))
    ), B + '__field--carrier');

    var trackingEl = Field('Núm de rastreo', isError
      ? h('span', { className: B + '__muted' }, 'Error en creación')
      : h('span', { className: B + '__tracking' },
          h('span', { className: B + '__link' }, props.tracking),
          h('button', { type: 'button', className: B + '__copy', 'aria-label': 'Copiar número de rastreo', onClick: props.onCopyTracking }, ico(P.copy, 16))));

    var destEl = Field('Destino', h('span', { className: B + '__stack' }, h('span', { className: B + '__value' }, dest.name), h('span', { className: B + '__sub' }, dest.detail)));
    var etaEl = Field('Entrega estimada', h('span', { className: B + '__value' }, props.eta));
    var priceEl = type === 'con-convenio'
      ? Field('Precio', h('span', { className: B + '__convenio' }, ico(P.hand, 16), props.convenioLabel || 'Con convenio'))
      : Field('Precio', h('span', { className: B + '__price' }, props.price));

    var Btn = C().Button;
    var actions = h('div', { className: B + '__actions' },
      canDownload && !mobile ? iconBtn('primary', 'Descargar guía', props.onDownload, P.download) : null,
      !mobile ? iconBtn('secondary', 'Ver detalles', props.onView, P.eye) : null,
      !mobile ? iconBtn('secondary', 'Más opciones', props.onMore, P.more) : null
    );

    var servicesEl = h('div', { className: B + '__services' },
      h('span', { className: B + '__services-title' }, 'Servicios'),
      h('ul', { className: B + '__service-list' }, (services.length ? services : [
        { label: noProtection ? 'Sin Protección' : 'SOS Protección', active: !noProtection, icon: 'shield' },
        { label: noProtection ? 'Sin Rastreo' : 'Rastreo', active: !noProtection, icon: 'pin' }
      ]).map(function (s, i) {
        return h('li', { key: i, className: cx(B + '__service', s.active === false && B + '__service--off') },
          h('span', { className: B + '__service-icon' }, typeof s.icon === 'string' ? ico(P[s.icon] || P.shield, 14) : (s.icon || ico(P.shield, 14))),
          s.label);
      }))
    );

    if (mobile) {
      return h('article', Object.assign({ className: cx(B, B + '--mobile', props.className) }, rest),
        h('div', { className: B + '__head' }, headerLeft, iconBtn('secondary', 'Más opciones', props.onMore, P.more)),
        h('div', { className: B + '__head-center' }, headerRight),
        h('hr', { className: B + '__div' }),
        h('div', { className: B + '__content' }, carrierEl, trackingEl, destEl, etaEl,
          h('div', { className: B + '__price-row' }, priceEl,
            canDownload ? (Btn ? h(Btn, { type: 'primary', size: 'sm', leftIcon: ico(P.download), onClick: props.onDownload }, 'Descargar guía') : null) : null)),
        servicesEl);
    }
    return h('article', Object.assign({ className: cx(B, props.className) }, rest),
      h('div', { className: B + '__head' }, headerLeft, headerRight),
      h('hr', { className: B + '__div' }),
      h('div', { className: B + '__content' }, carrierEl, trackingEl, destEl, etaEl, priceEl, actions),
      servicesEl);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardHistorialEnvios = CardHistorialEnvios;
})();

/* ---- CardOrdenes ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size, sw) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: sw || 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    download: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3',
    eye: 'M2.04 12.32a1 1 0 010-.64C3.42 7.51 7.36 4.5 12 4.5s8.57 3.01 9.96 7.18a1 1 0 010 .64C20.58 16.49 16.64 19.5 12 19.5s-8.57-3.01-9.96-7.18zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    more: 'M6.75 12h.01M12 12h.01M17.25 12h.01',
    copy: 'M8 8h11v13H8zM5 16H4V3h11v1',
    plus: 'M12 4.5v15m7.5-7.5h-15',
    info: 'M11.25 11.25l.04-.02a.75.75 0 011.06.85l-.7 2.84a.75.75 0 001.06.85l.04-.02M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.01'
  };
  var B = 'cl-card-ordenes';
  var STATUS = {
    'por-preparar': { theme: 'yellow', label: 'Por preparar' },
    'preparada': { theme: 'green', label: 'Preparada' },
    'error-al-preparar': { theme: 'red', label: 'Error al preparar' },
    'guia-cancelada': { theme: 'red', label: 'Guía cancelada' },
    'orden-cancelada': { theme: 'gray', label: 'Orden cancelada' }
  };

  function iconBtn(kind, label, onClick, path) {
    var Btn = C().Button;
    var icon = ico(path, 18, path === P.more ? 2.5 : 1.5);
    if (Btn) return h(Btn, { type: kind, size: 'sm', shape: 'square', icon: icon, 'aria-label': label, onClick: onClick });
    return h('button', { type: 'button', className: B + '__iconbtn', 'aria-label': label, onClick: onClick }, icon);
  }

  function CardOrdenes(props) {
    var mobile = props.breakdown === 'movil' || props.breakdown === 'mobile';
    var status = props.status || 'por-preparar';
    var st = STATUS[status] || STATUS['por-preparar'];
    var paid = props.payment !== 'por-pagar';
    var prepared = status === 'preparada';
    var errored = status === 'error-al-preparar';
    var showFooter = props.showFooter !== false;
    var rest = omit(props, ['breakdown', 'status', 'payment', 'orderNumber', 'date', 'platformIcon', 'label', 'products', 'pkg', 'carrier', 'origin', 'destination', 'shippingType', 'showFooter', 'selected', 'onSelect', 'onComplete', 'onCreate', 'onDownload', 'onView', 'onMore', 'onCopyTracking', 'className']);

    function complete(field) {
      return h('button', { type: 'button', className: B + '__complete', onClick: function (e) { if (props.onComplete) props.onComplete(field, e); } }, ico(P.plus, 16), 'Completar');
    }
    function Field(label, body, labelError) {
      return h('div', { key: label, className: B + '__field' },
        h('span', { className: cx(B + '__label', labelError && B + '__label--error') }, label, labelError ? ico(P.info, 16) : null),
        body);
    }
    var origin = props.origin, dest = props.destination, pkg = props.pkg, carrier = props.carrier;

    var badge = C().Badge ? h(C().Badge, { theme: st.theme, size: 'small' }, st.label) : h('span', null, st.label);

    var head = h('div', { className: B + '__head' },
      h('div', { className: B + '__head-left' },
        h('input', { type: 'checkbox', className: B + '__check', checked: !!props.selected, onChange: props.onSelect || function () {}, 'aria-label': 'Seleccionar orden ' + (props.orderNumber || '') }),
        h('span', { className: B + '__platform' }, props.platformIcon || null),
        h('span', { className: B + '__order' }, props.orderNumber),
        h('span', { className: B + '__date' }, props.date),
        h('span', { className: cx(B + '__pay', !paid && B + '__pay--pending') }, h('span', { className: B + '__dot', 'aria-hidden': true }), paid ? 'Pagada' : 'Por pagar'),
        props.label ? (C().Badge ? h(C().Badge, { theme: 'indigo', size: 'small' }, props.label) : null) : null),
      badge);

    var fields = [
      Field('Origen', origin ? h('span', { className: B + '__stack' }, h('span', { className: B + '__value' }, origin.name), origin.detail ? h('span', { className: B + '__sub' }, origin.detail) : complete('origin')) : complete('origin')),
      Field('Destino', dest ? h('span', { className: B + '__stack' }, h('span', { className: B + '__value' }, dest.name), dest.detail ? h('span', { className: B + '__sub' }, dest.detail) : complete('destination')) : complete('destination')),
      Field('Productos', h('span', { className: B + '__value' }, props.products)),
      Field('Paquete', pkg ? h('span', { className: B + '__stack' }, h('span', { className: B + '__value' }, pkg.name), h('span', { className: B + '__sub' }, pkg.detail)) : complete('package')),
      Field('Paquetería', carrier ? h('div', { className: B + '__carrier' },
        h('span', { className: B + '__logo' }, carrier.logo || null),
        h('span', { className: B + '__stack' },
          h('span', { className: B + '__value' }, carrier.name),
          prepared && carrier.tracking
            ? h('span', { className: B + '__tracking' }, h('span', { className: B + '__link' }, carrier.tracking), h('button', { type: 'button', className: B + '__copy', 'aria-label': 'Copiar número de rastreo', onClick: props.onCopyTracking }, ico(P.copy, 16)))
            : h('span', { className: B + '__price' }, carrier.price))) : complete('carrier'), errored)
    ];

    var Btn = C().Button;
    var actions = h('div', { className: B + '__actions' },
      prepared ? iconBtn('primary', 'Descargar guía', props.onDownload, P.download) : (Btn ? h(Btn, { type: 'primary', size: 'sm', onClick: props.onCreate }, 'Crear envío') : null),
      prepared ? iconBtn('secondary', 'Ver detalles', props.onView, P.eye) : null,
      iconBtn('secondary', 'Más opciones', props.onMore, P.more));

    return h('article', Object.assign({ className: cx(B, mobile && B + '--mobile', props.className) }, rest),
      head,
      h('hr', { className: B + '__div' }),
      h('div', { className: B + '__body' }, h('div', { className: B + '__fields' }, fields), actions),
      showFooter && props.shippingType ? h('div', { className: B + '__footer' }, h('span', { className: B + '__footer-title' }, 'Tipo de envío'), h('span', null, props.shippingType)) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardOrdenes = CardOrdenes;
})();

/* ---- CardOrigen ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function ico(d, size) {
    return h('svg', { width: size || 16, height: size || 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    store: 'M3 21h18M4 21V10M20 21V10M3 10l1.5-6h15L21 10zM9 21v-6h6v6',
    user: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.12a7.5 7.5 0 0115 0',
    pin: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 1115 0z',
    phone: 'M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.37c0-.52-.35-.97-.85-1.09l-4.42-1.1c-.44-.11-.9.05-1.17.41l-.97 1.29a1.13 1.13 0 01-1.21.38 12.04 12.04 0 01-7.14-7.14 1.13 1.13 0 01.38-1.21l1.29-.97c.36-.27.52-.73.41-1.17L6.97 3.6a1.13 1.13 0 00-1.09-.85H4.5A2.25 2.25 0 002.25 5v1.75z',
    mail: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5',
    up: 'M4.5 15.75l7.5-7.5 7.5 7.5'
  };
  var B = 'cl-card-origen';
  var uid = 0;

  function Row(icon, text, extra) {
    return h('div', { className: cx(B + '__row', extra) }, h('span', { className: B + '__row-icon' }, ico(icon, 14)), h('span', { className: B + '__row-text' }, text));
  }

  function CardOrigen(props) {
    var R = window.React;
    var collapsible = props.collapsible !== false;
    var st = R.useState(props.defaultOpen !== false);
    var open = !collapsible || (props.open != null ? props.open : st[0]);
    var idRef = R.useRef(null);
    if (!idRef.current) idRef.current = B + '-' + (++uid);
    function toggle() { var n = !open; if (props.open == null) st[1](n); if (props.onOpenChange) props.onOpenChange(n); }
    var rest = omit(props, ['title', 'icon', 'name', 'address', 'phone', 'email', 'collapsible', 'defaultOpen', 'open', 'onOpenChange', 'className']);
    var bodyId = idRef.current + '-body';
    var titleInner = [h('span', { key: 'i', className: B + '__icon' }, props.icon || ico(P.store, 16)), h('span', { key: 't', className: B + '__title' }, props.title || 'Dirección de origen')];

    return h('section', Object.assign({ className: cx(B, props.className) }, rest),
      collapsible
        ? h('button', { type: 'button', className: B + '__head', 'aria-expanded': open, 'aria-controls': bodyId, onClick: toggle },
            h('span', { className: B + '__head-title' }, titleInner),
            h('span', { className: cx(B + '__chev', !open && B + '__chev--closed') }, ico(P.up, 16)))
        : h('div', { className: B + '__head' }, h('span', { className: B + '__head-title' }, titleInner)),
      h('address', { id: bodyId, className: B + '__body', hidden: !open },
        props.name ? Row(P.user, props.name) : null,
        props.address ? Row(P.pin, props.address) : null,
        (props.phone || props.email) ? h('div', { className: B + '__contact' },
          props.phone ? Row(P.phone, props.phone) : null,
          props.email ? Row(P.mail, props.email, B + '__row--grow') : null) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardOrigen = CardOrigen;
})();

/* ---- CardPaquete ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function ico(d, size) {
    return h('svg', { width: size || 16, height: size || 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    cube: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
    ruler: 'M4 4h4v16H4zM8 8h3M8 12h2M8 16h3',
    weight: 'M6 8h12l2 12H4L6 8zM9 8a3 3 0 016 0',
    up: 'M4.5 15.75l7.5-7.5 7.5 7.5'
  };
  var B = 'cl-card-paquete';
  var uid = 0;

  function CardPaquete(props) {
    var R = window.React;
    var collapsible = props.collapsible !== false;
    var st = R.useState(props.defaultOpen !== false);
    var open = !collapsible || (props.open != null ? props.open : st[0]);
    var idRef = R.useRef(null);
    if (!idRef.current) idRef.current = B + '-' + (++uid);
    function toggle() { var n = !open; if (props.open == null) st[1](n); if (props.onOpenChange) props.onOpenChange(n); }
    var tags = props.tags || [];
    var rest = omit(props, ['title', 'icon', 'tags', 'children', 'collapsible', 'defaultOpen', 'open', 'onOpenChange', 'className']);
    var Badge = (window.Caelus || {}).Badge;

    var titleInner = [h('span', { key: 'i', className: B + '__icon' }, props.icon || ico(P.cube, 16)), h('span', { key: 't', className: B + '__title' }, props.title || 'Paquete')];
    var bodyId = idRef.current + '-body';
    return h('section', Object.assign({ className: cx(B, props.className) }, rest),
      collapsible
        ? h('button', { type: 'button', className: B + '__head', 'aria-expanded': open, 'aria-controls': bodyId, onClick: toggle },
            h('span', { className: B + '__head-title' }, titleInner),
            h('span', { className: cx(B + '__chev', !open && B + '__chev--closed') }, ico(P.up, 16)))
        : h('div', { className: B + '__head' }, h('span', { className: B + '__head-title' }, titleInner)),
      h('div', { id: bodyId, className: B + '__body', hidden: !open },
        props.children || h('div', { className: B + '__tags' }, tags.map(function (t, i) {
          var icon = t.icon === 'ruler' ? ico(P.ruler) : t.icon === 'weight' ? ico(P.weight) : t.icon;
          return Badge ? h(Badge, { key: i, theme: 'gray', size: 'large', icon: icon }, t.label) : h('span', { key: i }, t.label);
        }))));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardPaquete = CardPaquete;
})();

/* ---- CardPaqueteria ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    warn: 'M12 9v3.75M2.7 16.13c-.87 1.5.22 3.37 1.95 3.37h14.7c1.73 0 2.82-1.87 1.95-3.37L13.95 3.38c-.87-1.5-3.03-1.5-3.9 0L2.7 16.13zM12 15.75h.01',
    hand: 'M7 11l3-3 3 2 4-4 4 4-8 8-2-2M3 11l4-4 3 1M7 15l2 2',
    cog: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-2.82 1.17V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-2.82-1.17l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 003.17 14H3a2 2 0 110-4h.09a1.65 1.65 0 001.17-2.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 0010 3.17V3a2 2 0 114 0v.09a1.65 1.65 0 002.82 1.17l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0020.83 10H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z',
    truck: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.38a1.13 1.13 0 01-1.13-1.13V6.38c0-.62.5-1.13 1.13-1.13h10.5v13.5m0 0h1.5m4.5 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.13c.62 0 1.13-.5 1.13-1.13v-4.12L18 8.25h-4.12',
    store: 'M3 21h18M4 21V10M20 21V10M3 10l1.5-6h15L21 10zM9 21v-6h6v6',
    globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18',
    printer: 'M6.72 13.83H5.25A2.25 2.25 0 013 11.58V9.75A2.25 2.25 0 015.25 7.5h13.5A2.25 2.25 0 0121 9.75v1.83a2.25 2.25 0 01-2.25 2.25h-1.47M6.75 7.5V3h10.5v4.5M6.75 13.5h10.5V21H6.75z',
    search: 'M21 21l-5.2-5.2m0 0A7.5 7.5 0 105.2 5.2a7.5 7.5 0 0010.6 10.6z'
  };
  var B = 'cl-card-paqueteria';
  var CONV = {
    'conectado': 'Convenio activado',
    'apagado': 'Convenio desactivado',
    'intermitencia': 'Convenio con intermitencia',
    'en-curso': 'Conectando convenio...',
    'error': 'Conexión con error'
  };
  var DEFAULT_FEATURES = [
    { label: 'Recolecciones', icon: 'truck' }, { label: 'Sucursal', icon: 'store' },
    { label: 'Envíos internacionales', icon: 'globe' }, { label: 'Impresora térmica', icon: 'printer' }
  ];
  var uid = 0;

  function Toggle(p) {
    var idRef = window.React.useRef(null);
    if (!idRef.current) idRef.current = 'cl-card-paqueteria-tg-' + (++uid);
    return h('label', { className: B + '__toggle', htmlFor: idRef.current },
      h('input', { id: idRef.current, type: 'checkbox', role: 'switch', className: B + '__toggle-input', checked: !!p.checked, onChange: p.onChange || function () {}, disabled: p.disabled }),
      h('span', { className: B + '__toggle-track', 'aria-hidden': true }),
      h('span', { className: B + '__toggle-label' }, p.label));
  }

  function CardPaqueteria(props) {
    var variant = props.variant || 'v1';
    var mobile = props.device === 'mobile';
    var rest = omit(props, ['variant', 'device', 'logo', 'name', 'showWarning', 'warningLabel', 'showConvenio', 'showDetalles', 'enabled', 'onToggle', 'toggleLabel', 'statusLabel', 'statusTheme', 'servicesActive', 'servicesTotal', 'convenioState', 'onConectarConvenio', 'onConfigurar', 'features', 'emptyTitle', 'emptyText', 'className']);
    var cls = cx(B, mobile && B + '--mobile', props.className);
    var Btn = C().Button, Badge = C().Badge;

    if (variant === 'busqueda') {
      return h('div', Object.assign({ className: cx(cls, B + '--empty'), role: 'status' }, rest),
        h('span', { className: B + '__empty-icon' }, ico(P.search, 32)),
        h('p', { className: B + '__empty-title' }, props.emptyTitle || 'No encontramos coincidencias'),
        h('p', { className: B + '__empty-text' }, props.emptyText || 'Intenta de nuevo con otra búsqueda.'));
    }

    var showConvenio = props.showConvenio !== false;
    var showDetalles = props.showDetalles !== false;
    var cState = props.convenioState || 'conectar';
    var features = props.features || DEFAULT_FEATURES;

    var right = variant === 'v2'
      ? (Badge ? h(Badge, { theme: props.statusTheme || 'green', size: 'small' }, props.statusLabel || 'Activada') : null)
      : h(Toggle, { checked: props.enabled !== false, onChange: props.onToggle, label: props.toggleLabel || 'Desactivar' });

    var convenio = !showConvenio ? null : (cState === 'conectar'
      ? (Btn ? h(Btn, { type: 'secondary', size: 'sm', leftIcon: ico(P.hand), onClick: props.onConectarConvenio }, 'Conectar convenio') : null)
      : h('span', { className: cx(B + '__conv', B + '__conv--' + cState) }, ico(P.hand, 16), CONV[cState] || cState));

    var config = !Btn ? null : (variant === 'v2'
      ? h(Btn, { type: 'secondary', size: 'sm', leftIcon: ico(P.cog), onClick: props.onConfigurar }, 'Configurar')
      : h(Btn, { type: 'secondary', size: 'sm', shape: 'square', icon: ico(P.cog), 'aria-label': 'Configurar', onClick: props.onConfigurar }));

    return h('article', Object.assign({ className: cls }, rest),
      h('div', { className: B + '__head' },
        h('div', { className: B + '__brand' },
          h('span', { className: B + '__logo' }, props.logo || null),
          h('span', { className: B + '__name' }, props.name),
          props.showWarning ? h('span', { className: B + '__warn', role: 'img', 'aria-label': props.warningLabel || 'Atención' }, ico(P.warn, 16)) : null),
        right),
      h('hr', { className: B + '__div' }),
      h('div', { className: B + '__details' },
        h('div', { className: B + '__row' },
          h('div', { className: B + '__group' },
            h('span', { className: B + '__group-title' }, 'Servicios'),
            h('span', { className: B + '__services' }, 'Activados ', h('strong', null, props.servicesActive != null ? props.servicesActive : 5), ' de ', h('strong', null, props.servicesTotal != null ? props.servicesTotal : 5))),
          h('div', { className: B + '__actions' }, convenio, config)),
        showDetalles ? h('div', { className: B + '__group' },
          h('span', { className: B + '__group-title' }, 'Características'),
          h('ul', { className: B + '__features' }, features.map(function (f, i) {
            return h('li', { key: i, className: B + '__feature' },
              h('span', { className: B + '__feature-icon' }, typeof f.icon === 'string' ? ico(P[f.icon] || P.truck, 14) : (f.icon || ico(P.truck, 14))),
              f.label);
          }))) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardPaqueteria = CardPaqueteria;
})();

/* ---- CardPaqueteriaDetalles ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    truck: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.38a1.13 1.13 0 01-1.13-1.13V6.38c0-.62.5-1.13 1.13-1.13h10.5v13.5m0 0h1.5m4.5 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.13c.62 0 1.13-.5 1.13-1.13v-4.12L18 8.25h-4.12',
    store: 'M3 21h18M4 21V10M20 21V10M3 10l1.5-6h15L21 10zM9 21v-6h6v6',
    globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18',
    cash: 'M2.25 6.75h19.5v10.5H2.25zM12 15a3 3 0 100-6 3 3 0 000 6z',
    printer: 'M6.72 13.83H5.25A2.25 2.25 0 013 11.58V9.75A2.25 2.25 0 015.25 7.5h13.5A2.25 2.25 0 0121 9.75v1.83a2.25 2.25 0 01-2.25 2.25h-1.47M6.75 7.5V3h10.5v4.5M6.75 13.5h10.5V21H6.75z',
    down: 'M19.5 8.25l-7.5 7.5-7.5-7.5'
  };
  var B = 'cl-card-paqueteria-detalles';
  var uid = 0;

  function CardPaqueteriaDetalles(props) {
    var R = window.React;
    var collapsible = !!props.collapsible;
    var st = R.useState(props.defaultOpen != null ? !!props.defaultOpen : !collapsible);
    var open = props.open != null ? props.open : st[0];
    var idRef = R.useRef(null);
    if (!idRef.current) idRef.current = B + '-' + (++uid);
    function toggle() { var n = !open; if (props.open == null) st[1](n); if (props.onOpenChange) props.onOpenChange(n); }
    var rest = omit(props, ['device', 'collapsible', 'defaultOpen', 'open', 'onOpenChange', 'title', 'description', 'recolecciones', 'sucursal', 'internacionales', 'cargosExtra', 'impresora', 'className']);

    var sections = [
      ['Recolecciones', props.recolecciones, P.truck],
      ['Sucursal', props.sucursal, P.store],
      ['Envíos internacionales', props.internacionales, P.globe],
      ['Cargos extra', props.cargosExtra, P.cash],
      ['Impresora', props.impresora, P.printer]
    ].filter(function (s) { return s[1] != null && s[1] !== false; });

    var body = h('div', { id: idRef.current + '-body', className: B + '__body', hidden: !open },
      !collapsible && props.description ? null : (props.description ? h('p', { className: B + '__desc' }, props.description) : null),
      h('div', { className: B + '__list' }, sections.map(function (s) {
        return h('section', { key: s[0], className: B + '__section' },
          h('h4', { className: B + '__section-title' }, h('span', { className: B + '__icon' }, ico(s[2], 16)), s[0]),
          h('div', { className: B + '__text' }, s[1]));
      })));

    var title = props.title || 'Características';
    return h('div', Object.assign({ className: cx(B, props.device === 'mobile' && B + '--mobile', !open && B + '--closed', props.className) }, rest),
      collapsible
        ? h('button', { type: 'button', className: B + '__trigger', 'aria-expanded': open, 'aria-controls': idRef.current + '-body', onClick: toggle },
            h('span', { className: B + '__title' }, title), h('span', { className: B + '__chev' }, ico(P.down, 16)))
        : h('div', { className: B + '__headtext' }, h('h3', { className: B + '__title' }, title), props.description ? h('p', { className: B + '__desc' }, props.description) : null),
      body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardPaqueteriaDetalles = CardPaqueteriaDetalles;
})();

/* ---- CardPaqueteriasCotizador ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    arrow: 'M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3',
    info: 'M11.25 11.25l.04-.02a.75.75 0 011.06.85l-.7 2.84a.75.75 0 001.06.85l.04-.02M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.01',
    xcircle: 'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    trend: 'M2.25 18L9 11.25l4.31 4.31a11.95 11.95 0 015.81-5.52l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94',
    bolt: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    hand: 'M7 11l3-3 3 2 4-4 4 4-8 8-2-2M3 11l4-4 3 1M7 15l2 2',
    pin: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 1115 0z',
    printer: 'M6.72 13.83H5.25A2.25 2.25 0 013 11.58V9.75A2.25 2.25 0 015.25 7.5h13.5A2.25 2.25 0 0121 9.75v1.83a2.25 2.25 0 01-2.25 2.25h-1.47M6.75 7.5V3h10.5v4.5M6.75 13.5h10.5V21H6.75z'
  };
  var B = 'cl-card-paqueterias-cotizador';
  var NOTE = { 'no-disponible': P.xcircle, 'cargos-extra': P.info, 'alerta': P.trend };

  function CardPaqueteriasCotizador(props) {
    var type = props.type || 'paqueteria';
    var mobile = props.breakpoints === 'mobile';
    var carrier = props.carrier || {};
    var pickup = props.pickup || {};
    var features = props.features || [{ label: 'Rastreo', icon: 'pin' }, { label: 'Impresora térmica', icon: 'printer' }];
    var disabled = type === 'no-disponible';
    var rest = omit(props, ['type', 'breakpoints', 'carrier', 'pickup', 'eta', 'price', 'priceNote', 'convenioAlias', 'features', 'automation', 'message', 'actionLabel', 'onCreate', 'className']);
    var Btn = C().Button;

    function Field(label, body, extra) {
      return h('div', { className: cx(B + '__field', extra) }, label ? h('span', { className: B + '__label' }, label) : null, body);
    }

    var carrierEl = h('div', { className: B + '__carrier' },
      h('span', { className: B + '__logo' }, carrier.logo || null),
      h('span', { className: B + '__stack' },
        h('span', { className: B + '__label' }, 'Paquetería'),
        h('span', { className: B + '__name' }, carrier.name),
        h('span', { className: B + '__service' }, carrier.service)));

    var pickupEl = Field('Tipo de recolección', h('div', { className: B + '__stack' },
      h('span', { className: B + '__pickup' }, pickup.title || 'Llevar a sucursal',
        pickup.tooltip ? h('span', { className: B + '__tip', title: pickup.tooltip, tabIndex: 0, role: 'img', 'aria-label': pickup.tooltip }, ico(P.info, 16)) : null),
      pickup.detail ? h('span', { className: B + '__pickup-detail' }, pickup.detail) : null));

    var etaEl = Field('Entrega estimada', h('span', { className: B + '__eta' }, props.eta));
    var priceEl = type === 'convenio'
      ? Field(null, h('div', { className: B + '__stack' },
          h('span', { className: B + '__convenio' }, ico(P.hand, 16), 'Con convenio'),
          h('span', { className: B + '__alias' }, props.convenioAlias)))
      : Field('Precio', h('div', { className: B + '__stack' },
          h('span', { className: B + '__price' }, props.price),
          props.priceNote ? h('span', { className: B + '__price-note' }, props.priceNote) : null));

    var action = Btn
      ? h(Btn, { type: type === 'convenio' ? 'convenios' : 'primary', size: 'xs', rightIcon: ico(P.arrow), disabled: disabled, onClick: props.onCreate }, props.actionLabel || 'Crear envío')
      : h('button', { type: 'button', disabled: disabled, onClick: props.onCreate }, props.actionLabel || 'Crear envío');

    var extras = type === 'sin-beneficio' ? null : h('div', { className: B + '__extras' },
      h('span', { className: B + '__extras-title' }, 'Características'),
      h('ul', { className: B + '__features' }, features.map(function (f, i) {
        return h('li', { key: i, className: B + '__feature' },
          h('span', { className: B + '__feature-icon' }, typeof f.icon === 'string' ? ico(P[f.icon] || P.pin, 14) : (f.icon || ico(P.pin, 14))),
          f.label);
      })),
      props.automation ? h('span', { className: B + '__automation' }, ico(P.bolt, 18), 'Con automatización') : null);

    var note = NOTE[type] && props.message ? h('div', { className: cx(B + '__note', B + '__note--' + type), role: type === 'no-disponible' ? 'status' : null },
      ico(NOTE[type], 16), h('span', null, props.message)) : null;

    return h('article', Object.assign({ className: cx(B, mobile && B + '--mobile', disabled && B + '--disabled', note && B + '--with-note', props.className) }, rest),
      h('div', { className: B + '__body' },
        h('div', { className: B + '__content' }, carrierEl, pickupEl, etaEl, priceEl, h('div', { className: B + '__action' }, action)),
        extras ? h('hr', { className: B + '__div' }) : null,
        extras),
      note);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardPaqueteriasCotizador = CardPaqueteriasCotizador;
})();

/* ---- CardRecolecciones ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function ico(d, size, sw) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: sw || 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var TRUCK = 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.38a1.13 1.13 0 01-1.13-1.13V6.38c0-.62.5-1.13 1.13-1.13h10.5v13.5m0 0h1.5m4.5 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.13c.62 0 1.13-.5 1.13-1.13v-4.12L18 8.25h-4.12';
  var MORE = 'M6.75 12h.01M12 12h.01M17.25 12h.01';
  var B = 'cl-card-recolecciones';

  function CardRecolecciones(props) {
    var mobile = !!props.mobile;
    var carrier = props.carrier || {};
    var origin = props.origin || {};
    var sched = props.schedule || {};
    var Btn = (window.Caelus || {}).Button;
    var rest = omit(props, ['mobile', 'number', 'status', 'carrier', 'origin', 'schedule', 'packages', 'weight', 'onMore', 'className']);

    function Field(label, body, extra) {
      return h('div', { className: cx(B + '__field', extra) }, h('span', { className: B + '__label' }, label), body);
    }
    var more = Btn
      ? h(Btn, { type: 'secondary', size: 'sm', shape: 'square', icon: ico(MORE, 18, 2.5), 'aria-label': 'Más opciones', onClick: props.onMore })
      : h('button', { type: 'button', 'aria-label': 'Más opciones', onClick: props.onMore }, ico(MORE, 18, 2.5));

    var carrierEl = Field('Paquetería', h('div', { className: B + '__carrier' },
      h('span', { className: B + '__logo' }, carrier.logo || null),
      h('span', { className: B + '__stack' },
        h('span', { className: B + '__value' }, carrier.name),
        carrier.service ? h('span', { className: B + '__sub' }, carrier.service) : null)), B + '__field--carrier');
    var originEl = Field('Origen', h('span', { className: B + '__stack' }, h('span', { className: B + '__value' }, origin.name), h('span', { className: B + '__sub' }, origin.detail)));
    var schedEl = Field('Fecha programada', h('span', { className: B + '__stack' }, h('span', { className: B + '__value' }, sched.date), h('span', { className: B + '__plain' }, sched.time)));
    var pkgEl = Field(mobile ? 'Cantidad' : 'Paquetes', h('span', { className: B + '__plain' }, props.packages));
    var weightEl = Field('Peso', h('span', { className: B + '__plain' }, props.weight));

    if (mobile) {
      return h('article', Object.assign({ className: cx(B, B + '--mobile', props.className) }, rest),
        h('div', { className: B + '__head' },
          h('div', { className: B + '__stack' }, h('span', { className: B + '__num-title' }, 'Número de recolección'), h('span', { className: B + '__num-mobile' }, props.number)),
          props.status || null),
        h('hr', { className: B + '__div' }),
        h('div', { className: B + '__content' },
          h('div', { className: B + '__carrier-row' }, carrierEl, more),
          originEl, schedEl,
          h('div', { className: B + '__pair' }, pkgEl, weightEl)));
    }
    return h('article', Object.assign({ className: cx(B, props.className) }, rest),
      h('div', { className: B + '__head' },
        h('div', { className: B + '__head-left' },
          h('span', { className: B + '__head-icon' }, ico(TRUCK, 16)),
          h('span', { className: B + '__num-title' }, 'Núm de recolección'),
          h('span', { className: B + '__num' }, props.number)),
        props.status || null),
      h('hr', { className: B + '__div' }),
      h('div', { className: B + '__content' }, carrierEl, originEl, schedEl, pkgEl, weightEl, h('div', { className: B + '__actions' }, more)));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardRecolecciones = CardRecolecciones;
})();

/* ---- CardServiciosPaqueteria ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var WARN = 'M12 9v3.75M2.7 16.13c-.87 1.5.22 3.37 1.95 3.37h14.7c1.73 0 2.82-1.87 1.95-3.37L13.95 3.38c-.87-1.5-3.03-1.5-3.9 0L2.7 16.13zM12 15.75h.01';
  var B = 'cl-card-servicios-paqueteria';
  var uid = 0;
  function useId(prefix) { var r = window.React.useRef(null); if (!r.current) r.current = prefix + '-' + (++uid); return r.current; }

  function Toggle(p) {
    var id = useId(B + '-tg');
    return h('label', { className: B + '__toggle', htmlFor: id },
      h('input', { id: id, type: 'checkbox', role: 'switch', className: B + '__toggle-input', checked: !!p.checked, onChange: p.onChange || function () {} }),
      h('span', { className: B + '__toggle-track', 'aria-hidden': true }),
      h('span', null, p.label));
  }

  function Check(p) {
    var id = useId(B + '-cb');
    return h('div', { className: B + '__check' },
      h('input', { id: id, type: 'checkbox', className: B + '__check-input', checked: !!p.item.checked, disabled: p.item.disabled, onChange: function (e) { if (p.onChange) p.onChange(p.item, e.target.checked, e); }, 'aria-describedby': p.item.detail ? id + '-d' : null }),
      h('div', { className: B + '__check-text' },
        h('label', { htmlFor: id, className: B + '__check-label' }, p.item.label),
        p.item.detail ? h('span', { id: id + '-d', className: B + '__check-detail' }, p.item.detail) : null));
  }

  function CardServiciosPaqueteria(props) {
    var variant = props.variant || 'skydropx';
    var mobile = props.device === 'mobile';
    var Btn = C().Button, Alert = C().Alert;
    var rest = omit(props, ['variant', 'device', 'showAlerts', 'alertText', 'logo', 'name', 'enabled', 'onToggle', 'headText', 'title', 'description', 'groups', 'onServiceChange', 'saveDisabled', 'onSave', 'convenio', 'className']);
    var cls = cx(B, B + '--' + variant, mobile && B + '--mobile', props.className);
    var showAlerts = props.showAlerts !== false;

    if (variant === 'head-paqueteria') {
      return h('section', Object.assign({ className: cls }, rest),
        h('div', { className: B + '__head' },
          h('div', { className: B + '__brand' }, h('span', { className: B + '__logo' }, props.logo || null), h('span', { className: B + '__name' }, props.name)),
          h(Toggle, { checked: props.enabled !== false, onChange: props.onToggle, label: props.enabled === false ? 'Activar' : 'Desactivar' })),
        showAlerts ? h('p', { className: B + '__note' }, props.headText || 'Esta acción aplicará a todas tus cotizaciones, incluso si tienes un convenio.') : null);
    }

    if (variant === 'convenio') {
      var Conv = C().CardConvenioContenedor;
      return h('section', Object.assign({ className: cls }, rest), Conv ? h(Conv, props.convenio || {}) : null);
    }

    var groups = props.groups || [];
    return h('section', Object.assign({ className: cls }, rest),
      h('div', { className: B + '__intro' },
        h('h3', { className: B + '__title' }, props.title || 'Servicios'),
        h('p', { className: B + '__desc' }, props.description || 'Selecciona los servicios para cotizar tus envíos.')),
      h('div', { className: B + '__groups' }, groups.map(function (g, gi) {
        return h('fieldset', { key: gi, className: B + '__group' },
          h('legend', { className: B + '__group-title' }, g.title),
          (g.items || []).map(function (it, ii) { return h(Check, { key: it.id || ii, item: it, onChange: props.onServiceChange }); }));
      })),
      showAlerts ? (Alert
        ? h(Alert, { color: 'warning', icon: ico(WARN, 16) }, props.alertText || 'Los cambios que realices en los servicios de la paquetería, se verán reflejados en tu convenio.')
        : h('p', { className: B + '__note', role: 'status' }, props.alertText)) : null,
      h('div', { className: B + '__footer' },
        Btn ? h(Btn, { type: 'primary', size: 'base', disabled: props.saveDisabled, onClick: props.onSave }, 'Guardar') : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardServiciosPaqueteria = CardServiciosPaqueteria;
})();

/* ---- CardTiendaIntegrada ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  var B = 'cl-card-tienda-integrada';
  var STATUS = {
    'activada': { theme: 'green', label: 'Activada' },
    'desactivada': { theme: 'gray', label: 'Desactivada' },
    'actualizar-permisos': { theme: 'yellow', label: 'Actualizar permisos' }
  };
  var NAMES = { shopify: 'Shopify', woocommerce: 'WooCommerce', 'api-key': 'API Skydropx' };

  function CardTiendaIntegrada(props) {
    var Badge = (window.Caelus || {}).Badge;
    var st = STATUS[props.status] || STATUS.activada;
    var mobile = props.version === 'mobile';
    var rest = omit(props, ['ecommerce', 'status', 'version', 'logo', 'platform', 'storeName', 'url', 'href', 'connectedAt', 'onMenu', 'menuLabel', 'className']);
    var platform = props.platform || NAMES[props.ecommerce || 'shopify'];
    var isKey = props.ecommerce === 'api-key';
    var urlEl = props.href && !isKey
      ? h('a', { className: B + '__url', href: props.href }, props.url)
      : h('span', { className: cx(B + '__url', isKey && B + '__url--key') }, props.url);

    return h('article', Object.assign({ className: cx(B, mobile && B + '--mobile', props.className) }, rest),
      h('div', { className: B + '__main' },
        h('div', { className: B + '__store' },
          h('span', { className: B + '__logo' }, props.logo || null),
          h('span', { className: B + '__stack' }, h('span', { className: B + '__platform' }, platform), h('span', null, props.storeName))),
        h('div', { className: B + '__stack' }, urlEl, h('span', null, props.connectedAt)),
        h('div', { className: B + '__status' }, Badge ? h(Badge, { theme: st.theme, size: 'small' }, st.label) : st.label)),
      h('button', { type: 'button', className: B + '__menu', 'aria-label': props.menuLabel || 'Opciones de ' + platform, 'aria-haspopup': 'menu', onClick: props.onMenu },
        h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round', 'aria-hidden': true }, h('path', { d: 'M6.75 12h.01M12 12h.01M17.25 12h.01' }))));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardTiendaIntegrada = CardTiendaIntegrada;
})();

/* ---- CargaConvenios ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    hand: 'M7 11l3-3 3 2 4-4 4 4-8 8-2-2M3 11l4-4 3 1M7 15l2 2',
    ok: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ko: 'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  };
  var B = 'cl-carga-convenios';
  var COPY = {
    'conexion': {
      carga: ['Conectando convenio', 'Por favor espera mientras completamos la conexión.'],
      error: ['No pudimos conectar el convenio', 'Algunos datos parecen ser incorrectos. Revisa la información e intenta nuevamente.'],
      exito: ['Tu convenio está conectado', 'A partir de ahora se mostrará tu convenio en todas tus cotizaciones.'],
      bar: 'Conexión del convenio', errorStatus: 'Error al conectar', okStatus: 'Conexión finalizada'
    },
    'edicion': {
      carga: ['Editando convenio', 'Por favor espera mientras editamos los datos.'],
      error: ['No pudimos editar el convenio', 'Algunos datos parecen ser incorrectos. Revisa la información e intenta nuevamente.'],
      exito: ['Cambios guardados con éxito', 'Actualizamos los datos de tu convenio.'],
      bar: 'Edición del convenio', errorStatus: 'Error al editar', okStatus: 'Edición finalizada'
    }
  };

  function CargaConvenios(props) {
    var state = props.state || 'carga';
    var type = props.type === 'edicion' ? 'edicion' : 'conexion';
    var copy = COPY[type];
    var Btn = C().Button;
    var value = state === 'carga' ? Math.max(0, Math.min(100, props.value != null ? props.value : 25)) : 100;
    var rest = omit(props, ['state', 'type', 'value', 'title', 'description', 'progressLabel', 'statusText', 'onHelp', 'onRetry', 'onDone', 'className']);
    var title = props.title || copy[state][0];
    var desc = props.description || copy[state][1];
    var status = props.statusText || (state === 'carga' ? null : state === 'error' ? copy.errorStatus : copy.okStatus);

    return h('div', Object.assign({ className: cx(B, B + '--' + state, props.className), role: state === 'error' ? 'alert' : 'status', 'aria-live': 'polite' }, rest),
      state === 'exito' ? h('span', { className: B + '__hero' }, ico(P.hand, 40)) : null,
      h('h3', { className: B + '__title' }, title),
      h('p', { className: B + '__desc' }, desc),
      h('div', { className: B + '__progress' },
        h('div', { className: B + '__bar-label' },
          h('span', null, props.progressLabel || copy.bar),
          state === 'carga' ? h('span', null, value + '%') : h('span', { className: B + '__bar-icon' }, ico(state === 'error' ? P.ko : P.ok, 18))),
        h('div', { className: B + '__track', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': value, 'aria-label': props.progressLabel || copy.bar },
          h('div', { className: B + '__fill', style: { width: value + '%' } })),
        status ? h('span', { className: B + '__status' }, status) : null),
      state === 'carga' ? null : h('div', { className: B + '__actions' },
        state === 'error' && Btn ? h(Btn, { type: 'tertiary', size: 'sm', onClick: props.onHelp }, 'Recibir ayuda') : null,
        Btn ? h(Btn, { type: 'primary', size: 'sm', onClick: state === 'error' ? props.onRetry : props.onDone }, state === 'error' ? 'Reintentar' : 'Entendido') : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CargaConvenios = CargaConvenios;
})();

/* ---- Carousel ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function chevron(dir) {
    return h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      h('path', { d: dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7' }));
  }

  // Carousel — Vista × Indicadores from the Figma set "carousel".
  function Carousel(props) {
    var view = props.view || 'desktop';
    var indicators = props.indicators || 'none';
    var slides = React.Children.toArray(props.children);
    var perView = view === 'mobile' ? 1 : Math.max(1, props.perView || 3);
    var pages = Math.max(1, slides.length - perView + 1);
    var controlled = props.index != null;
    var st = React.useState(props.defaultIndex || 0);
    var index = Math.min(controlled ? props.index : st[0], pages - 1);
    function go(i) {
      var next = (i + pages) % pages;
      if (!controlled) st[1](next);
      if (props.onIndexChange) props.onIndexChange(next);
    }
    var rest = omit(props, ['view', 'indicators', 'perView', 'index', 'defaultIndex', 'onIndexChange', 'children', 'className', 'prevLabel', 'nextLabel']);
    var Button = window.Caelus && window.Caelus.Button;
    function navButton(dir) {
      var label = dir === 'prev' ? (props.prevLabel || 'Anterior') : (props.nextLabel || 'Siguiente');
      var onClick = function () { go(index + (dir === 'prev' ? -1 : 1)); };
      return Button
        ? h(Button, { type: 'secondary', size: 'xs', shape: 'square', icon: chevron(dir), 'aria-label': label, onClick: onClick, className: 'cl-carousel__nav' })
        : h('button', { type: 'button', 'aria-label': label, onClick: onClick, className: 'cl-carousel__nav' }, chevron(dir));
    }
    var dots = indicators !== 'none' && pages > 1 ? h('div', { className: 'cl-carousel__dots' },
      Array.from({ length: pages }, function (_, i) {
        return h('button', {
          key: i, type: 'button', className: 'cl-carousel__dot',
          'aria-label': 'Ir a la diapositiva ' + (i + 1),
          'aria-current': i === index ? 'true' : undefined,
          onClick: function () { go(i); }
        });
      })) : null;
    var track = h('div', { className: 'cl-carousel__track', 'aria-live': 'polite' },
      slides.map(function (child, i) {
        var visible = i >= index && i < index + perView;
        return h('div', {
          key: i, className: 'cl-carousel__slide', role: 'group', 'aria-roledescription': 'diapositiva',
          'aria-label': (i + 1) + ' de ' + slides.length, hidden: !visible
        }, child);
      }),
      indicators === 'overlay' ? dots : null);

    var body;
    if (indicators === 'below') {
      body = [h('div', { key: 't', className: 'cl-carousel__row' }, track),
        h('div', { key: 'c', className: 'cl-carousel__controls' }, navButton('prev'), dots, navButton('next'))];
    } else if (view === 'mobile') {
      body = [h('div', { key: 't', className: 'cl-carousel__row' }, track,
        h('div', { className: 'cl-carousel__overlay-nav' }, navButton('prev'), navButton('next')))];
    } else {
      body = [h('div', { key: 't', className: 'cl-carousel__row' }, navButton('prev'), track, navButton('next'))];
    }
    return h('div', Object.assign({ role: 'region', 'aria-roledescription': 'carrusel' }, rest, {
      className: cx('cl-carousel', 'cl-carousel--' + view, 'cl-carousel--dots-' + indicators, props.className)
    }), body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Carousel = Carousel;
})();

/* ---- Chat ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function svg(size, paths, filled) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }
  var ELLIPSIS = ['M6 12h.01', 'M12 12h.01', 'M18 12h.01'];
  var DOC = ['M7 3h7l5 5v13H7z', 'M14 3v5h5'];
  var DOWNLOAD = ['M12 4v11', 'M7 10l5 5 5-5', 'M5 20h14'];

  // internal .chat-button-more: tertiary icon button + dropdown menu.
  function ChatMore(props) {
    var st = React.useState(false);
    var open = st[0];
    var setOpen = st[1];
    var Button = window.Caelus && window.Caelus.Button;
    var menuRef = React.useRef(null);
    React.useEffect(function () {
      if (open && menuRef.current) {
        var first = menuRef.current.querySelector('[role="menuitem"]');
        if (first) first.focus();
      }
    }, [open]);
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    var trigger = {
      'aria-label': props.label || 'Más acciones',
      'aria-haspopup': 'menu',
      'aria-expanded': open ? 'true' : 'false',
      onClick: function () { setOpen(!open); }
    };
    return h('div', { className: cx('cl-chat__more', 'cl-chat__more--' + props.side), onKeyDown: onKey },
      Button ? h(Button, Object.assign({ type: 'tertiary', shape: 'square', icon: svg(18, ELLIPSIS) }, trigger))
        : h('button', Object.assign({ type: 'button' }, trigger), svg(18, ELLIPSIS)),
      open ? h('div', { className: 'cl-chat__menu', role: 'menu', ref: menuRef },
        props.actions.map(function (a, i) {
          return h('button', {
            key: i, type: 'button', role: 'menuitem', className: 'cl-chat__menu-item',
            onClick: function (e) { setOpen(false); if (a.onClick) a.onClick(e); }
          }, a.label);
        })) : null);
  }

  // internal .chat-bubble: Usuario (agent | client) × Mensaje (text, attachment, link).
  function Bubble(m, i) {
    var from = m.from === 'client' ? 'client' : 'agent';
    var avatar = h('div', { className: 'cl-chat__avatar', 'aria-hidden': true }, m.avatar || (m.author ? String(m.author).charAt(0) : ''));
    var att = m.attachment;
    var link = m.link;
    var bubble = h('div', { className: 'cl-chat__bubble' },
      h('div', { className: 'cl-chat__header' },
        m.author != null ? h('span', { className: 'cl-chat__author' }, m.author) : null,
        m.time != null ? h('span', { className: 'cl-chat__time' }, m.time) : null),
      att ? h('a', { className: 'cl-chat__file', href: att.href || '#', download: att.href ? '' : undefined, onClick: att.onClick },
        h('span', { className: 'cl-chat__file-info' },
          h('span', { className: 'cl-chat__file-name' }, svg(24, DOC), h('span', null, att.name)),
          att.meta != null ? h('span', { className: 'cl-chat__file-meta' }, att.meta) : null),
        h('span', { className: 'cl-chat__file-download' }, svg(24, DOWNLOAD), h('span', { className: 'cl-chat__sr' }, 'Descargar'))) : null,
      link ? h('a', { className: 'cl-chat__preview', href: link.url, target: '_blank', rel: 'noopener noreferrer' },
        link.image ? h('span', { className: 'cl-chat__preview-img' }, link.image) : null,
        link.title != null ? h('span', { className: 'cl-chat__preview-title' }, link.title) : null,
        link.domain != null ? h('span', { className: 'cl-chat__preview-domain' }, link.domain) : null) : null,
      link ? h('a', { className: 'cl-chat__link', href: link.url, target: '_blank', rel: 'noopener noreferrer' }, link.url) : null,
      m.text != null ? h('p', { className: 'cl-chat__text' }, m.text) : null,
      m.status != null ? h('p', { className: 'cl-chat__status' }, m.status) : null);
    var group = h('div', { className: 'cl-chat__group' },
      from === 'agent' ? avatar : null, bubble, from === 'client' ? avatar : null);
    var more = m.actions && m.actions.length ? h(ChatMore, { side: from === 'agent' ? 'left' : 'right', actions: m.actions, label: m.actionsLabel }) : null;
    return h('li', { key: m.id != null ? m.id : i, className: cx('cl-chat__row', 'cl-chat__row--' + from) },
      from === 'client' ? more : null, group, from === 'agent' ? more : null);
  }

  // Chat — standalone "chat" component; its slot holds .chat-bubble instances.
  function Chat(props) {
    var rest = omit(props, ['messages', 'className']);
    var messages = props.messages || [];
    return h('div', Object.assign({ role: 'log', 'aria-live': 'polite' }, rest, { className: cx('cl-chat', props.className) }),
      h('ol', { className: 'cl-chat__list' }, messages.map(Bubble)));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Chat = Chat;
})();

/* ---- DrawerHistorial ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }
  function icon(paths, size) {
    var s = size || 16;
    return h('svg', { viewBox: '0 0 16 16', width: s, height: s, fill: 'none', 'aria-hidden': 'true' },
      paths.map(function (d, i) { return h('path', { key: i, d: d, stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }); }));
  }
  var I = {
    x: function () { return icon(['M4 4l8 8M12 4l-8 8'], 18); },
    pin: function () { return icon(['M8 14.5s4.5-4.25 4.5-8a4.5 4.5 0 10-9 0c0 3.75 4.5 8 4.5 8z', 'M8 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z']); },
    building: function () { return icon(['M3 14.5V2.5h7v12M10 6h3v8.5M1.5 14.5h13M5 5h2M5 8h2M5 11h2']); },
    home: function () { return icon(['M2 7.5L8 2.5l6 5M3.5 6.5v7.5h9V6.5', 'M6.5 14v-4h3v4']); },
    cube: function () { return icon(['M8 1.75l5.5 3v6.5L8 14.25l-5.5-3v-6.5z', 'M2.5 4.75L8 7.75l5.5-3M8 7.75v6.5']); },
    store: function () { return icon(['M2.5 6.5v7h11v-7M1.5 6.5l1.5-4h10l1.5 4z']); },
    phone: function () { return icon(['M5 1.5h6v13H5z', 'M7.5 12.5h1']); },
    mail: function () { return icon(['M2 3.5h12v9H2z', 'M2 4l6 4.5L14 4']); },
    chevron: function () { return icon(['M4 10l4-4 4 4']); },
    external: function () { return icon(['M9 2.5h4.5V7M13.5 2.5L7.5 8.5M11.5 9.5v4h-9v-9h4']); },
    warning: function () { return icon(['M8 2l6.5 11.5h-13z', 'M8 6.5v3M8 11.5v.01']); },
    dims: function () { return icon(['M2.5 5.5v-3h3M10.5 2.5h3v3M13.5 10.5v3h-3M5.5 13.5h-3v-3']); },
    weight: function () { return icon(['M3 6h10l1 7.5H2z', 'M6 6a2 2 0 114 0']); }
  };

  var FLOW = ['creado', 'recolectado', 'en-camino', 'por-llegar', 'entregado', 'incidencia', 'en-devolucion'];
  var SINGLE = {
    'en-creacion': { tone: 'blue', label: 'En creación' },
    'error-en-creacion': { tone: 'red', label: 'Error en creación', icon: true },
    'cancelado': { tone: 'orange', label: 'Cancelado' }
  };

  function Section(p) {
    var open = React.useState(p.defaultOpen !== false);
    var contentId = useId('cl-dh-section');
    return h('section', { className: 'cl-drawer-historial__card' },
      h('h3', { className: 'cl-drawer-historial__section-title' },
        h('button', { type: 'button', className: 'cl-drawer-historial__toggle', 'aria-expanded': open[0] ? 'true' : 'false', 'aria-controls': contentId, onClick: function () { open[1](!open[0]); } },
          h('span', { className: 'cl-drawer-historial__badge-icon' }, p.icon),
          h('span', { className: 'cl-drawer-historial__section-label' }, p.title),
          h('span', { className: cx('cl-drawer-historial__chevron', !open[0] && 'cl-drawer-historial__chevron--closed') }, I.chevron()))),
      h('div', { id: contentId, hidden: !open[0], className: 'cl-drawer-historial__section-body' }, p.children));
  }

  function Address(p) {
    var a = p.address || {};
    return h('address', { className: 'cl-drawer-historial__address' },
      a.name ? h('p', null, h('span', { className: 'cl-drawer-historial__mini-icon' }, I.store()), a.name) : null,
      a.address ? h('p', null, h('span', { className: 'cl-drawer-historial__mini-icon' }, I.pin()), a.address) : null,
      (a.phone || a.email) ? h('p', { className: 'cl-drawer-historial__contact' },
        a.phone ? h('span', null, h('span', { className: 'cl-drawer-historial__mini-icon' }, I.phone()), a.phone) : null,
        a.email ? h('span', null, h('span', { className: 'cl-drawer-historial__mini-icon' }, I.mail()), a.email) : null) : null);
  }

  function DrawerHistorial(props) {
    var status = props.status || 'creado';
    var titleId = useId('cl-dh-title');
    var Button = window.Caelus && window.Caelus.Button;
    var Badge = window.Caelus && window.Caelus.Badge;
    var StatusRecord = window.Caelus && window.Caelus.StatusRecord;
    var single = SINGLE[status];
    var rest = omit(props, ['status', 'title', 'onClose', 'closeLabel', 'carrierName', 'onTrack', 'trackLabel', 'alert',
      'events', 'statusDescription', 'statusDate', 'details', 'charges', 'total', 'origin', 'destination', 'packageInfo',
      'className', 'children']);

    var trackBtn = props.onTrack !== null ? (Button
      ? h(Button, { type: 'secondary', size: 'xs', rightIcon: I.external(), onClick: props.onTrack, disabled: status === 'error-en-creacion' },
        props.trackLabel || ('Rastrear en ' + (props.carrierName || 'paquetería')))
      : null) : null;

    var statusBody;
    if (single) {
      statusBody = h('div', { className: 'cl-drawer-historial__single' },
        single.icon ? h('span', { className: 'cl-drawer-historial__single-icon' }, I.warning()) : null,
        h('div', { className: 'cl-drawer-historial__single-text' },
          h('span', { className: cx('cl-drawer-historial__pill', 'cl-drawer-historial__pill--' + single.tone) },
            h('span', { className: 'cl-drawer-historial__pill-dot', 'aria-hidden': 'true' }), single.label),
          props.statusDescription ? h('p', { className: 'cl-drawer-historial__single-desc' }, props.statusDescription) : null,
          props.statusDate ? h('p', { className: 'cl-drawer-historial__single-date' }, props.statusDate) : null));
    } else {
      var recordStatus = status === 'error-en-camino' ? 'incidencia' : (FLOW.indexOf(status) >= 0 ? status : 'creado');
      statusBody = StatusRecord ? h(StatusRecord, { status: recordStatus }) : null;
    }

    var events = props.events || [];
    var details = props.details || [];
    var charges = props.charges || [];

    return h('aside', Object.assign({ className: cx('cl-drawer-historial', props.className), 'aria-labelledby': titleId }, rest),
      h('div', { className: 'cl-drawer-historial__heading' },
        h('h2', { id: titleId, className: 'cl-drawer-historial__title' }, props.title || 'Detalles del envío'),
        props.onClose ? h('button', { type: 'button', className: 'cl-drawer-historial__close', 'aria-label': props.closeLabel || 'Cerrar', onClick: props.onClose }, I.x()) : null),

      h('section', { className: 'cl-drawer-historial__card', 'aria-label': 'Estatus del envío' },
        h('div', { className: 'cl-drawer-historial__row-between' },
          h('h3', { className: 'cl-drawer-historial__section-title cl-drawer-historial__section-title--static' },
            h('span', { className: 'cl-drawer-historial__badge-icon' }, I.pin()), 'Estatus del envío'),
          trackBtn),
        statusBody,
        props.alert || null,
        events.length && !single ? h('ol', { className: 'cl-drawer-historial__events' },
          events.map(function (ev, i) {
            return h('li', { key: i, className: 'cl-drawer-historial__event' },
              h('span', { className: 'cl-drawer-historial__event-dot', 'aria-hidden': 'true' }),
              h('div', null,
                h('p', { className: 'cl-drawer-historial__event-title' }, ev.title),
                ev.date ? h('p', { className: 'cl-drawer-historial__event-date' }, ev.date) : null));
          })) : null),

      details.length || charges.length || props.total ? h('section', { className: 'cl-drawer-historial__card cl-drawer-historial__card--info', 'aria-label': 'Información del envío' },
        h('dl', { className: 'cl-drawer-historial__dl' },
          details.map(function (r, i) {
            return h('div', { key: 'd' + i, className: 'cl-drawer-historial__dl-row' },
              h('dt', null, r.label),
              h('dd', { className: cx(r.tone === 'link' && 'cl-drawer-historial__dd--link', r.tone === 'muted' && 'cl-drawer-historial__dd--muted') },
                r.icon ? h('span', { className: 'cl-drawer-historial__carrier' }, r.icon) : null, r.value));
          }),
          charges.length ? h('hr', { className: 'cl-drawer-historial__rule' }) : null,
          charges.map(function (r, i) {
            return h('div', { key: 'c' + i, className: 'cl-drawer-historial__dl-row' }, h('dt', null, r.label), h('dd', null, r.value));
          }),
          props.total ? h('div', { className: 'cl-drawer-historial__dl-row cl-drawer-historial__dl-row--total' },
            h('dt', null, props.total.label || 'Monto total:'), h('dd', null, props.total.value)) : null)) : null,

      props.origin ? h(Section, { title: 'Dirección de origen', icon: I.building() }, h(Address, { address: props.origin })) : null,
      props.destination ? h(Section, { title: 'Dirección de destino', icon: I.home() }, h(Address, { address: props.destination })) : null,
      props.packageInfo ? h(Section, { title: 'Paquete', icon: I.cube() },
        h('div', { className: 'cl-drawer-historial__badges' },
          (props.packageInfo.dimensions && Badge) ? h(Badge, { theme: 'gray', size: 'large', icon: I.dims() }, props.packageInfo.dimensions) : null,
          (props.packageInfo.weight && Badge) ? h(Badge, { theme: 'gray', size: 'large', icon: I.weight() }, props.packageInfo.weight) : null)) : null,
      props.children);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.DrawerHistorial = DrawerHistorial;
})();

/* ---- DrawerNotification ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }
  function icon(paths, size) {
    var s = size || 16;
    return h('svg', { viewBox: '0 0 16 16', width: s, height: s, fill: 'none', 'aria-hidden': 'true' },
      paths.map(function (d, i) { return h('path', { key: i, d: d, stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }); }));
  }
  var xIcon = function () { return icon(['M4 4l8 8M12 4l-8 8'], 18); };
  var bars = function () { return icon(['M2.5 4.5h11M2.5 8h11M2.5 11.5h11']); };
  var gift = function () { return icon(['M2.5 6.5h11v2.5h-11zM3.5 9v5h9V9M8 6.5V14', 'M8 6.5S7 3 5.25 3.5C4 3.9 4.5 6.5 8 6.5zM8 6.5S9 3 10.75 3.5C12 3.9 11.5 6.5 8 6.5z'], 20); };

  var DEFAULT_FILTERS = [
    { value: 'todas', label: 'Todas' },
    { value: 'no-leidas', label: 'No leídas' },
    { value: 'incidencia', label: 'Con incidencia' }
  ];

  function DrawerNotification(props) {
    var titleId = useId('cl-dn-title');
    var Button = window.Caelus && window.Caelus.Button;
    var notifications = props.notifications || [];
    var unread = notifications.filter(function (n) { return !n.read; }).length;
    var filters = props.filters || DEFAULT_FILTERS;
    var st = React.useState(props.defaultFilter || filters[0].value);
    var active = props.filter !== undefined ? props.filter : st[0];
    function pick(v) { if (props.filter === undefined) st[1](v); if (props.onFilterChange) props.onFilterChange(v); }

    var rest = omit(props, ['title', 'onClose', 'closeLabel', 'notifications', 'filters', 'filter', 'defaultFilter',
      'onFilterChange', 'onMarkAllRead', 'markAllLabel', 'onSeeMore', 'seeMoreLabel', 'emptyState', 'onNotificationClick',
      'className', 'children']);

    return h('aside', Object.assign({ className: cx('cl-drawer-notification', props.className), 'aria-labelledby': titleId }, rest),
      h('div', { className: 'cl-drawer-notification__heading' },
        h('h2', { id: titleId, className: 'cl-drawer-notification__title' }, props.title || 'Notificaciones'),
        props.onClose ? h('button', { type: 'button', className: 'cl-drawer-notification__close', 'aria-label': props.closeLabel || 'Cerrar', onClick: props.onClose }, xIcon()) : null),

      h('div', { className: 'cl-drawer-notification__toolbar' },
        h('div', { className: 'cl-drawer-notification__filters', role: 'group', 'aria-label': 'Filtrar notificaciones' },
          filters.map(function (f) {
            var label = f.value === 'no-leidas' && f.count === undefined ? f.label + ' (' + unread + ')' : (f.count !== undefined ? f.label + ' (' + f.count + ')' : f.label);
            return h('button', { key: f.value, type: 'button', className: 'cl-drawer-notification__filter', 'aria-pressed': active === f.value ? 'true' : 'false', onClick: function () { pick(f.value); } },
              f.icon || bars(), label);
          })),
        props.onMarkAllRead !== null && Button ? h(Button, { type: 'tertiary', size: 'xs', disabled: unread === 0, onClick: props.onMarkAllRead }, props.markAllLabel || 'Marcar como leídas') : null),

      notifications.length
        ? h('ul', { className: 'cl-drawer-notification__list' },
          notifications.map(function (n, i) {
            var Tag = props.onNotificationClick ? 'button' : 'div';
            return h('li', { key: n.id || i, className: cx('cl-drawer-notification__item', !n.read && 'cl-drawer-notification__item--unread') },
              h(Tag, Object.assign({ className: 'cl-drawer-notification__item-inner' }, Tag === 'button' ? { type: 'button', onClick: function (e) { props.onNotificationClick(n, e); } } : {}),
                !n.read ? h('span', { className: 'cl-drawer-notification__dot' }, h('span', { className: 'cl-drawer-notification__sr' }, 'No leída: ')) : null,
                h('span', { className: 'cl-drawer-notification__icon', 'aria-hidden': 'true' }, n.icon || gift()),
                h('span', { className: 'cl-drawer-notification__text' },
                  h('span', { className: 'cl-drawer-notification__item-head' },
                    h('span', { className: 'cl-drawer-notification__item-title' }, n.title),
                    n.time ? h('span', { className: 'cl-drawer-notification__time' }, n.time) : null),
                  n.message ? h('span', { className: 'cl-drawer-notification__message' }, n.message) : null)));
          }))
        : (props.emptyState || h('p', { className: 'cl-drawer-notification__empty' }, 'No tienes notificaciones por ahora.')),

      props.children,
      props.onSeeMore && Button ? h('div', { className: 'cl-drawer-notification__footer' },
        h(Button, { type: 'tertiary', onClick: props.onSeeMore }, props.seeMoreLabel || 'Ver más')) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.DrawerNotification = DrawerNotification;
})();

/* ---- Dropdown ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function CheckIcon() {
    return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M3 8.5l3 3 7-7', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  function isInteractive(item) {
    var t = item.type || 'item';
    return t === 'item' && !item.disabled;
  }

  // Dropdown — menu panel. Folds the internal ".dropdown-nav-link" sets
  // (Type = Nav link | Título | Separador, Hover, Disabled) into `items`.
  function Dropdown(props) {
    var items = props.items || [];
    var role = props.role || 'listbox';
    var showCheck = props.showCheck !== false;
    var listRef = React.useRef(null);
    var rest = omit(props, ['items', 'role', 'showCheck', 'onSelect', 'maxHeight', 'leadingSize', 'className', 'style', 'autoFocus']);

    var firstFocusable = -1;
    for (var i = 0; i < items.length; i++) {
      if (!isInteractive(items[i])) continue;
      if (firstFocusable === -1) firstFocusable = i;
      if (items[i].selected) { firstFocusable = i; break; }
    }

    React.useEffect(function () {
      if (props.autoFocus && listRef.current) {
        var el = listRef.current.querySelector('[tabindex="0"]');
        if (el) el.focus();
      }
    }, [props.autoFocus]);

    function onKeyDown(e) {
      var nodes = Array.prototype.slice.call(listRef.current.querySelectorAll('.cl-dropdown__item:not([aria-disabled="true"])'));
      if (!nodes.length) return;
      var idx = nodes.indexOf(document.activeElement);
      var next = null;
      if (e.key === 'ArrowDown') next = nodes[(idx + 1) % nodes.length];
      else if (e.key === 'ArrowUp') next = nodes[(idx - 1 + nodes.length) % nodes.length];
      else if (e.key === 'Home') next = nodes[0];
      else if (e.key === 'End') next = nodes[nodes.length - 1];
      if (next) { e.preventDefault(); next.focus(); }
      if (props.onKeyDown) props.onKeyDown(e);
    }

    var style = Object.assign({}, props.style || {});
    if (props.maxHeight) style.maxHeight = props.maxHeight;

    return h('div', Object.assign({}, rest, {
      ref: listRef,
      role: role,
      className: cx('cl-dropdown', props.maxHeight && 'cl-dropdown--scroll', props.className),
      style: style,
      onKeyDown: onKeyDown
    }),
      items.map(function (item, index) {
        var type = item.type || 'item';
        var key = item.id || item.value || index;
        if (type === 'separator') return h('div', { key: key, role: 'separator', className: 'cl-dropdown__separator' });
        if (type === 'title') return h('div', { key: key, role: 'presentation', className: 'cl-dropdown__title' }, item.label);
        var selected = !!item.selected;
        function activate() {
          if (item.disabled) return;
          if (item.onSelect) item.onSelect(item);
          if (props.onSelect) props.onSelect(item);
        }
        var itemProps = {
          key: key,
          type: 'button',
          role: role === 'menu' ? 'menuitem' : 'option',
          className: cx('cl-dropdown__item', item.danger && 'cl-dropdown__item--danger', selected && 'cl-dropdown__item--selected'),
          tabIndex: index === firstFocusable ? 0 : -1,
          'aria-disabled': item.disabled ? 'true' : undefined,
          onClick: activate
        };
        if (role !== 'menu') itemProps['aria-selected'] = selected;
        var leading = item.logo || item.icon;
        return h('button', itemProps,
          leading ? h('span', { className: cx('cl-dropdown__lead', item.logo && 'cl-dropdown__lead--logo'), 'aria-hidden': true }, leading) : null,
          h('span', { className: 'cl-dropdown__text' },
            h('span', { className: 'cl-dropdown__label' }, item.label),
            item.helper ? h('span', { className: 'cl-dropdown__helper' }, item.helper) : null),
          item.trailing ? h('span', { className: 'cl-dropdown__trail', 'aria-hidden': true }, item.trailing) : null,
          showCheck && selected ? h('span', { className: 'cl-dropdown__check', 'aria-hidden': true }, h(CheckIcon)) : null);
      }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Dropdown = Dropdown;
})();

/* ---- DropdownButton ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Chevron() {
    return h('svg', { viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M4.5 6.75L9 11.25l4.5-4.5', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  function Dots() {
    return h('svg', { viewBox: '0 0 18 18', fill: 'currentColor', 'aria-hidden': true },
      h('circle', { cx: 4, cy: 9, r: 1.25 }), h('circle', { cx: 9, cy: 9, r: 1.25 }), h('circle', { cx: 14, cy: 9, r: 1.25 }));
  }

  var uid = 0;

  // DropdownButton — "dropdown-button": a secondary Button that opens a
  // Dropdown of actions (Type = Default | Only Icon).
  function DropdownButton(props) {
    var type = props.type || 'default';
    var controlled = typeof props.open === 'boolean';
    var st = React.useState(false);
    var open = controlled ? props.open : st[0];
    var wrapRef = React.useRef(null);
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = 'cl-ddb-' + (++uid);
    var menuId = idRef.current + '-menu';

    function setOpen(next, refocus) {
      if (!controlled) st[1](next);
      if (props.onOpenChange) props.onOpenChange(next);
      if (!next && refocus && wrapRef.current) {
        var btn = wrapRef.current.querySelector('.cl-dropdown-button__trigger');
        if (btn) btn.focus();
      }
    }

    React.useEffect(function () {
      if (!open) return undefined;
      function onDoc(e) { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false, false); }
      document.addEventListener('mousedown', onDoc);
      return function () { document.removeEventListener('mousedown', onDoc); };
    }, [open]);

    var rest = omit(props, ['type', 'label', 'icon', 'items', 'open', 'onOpenChange', 'onSelect', 'align', 'menuLabel', 'className', 'buttonType', 'size', 'disabled']);
    var Button = window.Caelus.Button;
    var Dropdown = window.Caelus.Dropdown;

    var triggerProps = {
      type: props.buttonType || 'secondary',
      size: props.size || 'base',
      disabled: props.disabled,
      className: 'cl-dropdown-button__trigger',
      'aria-haspopup': 'menu',
      'aria-expanded': open,
      'aria-controls': open ? menuId : undefined,
      onClick: function () { setOpen(!open, false); },
      onKeyDown: function (e) {
        if (e.key === 'ArrowDown' && !open) { e.preventDefault(); setOpen(true, false); }
      }
    };
    var trigger = type === 'icon'
      ? h(Button, Object.assign(triggerProps, { shape: 'square', icon: props.icon || h(Dots), 'aria-label': props.label || 'Más acciones' }))
      : h(Button, Object.assign(triggerProps, { rightIcon: h(Chevron) }), props.label);

    return h('div', Object.assign({}, rest, {
      ref: wrapRef,
      className: cx('cl-dropdown-button', props.align === 'end' && 'cl-dropdown-button--end', props.className),
      onKeyDown: function (e) { if (e.key === 'Escape' && open) { e.stopPropagation(); setOpen(false, true); } }
    }),
      trigger,
      open ? h(Dropdown, {
        id: menuId,
        role: 'menu',
        showCheck: false,
        autoFocus: true,
        'aria-label': props.menuLabel || (typeof props.label === 'string' ? props.label : 'Acciones'),
        className: 'cl-dropdown-button__menu',
        items: props.items || [],
        onSelect: function (item) {
          if (props.onSelect) props.onSelect(item);
          setOpen(false, true);
        }
      }) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.DropdownButton = DropdownButton;
})();

/* ---- DropdownLogos ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // DropdownLogos — the "dropdown-logos" component: a Dropdown whose rows lead
  // with a logo or flag (countries, carriers, platforms).
  function DropdownLogos(props) {
    var items = (props.items || []).map(function (item) {
      return Object.assign({}, item, { logo: item.logo, icon: undefined });
    });
    var rest = omit(props, ['items', 'className']);
    return h(window.Caelus.Dropdown, Object.assign({}, rest, {
      items: items,
      className: ['cl-dropdown-logos', props.className].filter(Boolean).join(' ')
    }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.DropdownLogos = DropdownLogos;
})();

/* ---- DropdownMultiselect ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Svg(d, size, sw) {
    return h('svg', { width: size, height: size, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: d, stroke: 'currentColor', strokeWidth: sw || 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  var uid = 0;
  function useId(prefix) {
    var r = React.useRef(null);
    if (!r.current) r.current = prefix + (++uid);
    return r.current;
  }

  // Checkbox row (base/input-checkbox inside .dropdown-nav-link)
  function Check(p) {
    var ref = React.useRef(null);
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!p.indeterminate; }, [p.indeterminate]);
    var helperId = p.helper ? p.id + '-h' : undefined;
    return h('div', { className: cx('cl-dropdown-multiselect__check', p.strong && 'cl-dropdown-multiselect__check--strong') },
      h('span', { className: 'cl-dropdown-multiselect__box' },
        h('input', { ref: ref, id: p.id, type: 'checkbox', checked: !!p.checked, disabled: p.disabled, 'aria-describedby': helperId,
          onChange: function (e) { p.onChange(e.target.checked); } }),
        h('span', { className: 'cl-dropdown-multiselect__mark', 'aria-hidden': true },
          p.indeterminate ? Svg('M5 9h8', 12, 2) : Svg('M4.5 9.5l3 3 6-7', 12, 2))),
      h('span', { className: 'cl-dropdown-multiselect__text' },
        h('label', { htmlFor: p.id, className: 'cl-dropdown-multiselect__label' }, p.label),
        p.helper ? h('span', { id: helperId, className: 'cl-dropdown-multiselect__helper' }, p.helper) : null));
  }

  function leafValues(options) {
    var out = [];
    options.forEach(function (o) {
      if (o.children && o.children.length) o.children.forEach(function (c) { if (!c.disabled) out.push(c.value); });
      else if (!o.disabled) out.push(o.value);
    });
    return out;
  }
  function matches(text, q) {
    return String(text == null ? '' : text).toLowerCase().indexOf(q) !== -1;
  }

  // DropdownMultiselect — "dropdown-multiselect" (Type = Default | Hierarchical,
  // Status = Default | Empty State).
  function DropdownMultiselect(props) {
    var base = useId('cl-dms-');
    var options = props.options || [];
    var value = props.value || [];
    var searchable = props.searchable !== false;
    var showSelectAll = props.showSelectAll !== false;
    var searchCtl = typeof props.search === 'string';
    var sState = React.useState('');
    var search = searchCtl ? props.search : sState[0];
    var eState = React.useState({});
    var expanded = eState[0];

    function setSearch(v) {
      if (!searchCtl) sState[1](v);
      if (props.onSearchChange) props.onSearchChange(v);
    }
    function emit(next) { if (props.onChange) props.onChange(next); }
    function toggleValues(vals, on) {
      var set = value.slice();
      vals.forEach(function (v) {
        var i = set.indexOf(v);
        if (on && i === -1) set.push(v);
        if (!on && i !== -1) set.splice(i, 1);
      });
      emit(set);
    }

    var q = search.trim().toLowerCase();
    var visible = options.map(function (o) {
      if (!q) return o;
      if (o.children && o.children.length) {
        if (matches(o.label, q)) return o;
        var kids = o.children.filter(function (c) { return matches(c.label, q) || matches(c.helper, q); });
        return kids.length ? Object.assign({}, o, { children: kids, _forceOpen: true }) : null;
      }
      return matches(o.label, q) || matches(o.helper, q) ? o : null;
    }).filter(Boolean);

    var visibleLeaves = leafValues(visible);
    var selectedVisible = visibleLeaves.filter(function (v) { return value.indexOf(v) !== -1; });
    var allOn = visibleLeaves.length > 0 && selectedVisible.length === visibleLeaves.length;
    var someOn = selectedVisible.length > 0 && !allOn;

    var rest = omit(props, ['options', 'value', 'onChange', 'searchable', 'showSelectAll', 'search', 'onSearchChange',
      'searchPlaceholder', 'searchLabel', 'selectAllLabel', 'emptyText', 'clearSearchLabel', 'maxHeight', 'className', 'style']);

    var rows = visible.map(function (o, i) {
      var id = base + '-o' + i;
      if (o.children && o.children.length) {
        var kids = leafValues([o]);
        var on = kids.filter(function (v) { return value.indexOf(v) !== -1; }).length;
        var isOpen = o._forceOpen || (expanded[o.value] != null ? expanded[o.value] : !!o.defaultExpanded);
        var groupId = id + '-g';
        return h('div', { key: o.value, className: 'cl-dropdown-multiselect__group', role: 'group', 'aria-labelledby': id + '-lbl' },
          h('div', { className: 'cl-dropdown-multiselect__row cl-dropdown-multiselect__row--parent' },
            h(Check, { id: id, label: h('span', { id: id + '-lbl' }, o.label), checked: kids.length > 0 && on === kids.length, indeterminate: on > 0 && on < kids.length,
              onChange: function (c) { toggleValues(kids, c); } }),
            h('button', { type: 'button', className: 'cl-dropdown-multiselect__toggle', 'aria-expanded': isOpen, 'aria-controls': groupId,
              'aria-label': (isOpen ? 'Contraer ' : 'Expandir ') + (typeof o.label === 'string' ? o.label : ''),
              onClick: function () { var n = Object.assign({}, expanded); n[o.value] = !isOpen; eState[1](n); } },
              Svg(isOpen ? 'M4.5 11.25L9 6.75l4.5 4.5' : 'M4.5 6.75L9 11.25l4.5-4.5', 18))),
          isOpen ? h('div', { id: groupId, className: 'cl-dropdown-multiselect__children' },
            o.children.map(function (c, j) {
              return h('div', { key: c.value, className: 'cl-dropdown-multiselect__row cl-dropdown-multiselect__row--child' },
                h(Check, { id: id + '-c' + j, label: c.label, helper: c.helper, disabled: c.disabled, checked: value.indexOf(c.value) !== -1,
                  onChange: function (on2) { toggleValues([c.value], on2); } }));
            })) : null);
      }
      return h('div', { key: o.value, className: 'cl-dropdown-multiselect__row' },
        h(Check, { id: id, label: o.label, helper: o.helper, disabled: o.disabled, checked: value.indexOf(o.value) !== -1,
          onChange: function (c) { toggleValues([o.value], c); } }));
    });

    var Button = window.Caelus.Button;
    var listStyle = props.maxHeight ? { maxHeight: props.maxHeight } : undefined;

    return h('div', Object.assign({}, rest, { className: cx('cl-dropdown-multiselect', props.className), style: props.style }),
      (searchable || showSelectAll) ? h('div', { className: 'cl-dropdown-multiselect__header' },
        searchable ? h('div', { className: 'cl-dropdown-multiselect__search' },
          h('span', { className: 'cl-dropdown-multiselect__search-icon', 'aria-hidden': true }, Svg('M15.5 15.5l-3.6-3.6M13 8A5 5 0 113 8a5 5 0 0110 0z', 18)),
          h('input', { type: 'search', value: search, placeholder: props.searchPlaceholder || 'Búsqueda',
            'aria-label': props.searchLabel || props.searchPlaceholder || 'Buscar opciones',
            onChange: function (e) { setSearch(e.target.value); } })) : null,
        showSelectAll ? h(Check, { id: base + '-all', strong: true, label: props.selectAllLabel || 'Seleccionar todos', checked: allOn, indeterminate: someOn,
          disabled: visibleLeaves.length === 0, onChange: function (c) { toggleValues(visibleLeaves, c); } }) : null) : null,
      visible.length
        ? h('div', { className: 'cl-dropdown-multiselect__list', style: listStyle }, rows)
        : h('div', { className: 'cl-dropdown-multiselect__empty', role: 'status' },
          h('p', { className: 'cl-dropdown-multiselect__empty-text' }, props.emptyText || 'No se encontraron resultados'),
          q && Button ? h(Button, { type: 'tertiary', size: 'xs', onClick: function () { setSearch(''); } }, props.clearSearchLabel || 'Limpiar búsqueda') : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.DropdownMultiselect = DropdownMultiselect;
})();

/* ---- EmptyDrawer ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }
  function xIcon() {
    return h('svg', { viewBox: '0 0 18 18', width: 18, height: 18, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M4.5 4.5l9 9M13.5 4.5l-9 9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }
  function btn(kind, a) {
    if (!a) return null;
    var Button = window.Caelus && window.Caelus.Button;
    return Button ? h(Button, { key: kind, type: kind, onClick: a.onClick, disabled: a.disabled }, a.label)
      : h('button', { key: kind, type: 'button', onClick: a.onClick, disabled: a.disabled }, a.label);
  }

  function EmptyDrawer(props) {
    var titleId = useId('cl-ed-title');
    var rest = omit(props, ['title', 'onClose', 'closeLabel', 'illustration', 'heading', 'description',
      'primaryAction', 'secondaryAction', 'className', 'children']);
    return h('aside', Object.assign({ className: cx('cl-empty-drawer', props.className), 'aria-labelledby': titleId }, rest),
      h('div', { className: 'cl-empty-drawer__heading' },
        h('h2', { id: titleId, className: 'cl-empty-drawer__title' }, props.title),
        props.onClose ? h('button', { type: 'button', className: 'cl-empty-drawer__close', 'aria-label': props.closeLabel || 'Cerrar', onClick: props.onClose }, xIcon()) : null),
      h('div', { className: 'cl-empty-drawer__panel' },
        h('div', { className: 'cl-empty-drawer__state' },
          props.illustration ? h('div', { className: 'cl-empty-drawer__illustration' }, props.illustration) : null,
          h('div', { className: 'cl-empty-drawer__content' },
            h('div', { className: 'cl-empty-drawer__text' },
              props.heading ? h('p', { className: 'cl-empty-drawer__state-title' }, props.heading) : null,
              props.description ? h('p', { className: 'cl-empty-drawer__state-desc' }, props.description) : null),
            props.primaryAction || props.secondaryAction ? h('div', { className: 'cl-empty-drawer__actions' },
              btn('secondary', props.secondaryAction), btn('primary', props.primaryAction)) : null),
          props.children)));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.EmptyDrawer = EmptyDrawer;
})();

/* ---- EmptyState ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function renderAction(action, type) {
    if (!action) return null;
    var Button = window.Caelus && window.Caelus.Button;
    var p = { type: type, size: 'base', onClick: action.onClick, className: 'cl-empty-state__button' };
    return Button ? h(Button, p, action.label) : h('button', { type: 'button', onClick: action.onClick, className: 'cl-empty-state__button' }, action.label);
  }

  // EmptyState — Dispositivo × Plataforma from the Figma set "empty-states".
  function EmptyState(props) {
    var device = props.device || 'desktop';
    var Tag = props.titleAs || 'h2';
    var rest = omit(props, ['device', 'illustration', 'title', 'titleAs', 'children', 'primaryAction', 'secondaryAction', 'className']);
    var hasActions = props.primaryAction || props.secondaryAction;
    return h('section', Object.assign({}, rest, {
      className: cx('cl-empty-state', 'cl-empty-state--' + device, props.className)
    }),
      props.illustration ? h('div', { className: 'cl-empty-state__illustration', 'aria-hidden': true }, props.illustration) : null,
      h('div', { className: 'cl-empty-state__content' },
        h('div', { className: 'cl-empty-state__text' },
          props.title != null ? h(Tag, { className: 'cl-empty-state__title' }, props.title) : null,
          props.children != null ? h('p', { className: 'cl-empty-state__description' }, props.children) : null),
        hasActions ? h('div', { className: 'cl-empty-state__actions' },
          renderAction(props.secondaryAction, 'secondary'),
          renderAction(props.primaryAction, 'primary')) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.EmptyState = EmptyState;
})();

/* ---- ErrorScreen ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function renderAction(action, type) {
    if (!action) return null;
    var Button = window.Caelus && window.Caelus.Button;
    return Button ? h(Button, { type: type, size: 'base', onClick: action.onClick }, action.label)
      : h('button', { type: 'button', onClick: action.onClick }, action.label);
  }

  // ErrorScreen — Breakpoints from the Figma set "error-screen" (the internal ".ilustration" folds into `illustration`).
  function ErrorScreen(props) {
    var breakpoint = props.breakpoint || 'desktop';
    var rest = omit(props, ['breakpoint', 'code', 'title', 'children', 'illustration', 'primaryAction', 'secondaryAction', 'className']);
    var hasActions = props.primaryAction || props.secondaryAction;
    return h('main', Object.assign({}, rest, {
      className: cx('cl-error-screen', 'cl-error-screen--' + breakpoint, props.className)
    }),
      h('div', { className: 'cl-error-screen__inner' },
        h('div', { className: 'cl-error-screen__info' },
          props.code != null ? h('p', { className: 'cl-error-screen__code' }, props.code) : null,
          h('div', { className: 'cl-error-screen__text' },
            props.title != null ? h('h1', { className: 'cl-error-screen__title' }, props.title) : null,
            props.children != null ? h('div', { className: 'cl-error-screen__message' }, props.children) : null),
          hasActions ? h('div', { className: 'cl-error-screen__actions' },
            renderAction(props.secondaryAction, 'secondary'),
            renderAction(props.primaryAction, 'primary')) : null),
        props.illustration ? h('div', { className: 'cl-error-screen__illustration', 'aria-hidden': true }, props.illustration) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ErrorScreen = ErrorScreen;
})();

/* ---- Filter ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Svg(d, size, sw) {
    return h('svg', { width: size, height: size, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: d, stroke: 'currentColor', strokeWidth: sw || 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  var uid = 0;
  function useId(prefix) {
    var r = React.useRef(null);
    if (!r.current) r.current = prefix + (++uid);
    return r.current;
  }

  function Check(p) {
    var ref = React.useRef(null);
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!p.indeterminate; }, [p.indeterminate]);
    return h('div', { className: 'cl-filter__check' },
      h('span', { className: 'cl-filter__box' },
        h('input', { ref: ref, id: p.id, type: 'checkbox', checked: !!p.checked, disabled: p.disabled,
          onChange: function (e) { p.onChange(e.target.checked); } }),
        h('span', { className: 'cl-filter__mark', 'aria-hidden': true },
          p.indeterminate ? Svg('M5 9h8', 12, 2) : Svg('M4.5 9.5l3 3 6-7', 12, 2))),
      h('label', { htmlFor: p.id, className: 'cl-filter__check-label' }, p.label));
  }

  // .filter-header: section title (+ counter) with optional collapse chevron
  function Section(p) {
    var st = React.useState(p.defaultOpen !== false);
    var open = st[0];
    var bodyId = p.id + '-body';
    var head = h('span', { className: 'cl-filter__section-title' },
      h('span', { className: 'cl-filter__section-label' }, p.label),
      p.count ? h('span', { className: 'cl-filter__count' }, '(' + p.count + ')') : null);
    return h('section', { className: 'cl-filter__section', 'aria-labelledby': p.id + '-h' },
      h('h3', { id: p.id + '-h', className: 'cl-filter__section-head' },
        p.collapsible === false ? head : h('button', {
          type: 'button', className: 'cl-filter__section-btn', 'aria-expanded': open, 'aria-controls': bodyId,
          onClick: function () { st[1](!open); }
        }, head, h('span', { className: 'cl-filter__chevron', 'aria-hidden': true },
          Svg(open ? 'M4.5 11.25L9 6.75l4.5 4.5' : 'M4.5 6.75L9 11.25l4.5-4.5', 16)))),
      open || p.collapsible === false ? h('div', { id: bodyId, className: 'cl-filter__section-body' }, p.children) : null);
  }

  // Filter — "filter" panel (Breakpoints = Desktop | Mobile). Folds
  // .filter-header, .filter-header-badge, .filter-category, .filter-toggle
  // and .filter-badge.
  function Filter(props) {
    var base = useId('cl-filter-');
    var breakpoint = props.breakpoint || 'desktop';
    var values = props.value || {};
    var applied = props.applied || [];
    var categories = props.categories || [];
    var toggles = props.toggles || [];
    var Badge = window.Caelus.Badge;
    var Button = window.Caelus.Button;
    var rest = omit(props, ['breakpoint', 'title', 'onClose', 'closeLabel', 'onClear', 'clearLabel', 'applied', 'appliedTitle',
      'onRemoveApplied', 'date', 'dateLabel', 'categories', 'value', 'onChange', 'toggles', 'className', 'children']);

    var blocks = [];
    if (applied.length) {
      blocks.push(h(Section, { key: 'applied', id: base + '-ap', label: props.appliedTitle || 'Filtros aplicados', count: applied.length },
        h('div', { className: 'cl-filter__badges' }, applied.map(function (a) {
          return h(Badge, { key: a.id, theme: 'white', size: 'small', removeLabel: 'Quitar filtro ' + (typeof a.label === 'string' ? a.label : ''),
            onRemove: props.onRemoveApplied ? function () { props.onRemoveApplied(a.id); } : undefined }, a.label);
        }))));
    }
    if (props.date) {
      blocks.push(h(Section, { key: 'date', id: base + '-dt', label: props.dateLabel || 'Fecha', collapsible: false }, props.date));
    }
    categories.forEach(function (cat, ci) {
      var sel = values[cat.id] || [];
      var all = (cat.options || []).filter(function (o) { return !o.disabled; }).map(function (o) { return o.value; });
      var allOn = all.length > 0 && all.every(function (v) { return sel.indexOf(v) !== -1; });
      function set(next) { if (props.onChange) props.onChange(cat.id, next); }
      blocks.push(h(Section, { key: 'c' + ci, id: base + '-c' + ci, label: cat.label, count: sel.length || 0, defaultOpen: cat.defaultOpen },
        h('div', { className: 'cl-filter__options', role: 'group', 'aria-labelledby': base + '-c' + ci + '-h' },
          cat.allLabel !== null ? h(Check, { id: base + '-c' + ci + '-all', label: cat.allLabel || 'Todos', checked: allOn,
            indeterminate: sel.length > 0 && !allOn, onChange: function (on) { set(on ? all.slice() : []); } }) : null,
          h('div', { className: cx('cl-filter__nested', cat.allLabel === null && 'cl-filter__nested--flat') }, (cat.options || []).map(function (o, oi) {
            return h(Check, { key: o.value, id: base + '-c' + ci + '-' + oi, label: o.label, disabled: o.disabled, checked: sel.indexOf(o.value) !== -1,
              onChange: function (on) {
                var n = sel.filter(function (v) { return v !== o.value; });
                if (on) n.push(o.value);
                set(n);
              } });
          })))));
    });
    toggles.forEach(function (t, ti) {
      var id = base + '-t' + ti;
      blocks.push(h('div', { key: 't' + ti, className: 'cl-filter__toggle' },
        h('div', { className: 'cl-filter__toggle-text' },
          h('div', { className: 'cl-filter__toggle-title' },
            h('label', { htmlFor: id, className: 'cl-filter__toggle-label' }, t.label),
            t.badge ? h('span', { className: 'cl-filter__toggle-badge' }, t.badge) : null),
          t.helper ? h('p', { id: id + '-h', className: 'cl-filter__toggle-helper' }, t.helper) : null),
        h('span', { className: 'cl-filter__switch' },
          h('input', { id: id, type: 'checkbox', role: 'switch', checked: !!t.checked, disabled: t.disabled,
            'aria-describedby': t.helper ? id + '-h' : undefined,
            onChange: function (e) { if (t.onChange) t.onChange(e.target.checked); } }),
          h('span', { className: 'cl-filter__knob', 'aria-hidden': true }))));
    });

    var body = [];
    blocks.forEach(function (b, i) {
      if (i > 0) body.push(h('hr', { key: 'sep' + i, className: 'cl-filter__sep' }));
      body.push(b);
    });

    return h('aside', Object.assign({ 'aria-labelledby': base + '-title' }, rest, {
      className: cx('cl-filter', 'cl-filter--' + breakpoint, props.className)
    }),
      h('div', { className: 'cl-filter__header' },
        h('h2', { id: base + '-title', className: 'cl-filter__title' }, props.title || 'Filtros'),
        props.onClose ? h('button', { type: 'button', className: 'cl-filter__close', onClick: props.onClose, 'aria-label': props.closeLabel || 'Cerrar filtros' },
          Svg('M5 5l8 8m0-8l-8 8', 20)) : null),
      h('div', { className: 'cl-filter__body' },
        props.onClear && Button ? h('div', { className: 'cl-filter__clear' },
          h(Button, { type: 'tertiary', size: 'xs', onClick: props.onClear }, props.clearLabel || 'Limpiar')) : null,
        body,
        props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Filter = Filter;
})();

/* ---- Header ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Svg(d, size) {
    return h('svg', { width: size, height: size, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: d, stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  var uid = 0;

  // Header — "headers" (Breakpoints = Desktop | Mobile): page title, description,
  // actions, tabs, table search (base/input-search-tables) and filter button.
  function Header(props) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = 'cl-header-' + (++uid);
    var breakpoint = props.breakpoint || 'desktop';
    var Title = props.titleAs || 'h1';
    var search = props.search;
    var rest = omit(props, ['title', 'titleAs', 'description', 'actions', 'iconActions', 'tabs', 'search', 'onFilterClick',
      'filterLabel', 'filterCount', 'breakpoint', 'className', 'children']);

    var searchEl = search ? h('form', {
      role: 'search',
      className: 'cl-header__search',
      onSubmit: function (e) { e.preventDefault(); if (search.onSubmit) search.onSubmit(search.value); }
    },
      h('input', {
        type: 'search', value: search.value, placeholder: search.placeholder || 'Busca por nombre o número de rastreo',
        'aria-label': search.label || search.placeholder || 'Buscar',
        onChange: function (e) { if (search.onChange) search.onChange(e.target.value); }
      }),
      h('button', { type: 'submit', className: 'cl-header__search-btn', 'aria-label': search.buttonLabel || 'Buscar' },
        Svg('M15.5 15.5l-3.6-3.6M13 8A5 5 0 113 8a5 5 0 0110 0z', 18))) : null;

    var filterEl = props.onFilterClick ? h('button', { type: 'button', className: 'cl-header__filter', onClick: props.onFilterClick },
      Svg('M3 6h12M3 12h12M7 4v4M11 10v4', 18),
      h('span', null, props.filterLabel || 'Filtros'),
      props.filterCount ? h('span', { className: 'cl-header__filter-count' }, '(' + props.filterCount + ')') : null) : null;

    var tools = (searchEl || filterEl) ? h('div', { className: 'cl-header__tools' }, searchEl, filterEl) : null;
    var tabs = props.tabs ? h('div', { className: 'cl-header__tabs' }, props.tabs) : null;

    return h('header', Object.assign({ 'aria-labelledby': idRef.current }, rest, {
      className: cx('cl-header', 'cl-header--' + breakpoint, props.className)
    }),
      h('div', { className: 'cl-header__intro' },
        h('div', { className: 'cl-header__titlebar' },
          h(Title, { id: idRef.current, className: 'cl-header__title' }, props.title),
          (props.actions || props.iconActions) ? h('div', { className: 'cl-header__actions' },
            props.actions,
            props.actions && props.iconActions ? h('span', { className: 'cl-header__divider', 'aria-hidden': true }) : null,
            props.iconActions) : null),
        props.description ? h('p', { className: 'cl-header__description' }, props.description) : null),
      (tabs || tools) ? h('div', { className: 'cl-header__bar' },
        breakpoint === 'mobile' ? [tools && h('div', { key: 't' }, tools), tabs && h('div', { key: 'n' }, tabs)] : [tabs && h('div', { key: 'n' }, tabs), tools && h('div', { key: 't', className: 'cl-header__tools-wrap' }, tools)]) : null,
      props.children);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Header = Header;
})();

/* ---- IconBackground ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Check() {
    return h('svg', { viewBox: '0 0 20 20', fill: 'none' },
      h('path', { d: 'M4.5 10.5l3.5 3.5 7.5-8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  // IconBackground — Color × Forma × Size from the Figma set "icon-background".
  function IconBackground(props) {
    var color = props.color || 'green';
    var shape = props.shape || 'circle';
    var size = props.size || 'sm';
    var rest = omit(props, ['color', 'shape', 'size', 'icon', 'children', 'className']);
    var labelled = rest['aria-label'] || rest['aria-labelledby'];
    return h('span', Object.assign({ role: labelled ? 'img' : undefined, 'aria-hidden': labelled ? undefined : true }, rest, {
      className: cx('cl-icon-background', 'cl-icon-background--' + color, 'cl-icon-background--' + shape, 'cl-icon-background--' + size, props.className)
    }), h('span', { className: 'cl-icon-background__icon' }, props.icon || props.children || Check()));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.IconBackground = IconBackground;
})();

/* ---- Indicator ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Check() {
    return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M3.5 8.5l3 3 6-7', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  // Indicator — Type from the Figma set "indicators" (dot = ".idicator-color").
  function Indicator(props) {
    var type = props.type || 'dot';
    var color = props.color || 'blue';
    var rest = omit(props, ['type', 'color', 'count', 'icon', 'children', 'className']);
    var cls = cx('cl-indicator', 'cl-indicator--' + type, props.className);
    if (type === 'dot') {
      return h('span', Object.assign({}, rest, { className: cx(cls, 'cl-indicator--' + color) }),
        h('span', { className: 'cl-indicator__dot', 'aria-hidden': true }),
        props.children != null ? h('span', { className: 'cl-indicator__text' }, props.children) : null);
    }
    if (type === 'counter' || type === 'alert') {
      return h('span', Object.assign({}, rest, { className: cls }), props.count != null ? props.count : props.children);
    }
    if (type === 'icon') {
      return h('span', Object.assign({ role: rest['aria-label'] ? 'img' : undefined }, rest, { className: cls }),
        h('span', { className: 'cl-indicator__icon', 'aria-hidden': true }, props.icon || Check()));
    }
    if (type === 'stepper') {
      return h('span', Object.assign({ role: rest['aria-label'] ? 'img' : undefined }, rest, { className: cls }),
        h('span', { className: 'cl-indicator__inner', 'aria-hidden': true }));
    }
    // charge: pill with a small spinner and text
    return h('span', Object.assign({ role: 'status' }, rest, { className: cls }),
      h('span', { className: 'cl-indicator__spinner', 'aria-hidden': true }),
      h('span', null, props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Indicator = Indicator;
})();

/* ---- IndicatorBadge ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // IndicatorBadge — Color from the Figma set "indicators-badge" (dot = ".idicator-color").
  function IndicatorBadge(props) {
    var color = props.color || 'gray';
    var rest = omit(props, ['color', 'children', 'className']);
    return h('span', Object.assign({}, rest, { className: cx('cl-indicator-badge', 'cl-indicator-badge--' + color, props.className) }),
      h('span', { className: 'cl-indicator-badge__dot', 'aria-hidden': true }),
      h('span', null, props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.IndicatorBadge = IndicatorBadge;
})();

/* ---- InputAmount ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }
  function InfoGlyph(text) {
    return h('span', { className: 'cl-input-text__label-icon', role: 'img', 'aria-label': text, title: text },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 7.5, stroke: 'currentColor', strokeWidth: 1.5 }),
        h('path', { d: 'M10 9v4.5M10 6.5v.01', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' })));
  }
  function CheckCircle() {
    return h('span', { className: 'cl-input-text__check', role: 'img', 'aria-label': 'Válido' },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 8, fill: 'currentColor' }),
        h('path', { d: 'M6.5 10.2l2.3 2.3 4.7-4.9', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', style: { stroke: 'var(--core-icon-invert-white)' } })));
  }

  // InputAmount — State × Size from the Figma set "input-amount" (❖ Forms): flag + currency code + symbol prefix.
  function InputAmount(props) {
    var size = props.size === 'sm' ? 'sm' : 'base';
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var auto = useUid('cl-input-amount-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var prefixId = inputId + '-prefix';
    var currency = props.currency == null ? 'MXN' : props.currency;
    var symbol = props.symbol == null ? '$' : props.symbol;
    var describedBy = cx(prefixId, props['aria-describedby'], props.helperText ? helperId : null);
    var rest = omit(props, ['label', 'labelInfo', 'helperText', 'size', 'state', 'valid', 'flag', 'currency', 'symbol', 'className', 'style', 'id', 'disabled', 'aria-describedby']);
    return h('div', { className: cx('cl-input-text', 'cl-input-amount', isErr && 'cl-input-text--error', isDis && 'cl-input-text--disabled', props.className), style: props.style },
      props.label ? h('div', { className: 'cl-input-text__label-row' },
        h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label),
        props.labelInfo ? InfoGlyph(props.labelInfo) : null) : null,
      h('div', { className: cx('cl-input-text__control', 'cl-input-amount__control', size === 'sm' && 'cl-input-text__control--sm') },
        h('span', { id: prefixId, className: 'cl-input-amount__prefix' },
          props.flag ? h('span', { className: 'cl-input-amount__flag', 'aria-hidden': true }, props.flag) : null,
          currency ? h('span', { className: 'cl-input-amount__currency' }, currency) : null,
          symbol ? h('span', { className: 'cl-input-amount__symbol', 'aria-hidden': true }, symbol) : null),
        h('input', Object.assign({ type: 'text', inputMode: 'decimal', autoComplete: 'off' }, rest, {
          id: inputId,
          className: 'cl-input-text__native',
          disabled: isDis,
          'aria-invalid': isErr || undefined,
          'aria-describedby': describedBy
        })),
        props.valid && !isErr ? CheckCircle() : null),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputAmount = InputAmount;
})();

/* ---- InputBadge ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }

  // InputBadge — State × Size from the Figma set "input-badge" (❖ Forms): multiple values shown as removable badges.
  function InputBadge(props) {
    var size = props.size === 'sm' ? 'sm' : 'base';
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var controlled = props.values != null;
    var inner = React.useState(props.defaultValues || []);
    var values = controlled ? props.values : inner[0];
    var draft = React.useState('');
    var auto = useUid('cl-input-badge-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var Badge = window.Caelus && window.Caelus.Badge;
    var rest = omit(props, ['label', 'helperText', 'size', 'state', 'values', 'defaultValues', 'onValuesChange', 'maxHeight', 'removeLabel', 'className', 'style', 'id', 'disabled', 'aria-describedby', 'onKeyDown', 'onChange', 'value']);

    function update(next) {
      if (!controlled) inner[1](next);
      if (props.onValuesChange) props.onValuesChange(next);
    }
    function add(text) {
      var t = text.trim();
      if (t && values.indexOf(t) === -1) update(values.concat([t]));
      draft[1]('');
    }
    function removeAt(i) { update(values.filter(function (_, j) { return j !== i; })); }
    function onKeyDown(e) {
      if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); add(draft[0]); }
      else if (e.key === 'Backspace' && !draft[0] && values.length) removeAt(values.length - 1);
      if (props.onKeyDown) props.onKeyDown(e);
    }

    return h('div', { className: cx('cl-input-text', 'cl-input-badge', isErr && 'cl-input-text--error', isDis && 'cl-input-text--disabled', props.className), style: props.style },
      props.label ? h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label) : null,
      h('div', { className: cx('cl-input-text__control', 'cl-input-badge__control', size === 'sm' && 'cl-input-text__control--sm', values.length && 'cl-input-badge__control--filled') },
        h('div', { className: 'cl-input-badge__list', style: { maxHeight: props.maxHeight || 112 } },
          values.map(function (v, i) {
            var label = (props.removeLabel || 'Quitar') + ' ' + v;
            return Badge
              ? h(Badge, { key: v + i, theme: 'primary', size: 'small', onRemove: isDis ? undefined : function () { removeAt(i); }, removeLabel: label }, v)
              : h('span', { key: v + i }, v);
          }),
          h('input', Object.assign({ type: 'text' }, rest, {
            id: inputId,
            className: 'cl-input-text__native cl-input-badge__native',
            value: draft[0],
            disabled: isDis,
            placeholder: values.length ? '' : props.placeholder,
            'aria-invalid': isErr || undefined,
            'aria-describedby': describedBy,
            onChange: function (e) { draft[1](e.target.value); },
            onKeyDown: onKeyDown,
            onBlur: function (e) { if (draft[0]) add(draft[0]); if (props.onBlur) props.onBlur(e); }
          })))),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper cl-input-badge__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputBadge = InputBadge;
})();

/* ---- InputChatroom ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function icon(size, d) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      [].concat(d).map(function (x, i) { return typeof x === 'string' ? h('path', { key: i, d: x }) : x; }));
  }
  var Clip = function () { return icon(20, 'M18.4 11.1l-6.9 6.9a4.5 4.5 0 01-6.4-6.4l7.6-7.6a3 3 0 014.2 4.2l-7.4 7.4a1.5 1.5 0 01-2.1-2.1l6.5-6.5'); };
  var Photo = function () { return icon(20, [h('rect', { key: 'r', x: 3, y: 5, width: 18, height: 14, rx: 2 }), 'M3 16l5-5 4 4 3-3 6 6', h('circle', { key: 'c', cx: 15.5, cy: 9, r: 1.2 })]); };
  var Plane = function () { return icon(24, 'M6 12L3.3 3.8a.6.6 0 01.8-.7l16.6 8.3a.7.7 0 010 1.2L4.1 20.9a.6.6 0 01-.8-.7L6 12zm0 0h7.5'); };

  // InputChatroom — Chatroom-input states from the Figma set "input-chatroom" (❖ Forms).
  function InputChatroom(props) {
    var isDis = !!props.disabled;
    var controlled = props.value != null;
    var inner = React.useState(props.defaultValue || '');
    var text = controlled ? String(props.value) : inner[0];
    var rest = omit(props, ['value', 'defaultValue', 'onChange', 'onSend', 'onAttach', 'onAddImage', 'showAttach', 'showImage', 'sendLabel', 'attachLabel', 'imageLabel', 'className', 'style', 'disabled', 'onKeyDown']);
    var showAttach = props.showAttach !== false;
    var showImage = props.showImage !== false;

    function send() {
      if (!text.trim() || isDis) return;
      if (props.onSend) props.onSend(text);
      if (!controlled) inner[1]('');
    }
    return h('div', { className: cx('cl-input-chatroom', isDis && 'cl-input-chatroom--disabled', props.className), style: props.style },
      showAttach ? h('button', { type: 'button', className: 'cl-input-chatroom__icon', disabled: isDis, 'aria-label': props.attachLabel || 'Adjuntar archivo', title: props.attachLabel || 'Adjuntar archivo', onClick: props.onAttach }, Clip()) : null,
      showImage ? h('button', { type: 'button', className: 'cl-input-chatroom__icon', disabled: isDis, 'aria-label': props.imageLabel || 'Agregar imagen', title: props.imageLabel || 'Agregar imagen', onClick: props.onAddImage }, Photo()) : null,
      h('div', { className: 'cl-input-chatroom__field' },
        h('textarea', Object.assign({ rows: 1, placeholder: 'Escribe un mensaje…', 'aria-label': 'Mensaje' }, rest, {
          className: 'cl-input-chatroom__native',
          value: text,
          disabled: isDis,
          onChange: function (e) { if (!controlled) inner[1](e.target.value); if (props.onChange) props.onChange(e); },
          onKeyDown: function (e) {
            if (e.key === 'Enter' && !e.shiftKey && !(e.nativeEvent && e.nativeEvent.isComposing)) { e.preventDefault(); send(); }
            if (props.onKeyDown) props.onKeyDown(e);
          }
        }))),
      h('button', { type: 'button', className: 'cl-input-chatroom__send', disabled: isDis || !text.trim(), 'aria-label': props.sendLabel || 'Enviar mensaje', title: props.sendLabel || 'Enviar mensaje', onClick: send }, Plane()));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputChatroom = InputChatroom;
})();

/* ---- InputCheckbox ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }

  // InputCheckbox — State (Default / Checked / Partial selection) × Disabled from the Figma set "base/input-checkbox" (❖ Forms).
  function InputCheckbox(props) {
    var auto = useUid('cl-input-checkbox-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var ref = React.useRef(null);
    var indeterminate = !!props.indeterminate;
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'helperText', 'indeterminate', 'className', 'style', 'id', 'aria-describedby']);
    return h('div', { className: cx('cl-input-checkbox', props.disabled && 'cl-input-checkbox--disabled', indeterminate && 'cl-input-checkbox--partial', props.className), style: props.style },
      h('span', { className: 'cl-input-checkbox__control' },
        h('span', { className: 'cl-input-checkbox__box' },
          h('input', Object.assign({}, rest, {
            ref: ref,
            id: inputId,
            type: 'checkbox',
            className: 'cl-input-checkbox__input',
            'aria-describedby': describedBy
          })),
          h('svg', { className: 'cl-input-checkbox__mark', width: 14, height: 14, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
            indeterminate
              ? h('path', { d: 'M3.5 8h9', strokeWidth: 1.75, strokeLinecap: 'round' })
              : h('path', { d: 'M3.5 8.5l3 3 6-7', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' })))),
      props.label || props.helperText ? h('span', { className: 'cl-input-checkbox__text' },
        props.label ? h('label', { className: 'cl-input-checkbox__label', htmlFor: inputId }, props.label) : null,
        props.helperText ? h('span', { id: helperId, className: 'cl-input-checkbox__helper' }, props.helperText) : null) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputCheckbox = InputCheckbox;
})();

/* ---- InputCode ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function CopyGlyph(done) {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      done
        ? h('path', { d: 'M4.5 10.5l3.5 3.5 7.5-8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })
        : h('g', { stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round' },
          h('rect', { x: 6.5, y: 6.5, width: 10, height: 11, rx: 1.5 }),
          h('path', { d: 'M13.5 6.5V4a1.5 1.5 0 00-1.5-1.5H5A1.5 1.5 0 003.5 4v9A1.5 1.5 0 005 14.5h1.5' })));
  }

  // InputCode — Type from the Figma set "input-code" (❖ Forms): dark blocks for developer docs.
  function InputCode(props) {
    var type = props.type || 'token';
    var code = props.code != null ? String(props.code) : '';
    var copied = React.useState(false);
    var showCopy = props.showCopy != null ? props.showCopy : (type === 'post' || type === 'token');
    var rest = omit(props, ['type', 'code', 'params', 'showCopy', 'copyLabel', 'onCopy', 'requiredLabel', 'typeLabel', 'className', 'children']);

    function copy() {
      if (props.onCopy) props.onCopy(code);
      else if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code);
      copied[1](true);
      setTimeout(function () { copied[1](false); }, 1500);
    }

    var body;
    if (type === 'cuerpo') {
      var Badge = window.Caelus && window.Caelus.Badge;
      body = h('dl', { className: 'cl-input-code__params' }, (props.params || []).map(function (p, i) {
        return h('div', { key: i, className: 'cl-input-code__param' },
          h('dt', { className: 'cl-input-code__param-name' },
            h('span', null, p.name),
            p.required ? (Badge ? h(Badge, { theme: 'red', size: 'small' }, props.requiredLabel || 'Requerido') : h('span', null, ' (' + (props.requiredLabel || 'Requerido') + ')')) : null),
          h('dd', { className: 'cl-input-code__param-type' }, (props.typeLabel || 'Type') + ': ' + (p.type || 'string')));
      }));
    } else if (type === 'esquema') {
      body = h('pre', { className: 'cl-input-code__pre' }, h('code', null, code || props.children));
    } else {
      body = h('code', { className: cx('cl-input-code__code', type === 'token' && 'cl-input-code__code--single') }, code || props.children);
    }

    return h('div', Object.assign({}, rest, { className: cx('cl-input-code', 'cl-input-code--' + type, props.className) }),
      h('div', { className: 'cl-input-code__content' },
        body,
        showCopy ? h('button', {
          type: 'button',
          className: 'cl-input-code__copy',
          'aria-label': copied[0] ? 'Copiado' : (props.copyLabel || 'Copiar'),
          title: props.copyLabel || 'Copiar',
          onClick: copy
        }, CopyGlyph(copied[0])) : null),
      h('span', { className: 'cl-input-code__sr', 'aria-live': 'polite' }, copied[0] ? 'Copiado al portapapeles' : ''));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputCode = InputCode;
})();

/* ---- InputColor ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-color';
  function clean(s) { return String(s || '').replace(/^#/, '').toUpperCase(); }
  function InputColor(props) {
    var id = useIdSafe(props.id);
    var v = useControlled(props.value, props.defaultValue, '#D68205');
    var draftSt = R.useState(null);
    var hex = clean(v[0]);
    function emit(next) { var s = '#' + clean(next); v[1](s); if (props.onChange) props.onChange(s); }
    var rest = omit(props, ['id', 'label', 'value', 'defaultValue', 'onChange', 'disabled', 'className', 'style', 'swatchLabel']);
    return h('div', { className: cx(P, props.disabled && P + '--disabled', props.className), style: props.style },
      props.label ? h('label', { className: P + '__label', htmlFor: id }, props.label) : null,
      h('div', { className: P + '__picker' },
        h('input', { type: 'color', className: P + '__swatch', value: '#' + hex.toLowerCase(), disabled: props.disabled, 'aria-label': props.swatchLabel || 'Elegir color', onChange: function (e) { draftSt[1](null); emit(e.target.value); } }),
        h('div', { className: P + '__hex' },
          h('span', { className: P + '__hash', 'aria-hidden': 'true' }, '#'),
          h('input', Object.assign({}, rest, {
            id: id, type: 'text', className: P + '__input', maxLength: 6, spellCheck: false, autoComplete: 'off', disabled: props.disabled,
            value: draftSt[0] != null ? draftSt[0] : hex,
            'aria-invalid': draftSt[0] != null && !/^[0-9A-F]{6}$/.test(draftSt[0]) ? true : undefined,
            onChange: function (e) { var t = clean(e.target.value).replace(/[^0-9A-F]/g, ''); draftSt[1](t); if (/^[0-9A-F]{6}$/.test(t)) emit(t); },
            onBlur: function (e) { draftSt[1](null); if (props.onBlur) props.onBlur(e); }
          })))));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputColor = InputColor;
})();

/* ---- InputCombobox ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-combobox';
  function norm(s) { return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function InputCombobox(props) {
    var id = useIdSafe(props.id);
    var listId = id + '-list';
    var sel = useControlled(props.value, props.defaultValue, null);
    var openSt = R.useState(!!props.defaultOpen);
    var qSt = R.useState(props.defaultInputValue != null ? props.defaultInputValue : null);
    var actSt = R.useState(-1);
    var inputRef = R.useRef(null);
    var options = props.options || [];
    var minChars = props.minChars || 0;
    var showChevron = props.showChevron !== false;
    var clearable = props.clearable !== false;
    var query = qSt[0];
    var typing = query !== null;
    var selected = null;
    for (var i = 0; i < options.length; i++) { if (options[i].value === sel[0]) selected = options[i]; }
    var filtered = typing && query ? options.filter(function (o) { return norm(o.label).indexOf(norm(query)) >= 0; }) : options;
    var open = openSt[0] && !props.disabled && (query || '').length >= minChars;
    var text = typing ? query : (selected ? selected.label : '');
    var rest = omit(props, ['id', 'label', 'info', 'helperText', 'error', 'size', 'disabled', 'className', 'style', 'options', 'placeholder', 'leftIcon', 'value', 'defaultValue', 'onChange', 'onInputChange', 'minChars', 'showChevron', 'clearable', 'defaultOpen', 'defaultInputValue', 'emptyText', 'controlClassName', 'clearLabel']);

    function choose(o) {
      if (!o || o.disabled) return;
      sel[1](o.value); qSt[1](null); openSt[1](false); actSt[1](-1);
      if (props.onChange) props.onChange(o.value, o);
    }
    function clear() {
      sel[1](null); qSt[1](null); actSt[1](-1);
      if (props.onChange) props.onChange(null, null);
      if (props.onInputChange) props.onInputChange('');
      if (inputRef.current) inputRef.current.focus();
    }
    function move(d) {
      if (!filtered.length) return;
      var n = actSt[0];
      for (var k = 0; k < filtered.length; k++) { n = (n + d + filtered.length) % filtered.length; if (!filtered[n].disabled) break; }
      actSt[1](n); openSt[1](true);
    }
    function onKeyDown(e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter' && open && actSt[0] >= 0) { e.preventDefault(); choose(filtered[actSt[0]]); }
      else if (e.key === 'Escape') { openSt[1](false); qSt[1](null); actSt[1](-1); }
      if (props.onKeyDown) props.onKeyDown(e);
    }
    var lead = selected && selected.icon && !typing ? selected.icon : props.leftIcon;
    var lastGroup = null;
    var items = [];
    filtered.forEach(function (o, idx) {
      if (o.group && o.group !== lastGroup) { lastGroup = o.group; items.push(h('li', { key: 'g-' + o.group + idx, role: 'presentation', className: P + '__group' }, o.group)); }
      var isSel = selected && selected.value === o.value;
      items.push(h('li', {
        key: String(o.value), id: id + '-opt-' + idx, role: 'option', 'aria-selected': isSel ? 'true' : 'false', 'aria-disabled': o.disabled ? 'true' : undefined,
        className: cx(P + '__option', idx === actSt[0] && P + '__option--active'),
        onMouseDown: function (e) { e.preventDefault(); }, onClick: function () { choose(o); }, onMouseEnter: function () { actSt[1](idx); }
      },
        o.icon ? h('span', { className: P + '__opt-icon' }, o.icon) : null,
        h('span', { className: P + '__option-label' }, o.label),
        isSel ? h('span', { className: P + '__check' }, icon('check', 16)) : null));
    });

    return Field(P, { id: id, label: props.label, info: props.info, helperText: props.helperText, error: props.error, size: props.size, disabled: props.disabled, className: props.className, style: props.style }, function (helpId) {
      return h('div', { className: P + '__anchor' },
        h('div', { className: cx(P + '__control', open && P + '__control--open', props.controlClassName), onClick: function () { if (!props.disabled) { openSt[1](true); if (inputRef.current) inputRef.current.focus(); } } },
          lead ? h('span', { className: P + '__icon' }, lead) : null,
          h('input', Object.assign({ placeholder: props.placeholder }, rest, {
            ref: inputRef, id: id, type: 'text', className: P + '__input', value: text, disabled: props.disabled, autoComplete: 'off',
            role: 'combobox', 'aria-expanded': open ? 'true' : 'false', 'aria-controls': listId, 'aria-autocomplete': 'list',
            'aria-activedescendant': open && actSt[0] >= 0 ? id + '-opt-' + actSt[0] : undefined,
            'aria-invalid': props.error ? true : undefined, 'aria-describedby': helpId,
            onChange: function (e) { qSt[1](e.target.value); openSt[1](true); actSt[1](-1); if (props.onInputChange) props.onInputChange(e.target.value); },
            onKeyDown: onKeyDown,
            onBlur: function (e) { openSt[1](false); qSt[1](null); actSt[1](-1); if (props.onBlur) props.onBlur(e); }
          })),
          clearable && text && !props.disabled ? h('button', { type: 'button', className: P + '__iconbtn', 'aria-label': props.clearLabel || 'Borrar', onMouseDown: function (e) { e.preventDefault(); }, onClick: function (e) { e.stopPropagation(); clear(); } }, icon('x', 18)) : null,
          clearable && text && showChevron && !props.disabled ? h('span', { className: P + '__sep', 'aria-hidden': 'true' }) : null,
          showChevron ? h('span', { className: P + '__chevron' }, icon(open ? 'chevronUp' : 'chevronDown', 18)) : null),
        open ? h('div', { className: P + '__menu', onMouseDown: function (e) { e.preventDefault(); } },
          h('ul', { id: listId, role: 'listbox', className: P + '__list', 'aria-labelledby': props.label ? id + '-label' : undefined },
            items.length ? items : h('li', { role: 'presentation', className: P + '__empty' }, props.emptyText || 'Sin resultados'))) : null);
    });
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputCombobox = InputCombobox;
})();

/* ---- InputComboboxFlag ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  function InputComboboxFlag(props) {
    var C = window.Caelus.InputCombobox;
    var opts = (props.options || []).map(function (o) {
      return Object.assign({}, o, { icon: h('span', { className: 'cl-input-combobox-flag__flag', 'aria-hidden': 'true' }, o.flag || null) });
    });
    return h(C, Object.assign({}, omit(props, ['options', 'className']), { options: opts, className: cx('cl-input-combobox-flag', props.className) }));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputComboboxFlag = InputComboboxFlag;
})();

/* ---- InputCounter ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }
  function Glyph(plus) {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      h('path', { d: plus ? 'M10 4.5v11M4.5 10h11' : 'M4.5 10h11', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }
  function InfoGlyph(text) {
    return h('span', { className: 'cl-input-text__label-icon', role: 'img', 'aria-label': text, title: text },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 7.5, stroke: 'currentColor', strokeWidth: 1.5 }),
        h('path', { d: 'M10 9v4.5M10 6.5v.01', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' })));
  }

  // InputCounter — State × Size from the Figma set "input-counter" (❖ Forms). Native spinbutton with − / + buttons.
  function InputCounter(props) {
    var size = props.size === 'sm' ? 'sm' : 'base';
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var min = props.min != null ? Number(props.min) : null;
    var max = props.max != null ? Number(props.max) : null;
    var step = props.step != null ? Number(props.step) : 1;
    var controlled = props.value !== undefined && props.value !== null;
    var inner = React.useState(props.defaultValue != null ? Number(props.defaultValue) : (min != null ? min : 0));
    var value = controlled ? Number(props.value) : inner[0];
    var auto = useUid('cl-input-counter-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'labelInfo', 'helperText', 'size', 'state', 'value', 'defaultValue', 'min', 'max', 'step', 'onValueChange', 'decrementLabel', 'incrementLabel', 'className', 'style', 'id', 'disabled', 'aria-describedby', 'onChange']);

    function commit(n) {
      if (isNaN(n)) return;
      if (min != null) n = Math.max(min, n);
      if (max != null) n = Math.min(max, n);
      if (!controlled) inner[1](n);
      if (props.onValueChange) props.onValueChange(n);
    }
    function onKey(e) {
      if (e.key === 'ArrowUp') { e.preventDefault(); commit(value + step); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); commit(value - step); }
      else if (e.key === 'Home' && min != null) { e.preventDefault(); commit(min); }
      else if (e.key === 'End' && max != null) { e.preventDefault(); commit(max); }
      if (props.onKeyDown) props.onKeyDown(e);
    }

    return h('div', { className: cx('cl-input-text', 'cl-input-counter', isErr && 'cl-input-text--error', isErr && 'cl-input-counter--error', isDis && 'cl-input-counter--disabled', size === 'sm' && 'cl-input-counter--sm', props.className), style: props.style },
      props.label ? h('div', { className: 'cl-input-text__label-row' },
        h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label),
        props.labelInfo ? InfoGlyph(props.labelInfo) : null) : null,
      h('div', { className: 'cl-input-counter__group' },
        h('button', {
          type: 'button', className: 'cl-input-counter__btn cl-input-counter__btn--dec', tabIndex: -1,
          'aria-label': props.decrementLabel || 'Disminuir', 'aria-controls': inputId,
          disabled: isDis || (min != null && value <= min),
          onClick: function () { commit(value - step); }
        }, Glyph(false)),
        h('input', Object.assign({}, rest, {
          id: inputId,
          type: 'text',
          inputMode: 'numeric',
          role: 'spinbutton',
          className: 'cl-input-counter__native',
          value: String(value),
          disabled: isDis,
          'aria-valuenow': value,
          'aria-valuemin': min != null ? min : undefined,
          'aria-valuemax': max != null ? max : undefined,
          'aria-invalid': isErr || undefined,
          'aria-describedby': describedBy,
          onKeyDown: onKey,
          onChange: function (e) {
            var raw = e.target.value.replace(/[^0-9-]/g, '');
            commit(raw === '' || raw === '-' ? (min != null ? min : 0) : parseInt(raw, 10));
          }
        })),
        h('button', {
          type: 'button', className: 'cl-input-counter__btn cl-input-counter__btn--inc', tabIndex: -1,
          'aria-label': props.incrementLabel || 'Aumentar', 'aria-controls': inputId,
          disabled: isDis || (max != null && value >= max),
          onClick: function () { commit(value + step); }
        }, Glyph(true))),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputCounter = InputCounter;
})();

/* ---- InputDatepicker ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-datepicker';
  var MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  var ABBR = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  var WEEK = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  function day0(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function same(a, b) { return !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function fmt(d) { return (d.getDate() < 10 ? '0' : '') + d.getDate() + '/' + ABBR[d.getMonth()] + '/' + d.getFullYear(); }
  function InputDatepicker(props) {
    var id = useIdSafe(props.id);
    var range = props.mode === 'range';
    var v = useControlled(props.value, props.defaultValue, null);
    var openSt = R.useState(!!props.defaultOpen);
    var pendSt = R.useState(null);
    var today = day0(props.today || new Date());
    var start = range ? (v[0] && v[0][0]) : v[0];
    var end = range ? (v[0] && v[0][1]) : null;
    var focusSt = R.useState(day0(start || props.defaultMonth || today));
    var viewSt = R.useState(new Date((start || props.defaultMonth || today).getFullYear(), (start || props.defaultMonth || today).getMonth(), 1));
    var rootRef = R.useRef(null);
    var gridRef = R.useRef(null);
    var trigRef = R.useRef(null);
    var kbd = R.useRef(false);
    var open = openSt[0] && !props.disabled;
    R.useEffect(function () {
      if (!open) return undefined;
      function onDoc(e) { if (rootRef.current && !rootRef.current.contains(e.target)) openSt[1](false); }
      document.addEventListener('mousedown', onDoc);
      return function () { document.removeEventListener('mousedown', onDoc); };
    }, [open]);
    R.useEffect(function () {
      if (open && kbd.current && gridRef.current) { var b = gridRef.current.querySelector('[data-focus="true"]'); if (b) b.focus(); }
    });
    function close() { openSt[1](false); pendSt[1](null); if (trigRef.current) trigRef.current.focus(); }
    function pick(d) {
      if (!range) { v[1](d); if (props.onChange) props.onChange(d); close(); return; }
      var p = pendSt[0];
      if (!p) { pendSt[1](d); return; }
      var r = d < p ? [d, p] : [p, d];
      v[1](r); if (props.onChange) props.onChange(r); close();
    }
    function moveFocus(n) {
      var f = addDays(focusSt[0], n);
      kbd.current = true; focusSt[1](f);
      if (f.getMonth() !== viewSt[0].getMonth() || f.getFullYear() !== viewSt[0].getFullYear()) viewSt[1](new Date(f.getFullYear(), f.getMonth(), 1));
    }
    function onGridKey(e) {
      var m = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
      if (m) { e.preventDefault(); moveFocus(m); }
    }
    function shift(n) { var m = viewSt[0]; viewSt[1](new Date(m.getFullYear(), m.getMonth() + n, 1)); kbd.current = false; }
    var view = viewSt[0];
    var first = new Date(view.getFullYear(), view.getMonth(), 1);
    var lead = (first.getDay() + 6) % 7;
    var cells = [];
    for (var i = 0; i < 42; i++) cells.push(addDays(first, i - lead));
    var rs = range ? (pendSt[0] || start) : null;
    var re = range ? (pendSt[0] ? null : end) : null;
    var text = props.displayText || (range ? (start && end ? fmt(start) + ' - ' + fmt(end) : null) : (start ? fmt(start) : null));
    var weeks = [];
    for (var w = 0; w < 6; w++) {
      weeks.push(h('div', { key: w, role: 'row', className: P + '__week' }, cells.slice(w * 7, w * 7 + 7).map(function (d) {
        var out = d.getMonth() !== view.getMonth();
        var isSel = range ? (same(d, rs) || same(d, re)) : same(d, start);
        var inRange = range && rs && re && d > rs && d < re;
        var foc = same(d, focusSt[0]);
        return h('div', { key: d.getTime(), role: 'gridcell', 'aria-selected': isSel ? 'true' : undefined },
          h('button', {
            type: 'button', tabIndex: foc ? 0 : -1, 'data-focus': foc ? 'true' : undefined,
            className: cx(P + '__day', out && P + '__day--out', same(d, today) && P + '__day--today', inRange && P + '__day--range', isSel && P + '__day--selected', isSel && range && P + '__day--edge'),
            'aria-label': d.getDate() + ' de ' + MONTHS[d.getMonth()].toLowerCase() + ' de ' + d.getFullYear(), 'aria-current': same(d, today) ? 'date' : undefined,
            onClick: function () { focusSt[1](d); pick(d); }
          }, d.getDate()));
      })));
    }
    return h('div', { className: cx(P, props.disabled && P + '--disabled', props.className), style: props.style, ref: rootRef, onKeyDown: function (e) { if (e.key === 'Escape' && open) { e.stopPropagation(); close(); } } },
      props.label ? h('label', { className: P + '__label', htmlFor: id }, props.label) : null,
      h('div', { className: P + '__anchor' },
        h('button', Object.assign({}, omit(props, ['id', 'label', 'mode', 'value', 'defaultValue', 'onChange', 'placeholder', 'displayText', 'disabled', 'defaultOpen', 'defaultMonth', 'today', 'className', 'style']), {
          ref: trigRef, type: 'button', id: id, className: cx(P + '__control', open && P + '__control--open', !text && P + '__control--empty'), disabled: props.disabled,
          'aria-haspopup': 'dialog', 'aria-expanded': open ? 'true' : 'false',
          onClick: function () { kbd.current = false; openSt[1](!open); }
        }),
          h('span', { className: P + '__icon' }, icon('calendar', 18)),
          h('span', { className: P + '__text' }, text || props.placeholder || 'Selecciona una fecha'),
          h('span', { className: P + '__chevron' }, icon(open ? 'chevronUp' : 'chevronDown', 18))),
        open ? h('div', { className: P + '__popover', role: 'dialog', 'aria-label': 'Calendario' },
          h('div', { className: P + '__header' },
            h('button', { type: 'button', className: P + '__nav', 'aria-label': 'Mes anterior', onClick: function () { shift(-1); } }, icon('arrowLeft', 20)),
            h('span', { className: P + '__month', 'aria-live': 'polite' }, MONTHS[view.getMonth()] + ' ' + view.getFullYear()),
            h('button', { type: 'button', className: P + '__nav', 'aria-label': 'Mes siguiente', onClick: function () { shift(1); } }, icon('arrowRight', 20))),
          h('div', { role: 'grid', className: P + '__grid', ref: gridRef, onKeyDown: onGridKey, 'aria-label': MONTHS[view.getMonth()] + ' ' + view.getFullYear() },
            h('div', { role: 'row', className: P + '__week' }, WEEK.map(function (d) { return h('div', { key: d, role: 'columnheader', className: P + '__wd' }, d); })),
            weeks)) : null));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputDatepicker = InputDatepicker;
})();

/* ---- InputDropfile ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-dropfile';
  function InputDropfile(props) {
    var id = useIdSafe(props.id);
    var dragSt = R.useState(false);
    var Button = window.Caelus.Button;
    var type = props.type === 'file' ? 'file' : 'img';
    var status = props.status || 'default';
    var helpId = props.helperText ? id + '-help' : undefined;
    var hintId = id + '-hint';
    var rest = omit(props, ['id', 'type', 'status', 'label', 'info', 'title', 'hint', 'helperText', 'fileName', 'progress', 'progressText', 'previewSrc', 'previewAlt', 'onFiles', 'onRemove', 'removeLabel', 'className', 'style', 'onChange']);
    var title = props.title || (type === 'img'
      ? [h('strong', { key: 'a' }, 'Sube el archivo'), ' o arrastra y suelta']
      : [h('strong', { key: 'a' }, 'Selecciona el archivo XLSX o CSV'), h('br', { key: 'b' }), 'o arrastra y suelta']);
    var hint = props.hint != null ? props.hint : (type === 'img' ? '.png o .jpg (máx. 2 MB)' : 'Tamaño máximo permitido 5 MB');
    var removeBtn = h(Button, { type: 'tertiary', shape: 'square', size: 'xs', icon: icon('trash', 16), 'aria-label': props.removeLabel || 'Eliminar archivo', onClick: props.onRemove });
    var zone;
    if (status === 'uploading') {
      var pct = Math.max(0, Math.min(100, props.progress == null ? 50 : props.progress));
      zone = h('div', { className: P + '__zone' },
        h('span', { className: P + '__glyph' }, icon(type === 'img' ? 'cloudUp' : 'trayUp', 24)),
        h('div', { className: P + '__progress' },
          h('div', { className: P + '__bar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': pct, 'aria-label': props.progressText || 'Subiendo y validando' }, h('span', { style: { width: pct + '%' } })),
          h('span', { className: P + '__hint' }, props.progressText || 'Subiendo y validando')),
        h('div', { className: P + '__file' }, h('span', { className: P + '__name' }, props.fileName), removeBtn));
    } else if (status === 'value' && type === 'file') {
      zone = h('div', { className: cx(P + '__zone', P + '__zone--row') }, h('span', { className: cx(P + '__name', P + '__name--strong') }, props.fileName), removeBtn);
    } else if (status === 'value') {
      zone = h('div', { className: cx(P + '__zone', P + '__zone--preview') },
        h('button', { type: 'button', className: P + '__close', 'aria-label': props.removeLabel || 'Eliminar imagen', onClick: props.onRemove }, icon('x', 16)),
        props.previewSrc ? h('img', { className: P + '__img', src: props.previewSrc, alt: props.previewAlt || props.fileName || '' }) : h('span', { className: P + '__img' }));
    } else {
      zone = h('div', {
        className: cx(P + '__zone', P + '__zone--drop', dragSt[0] && P + '__zone--drag'),
        onDragEnter: function () { dragSt[1](true); }, onDragLeave: function () { dragSt[1](false); }, onDrop: function () { dragSt[1](false); }
      },
        h('span', { className: P + '__glyph' }, icon(type === 'img' ? 'cloudUp' : 'trayUp', 24)),
        h('span', { className: P + '__title' }, title),
        h('span', { className: P + '__hint', id: hintId }, hint),
        h('input', Object.assign({}, rest, {
          id: id, type: 'file', className: P + '__native', accept: props.accept || (type === 'img' ? 'image/*' : '.xlsx,.csv'),
          'aria-describedby': cx(hintId, helpId),
          onChange: function (e) { if (props.onFiles) props.onFiles(e.target.files); if (props.onChange) props.onChange(e); }
        })));
    }
    return h('div', { className: cx(P, props.disabled && P + '--disabled', props.className), style: props.style },
      props.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: id }, props.label),
        props.info ? h('span', { className: P + '__info', title: props.info, role: 'img', 'aria-label': props.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      zone,
      props.helperText ? h('p', { className: P + '__helper', id: helpId }, props.helperText) : null);
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputDropfile = InputDropfile;
})();

/* ---- InputFile ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-file';
  function InputFile(props) {
    var id = useIdSafe(props.id);
    var nameSt = R.useState('');
    var helpId = props.helperText ? id + '-help' : undefined;
    var shown = props.fileName || nameSt[0];
    var rest = omit(props, ['id', 'label', 'helperText', 'size', 'buttonLabel', 'placeholder', 'fileName', 'className', 'style', 'onChange']);
    return h('div', { className: cx(P, props.size === 'large' && P + '--large', props.disabled && P + '--disabled', props.className), style: props.style },
      props.label ? h('label', { className: P + '__label', htmlFor: id }, props.label) : null,
      h('div', { className: P + '__row' },
        h('span', { className: P + '__button', 'aria-hidden': 'true' }, props.buttonLabel || 'Seleccionar archivo'),
        h('span', { className: cx(P + '__field', !shown && P + '__field--empty'), id: id + '-name' }, shown || props.placeholder || 'Ningún archivo seleccionado'),
        h('input', Object.assign({}, rest, {
          id: id, type: 'file', className: P + '__native', 'aria-describedby': cx(id + '-name', helpId),
          onChange: function (e) {
            var f = e.target.files; nameSt[1](f && f.length ? Array.prototype.map.call(f, function (x) { return x.name; }).join(', ') : '');
            if (props.onChange) props.onChange(e);
          }
        }))),
      props.helperText ? h('p', { className: P + '__helper', id: helpId }, props.helperText) : null);
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputFile = InputFile;
})();

/* ---- InputMultiselect ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-multiselect';
  function norm(s) { return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function InputMultiselect(props) {
    var id = useIdSafe(props.id);
    var listId = id + '-list';
    var v = useControlled(props.value, props.defaultValue, []);
    var openSt = R.useState(!!props.defaultOpen);
    var qSt = R.useState(props.defaultSearch || '');
    var rootRef = R.useRef(null);
    var options = props.options || [];
    var selected = v[0] || [];
    var open = openSt[0] && !props.disabled;
    var maxBadges = props.maxBadges || 8;
    R.useEffect(function () {
      if (!open) return undefined;
      function onDoc(e) { if (rootRef.current && !rootRef.current.contains(e.target)) openSt[1](false); }
      document.addEventListener('mousedown', onDoc);
      return function () { document.removeEventListener('mousedown', onDoc); };
    }, [open]);
    function set(next) { v[1](next); if (props.onChange) props.onChange(next); }
    function toggle(val) { set(selected.indexOf(val) >= 0 ? selected.filter(function (x) { return x !== val; }) : selected.concat([val])); }
    var filtered = qSt[0] ? options.filter(function (o) { return norm(o.label).indexOf(norm(qSt[0])) >= 0; }) : options;
    var enabled = filtered.filter(function (o) { return !o.disabled; });
    var allOn = enabled.length > 0 && enabled.every(function (o) { return selected.indexOf(o.value) >= 0; });
    function toggleAll() {
      var vals = enabled.map(function (o) { return o.value; });
      set(allOn ? selected.filter(function (x) { return vals.indexOf(x) < 0; }) : selected.concat(vals.filter(function (x) { return selected.indexOf(x) < 0; })));
    }
    var Badge = window.Caelus.Badge;
    var Search = window.Caelus.InputSearch;
    var chosen = options.filter(function (o) { return selected.indexOf(o.value) >= 0; });
    var shown = chosen.slice(0, maxBadges);
    var extra = chosen.length - shown.length;
    var rest = omit(props, ['id', 'label', 'info', 'helperText', 'error', 'size', 'disabled', 'className', 'style', 'options', 'placeholder', 'value', 'defaultValue', 'onChange', 'defaultOpen', 'defaultSearch', 'maxBadges', 'searchPlaceholder', 'selectAllLabel', 'emptyText']);
    return Field(P, { id: id, label: props.label, info: props.info, helperText: props.helperText, error: props.error, size: props.size, disabled: props.disabled, className: props.className, style: props.style }, function (helpId) {
      return h('div', { className: P + '__anchor', ref: rootRef, onKeyDown: function (e) { if (e.key === 'Escape' && open) { openSt[1](false); var b = document.getElementById(id); if (b) b.focus(); } } },
        h('div', { className: cx(P + '__control', open && P + '__control--open') },
          shown.length ? h('div', { className: P + '__badges' },
            shown.map(function (o) { return h(Badge, { key: String(o.value), theme: 'primary', size: 'large', removeLabel: 'Quitar ' + o.label, onRemove: props.disabled ? undefined : function () { toggle(o.value); } }, o.label); }),
            extra > 0 ? h(Badge, { theme: 'primary', size: 'large', title: extra + ' opciones más' }, '+' + extra) : null) : null,
          h('button', Object.assign({}, rest, {
            type: 'button', id: id, className: P + '__trigger', disabled: props.disabled,
            'aria-haspopup': 'true', 'aria-expanded': open ? 'true' : 'false', 'aria-controls': listId,
            'aria-labelledby': props.label ? id + '-label ' + id : undefined, 'aria-invalid': props.error ? true : undefined, 'aria-describedby': helpId,
            onClick: function () { openSt[1](!open); }
          }),
            h('span', { className: P + '__placeholder' }, chosen.length ? (chosen.length + ' seleccionadas') : (props.placeholder || 'Selecciona opciones')),
            h('span', { className: P + '__chevron' }, icon(open ? 'chevronUp' : 'chevronDown', 18)))),
        open ? h('div', { className: P + '__menu' },
          h('div', { className: P + '__header' },
            h(Search, { value: qSt[0], placeholder: props.searchPlaceholder || 'Búsqueda', 'aria-label': props.searchPlaceholder || 'Búsqueda', onChange: function (e) { qSt[1](e.target.value); }, onClear: function () { qSt[1](''); } }),
            enabled.length ? h('label', { className: P + '__check' },
              h('input', { type: 'checkbox', className: P + '__box', checked: allOn, onChange: toggleAll }),
              h('span', null, props.selectAllLabel || 'Seleccionar todo')) : null),
          h('ul', { id: listId, role: 'group', className: P + '__items', 'aria-label': typeof props.label === 'string' ? props.label : 'Opciones' },
            filtered.length ? filtered.map(function (o) {
              var on = selected.indexOf(o.value) >= 0;
              return h('li', { key: String(o.value), className: P + '__item' },
                h('label', { className: P + '__check' },
                  h('input', { type: 'checkbox', className: P + '__box', checked: on, disabled: o.disabled, onChange: function () { toggle(o.value); } }),
                  h('span', null, o.label)));
            }) : h('li', { className: P + '__empty' }, props.emptyText || 'Sin resultados'))) : null);
    });
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputMultiselect = InputMultiselect;
})();

/* ---- InputPassword ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }
  function Eye(open) {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M1.7 10.3a.9.9 0 010-.6C2.9 6.3 6.2 4 10 4s7.1 2.3 8.3 5.7a.9.9 0 010 .6C17.1 13.7 13.8 16 10 16s-7.1-2.3-8.3-5.7z', stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round' }),
      h('circle', { cx: 10, cy: 10, r: 2.5, stroke: 'currentColor', strokeWidth: 1.5 }),
      open ? null : h('path', { d: 'M3 3l14 14', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }
  function Mark(met) {
    return h('svg', { width: 20, height: 20, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      met
        ? h('path', { d: 'M4.5 10.5l3.5 3.5 7.5-8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })
        : h('path', { d: 'M5.5 5.5l9 9m0-9l-9 9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }

  // InputPassword — State from the Figma set "input-password" (❖ Forms). Uses the shared InputText field classes.
  function InputPassword(props) {
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var shown = React.useState(false);
    var auto = useUid('cl-input-password-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var reqId = inputId + '-req';
    var reqs = props.requirements || [];
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null, reqs.length ? reqId : null) || undefined;
    var rest = omit(props, ['label', 'helperText', 'state', 'requirements', 'requirementsTitle', 'showLabel', 'hideLabel', 'className', 'style', 'id', 'disabled', 'aria-describedby']);
    return h('div', { className: cx('cl-input-text', 'cl-input-password', isErr && 'cl-input-text--error', isDis && 'cl-input-text--disabled', props.className), style: props.style },
      props.label ? h('div', { className: 'cl-input-text__label-row' },
        h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label)) : null,
      h('div', { className: 'cl-input-text__control' },
        h('input', Object.assign({ placeholder: '••••••••••••', autoComplete: 'current-password' }, rest, {
          id: inputId,
          type: shown[0] ? 'text' : 'password',
          className: 'cl-input-text__native',
          disabled: isDis,
          'aria-invalid': isErr || undefined,
          'aria-describedby': describedBy
        })),
        h('button', {
          type: 'button',
          className: 'cl-input-password__toggle',
          disabled: isDis,
          'aria-pressed': shown[0],
          'aria-controls': inputId,
          'aria-label': shown[0] ? (props.hideLabel || 'Ocultar contraseña') : (props.showLabel || 'Mostrar contraseña'),
          onClick: function () { shown[1](!shown[0]); }
        }, Eye(!shown[0]))),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper' }, props.helperText) : null,
      reqs.length ? h('div', { id: reqId, className: 'cl-input-password__reqs', 'aria-live': 'polite' },
        h('p', { className: 'cl-input-password__reqs-title' }, props.requirementsTitle || 'Debe contener:'),
        h('ul', { className: 'cl-input-password__list' },
          reqs.map(function (r, i) {
            var known = r.met === true || r.met === false;
            return h('li', { key: i, className: cx('cl-input-password__req', known && (r.met ? 'cl-input-password__req--met' : 'cl-input-password__req--unmet')) },
              known ? h('span', { className: 'cl-input-password__mark' }, Mark(r.met)) : null,
              h('span', null, r.label),
              known ? h('span', { className: 'cl-input-password__sr' }, r.met ? ' (cumplido)' : ' (pendiente)') : null);
          }))) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputPassword = InputPassword;
})();

/* ---- InputPhone ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }
  function Chevron() {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M5.5 8l4.5 4.5L14.5 8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  function CheckCircle() {
    return h('span', { className: 'cl-input-text__check', role: 'img', 'aria-label': 'Válido' },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 8, fill: 'currentColor' }),
        h('path', { d: 'M6.5 10.2l2.3 2.3 4.7-4.9', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', style: { stroke: 'var(--core-icon-invert-white)' } })));
  }

  // InputPhone — State × Size from the Figma set "input-phone" (❖ Forms): country selector + number + optional action button.
  function InputPhone(props) {
    var size = props.size === 'sm' ? 'sm' : 'base';
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var auto = useUid('cl-input-phone-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var code = props.countryCode || '+52';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'helperText', 'size', 'state', 'valid', 'countryCode', 'flag', 'onCountryClick', 'countryLabel', 'actionLabel', 'onAction', 'className', 'style', 'id', 'disabled', 'aria-describedby']);
    var Btn = window.Caelus && window.Caelus.Button;
    return h('div', { className: cx('cl-input-phone', props.className), style: props.style },
      h('div', { className: cx('cl-input-text', isErr && 'cl-input-text--error', isDis && 'cl-input-text--disabled', isDis && 'cl-input-phone--disabled') },
        props.label ? h('div', { className: 'cl-input-text__label-row' },
          h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label)) : null,
        h('div', { className: 'cl-input-phone__group' },
          h('button', {
            type: 'button',
            className: cx('cl-input-phone__country', size === 'sm' && 'cl-input-phone__country--sm'),
            disabled: isDis,
            'aria-haspopup': 'listbox',
            'aria-label': props.countryLabel || ('Código de país ' + code + ', cambiar'),
            onClick: props.onCountryClick
          },
            props.flag ? h('span', { className: 'cl-input-phone__flag', 'aria-hidden': true }, props.flag) : null,
            h('span', { className: 'cl-input-phone__code' }, code),
            h('span', { className: 'cl-input-phone__chevron' }, Chevron())),
          h('div', { className: cx('cl-input-text__control', 'cl-input-phone__control', size === 'sm' && 'cl-input-text__control--sm') },
            h('input', Object.assign({ type: 'tel', inputMode: 'tel', autoComplete: 'tel-national', placeholder: '123-456-7890' }, rest, {
              id: inputId,
              className: 'cl-input-text__native',
              disabled: isDis,
              'aria-invalid': isErr || undefined,
              'aria-describedby': describedBy
            })),
            props.valid && !isErr ? CheckCircle() : null)),
        props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper cl-input-phone__helper' }, props.helperText) : null),
      props.actionLabel && Btn ? h(Btn, { type: 'primary', disabled: isDis, onClick: props.onAction, className: 'cl-input-phone__action' }, props.actionLabel) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputPhone = InputPhone;
})();

/* ---- InputPincode ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }

  // InputPincode — Estado from the Figma set "input-pincode" (❖ Forms): one box per digit, auto-advance and paste.
  function InputPincode(props) {
    var length = props.length || 6;
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var controlled = props.value != null;
    var inner = React.useState(props.defaultValue || '');
    var value = (controlled ? String(props.value) : inner[0]).slice(0, length);
    var refs = React.useRef([]);
    var auto = useUid('cl-input-pincode-');
    var baseId = props.id || auto;
    var labelId = baseId + '-label';
    var helperId = baseId + '-helper';
    var rest = omit(props, ['label', 'helperText', 'state', 'length', 'value', 'defaultValue', 'onValueChange', 'onComplete', 'placeholder', 'className', 'style', 'id', 'disabled']);

    function set(next, focusAt) {
      next = next.replace(/\D/g, '').slice(0, length);
      if (!controlled) inner[1](next);
      if (props.onValueChange) props.onValueChange(next);
      if (next.length === length && props.onComplete) props.onComplete(next);
      if (focusAt != null) {
        var el = refs.current[Math.max(0, Math.min(length - 1, focusAt))];
        if (el) el.focus();
      }
    }
    function onChange(i, e) {
      var digits = e.target.value.replace(/\D/g, '');
      if (!digits) return;
      // Typing over a filled box without selection: keep only the new digit.
      if (digits.length === 2 && value[i]) digits = digits[0] === value[i] ? digits[1] : digits[0];
      var next = (value.slice(0, i) + digits + value.slice(i + digits.length)).slice(0, length);
      set(next, i + digits.length);
    }
    function onKeyDown(i, e) {
      if (e.key === 'Backspace') {
        e.preventDefault();
        if (value[i]) set(value.slice(0, i) + value.slice(i + 1), i);
        else if (i > 0) set(value.slice(0, i - 1) + value.slice(i), i - 1);
      } else if (e.key === 'ArrowLeft' && i > 0) { e.preventDefault(); refs.current[i - 1].focus(); }
      else if (e.key === 'ArrowRight' && i < length - 1) { e.preventDefault(); refs.current[i + 1].focus(); }
    }
    function onPaste(i, e) {
      var text = (e.clipboardData && e.clipboardData.getData('text')) || '';
      var digits = text.replace(/\D/g, '');
      if (!digits) return;
      e.preventDefault();
      set((value.slice(0, i) + digits).slice(0, length), i + digits.length);
    }

    var boxes = [];
    for (var i = 0; i < length; i++) {
      boxes.push(h('input', Object.assign({}, rest, {
        key: i,
        ref: (function (idx) { return function (el) { refs.current[idx] = el; }; })(i),
        id: i === 0 ? baseId : baseId + '-' + i,
        className: 'cl-input-pincode__box',
        type: 'text',
        inputMode: 'numeric',
        autoComplete: i === 0 ? 'one-time-code' : 'off',
        maxLength: length,
        placeholder: props.placeholder == null ? '0' : props.placeholder,
        value: value[i] || '',
        disabled: isDis,
        'aria-label': 'Dígito ' + (i + 1) + ' de ' + length,
        'aria-invalid': isErr || undefined,
        'aria-describedby': props.helperText ? helperId : undefined,
        onChange: (function (idx) { return function (e) { onChange(idx, e); }; })(i),
        onKeyDown: (function (idx) { return function (e) { onKeyDown(idx, e); }; })(i),
        onPaste: (function (idx) { return function (e) { onPaste(idx, e); }; })(i),
        onFocus: function (e) { e.target.select(); }
      })));
    }

    return h('div', { className: cx('cl-input-text', 'cl-input-pincode', isErr && 'cl-input-text--error', isErr && 'cl-input-pincode--error', isDis && 'cl-input-pincode--disabled', props.className), style: props.style },
      props.label ? h('span', { id: labelId, className: 'cl-input-text__label' }, props.label) : null,
      h('div', { className: 'cl-input-pincode__boxes', role: 'group', 'aria-labelledby': props.label ? labelId : undefined }, boxes),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputPincode = InputPincode;
})();

/* ---- InputRadio ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }

  // InputRadio — State × Disabled from the Figma set "base/input-radio" (❖ Forms). Group several with the same `name`.
  function InputRadio(props) {
    var auto = useUid('cl-input-radio-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'helperText', 'className', 'style', 'id', 'aria-describedby']);
    return h('div', { className: cx('cl-input-radio', props.disabled && 'cl-input-radio--disabled', props.className), style: props.style },
      h('span', { className: 'cl-input-radio__control' },
        h('input', Object.assign({}, rest, {
          id: inputId,
          type: 'radio',
          className: 'cl-input-radio__input',
          'aria-describedby': describedBy
        }))),
      props.label || props.helperText ? h('span', { className: 'cl-input-radio__text' },
        props.label ? h('label', { className: 'cl-input-radio__label', htmlFor: inputId }, props.label) : null,
        props.helperText ? h('span', { id: helperId, className: 'cl-input-radio__helper' }, props.helperText) : null) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputRadio = InputRadio;
})();

/* ---- InputSearch ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-search';
  function InputSearch(props) {
    var v = useControlled(props.value, props.defaultValue, '');
    var ref = R.useRef(null);
    var rest = omit(props, ['size', 'className', 'style', 'value', 'defaultValue', 'onChange', 'onClear', 'clearLabel', 'placeholder']);
    var ph = props.placeholder != null ? props.placeholder : 'Buscar';
    return h('div', { className: cx(P, props.size === 'sm' && P + '--sm', props.disabled && P + '--disabled', props.className), style: props.style },
      h('div', { className: P + '__control' },
        h('span', { className: P + '__icon' }, icon('search', 18)),
        h('input', Object.assign({ 'aria-label': ph }, rest, {
          ref: ref, type: 'search', className: P + '__input', placeholder: ph, value: v[0],
          onChange: function (e) { v[1](e.target.value); if (props.onChange) props.onChange(e); }
        })),
        v[0] && !props.disabled ? h('button', { type: 'button', className: P + '__iconbtn', 'aria-label': props.clearLabel || 'Borrar búsqueda', onClick: function () { v[1](''); if (props.onClear) props.onClear(); if (ref.current) ref.current.focus(); } }, icon('x', 18)) : null));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputSearch = InputSearch;
})();

/* ---- InputSearchBt ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-search-bt';
  function InputSearchBt(props) {
    var v = useControlled(props.value, props.defaultValue, '');
    var ref = R.useRef(null);
    var Button = window.Caelus.Button;
    var rest = omit(props, ['className', 'style', 'value', 'defaultValue', 'onChange', 'onClear', 'onSearch', 'clearLabel', 'buttonLabel', 'placeholder']);
    var ph = props.placeholder != null ? props.placeholder : 'Buscar nombre, elemento...';
    return h('form', { role: 'search', className: cx(P, props.disabled && P + '--disabled', props.className), style: props.style, onSubmit: function (e) { e.preventDefault(); if (props.onSearch) props.onSearch(v[0]); } },
      h('div', { className: P + '__content' },
        h('span', { className: P + '__icon' }, icon('search', 18)),
        h('input', Object.assign({ 'aria-label': ph }, rest, {
          ref: ref, type: 'search', className: P + '__input', placeholder: ph, value: v[0],
          onChange: function (e) { v[1](e.target.value); if (props.onChange) props.onChange(e); }
        })),
        v[0] && !props.disabled ? h('button', { type: 'button', className: P + '__iconbtn', 'aria-label': props.clearLabel || 'Borrar búsqueda', onClick: function () { v[1](''); if (props.onClear) props.onClear(); if (ref.current) ref.current.focus(); } }, icon('x', 18)) : null),
      h(Button, { type: 'primary', size: 'sm', htmlType: 'submit', disabled: props.disabled }, props.buttonLabel || 'Buscar'));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputSearchBt = InputSearchBt;
})();

/* ---- InputSearchSelect ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  function InputSearchSelect(props) {
    var C = window.Caelus.InputCombobox;
    return h(C, Object.assign({ minChars: 2, placeholder: 'Buscar' }, omit(props, ['className']), {
      className: cx('cl-input-search-select', props.className),
      leftIcon: props.leftIcon || icon('search', 18),
      showChevron: false
    }));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputSearchSelect = InputSearchSelect;
})();

/* ---- InputSearchSelectFlag ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-search-select-flag';
  function InputSearchSelectFlag(props) {
    var id = useIdSafe(props.id);
    var S = window.Caelus.InputSearchSelect;
    var countries = props.countries || [];
    var c = useControlled(props.country, props.defaultCountry, countries.length ? countries[0].value : '');
    var cur = null;
    for (var i = 0; i < countries.length; i++) { if (countries[i].value === c[0]) cur = countries[i]; }
    var opts = (props.options || []).map(function (o) { return o.saved ? Object.assign({}, o, { icon: icon('bookmark', 18) }) : o; });
    var inner = omit(props, ['id', 'label', 'info', 'className', 'style', 'countries', 'country', 'defaultCountry', 'onCountryChange', 'countryLabel', 'options']);
    return h('div', { className: cx(P, props.error && P + '--error', props.disabled && P + '--disabled', props.className), style: props.style },
      props.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: id }, props.label),
        props.info ? h('span', { className: P + '__info', title: props.info, role: 'img', 'aria-label': props.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      h('div', { className: P + '__row' },
        h('div', { className: P + '__country' },
          h('span', { className: P + '__flag', 'aria-hidden': 'true' }, cur && cur.flag ? cur.flag : null),
          h('span', { className: P + '__code', 'aria-hidden': 'true' }, cur ? cur.label : ''),
          h('span', { className: P + '__chevron' }, icon('chevronDown', 18)),
          h('select', {
            className: P + '__native', value: c[0], disabled: props.disabled, 'aria-label': props.countryLabel || 'País',
            onChange: function (e) { c[1](e.target.value); if (props.onCountryChange) props.onCountryChange(e.target.value); }
          }, countries.map(function (o) { return h('option', { key: o.value, value: o.value }, o.name || o.label); }))),
        h(S, Object.assign({}, inner, { id: id, options: opts, className: P + '__search', controlClassName: P + '__control' }))));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputSearchSelectFlag = InputSearchSelectFlag;
})();

/* ---- InputSearchTables ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-search-tables';
  function InputSearchTables(props) {
    var v = useControlled(props.value, props.defaultValue, '');
    var ref = R.useRef(null);
    var rest = omit(props, ['className', 'style', 'value', 'defaultValue', 'onChange', 'onClear', 'onSearch', 'clearLabel', 'buttonLabel', 'placeholder']);
    var ph = props.placeholder != null ? props.placeholder : 'Buscar';
    function search() { if (props.onSearch) props.onSearch(v[0]); }
    return h('div', { className: cx(P, props.disabled && P + '--disabled', props.className), style: props.style },
      h('div', { className: P + '__control' },
        h('input', Object.assign({ 'aria-label': ph }, rest, {
          ref: ref, type: 'search', className: P + '__input', placeholder: ph, value: v[0],
          onChange: function (e) { v[1](e.target.value); if (props.onChange) props.onChange(e); },
          onKeyDown: function (e) { if (e.key === 'Enter') search(); if (props.onKeyDown) props.onKeyDown(e); }
        })),
        v[0] && !props.disabled ? h('button', { type: 'button', className: P + '__iconbtn', 'aria-label': props.clearLabel || 'Borrar búsqueda', onClick: function () { v[1](''); if (props.onClear) props.onClear(); if (ref.current) ref.current.focus(); } }, icon('x', 18)) : null,
        h('button', { type: 'button', className: P + '__go', 'aria-label': props.buttonLabel || 'Buscar', disabled: props.disabled, onClick: search }, icon('search', 18))));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputSearchTables = InputSearchTables;
})();

/* ---- InputSelect ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-select';
  function InputSelect(props) {
    var id = useIdSafe(props.id);
    var v = useControlled(props.value, props.defaultValue, '');
    var rest = omit(props, ['id', 'label', 'info', 'helperText', 'error', 'size', 'disabled', 'className', 'style', 'options', 'placeholder', 'leftIcon', 'value', 'defaultValue', 'onChange', 'children']);
    var empty = v[0] === '' || v[0] == null;
    function onChange(e) { v[1](e.target.value); if (props.onChange) props.onChange(e); }
    return Field(P, { id: id, label: props.label, info: props.info, helperText: props.helperText, error: props.error, size: props.size, disabled: props.disabled, className: props.className, style: props.style }, function (helpId) {
      return h('div', { className: cx(P + '__control', empty && P + '__control--placeholder', props.leftIcon && P + '__control--icon') },
        props.leftIcon ? h('span', { className: P + '__left' }, props.leftIcon) : null,
        h('select', Object.assign({}, rest, {
          id: id, className: P + '__native', value: v[0] == null ? '' : v[0], disabled: props.disabled, onChange: onChange,
          'aria-invalid': props.error ? true : undefined, 'aria-describedby': helpId
        }),
          props.placeholder != null ? h('option', { value: '', disabled: true }, props.placeholder) : null,
          (props.options || []).map(function (o) { return h('option', { key: o.value, value: o.value, disabled: o.disabled }, o.label); }),
          props.children),
        h('span', { className: P + '__chevron' }, icon('chevronDown', 18)));
    });
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputSelect = InputSelect;
})();

/* ---- InputSlider ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Speaker(on) {
    return h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      h('path', { d: 'M4 9.5h3l4.5-4v13L7 14.5H4z', fill: 'currentColor' }),
      on ? h('path', { d: 'M15 9a4 4 0 010 6M17.5 6.5a7.5 7.5 0 010 11' }) : h('path', { d: 'M15.5 10l4 4m0-4l-4 4' }));
  }

  // InputSlider — Type × Tooltip from the Figma set "input-slider" (❖ Forms): value, range (two thumbs), volume, with data.
  function InputSlider(props) {
    var type = props.type || 'value';
    var isRange = type === 'range';
    var min = props.min != null ? Number(props.min) : 0;
    var max = props.max != null ? Number(props.max) : 100;
    var step = props.step != null ? Number(props.step) : 1;
    var controlled = props.value != null;
    var initial = props.defaultValue != null ? props.defaultValue : (isRange ? [min, max] : min);
    var inner = React.useState(initial);
    var value = controlled ? props.value : inner[0];
    var a = isRange ? Number(value[0]) : min;
    var b = isRange ? Number(value[1]) : Number(value);
    var span = max - min || 1;
    var fmt = props.formatValue || function (v) { return String(v); };
    var rest = omit(props, ['type', 'min', 'max', 'step', 'value', 'defaultValue', 'onValueChange', 'tooltip', 'formatValue', 'marks', 'minLabel', 'maxLabel', 'className', 'style', 'disabled', 'aria-label', 'onChange']);

    function emit(next) {
      if (!controlled) inner[1](next);
      if (props.onValueChange) props.onValueChange(next);
    }
    function input(v, onCh, label, extraClass) {
      return h('input', Object.assign({}, rest, {
        type: 'range', min: min, max: max, step: step, value: v,
        disabled: props.disabled,
        className: cx('cl-input-slider__native', extraClass),
        'aria-label': label,
        'aria-valuetext': fmt(v),
        onChange: function (e) { onCh(Number(e.target.value)); }
      }));
    }

    var vars = { '--cl-slider-a': (a - min) / span, '--cl-slider-b': (b - min) / span };
    var rail = h('div', { className: 'cl-input-slider__rail', style: vars },
      h('div', { className: 'cl-input-slider__track' }, h('div', { className: 'cl-input-slider__fill' })),
      isRange
        ? [
          h(React.Fragment, { key: 'lo' }, input(a, function (n) { emit([Math.min(n, b), b]); }, props.minLabel || 'Valor mínimo', 'cl-input-slider__native--lo')),
          h(React.Fragment, { key: 'hi' }, input(b, function (n) { emit([a, Math.max(n, a)]); }, props.maxLabel || 'Valor máximo', 'cl-input-slider__native--hi'))
        ]
        : input(b, emit, props['aria-label'] || 'Valor'),
      props.tooltip && !isRange ? h('span', { className: 'cl-input-slider__tooltip', 'aria-hidden': true }, fmt(b)) : null);

    var marks = type === 'with-data' ? (props.marks || [min, Math.round(min + span / 3), Math.round(min + 2 * span / 3), max]) : null;

    return h('div', { className: cx('cl-input-slider', 'cl-input-slider--' + type, props.tooltip && 'cl-input-slider--tooltip', props.disabled && 'cl-input-slider--disabled', props.className), style: props.style },
      type === 'volume'
        ? h('div', { className: 'cl-input-slider__volume' }, h('span', { className: 'cl-input-slider__icon' }, Speaker(false)), rail, h('span', { className: 'cl-input-slider__icon' }, Speaker(true)))
        : rail,
      marks ? h('div', { className: 'cl-input-slider__marks', 'aria-hidden': true }, marks.map(function (m, i) { return h('span', { key: i }, fmt(m)); })) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputSlider = InputSlider;
})();

/* ---- InputText ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }
  function InfoGlyph(text) {
    return h('span', { className: 'cl-input-text__label-icon', role: 'img', 'aria-label': text, title: text },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 7.5, stroke: 'currentColor', strokeWidth: 1.5 }),
        h('path', { d: 'M10 9v4.5M10 6.5v.01', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' })));
  }
  function CheckCircle() {
    return h('span', { className: 'cl-input-text__check', role: 'img', 'aria-label': 'Válido' },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 8, fill: 'currentColor' }),
        h('path', { d: 'M6.5 10.2l2.3 2.3 4.7-4.9', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', style: { stroke: 'var(--core-icon-invert-white)' } })));
  }

  // InputText — State × Size from the Figma set "input-text" (❖ Forms).
  // Also owns the shared field classes (label row, control box, helper) reused by the other inputs of this batch.
  function InputText(props) {
    var size = props.size === 'sm' ? 'sm' : 'base';
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var auto = useUid('cl-input-text-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'labelInfo', 'helperText', 'size', 'state', 'valid', 'leftIcon', 'rightIcon', 'className', 'style', 'id', 'disabled', 'aria-describedby']);
    return h('div', { className: cx('cl-input-text', isErr && 'cl-input-text--error', isDis && 'cl-input-text--disabled', props.className), style: props.style },
      props.label ? h('div', { className: 'cl-input-text__label-row' },
        h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label),
        props.labelInfo ? InfoGlyph(props.labelInfo) : null) : null,
      h('div', { className: cx('cl-input-text__control', size === 'sm' && 'cl-input-text__control--sm') },
        props.leftIcon ? h('span', { className: 'cl-input-text__icon', 'aria-hidden': true }, props.leftIcon) : null,
        h('input', Object.assign({ type: 'text' }, rest, {
          id: inputId,
          className: 'cl-input-text__native',
          disabled: isDis,
          'aria-invalid': isErr || undefined,
          'aria-describedby': describedBy
        })),
        props.valid && !isErr ? CheckCircle() : null,
        props.rightIcon ? h('span', { className: 'cl-input-text__icon', 'aria-hidden': true }, props.rightIcon) : null),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputText = InputText;
})();

/* ---- InputTextarea ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }
  function svg(children) {
    return h.apply(null, ['svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }].concat(children));
  }
  function p(d) { return h('path', { d: d }); }
  var GLYPHS = {
    bold: function () { return svg([p('M4.5 3h4.2a2.5 2.5 0 010 5H4.5zM4.5 8h5a2.5 2.5 0 010 5h-5z')]); },
    italic: function () { return svg([p('M7 3h5M4 13h5M9.5 3l-3 10')]); },
    underline: function () { return svg([p('M4.5 2.5v5a3.5 3.5 0 007 0v-5M3.5 14h9')]); },
    strikethrough: function () { return svg([p('M2.5 8h11M11 4.5C10.4 3.3 9.3 2.7 8 2.7c-1.8 0-3 1-3 2.4M5 11.3c.6 1.3 1.7 2 3.1 2 1.8 0 3-1 3-2.5')]); },
    'align-left': function () { return svg([p('M3 4h10M3 7h6M3 10h10M3 13h6')]); },
    'align-center': function () { return svg([p('M3 4h10M5 7h6M3 10h10M5 13h6')]); },
    'align-right': function () { return svg([p('M3 4h10M7 7h6M3 10h10M7 13h6')]); },
    'align-justify': function () { return svg([p('M3 4h10M3 7h10M3 10h10M3 13h10')]); },
    'bullet-list': function () { return svg([p('M6 4.5h7.5M6 8h7.5M6 11.5h7.5M2.75 4.5h.01M2.75 8h.01M2.75 11.5h.01')]); },
    'numbered-list': function () { return svg([p('M6.5 4.5h7M6.5 8h7M6.5 11.5h7M2.5 3.5l1-.5v3M2.3 9.5c.3-.5 1.7-.6 1.7.3 0 .7-1.7 1.2-1.7 2h1.8')]); },
    image: function () { return svg([h('rect', { x: 1.75, y: 3, width: 12.5, height: 10, rx: 1.5 }), p('M1.75 11l3.5-3.5 3 3 2-2 4 4'), h('circle', { cx: 10.5, cy: 6, r: 0.9 })]); },
    link: function () { return svg([p('M6.8 9.2a2.8 2.8 0 004 0l2-2a2.8 2.8 0 00-4-4l-.8.8M9.2 6.8a2.8 2.8 0 00-4 0l-2 2a2.8 2.8 0 004 4l.8-.8')]); }
  };
  var GROUPS = [
    [['bold', 'Negrita'], ['italic', 'Cursiva'], ['underline', 'Subrayado'], ['strikethrough', 'Tachado']],
    [['align-left', 'Alinear a la izquierda'], ['align-center', 'Centrar'], ['align-right', 'Alinear a la derecha'], ['align-justify', 'Justificar'], ['bullet-list', 'Lista con viñetas'], ['numbered-list', 'Lista numerada']],
    [['image', 'Insertar imagen'], ['link', 'Insertar enlace']]
  ];
  function InfoGlyph(text) {
    return h('span', { className: 'cl-input-text__label-icon', role: 'img', 'aria-label': text, title: text },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 7.5, stroke: 'currentColor', strokeWidth: 1.5 }),
        h('path', { d: 'M10 9v4.5M10 6.5v.01', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' })));
  }

  // InputTextarea — State from the Figma set "input-textarea" (❖ Forms), with the optional rich-text toolbar.
  function InputTextarea(props) {
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var auto = useUid('cl-input-textarea-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var toolbar = props.toolbar !== false;
    var rest = omit(props, ['label', 'labelInfo', 'helperText', 'state', 'toolbar', 'onToolbarAction', 'resize', 'className', 'style', 'id', 'disabled', 'aria-describedby']);
    return h('div', { className: cx('cl-input-text', 'cl-input-textarea', isErr && 'cl-input-text--error', isErr && 'cl-input-textarea--error', isDis && 'cl-input-textarea--disabled', props.className), style: props.style },
      props.label ? h('div', { className: 'cl-input-text__label-row' },
        h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label),
        props.labelInfo ? InfoGlyph(props.labelInfo) : null) : null,
      h('div', { className: 'cl-input-textarea__box' },
        toolbar ? h('div', { className: 'cl-input-textarea__toolbar', role: 'toolbar', 'aria-label': 'Formato de texto', 'aria-controls': inputId },
          GROUPS.map(function (group, gi) {
            var items = [h('div', { key: 'g' + gi, className: 'cl-input-textarea__group' },
              group.map(function (it) {
                return h('button', {
                  key: it[0], type: 'button', className: 'cl-input-textarea__tool', 'aria-label': it[1], title: it[1], disabled: isDis,
                  onClick: function () { if (props.onToolbarAction) props.onToolbarAction(it[0]); }
                }, GLYPHS[it[0]]());
              }))];
            if (gi < GROUPS.length - 1) items.push(h('span', { key: 's' + gi, className: 'cl-input-textarea__sep', 'aria-hidden': true }));
            return items;
          })) : null,
        h('div', { className: 'cl-input-textarea__area' },
          h('textarea', Object.assign({ rows: 7, placeholder: 'Escribe tu texto aquí' }, rest, {
            id: inputId,
            className: cx('cl-input-textarea__native', props.resize === false && 'cl-input-textarea__native--fixed'),
            disabled: isDis,
            'aria-invalid': isErr || undefined,
            'aria-describedby': describedBy
          })))),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper cl-input-textarea__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputTextarea = InputTextarea;
})();

/* ---- InputTimepicker ---- */
(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-timepicker';
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function parse(s) { var m = /^(\d{1,2}):(\d{2})\s*(am|pm)$/i.exec(String(s || '').trim()); return m ? { h: +m[1], m: +m[2], p: m[3].toLowerCase() } : null; }
  function InputTimepicker(props) {
    var id = useIdSafe(props.id);
    var v = useControlled(props.value, props.defaultValue, null);
    var openSt = R.useState(!!props.defaultOpen);
    var rootRef = R.useRef(null);
    var trigRef = R.useRef(null);
    var open = openSt[0] && !props.disabled;
    var cur = parse(v[0]) || { h: 12, m: 0, p: 'am' };
    var step = props.minuteStep || 1;
    R.useEffect(function () {
      if (!open) return undefined;
      function onDoc(e) { if (rootRef.current && !rootRef.current.contains(e.target)) openSt[1](false); }
      document.addEventListener('mousedown', onDoc);
      return function () { document.removeEventListener('mousedown', onDoc); };
    }, [open]);
    function set(part, val) {
      var n = Object.assign({}, cur); n[part] = val;
      var s = pad(n.h) + ':' + pad(n.m) + ' ' + n.p;
      v[1](s); if (props.onChange) props.onChange(s);
    }
    function col(label, items, part) {
      return h('div', { role: 'group', 'aria-label': label, className: P + '__col' }, items.map(function (it) {
        var on = cur[part] === it.v && !!v[0];
        return h('button', { key: it.v, type: 'button', className: cx(P + '__item', on && P + '__item--on'), 'aria-pressed': on ? 'true' : 'false', onClick: function () { set(part, it.v); } }, it.t);
      }));
    }
    var hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (n) { return { v: n, t: pad(n) }; });
    var mins = []; for (var m = 0; m < 60; m += step) mins.push({ v: m, t: pad(m) });
    return h('div', { className: cx(P, props.disabled && P + '--disabled', props.className), style: props.style, ref: rootRef, onKeyDown: function (e) { if (e.key === 'Escape' && open) { openSt[1](false); if (trigRef.current) trigRef.current.focus(); } } },
      props.label ? h('label', { className: P + '__label', htmlFor: id }, props.label) : null,
      h('div', { className: P + '__anchor' },
        h('button', Object.assign({}, omit(props, ['id', 'label', 'value', 'defaultValue', 'onChange', 'placeholder', 'disabled', 'defaultOpen', 'minuteStep', 'className', 'style']), {
          ref: trigRef, type: 'button', id: id, disabled: props.disabled, className: cx(P + '__control', open && P + '__control--open', !v[0] && P + '__control--empty'),
          'aria-haspopup': 'dialog', 'aria-expanded': open ? 'true' : 'false', onClick: function () { openSt[1](!open); }
        }),
          h('span', { className: P + '__text' }, v[0] || props.placeholder || '--:-- --'),
          h('span', { className: P + '__icon' }, icon('clock', 18))),
        open ? h('div', { className: P + '__dropdown', role: 'dialog', 'aria-label': 'Elegir hora' },
          col('Hora', hours, 'h'), col('Minutos', mins, 'm'), col('am o pm', [{ v: 'am', t: 'am' }, { v: 'pm', t: 'pm' }], 'p')) : null));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputTimepicker = InputTimepicker;
})();

/* ---- InputToggle ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }

  // InputToggle — State × Disabled from the Figma set "base/input-toggle" (❖ Forms). Native checkbox with role="switch".
  function InputToggle(props) {
    var auto = useUid('cl-input-toggle-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'helperText', 'className', 'style', 'id', 'aria-describedby']);
    return h('div', { className: cx('cl-input-toggle', props.disabled && 'cl-input-toggle--disabled', props.className), style: props.style },
      h('span', { className: 'cl-input-toggle__control' },
        h('input', Object.assign({}, rest, {
          id: inputId,
          type: 'checkbox',
          role: 'switch',
          className: 'cl-input-toggle__input',
          'aria-label': props.label ? undefined : props['aria-label'],
          'aria-describedby': describedBy
        })),
        h('span', { className: 'cl-input-toggle__track', 'aria-hidden': true }, h('span', { className: 'cl-input-toggle__thumb' }))),
      props.label || props.helperText ? h('span', { className: 'cl-input-toggle__text' },
        props.label ? h('label', { className: 'cl-input-toggle__label', htmlFor: inputId }, props.label) : null,
        props.helperText ? h('span', { id: helperId, className: 'cl-input-toggle__helper' }, props.helperText) : null) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputToggle = InputToggle;
})();

/* ---- Loader ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  // Ring in a 100×100 box: stroke 9 (inner radius 82%), radius 45.5, arc of 270°.
  var R = 45.5;
  var C = 2 * Math.PI * R;

  // Loader — Size × Dark mode × Track from the Figma set "loader".
  function Loader(props) {
    var size = props.size || 'default';
    var track = props.track !== false;
    var rest = omit(props, ['size', 'dark', 'track', 'label', 'className']);
    return h('span', Object.assign({ role: 'status' }, rest, {
      className: cx('cl-loader', 'cl-loader--' + size, props.dark && 'cl-loader--dark', props.className)
    }),
      h('svg', { className: 'cl-loader__svg', viewBox: '0 0 100 100', 'aria-hidden': true },
        track ? h('circle', { className: 'cl-loader__track', cx: 50, cy: 50, r: R, fill: 'none', strokeWidth: 9 }) : null,
        h('circle', {
          className: 'cl-loader__arc', cx: 50, cy: 50, r: R, fill: 'none', strokeWidth: 9, strokeLinecap: 'round',
          strokeDasharray: (C * 0.75).toFixed(2) + ' ' + C.toFixed(2)
        })),
      h('span', { className: 'cl-loader__sr' }, props.label || 'Cargando'));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Loader = Loader;
})();

/* ---- Menu ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Svg(d, size) {
    return h('svg', { width: size, height: size, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: d, stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  var uid = 0;

  function Link(p) {
    var item = p.item;
    var Tag = item.href ? 'a' : 'button';
    return h(Tag, {
      href: item.href, type: item.href ? undefined : 'button',
      className: cx('cl-menu__link', p.sub ? 'cl-menu__link--sub' : 'cl-menu__link--main', item.type === 'cta' && 'cl-menu__link--cta'),
      'aria-current': item.active ? 'page' : undefined,
      'aria-expanded': p.expanded,
      'aria-controls': p.controls,
      onClick: function (e) { if (p.onToggle) p.onToggle(); if (item.onClick) item.onClick(e); }
    },
      item.icon ? h('span', { className: 'cl-menu__icon', 'aria-hidden': true }, item.icon) : (p.sub && p.indent ? h('span', { className: 'cl-menu__icon', 'aria-hidden': true }) : null),
      h('span', { className: 'cl-menu__text' }, item.label),
      item.badge ? h('span', { className: 'cl-menu__badge' }, item.badge) : null,
      item.trailing ? h('span', { className: 'cl-menu__trail', 'aria-hidden': true }, item.trailing) : null,
      p.onToggle ? h('span', { className: 'cl-menu__chevron', 'aria-hidden': true }, Svg(p.expanded ? 'M4.5 11.25L9 6.75l4.5 4.5' : 'M4.5 6.75L9 11.25l4.5-4.5', 18)) : null);
  }

  function Group(p) {
    var item = p.item;
    var hasActiveChild = (item.children || []).some(function (c) { return c.active; });
    var st = React.useState(item.defaultExpanded != null ? item.defaultExpanded : hasActiveChild);
    var expanded = typeof item.expanded === 'boolean' ? item.expanded : st[0];
    var groupId = p.id + '-sub';
    function toggle() {
      if (typeof item.expanded !== 'boolean') st[1](!expanded);
      if (item.onExpandedChange) item.onExpandedChange(!expanded);
    }
    var indent = !!item.icon;
    return h('li', { className: 'cl-menu__item' },
      h(Link, { item: Object.assign({}, item, { href: undefined }), expanded: expanded, controls: groupId, onToggle: toggle }),
      expanded ? h('ul', { id: groupId, className: cx('cl-menu__sublist', indent && 'cl-menu__sublist--indent') },
        item.children.map(function (c, i) {
          return h('li', { key: c.id || i, className: 'cl-menu__item' }, h(Link, { item: c, sub: true, indent: false }));
        })) : null);
  }

  // Menu — "menu" side navigation (platform flags Skydropx | Solo Envíos |
  // Envíos Internacionales | MSH). Folds .pro-buttons-main, .se-buttons-main
  // and .msh-buttons-main (Sección = Primary | Secondary | Label | Separador).
  function Menu(props) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = 'cl-menu-' + (++uid);
    var variant = props.variant || 'skydropx';
    var items = props.items || [];
    var footer = props.footer || [];
    var rest = omit(props, ['variant', 'items', 'footer', 'className', 'children']);

    function render(list, prefix) {
      return list.map(function (item, i) {
        var key = item.id || prefix + i;
        var type = item.type || 'link';
        if (type === 'separator') return h('li', { key: key, role: 'separator', className: 'cl-menu__separator' });
        if (type === 'label') return h('li', { key: key, className: 'cl-menu__label' }, item.label);
        if (item.children && item.children.length) return h(Group, { key: key, id: idRef.current + '-' + prefix + i, item: item });
        return h('li', { key: key, className: 'cl-menu__item' }, h(Link, { item: item }));
      });
    }

    return h('nav', Object.assign({ 'aria-label': 'Menú principal' }, rest, {
      className: cx('cl-menu', 'cl-menu--' + variant, props.className)
    }),
      h('ul', { className: 'cl-menu__list' }, render(items, 'i')),
      footer.length ? h('ul', { className: 'cl-menu__list cl-menu__footer' }, render(footer, 'f')) : null,
      props.children);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Menu = Menu;
})();

/* ---- MenuBreakpoints ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // MenuBreakpoints — "menu-breakpoints": the responsive app shell
  // (navbar on top, side menu, content). From 1024px the menu is docked;
  // below it is an overlay with a backdrop, opened with `menuOpen`.
  function MenuBreakpoints(props) {
    var showMenu = props.showMenu !== false;
    var open = !!props.menuOpen;
    var rest = omit(props, ['navbar', 'menu', 'children', 'showMenu', 'showContent', 'menuOpen', 'onMenuClose', 'layout', 'className']);

    React.useEffect(function () {
      if (!open) return undefined;
      function onKey(e) { if (e.key === 'Escape' && props.onMenuClose) props.onMenuClose(); }
      document.addEventListener('keydown', onKey);
      return function () { document.removeEventListener('keydown', onKey); };
    }, [open, props.onMenuClose]);

    return h('div', Object.assign({}, rest, {
      className: cx('cl-menu-breakpoints', props.layout && 'cl-menu-breakpoints--' + props.layout, open && 'cl-menu-breakpoints--open', props.className)
    }),
      props.navbar ? h('div', { className: 'cl-menu-breakpoints__navbar' }, props.navbar) : null,
      h('div', { className: 'cl-menu-breakpoints__container' },
        showMenu && props.menu ? h('div', { className: 'cl-menu-breakpoints__menu' },
          h('div', { className: 'cl-menu-breakpoints__backdrop', 'aria-hidden': true, onClick: props.onMenuClose }),
          h('div', { className: 'cl-menu-breakpoints__panel' }, props.menu)) : null,
        props.showContent !== false ? h('main', { className: 'cl-menu-breakpoints__body' }, props.children) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.MenuBreakpoints = MenuBreakpoints;
})();

/* ---- Modal ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }
  function xIcon() {
    return h('svg', { viewBox: '0 0 18 18', width: 18, height: 18, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M4.5 4.5l9 9M13.5 4.5l-9 9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }
  function btn(kind, action, key) {
    if (!action) return null;
    var Button = window.Caelus && window.Caelus.Button;
    var props = { key: key, type: kind, onClick: action.onClick, disabled: action.disabled };
    if (Button) return h(Button, props, action.label);
    return h('button', { key: key, type: 'button', onClick: action.onClick, disabled: action.disabled }, action.label);
  }

  var FOOTERS = { informativo: 'primary', confirmacion: 'primary', critico: 'secondary' };

  function Modal(props) {
    var type = props.type || 'informativo';
    var inline = !!props.inline;
    var titleId = useId('cl-modal-title');
    var descId = useId('cl-modal-desc');
    var dialogRef = React.useRef(null);
    var onClose = props.onClose;
    var footerKind = props.footerVariant || FOOTERS[type] || 'primary';
    var titleInHeader = type === 'informativo' && props.title != null && props.showTitle !== false;
    var hasCenteredText = type !== 'informativo';

    React.useEffect(function () {
      if (!inline && dialogRef.current) dialogRef.current.focus();
    }, [inline]);

    function onKeyDown(e) {
      if (e.key === 'Escape' && onClose) { e.stopPropagation(); onClose(e); }
      if (props.onKeyDown) props.onKeyDown(e);
    }

    var rest = omit(props, ['type', 'inline', 'title', 'showTitle', 'description', 'illustration', 'children',
      'onClose', 'closeLabel', 'primaryAction', 'secondaryAction', 'footer', 'footerVariant', 'width',
      'className', 'style', 'onKeyDown', 'separator', 'bodyClassName']);

    var header = h('div', { className: cx('cl-modal__header', titleInHeader && 'cl-modal__header--titled') },
      titleInHeader ? h('h2', { id: titleId, className: 'cl-modal__title' }, props.title) : h('span', { className: 'cl-modal__spacer' }),
      onClose ? h('button', { type: 'button', className: 'cl-modal__close', 'aria-label': props.closeLabel || 'Cerrar', onClick: onClose }, xIcon()) : null);

    var bodyText = null;
    if (hasCenteredText && (props.title != null || props.description != null)) {
      bodyText = h('div', { className: 'cl-modal__text' },
        props.title != null && props.showTitle !== false ? h('h2', { id: titleId, className: 'cl-modal__body-title' }, props.title) : null,
        props.description != null ? h('p', { id: descId, className: 'cl-modal__body-desc' }, props.description) : null);
    }

    var content = h('div', { className: cx('cl-modal__content', hasCenteredText && 'cl-modal__content--center', props.bodyClassName) },
      props.illustration ? h('div', { className: 'cl-modal__illustration' }, props.illustration) : null,
      bodyText,
      type === 'informativo' && props.description != null ? h('p', { id: descId, className: 'cl-modal__desc' }, props.description) : null,
      props.children);

    var footer = null;
    if (props.footer !== undefined) {
      footer = props.footer;
    } else if (props.primaryAction || props.secondaryAction) {
      var primaryKind = footerKind === 'secondary' ? 'alert' : (footerKind === 'ver-mas' ? 'tertiary' : 'primary');
      footer = h('div', { className: cx('cl-modal__footer', 'cl-modal__footer--' + footerKind) },
        btn('secondary', props.secondaryAction, 's'),
        btn(primaryKind, props.primaryAction, 'p'));
    }

    var showSeparator = props.separator != null ? props.separator : type === 'informativo';
    var style = Object.assign({}, props.style || {});
    if (props.width != null) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width;

    var dialog = h('div', Object.assign({
      role: type === 'critico' ? 'alertdialog' : 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': props.title != null && props.showTitle !== false ? titleId : undefined,
      'aria-describedby': props.description != null ? descId : undefined,
      tabIndex: -1,
      ref: dialogRef,
      onKeyDown: onKeyDown,
      className: cx('cl-modal', 'cl-modal--' + type, props.className),
      style: style
    }, rest),
      header,
      content,
      footer && showSeparator ? h('hr', { className: 'cl-modal__separator' }) : null,
      footer);

    return h('div', {
      className: cx('cl-modal-backdrop', inline && 'cl-modal-backdrop--inline'),
      onMouseDown: function (e) { if (e.target === e.currentTarget && onClose && !inline) onClose(e); }
    }, dialog);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Modal = Modal;
})();

/* ---- ModalEcommerceIntegration ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }

  var DEFAULT_FIELDS = {
    tienda: [{ name: 'url', label: 'URL de la tienda', placeholder: 'Url de la tienda', type: 'url' }],
    api: [
      { name: 'apiKey', label: 'Clave del cliente (API Key)', placeholder: 'ck_…' },
      { name: 'apiSecret', label: 'Clave secreta del cliente (API Secret Key)', placeholder: '••••••••', type: 'password' }
    ]
  };

  function Field(p) {
    var id = useId('cl-mei-field');
    var errId = id + '-error';
    return h('div', { className: 'cl-modal-ecommerce-integration__field' },
      h('label', { htmlFor: id, className: 'cl-modal-ecommerce-integration__label' }, p.field.label),
      h('input', {
        id: id,
        name: p.field.name,
        type: p.field.type || 'text',
        className: 'cl-modal-ecommerce-integration__input',
        placeholder: p.field.placeholder,
        value: p.field.value,
        defaultValue: p.field.defaultValue,
        onChange: p.field.onChange,
        autoComplete: 'off',
        'aria-invalid': p.field.error ? 'true' : undefined,
        'aria-describedby': p.field.error ? errId : undefined
      }),
      p.field.error ? h('p', { id: errId, className: 'cl-modal-ecommerce-integration__error' }, p.field.error) : null);
  }

  function ModalEcommerceIntegration(props) {
    var type = props.type || 'tienda';
    var Modal = window.Caelus && window.Caelus.Modal;
    var fields = props.fields || DEFAULT_FIELDS[type] || [];
    var primary = props.primaryAction !== undefined ? props.primaryAction : (type === 'tienda' ? { label: 'Conectar' } : null);
    var rest = omit(props, ['type', 'platformName', 'platformCategory', 'logo', 'instructions', 'hint', 'fields',
      'docsHref', 'docsLabel', 'primaryAction', 'secondaryAction', 'children', 'className']);

    var body = h('div', { className: 'cl-modal-ecommerce-integration__body' },
      h('div', { className: 'cl-modal-ecommerce-integration__brand' },
        props.logo ? h('span', { className: 'cl-modal-ecommerce-integration__logo', 'aria-hidden': 'true' }, props.logo) : null,
        h('div', { className: 'cl-modal-ecommerce-integration__brand-text' },
          h('p', { className: 'cl-modal-ecommerce-integration__name' }, props.platformName || (type === 'api' ? 'API Skydropx' : 'Shopify')),
          h('p', { className: 'cl-modal-ecommerce-integration__category' }, props.platformCategory || (type === 'api' ? 'Aplicación' : 'Ecommerce')))),
      props.instructions !== null ? h('p', { className: 'cl-modal-ecommerce-integration__instructions' },
        props.instructions || (type === 'tienda' ? 'Completa la URL de la cuenta administrativa de tu tienda' : 'Ingresa las credenciales de tu aplicación.')) : null,
      props.hint ? h('div', { className: 'cl-modal-ecommerce-integration__hint' }, props.hint) : null,
      fields.map(function (f, i) { return h(Field, { key: f.name || i, field: f }); }),
      props.children,
      props.docsHref ? h('p', { className: 'cl-modal-ecommerce-integration__docs' }, 'Consultar ',
        h('a', { href: props.docsHref, target: '_blank', rel: 'noreferrer' }, props.docsLabel || 'documentación')) : null);

    var modalProps = Object.assign({
      type: 'informativo',
      className: cx('cl-modal-ecommerce-integration', 'cl-modal-ecommerce-integration--' + type, props.className),
      primaryAction: primary || undefined,
      secondaryAction: props.secondaryAction,
      separator: true
    }, rest);
    if (!primary && !props.secondaryAction) modalProps.footer = null;

    if (!Modal) return h('div', { role: 'dialog', 'aria-label': props.title }, body);
    return h(Modal, modalProps, body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalEcommerceIntegration = ModalEcommerceIntegration;
})();

/* ---- ModalMultimedia ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }

  function ModalMultimedia(props) {
    var Modal = window.Caelus && window.Caelus.Modal;
    var rest = omit(props, ['media', 'caption', 'children', 'className']);
    var body = h('div', { className: 'cl-modal-multimedia__media' },
      props.media || h('div', { className: 'cl-modal-multimedia__placeholder', role: 'img', 'aria-label': 'Sin contenido multimedia' }),
      props.caption ? h('p', { className: 'cl-modal-multimedia__caption' }, props.caption) : null,
      props.children);
    var modalProps = Object.assign({
      type: 'informativo',
      width: 495,
      separator: false,
      className: cx('cl-modal-multimedia', props.className),
      bodyClassName: 'cl-modal-multimedia__content'
    }, rest);
    if (!Modal) return h('div', { role: 'dialog' }, body);
    return h(Modal, modalProps, body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalMultimedia = ModalMultimedia;
})();

/* ---- ModalStatusDelivery ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }

  var DEFAULT_COLUMNS = [
    [
      { label: 'En creación', color: 'blue', description: 'El envío está en proceso de ser creado.' },
      { label: 'Creado', color: 'primary', description: 'El envío se ha creado y el paquete será recogido por la paquetería o entregado en una sucursal.' },
      { label: 'Recolectado', color: 'indigo', description: 'El paquete ha sido recogido por la paquetería o entregado en una sucursal.' },
      { label: 'En camino', color: 'indigo', description: 'El envío está recorriendo su ruta de entrega.' },
      { label: 'Por llegar', color: 'indigo', description: 'El paquete se encuentra cerca de la dirección de destino.' },
      { label: 'Intento de entrega', color: 'indigo', description: 'El paquete aún no se ha podido entregar en la dirección de destino.' },
      { label: 'Entregado', color: 'green', description: 'El paquete fue recibido en la dirección de destino.' },
      { label: 'Entregado en sucursal', color: 'green', description: 'El paquete fue recogido por el destinatario en una sucursal de la paquetería.' }
    ],
    [
      { label: 'Error en creación', color: 'red', description: 'El envío no pudo crearse y tus créditos serán reembolsados.' },
      { label: 'Incidencia', color: 'red', description: 'El envío presenta un problema detectado por la paquetería.' },
      { label: 'En devolución', color: 'red', description: 'Tu paquete será devuelto a su origen porque no pudo entregarse o fue rechazado por el destinatario. Contacta a la paquetería.' },
      { label: 'Cancelado', color: 'orange', description: 'Tu envío fue cancelado correctamente.' }
    ]
  ];

  function StatusList(p) {
    return h('ul', { className: 'cl-modal-status-delivery__list' },
      p.items.map(function (it, i) {
        return h('li', { key: i, className: cx('cl-modal-status-delivery__item', 'cl-modal-status-delivery__item--' + (it.color || 'indigo')) },
          h('span', { className: 'cl-modal-status-delivery__dot', 'aria-hidden': 'true' }, h('span', null)),
          h('div', { className: 'cl-modal-status-delivery__text' },
            h('p', { className: 'cl-modal-status-delivery__label' }, it.label),
            it.description ? h('p', { className: 'cl-modal-status-delivery__desc' }, it.description) : null));
      }));
  }

  function ModalStatusDelivery(props) {
    var Modal = window.Caelus && window.Caelus.Modal;
    var columns = props.columns || DEFAULT_COLUMNS;
    var rest = omit(props, ['columns', 'closeActionLabel', 'children', 'className']);
    var body = h('div', { className: 'cl-modal-status-delivery__body' },
      columns.map(function (col, i) { return h(StatusList, { key: i, items: col }); }),
      props.children);
    var modalProps = Object.assign({
      type: 'informativo',
      title: 'Significado de los estatus',
      width: 924,
      separator: true,
      className: cx('cl-modal-status-delivery', props.className),
      bodyClassName: 'cl-modal-status-delivery__content',
      primaryAction: { label: props.closeActionLabel || 'Cerrar', onClick: props.onClose }
    }, rest);
    if (!Modal) return h('div', { role: 'dialog' }, body);
    return h(Modal, modalProps, body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalStatusDelivery = ModalStatusDelivery;
})();

/* ---- ModalVerificationCode ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }

  var DEFAULTS = {
    code: { title: 'Para crear usuarios es necesario validar tu identidad', message: 'Validaremos con el código de verificación.\nHemos enviado el código a: ' },
    'code-sms': { title: 'Ingresa el código de seguridad', message: 'Se envió vía SMS al móvil ', caption: 'Por seguridad, nunca compartas este código.' }
  };

  function ModalVerificationCode(props) {
    var variant = props.variant || 'code';
    var d = DEFAULTS[variant] || DEFAULTS.code;
    var inputId = useId('cl-mvc-input');
    var captionId = useId('cl-mvc-caption');
    var errorId = useId('cl-mvc-error');
    var titleId = useId('cl-mvc-title');
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue || '');
    var value = controlled ? props.value : st[0];
    var maxLength = props.length || 4;
    var caption = props.caption !== undefined ? props.caption : d.caption;
    var invalid = !!props.error;

    function change(e) {
      var v = e.target.value.replace(/\D/g, '').slice(0, maxLength);
      if (!controlled) st[1](v);
      if (props.onChange) props.onChange(v, e);
    }
    function submit(e) {
      e.preventDefault();
      if (props.onSubmit && value.length === maxLength && !props.loading) props.onSubmit(value, e);
    }
    var described = [caption ? captionId : null, invalid ? errorId : null].filter(Boolean).join(' ') || undefined;
    var Button = window.Caelus && window.Caelus.Button;
    var disabled = value.length < maxLength || !!props.loading;
    var submitLabel = props.loading ? (props.loadingLabel || 'Verificando…') : (props.submitLabel || 'Verificar');

    var rest = omit(props, ['variant', 'title', 'message', 'destination', 'label', 'placeholder', 'caption', 'value',
      'defaultValue', 'onChange', 'onSubmit', 'submitLabel', 'loading', 'loadingLabel', 'onResend', 'resendLabel',
      'onHelp', 'helpLabel', 'error', 'length', 'className']);

    return h('form', Object.assign({ className: cx('cl-modal-verification-code', props.className), onSubmit: submit, noValidate: true, 'aria-labelledby': titleId }, rest),
      h('h2', { id: titleId, className: 'cl-modal-verification-code__title' }, props.title || d.title),
      h('p', { className: 'cl-modal-verification-code__message' },
        props.message !== undefined ? props.message : d.message,
        props.destination ? h('span', { className: 'cl-modal-verification-code__destination' }, props.destination) : null),
      h('div', { className: 'cl-modal-verification-code__field' },
        h('label', { htmlFor: inputId, className: 'cl-modal-verification-code__label' }, props.label || 'Tu código'),
        h('input', {
          id: inputId,
          className: 'cl-modal-verification-code__input',
          type: 'text',
          inputMode: 'numeric',
          autoComplete: 'one-time-code',
          pattern: '[0-9]*',
          maxLength: maxLength,
          placeholder: props.placeholder || Array(maxLength).fill('0').join(' - '),
          value: value,
          onChange: change,
          'aria-invalid': invalid ? 'true' : undefined,
          'aria-describedby': described
        }),
        invalid ? h('p', { id: errorId, className: 'cl-modal-verification-code__error', role: 'alert' }, props.error) : null,
        caption ? h('p', { id: captionId, className: 'cl-modal-verification-code__caption' }, caption) : null),
      Button
        ? h(Button, { type: 'primary', htmlType: 'submit', disabled: disabled, 'aria-busy': props.loading ? 'true' : undefined, className: 'cl-modal-verification-code__submit' }, submitLabel)
        : h('button', { type: 'submit', disabled: disabled, className: 'cl-modal-verification-code__submit' }, submitLabel),
      h('p', { className: 'cl-modal-verification-code__resend' },
        '¿No recibiste tu código? ',
        h('button', { type: 'button', className: 'cl-modal-verification-code__link', onClick: props.onResend }, props.resendLabel || 'Reenviar código')),
      props.onHelp !== null ? h('button', { type: 'button', className: 'cl-modal-verification-code__help', onClick: props.onHelp }, props.helpLabel || 'Necesito ayuda') : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalVerificationCode = ModalVerificationCode;
})();

/* ---- ModalWithdrawal ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  function arrow() {
    return h('svg', { viewBox: '0 0 18 18', width: 18, height: 18, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M3.5 9h11M10 4.5L14.5 9 10 13.5', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  var DEFAULT_OPTIONS = [
    { key: 'creditos', tone: 'primary', title: 'Créditos Skydropx', description: 'Convierte tu dinero en créditos para hacer envíos.',
      benefits: ['Sin comisiones.', 'Listo para usar de inmediato.', 'No tienen fecha de vencimiento.'], actionLabel: 'Convertir a créditos' },
    { key: 'cuenta', tone: 'teal', title: 'Cuenta bancaria', description: 'Recibe el dinero directamente en tu cuenta.',
      benefits: ['Opción de pago anticipado para tus envíos.', 'Algunos bancos podrían aplicar un costo por la transacción.', 'Transferencias seguras que se reflejan los jueves.'], actionLabel: 'Transferir' }
  ];

  function OptionCard(p) {
    var o = p.option;
    var tone = o.tone === 'teal' ? 'teal' : 'primary';
    var titleId = 'cl-modal-withdrawal-' + (o.key || p.index);
    var Button = window.Caelus && window.Caelus.Button;
    return h('section', { className: cx('cl-modal-withdrawal__card', 'cl-modal-withdrawal__card--' + tone), 'aria-labelledby': titleId },
      h('span', { className: 'cl-modal-withdrawal__band', 'aria-hidden': 'true' }),
      h('div', { className: 'cl-modal-withdrawal__card-body' },
        o.illustration ? h('div', { className: 'cl-modal-withdrawal__illustration' }, o.illustration) : null,
        h('div', { className: 'cl-modal-withdrawal__head' },
          h('h3', { id: titleId, className: 'cl-modal-withdrawal__card-title' }, o.title),
          o.description ? h('p', { className: 'cl-modal-withdrawal__card-desc' }, o.description) : null),
        o.benefits && o.benefits.length ? h('ul', { className: 'cl-modal-withdrawal__benefits' },
          o.benefits.map(function (b, i) { return h('li', { key: i }, b); })) : null),
      h('div', { className: 'cl-modal-withdrawal__action' },
        Button
          ? h(Button, { type: 'tertiary', rightIcon: arrow(), onClick: o.onSelect, disabled: o.disabled }, o.actionLabel)
          : h('button', { type: 'button', onClick: o.onSelect, disabled: o.disabled }, o.actionLabel)));
  }

  function ModalWithdrawal(props) {
    var Modal = window.Caelus && window.Caelus.Modal;
    var options = props.options || DEFAULT_OPTIONS;
    var rest = omit(props, ['options', 'intro', 'children', 'className']);
    var body = h('div', { className: 'cl-modal-withdrawal__body' },
      props.intro !== null ? h('p', { className: 'cl-modal-withdrawal__intro' }, props.intro || 'Selecciona cómo quieres recibir tu dinero.') : null,
      h('div', { className: 'cl-modal-withdrawal__options' },
        options.map(function (o, i) { return h(OptionCard, { key: o.key || i, option: o, index: i }); })),
      props.children);
    var modalProps = Object.assign({ type: 'informativo', title: 'Retirar saldo', width: 800, footer: null,
      className: cx('cl-modal-withdrawal', props.className) }, rest);
    if (!Modal) return h('div', { role: 'dialog' }, body);
    return h(Modal, modalProps, body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalWithdrawal = ModalWithdrawal;
})();

/* ---- Navbar ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Svg(d, size) {
    return h('svg', { width: size, height: size, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: d, stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  var CHEVRON = 'M4.5 6.75L9 11.25l4.5-4.5';

  // Navbar — "navbar" (Type = Desktop y tablet | Mobile; platform flags
  // Skydropx | Solo Envíos | Envíos Internacionales | MSH; País). Folds
  // .button-pais, .dropdown-country, .acount-*, .button-automation, .referidos.
  function Navbar(props) {
    var variant = props.variant || 'skydropx';
    var type = props.type || 'desktop';
    var balance = props.balance;
    var country = props.country;
    var account = props.account;
    var links = props.links || [];
    var rest = omit(props, ['variant', 'type', 'logo', 'onMenuClick', 'menuLabel', 'menuExpanded', 'balance', 'country', 'actions',
      'account', 'links', 'navLabel', 'className', 'children']);

    var left = h('div', { className: 'cl-navbar__start' },
      props.onMenuClick ? h('button', {
        type: 'button', className: 'cl-navbar__burger', onClick: props.onMenuClick,
        'aria-label': props.menuLabel || 'Abrir menú', 'aria-expanded': props.menuExpanded
      }, Svg('M3 5h12M3 9h12M3 13h8', 20)) : null,
      props.logo ? h('span', { className: 'cl-navbar__logo' }, props.logo) : null);

    var center = links.length ? h('nav', { className: 'cl-navbar__links', 'aria-label': props.navLabel || 'Navegación principal' },
      links.map(function (l, i) {
        var Tag = l.href ? 'a' : 'button';
        return h(Tag, {
          key: l.id || i, href: l.href, type: l.href ? undefined : 'button', onClick: l.onClick,
          className: 'cl-navbar__link', 'aria-current': l.active ? 'page' : undefined
        }, l.icon ? h('span', { className: 'cl-navbar__icon', 'aria-hidden': true }, l.icon) : null, h('span', null, l.label));
      })) : null;

    var right = h('div', { className: 'cl-navbar__end' },
      props.actions,
      balance ? h('div', { className: 'cl-navbar__balance' },
        h('button', { type: 'button', className: 'cl-navbar__tool cl-navbar__tool--text', onClick: balance.onAdd || balance.onClick,
          'aria-label': balance.addLabel ? (typeof balance.label === 'string' ? balance.label + ', ' : '') + balance.addLabel : undefined },
          balance.icon ? h('span', { className: 'cl-navbar__icon', 'aria-hidden': true }, balance.icon) : null,
          h('span', null, balance.label),
          h('span', { className: 'cl-navbar__icon', 'aria-hidden': true }, Svg('M9 4v10M4 9h10', 18)))) : null,
      country ? h('button', { type: 'button', className: 'cl-navbar__tool cl-navbar__tool--text', onClick: country.onClick,
        'aria-haspopup': 'listbox', 'aria-expanded': country.expanded, 'aria-label': country.label },
        country.flag ? h('span', { className: 'cl-navbar__flag', 'aria-hidden': true }, country.flag) : null,
        type === 'desktop' && country.code ? h('span', null, country.code) : null,
        type === 'desktop' ? h('span', { className: 'cl-navbar__icon', 'aria-hidden': true }, Svg(CHEVRON, 18)) : null) : null,
      (props.actions || balance || country) && account && type === 'desktop' ? h('span', { className: 'cl-navbar__divider', 'aria-hidden': true }) : null,
      account ? h('button', { type: 'button', className: 'cl-navbar__account', onClick: account.onClick,
        'aria-haspopup': 'menu', 'aria-expanded': account.expanded, 'aria-label': account.label || 'Menú de cuenta' },
        h('span', { className: 'cl-navbar__avatar', 'aria-hidden': true }, account.avatar || account.initials),
        h('span', { className: 'cl-navbar__icon cl-navbar__icon--sm', 'aria-hidden': true }, Svg(CHEVRON, 14))) : null);

    return h('header', Object.assign({}, rest, {
      className: cx('cl-navbar', 'cl-navbar--' + variant, 'cl-navbar--' + type, props.className)
    }), left, center, right, props.children);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Navbar = Navbar;
})();

/* ---- NotificationPushup ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  function xIcon() {
    return h('svg', { viewBox: '0 0 18 18', width: 18, height: 18, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M4.5 4.5l9 9M13.5 4.5l-9 9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }

  var COPY = {
    referido: { title: '¡Tu referido activó su cuenta!', message: 'Estás cerca de ganar créditos para tus envíos.' },
    creditos: { title: '¡Ganaste créditos por referir!', message: 'Empieza a utilizarlos en tus próximos envíos.' },
    beneficio: { title: '¡Aprovecha tu beneficio de referido!', message: 'Recuerda hacer tu envío y recarga dentro del tiempo disponible.' }
  };

  function NotificationPushup(props) {
    var kind = props.kind || 'referido';
    var platform = props.platform || 'pro';
    var copy = COPY[kind] || COPY.referido;
    var emoji = props.icon !== undefined ? props.icon : (platform === 'se' ? '🥳' : '🎉');
    var rest = omit(props, ['kind', 'platform', 'title', 'message', 'icon', 'date', 'onClose', 'closeLabel', 'className', 'children']);
    return h('div', Object.assign({ role: 'status', className: cx('cl-notification-pushup', 'cl-notification-pushup--' + platform, props.className) }, rest),
      h('div', { className: 'cl-notification-pushup__content' },
        emoji ? h('span', { className: 'cl-notification-pushup__icon', 'aria-hidden': 'true' }, emoji) : null,
        h('div', { className: 'cl-notification-pushup__text' },
          h('p', { className: 'cl-notification-pushup__title' }, props.title || copy.title),
          h('p', { className: 'cl-notification-pushup__message' }, props.message || copy.message),
          props.date ? h('p', { className: 'cl-notification-pushup__date' }, props.date) : null,
          props.children)),
      props.onClose ? h('button', { type: 'button', className: 'cl-notification-pushup__close', 'aria-label': props.closeLabel || 'Cerrar notificación', onClick: props.onClose }, xIcon()) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.NotificationPushup = NotificationPushup;
})();

/* ---- Pagination ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function Svg(d, size, sw) {
    return h('svg', { width: size, height: size, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: d, stroke: 'currentColor', strokeWidth: sw || 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  function Dots() {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'currentColor', 'aria-hidden': true },
      h('circle', { cx: 9, cy: 4, r: 1.25 }), h('circle', { cx: 9, cy: 9, r: 1.25 }), h('circle', { cx: 9, cy: 14, r: 1.25 }));
  }
  var uid = 0;

  // Pagination — "pagination" (State = Default | Partial selection | Select All,
  // Breakpoint = Desktop | Mobile). Table toolbar with selection, sort, range
  // and previous/next. Folds .buttons-arrows, .text, .icons, .button-circular, .more.
  function Pagination(props) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = 'cl-pag-' + (++uid);
    var cbRef = React.useRef(null);
    var page = props.page || 1;
    var pageSize = props.pageSize || 20;
    var total = props.total || 0;
    var pages = Math.max(1, Math.ceil(total / pageSize));
    var from = total ? (page - 1) * pageSize + 1 : 0;
    var to = Math.min(total, page * pageSize);
    var selection = props.selection || 'none';
    var breakpoint = props.breakpoint || 'desktop';
    var ofLabel = props.ofLabel || 'de';

    React.useEffect(function () { if (cbRef.current) cbRef.current.indeterminate = selection === 'partial'; }, [selection]);

    var rest = omit(props, ['page', 'pageSize', 'total', 'onPageChange', 'selection', 'onSelectAllChange', 'selectLabel',
      'showSelectAll', 'actions', 'selectionText', 'selectionAction', 'onSortClick', 'sortLabel', 'sortIcon', 'onMoreClick',
      'moreLabel', 'breakpoint', 'ofLabel', 'prevLabel', 'nextLabel', 'navLabel', 'className']);

    function go(p) { if (props.onPageChange && p >= 1 && p <= pages && p !== page) props.onPageChange(p); }

    var left = h('div', { className: 'cl-pagination__left' },
      props.showSelectAll !== false ? h('div', { className: 'cl-pagination__select' },
        h('span', { className: 'cl-pagination__box' },
          h('input', { ref: cbRef, id: idRef.current + '-all', type: 'checkbox', checked: selection === 'all',
            onChange: function (e) { if (props.onSelectAllChange) props.onSelectAllChange(e.target.checked); } }),
          h('span', { className: 'cl-pagination__mark', 'aria-hidden': true },
            selection === 'partial' ? Svg('M5 9h8', 12, 2) : Svg('M4.5 9.5l3 3 6-7', 12, 2))),
        h('label', { htmlFor: idRef.current + '-all' }, props.selectLabel || 'Seleccionar')) : null,
      props.actions ? h('span', { className: 'cl-pagination__divider', 'aria-hidden': true }) : null,
      props.actions ? h('div', { className: 'cl-pagination__actions' }, props.actions) : null,
      selection !== 'none' && (props.selectionText || props.selectionAction) && breakpoint === 'desktop'
        ? h('p', { className: 'cl-pagination__selection', 'aria-live': 'polite' },
          props.selectionText,
          props.selectionAction ? h('button', { type: 'button', className: 'cl-pagination__link', onClick: props.selectionAction.onClick }, props.selectionAction.label) : null)
        : null);

    var right = h('div', { className: 'cl-pagination__right' },
      props.onSortClick ? h('div', { className: 'cl-pagination__sort' },
        h('button', { type: 'button', className: 'cl-pagination__circle cl-pagination__circle--lg', onClick: props.onSortClick, 'aria-label': props.sortLabel || 'Ordenar' },
          props.sortIcon || Svg('M3 5h9M3 9h6M3 13h4M14 6v8m0-8l-2 2m2-2l2 2', 15)),
        h('span', { className: 'cl-pagination__divider cl-pagination__divider--tall', 'aria-hidden': true })) : null,
      h('nav', { className: 'cl-pagination__nav', 'aria-label': props.navLabel || 'Paginación' },
        h('span', { className: 'cl-pagination__range', 'aria-current': 'page', 'aria-live': 'polite' },
          from + '-' + to + ' ' + ofLabel + ' ' + total),
        h('div', { className: 'cl-pagination__arrows' },
          h('button', { type: 'button', className: 'cl-pagination__circle', disabled: page <= 1, onClick: function () { go(page - 1); },
            'aria-label': props.prevLabel || 'Página anterior' }, Svg('M11 4.5L6.5 9l4.5 4.5', 11, 2)),
          h('button', { type: 'button', className: 'cl-pagination__circle', disabled: page >= pages, onClick: function () { go(page + 1); },
            'aria-label': props.nextLabel || 'Página siguiente' }, Svg('M7 4.5L11.5 9 7 13.5', 11, 2)))),
      props.onMoreClick ? h('button', { type: 'button', className: 'cl-pagination__more', onClick: props.onMoreClick, 'aria-label': props.moreLabel || 'Más opciones' }, h(Dots)) : null);

    var mobileSel = selection !== 'none' && (props.selectionText || props.selectionAction) && breakpoint === 'mobile'
      ? h('p', { className: 'cl-pagination__selection', 'aria-live': 'polite' },
        props.selectionText,
        props.selectionAction ? h('button', { type: 'button', className: 'cl-pagination__link', onClick: props.selectionAction.onClick }, props.selectionAction.label) : null)
      : null;

    return h('div', Object.assign({}, rest, { className: cx('cl-pagination', 'cl-pagination--' + breakpoint, props.className) }),
      left, mobileSel, right);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Pagination = Pagination;
})();

/* ---- Popover ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  var counter = 0;
  function useStableId(given) {
    var ref = React.useRef(null);
    if (ref.current == null) ref.current = 'cl-popover-' + (++counter);
    return given || ref.current;
  }
  function svg(size, paths) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }

  // Popover — Position (12) × Show header/body/link/close from the Figma set "popover". Rendered statically.
  function Popover(props) {
    var position = props.position || 'top-center';
    var parts = position.split('-');
    var id = useStableId(props.id);
    var rest = omit(props, ['position', 'header', 'children', 'link', 'onClose', 'closeLabel', 'className', 'id']);
    var link = props.link;
    return h('div', Object.assign({ role: 'dialog', 'aria-labelledby': props.header != null ? id + '-title' : undefined }, rest, {
      id: id,
      className: cx('cl-popover', 'cl-popover--' + parts[0], 'cl-popover--align-' + (parts[1] || 'center'), props.className)
    }),
      (props.header != null || props.onClose) ? h('div', { className: 'cl-popover__header' },
        props.header != null ? h('p', { className: 'cl-popover__title', id: id + '-title' }, props.header) : null,
        props.onClose ? h('button', {
          type: 'button', className: 'cl-popover__close', onClick: props.onClose,
          'aria-label': props.closeLabel || 'Cerrar'
        }, svg(18, ['M7 7l10 10m0-10L7 17'])) : null) : null,
      props.children != null ? h('div', { className: 'cl-popover__body' }, props.children) : null,
      link ? h('a', { className: 'cl-popover__link', href: link.href || '#', onClick: link.onClick, target: link.external ? '_blank' : undefined, rel: link.external ? 'noopener noreferrer' : undefined },
        h('span', null, link.label),
        svg(14, ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5'])) : null,
      h('span', { className: 'cl-popover__arrow', 'aria-hidden': true }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Popover = Popover;
})();

/* ---- PopoverAlert ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function svg(size, paths) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }
  var GLYPHS = {
    warning: ['M12 4l9 16H3l9-16z', 'M12 10v4', 'M12 17h.01'],
    info: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M12 11v5', 'M12 8h.01'],
    danger: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M12 8v5', 'M12 16h.01'],
    primary: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M8.5 12.5l2.5 2.5 4.5-5']
  };

  // PopoverAlert — type (con/sin botón) × style × direction from the Figma set "popover-alert". Rendered statically.
  function PopoverAlert(props) {
    var severity = props.severity || 'warning';
    var direction = props.direction || 'right';
    var show = props.showPopover !== false;
    var action = props.action;
    var rest = omit(props, ['severity', 'direction', 'title', 'children', 'icon', 'action', 'onClose', 'closeLabel', 'showPopover', 'className']);
    var icon = h('span', { className: 'cl-popover-alert__icon', 'aria-hidden': true }, props.icon || svg(14, GLYPHS[severity] || GLYPHS.warning));
    var close = props.onClose ? h('button', {
      type: 'button', className: 'cl-popover-alert__close', onClick: props.onClose,
      'aria-label': props.closeLabel || 'Cerrar'
    }, svg(18, ['M7 7l10 10m0-10L7 17'])) : null;
    var body = props.children != null ? h('div', { className: 'cl-popover-alert__body' }, props.children) : null;

    var card = action
      ? h('div', { className: 'cl-popover-alert__card cl-popover-alert__card--action' },
          h('div', { className: 'cl-popover-alert__header' },
            icon,
            props.title != null ? h('p', { className: 'cl-popover-alert__title' }, props.title) : h('span', { className: 'cl-popover-alert__spacer' }),
            close),
          body,
          h('button', { type: 'button', className: 'cl-popover-alert__action', onClick: action.onClick },
            h('span', null, action.label),
            h('span', { className: 'cl-popover-alert__action-icon', 'aria-hidden': true }, action.icon || svg(16, ['M5 12h14', 'M13 6l6 6-6 6']))))
      : h('div', { className: 'cl-popover-alert__card cl-popover-alert__card--inline' },
          icon,
          h('div', { className: 'cl-popover-alert__text' },
            props.title != null ? h('p', { className: 'cl-popover-alert__title' }, props.title) : null,
            body),
          close);

    return h('div', Object.assign({}, rest, {
      className: cx('cl-popover-alert', 'cl-popover-alert--' + severity, 'cl-popover-alert--' + direction, props.className)
    }),
      h('span', { className: 'cl-popover-alert__dot', 'aria-hidden': true }),
      show ? h('div', { className: 'cl-popover-alert__popover', role: 'status' },
        h('span', { className: 'cl-popover-alert__arrow', 'aria-hidden': true }),
        card) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.PopoverAlert = PopoverAlert;
})();

/* ---- ProgressBar ---- */
(function () {
  var h = window.React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // ProgressBar — Color × Value from the Figma set "progress-bars"; "progress-bar-animation" = indeterminate.
  function ProgressBar(props) {
    var color = props.color || 'primary';
    var ind = !!props.indeterminate;
    var max = props.max != null ? props.max : 100;
    var value = Math.max(0, Math.min(max, props.value != null ? props.value : 0));
    var pct = max > 0 ? (value / max) * 100 : 0;
    var hasLabel = !ind && (props.leftLabel != null || props.rightLabel != null);
    var rest = omit(props, ['color', 'value', 'max', 'indeterminate', 'leftLabel', 'rightLabel', 'label', 'className']);
    var aria = {
      role: 'progressbar',
      'aria-label': props.label || rest['aria-label'] || (rest['aria-labelledby'] ? undefined : 'Progreso'),
      'aria-valuemin': ind ? undefined : 0,
      'aria-valuemax': ind ? undefined : max,
      'aria-valuenow': ind ? undefined : value,
      'aria-busy': ind ? true : undefined
    };
    return h('div', Object.assign({}, rest, { className: cx('cl-progress-bar', 'cl-progress-bar--' + color, ind && 'cl-progress-bar--indeterminate', props.className) }),
      hasLabel ? h('div', { className: 'cl-progress-bar__labels', 'aria-hidden': true },
        h('span', null, props.leftLabel),
        h('span', null, props.rightLabel)) : null,
      h('div', Object.assign({ className: 'cl-progress-bar__track' }, aria),
        h('div', { className: 'cl-progress-bar__fill', style: ind ? undefined : { width: pct + '%' } })));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ProgressBar = ProgressBar;
})();

/* ---- Protection ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }
  function shield() {
    return h('svg', { viewBox: '0 0 20 20', width: 20, height: 20, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M10 2.5l6 2.25v4.5c0 3.9-2.6 6.9-6 8.25-3.4-1.35-6-4.35-6-8.25v-4.5z', stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round' }),
      h('path', { d: 'M7.5 10l1.75 1.75L12.75 8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  var TITLES = { sos: 'SOS Protección', se: 'Protección SE', internacional: 'Protección' };

  function Link(p) {
    if (!p.href && !p.onClick) return h('span', { className: 'cl-protection__link' }, p.children);
    return h('a', { className: 'cl-protection__link', href: p.href || '#', onClick: p.onClick, target: p.href ? '_blank' : undefined, rel: p.href ? 'noreferrer' : undefined }, p.children);
  }

  function Protection(props) {
    var type = props.type || 'sos';
    var mode = props.mode || 'default';
    var title = props.title || TITLES[type];
    var switchId = useId('cl-protection-switch');
    var helperId = useId('cl-protection-helper');
    var amountId = useId('cl-protection-amount');
    var controlled = props.checked !== undefined;
    var st = React.useState(!!props.defaultChecked || mode === 'activada');
    var checked = mode === 'automatica' ? true : (controlled ? props.checked : st[0]);
    function toggle(e) {
      if (props.disabled) return;
      if (!controlled) st[1](!checked);
      if (props.onCheckedChange) props.onCheckedChange(!checked, e);
    }
    var policies = h(Link, { href: props.policiesHref, onClick: props.onPoliciesClick }, 'políticas de uso');
    var showAmount = checked && props.showDeclaredValue !== false;
    var rest = omit(props, ['type', 'mode', 'title', 'checked', 'defaultChecked', 'onCheckedChange', 'disabled',
      'declaredValue', 'defaultDeclaredValue', 'onDeclaredValueChange', 'currency', 'showDeclaredValue', 'policiesHref',
      'onPoliciesClick', 'settingsHref', 'onSettingsClick', 'label', 'className']);

    var control;
    if (mode === 'automatica') {
      control = h('div', { className: 'cl-protection__copy' },
        h('p', { className: 'cl-protection__label' }, props.label || 'Envío protegido'),
        h('p', { className: 'cl-protection__helper', id: helperId },
          title + ' se activa automáticamente. Si deseas cambiar esta preferencia, ve a ',
          h(Link, { href: props.settingsHref, onClick: props.onSettingsClick }, title), '. Aplican ', policies));
    } else {
      control = h('div', { className: 'cl-protection__toggle-row' },
        h('button', {
          id: switchId, type: 'button', role: 'switch', 'aria-checked': checked ? 'true' : 'false',
          'aria-describedby': helperId, disabled: props.disabled,
          className: 'cl-protection__switch', onClick: toggle
        }, h('span', { className: 'cl-protection__knob', 'aria-hidden': 'true' })),
        h('div', { className: 'cl-protection__copy' },
          h('label', { htmlFor: switchId, className: 'cl-protection__label' }, props.label || 'Protege ante robo, daño y más.'),
          h('p', { className: 'cl-protection__helper', id: helperId }, 'Al agregar la protección confirmo que conozco y acepto las ', policies)));
    }

    return h('section', Object.assign({ className: cx('cl-protection', 'cl-protection--' + type, props.className), 'aria-label': typeof title === 'string' ? title : undefined }, rest),
      h('div', { className: 'cl-protection__header' },
        h('h3', { className: 'cl-protection__title' }, title),
        h('span', { className: 'cl-protection__shield' }, shield())),
      h('div', { className: 'cl-protection__body' },
        control,
        showAmount ? h('div', { className: 'cl-protection__amount' },
          h('label', { htmlFor: amountId, className: 'cl-protection__amount-label' }, 'Valor declarado'),
          h('div', { className: 'cl-protection__amount-input' },
            h('span', { className: 'cl-protection__affix', 'aria-hidden': 'true' }, '$'),
            h('input', {
              id: amountId, type: 'text', inputMode: 'decimal',
              value: props.declaredValue, defaultValue: props.declaredValue === undefined ? props.defaultDeclaredValue : undefined,
              onChange: props.onDeclaredValueChange, 'aria-describedby': amountId + '-cur'
            }),
            h('span', { className: 'cl-protection__affix', id: amountId + '-cur' }, props.currency || 'MXN'))) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Protection = Protection;
})();

/* ---- ResumenDePago ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    info: 'M11.25 11.25l.04-.02a.75.75 0 011.06.85l-.7 2.84a.75.75 0 001.06.85l.04-.02M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.01',
    hand: 'M7 11l3-3 3 2 4-4 4 4-8 8-2-2M3 11l4-4 3 1M7 15l2 2',
    pin: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 1115 0z',
    printer: 'M6.72 13.83H5.25A2.25 2.25 0 013 11.58V9.75A2.25 2.25 0 015.25 7.5h13.5A2.25 2.25 0 0121 9.75v1.83a2.25 2.25 0 01-2.25 2.25h-1.47M6.75 7.5V3h10.5v4.5M6.75 13.5h10.5V21H6.75z'
  };
  var B = 'cl-resumen-de-pago';

  function ResumenDePago(props) {
    var type = props.type || 'normal';
    var mobile = props.breakpoint === 'mobile';
    var carrier = props.carrier || {};
    var pickup = props.pickup || {};
    var features = props.features || [{ label: 'Rastreo', icon: 'pin' }, { label: 'Impresora térmica', icon: 'printer' }];
    var rest = omit(props, ['type', 'breakpoint', 'carrier', 'eta', 'pickup', 'price', 'convenioAlias', 'features', 'className']);

    var priceEl = type === 'convenio'
      ? h('div', { className: B + '__price-block' },
          h('span', { className: B + '__convenio' }, ico(P.hand, 16), 'Con convenio'),
          h('span', { className: B + '__alias' }, props.convenioAlias))
      : h('div', { className: B + '__price-block' },
          h('span', { className: B + '__label' }, 'Precio'),
          h('span', { className: B + '__price' }, props.price));

    return h('section', Object.assign({ className: cx(B, mobile && B + '--mobile', props.className) }, rest),
      h('div', { className: B + '__carrier' },
        h('span', { className: B + '__logo' }, carrier.logo || null),
        h('span', { className: B + '__stack' },
          h('span', { className: B + '__name' }, carrier.name),
          h('span', { className: B + '__eta' }, props.eta))),
      h('div', { className: B + '__row' },
        h('div', { className: B + '__pickup' },
          h('span', { className: B + '__label' }, 'Tipo de recolección'),
          h('span', { className: B + '__pickup-title' }, pickup.title || 'Llevar a sucursal',
            pickup.tooltip ? h('span', { className: B + '__tip', tabIndex: 0, role: 'img', title: pickup.tooltip, 'aria-label': pickup.tooltip }, ico(P.info, 16)) : null),
          pickup.detail ? h('span', { className: B + '__pickup-detail' }, pickup.detail) : null),
        priceEl),
      h('hr', { className: B + '__div' }),
      h('div', { className: B + '__extras' },
        h('span', { className: B + '__extras-title' }, 'Características'),
        h('ul', { className: B + '__features' }, features.map(function (f, i) {
          return h('li', { key: i, className: B + '__feature' },
            h('span', { className: B + '__feature-icon' }, typeof f.icon === 'string' ? ico(P[f.icon] || P.pin, 14) : (f.icon || ico(P.pin, 14))),
            f.label);
        }))));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ResumenDePago = ResumenDePago;
})();

/* ---- StatusRecord ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  function svg(paths) {
    return h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, fill: 'none', 'aria-hidden': 'true' },
      paths.map(function (d, i) { return h('path', { key: i, d: d, stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }); }));
  }
  var ICONS = {
    cube: function () { return svg(['M8 1.75l5.5 3v6.5L8 14.25l-5.5-3v-6.5z', 'M2.5 4.75L8 7.75l5.5-3M8 7.75v6.5']); },
    clipboard: function () { return svg(['M5.5 3H4a1 1 0 00-1 1v9a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1h-1.5', 'M5.5 2h5v2h-5z', 'M5.5 9l1.75 1.75L10.5 7.5']); },
    truck: function () { return svg(['M1.5 4h8v7h-8z', 'M9.5 6.5h3l2 2.5v2h-5', 'M4.5 13a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM12 13a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z']); },
    pin: function () { return svg(['M8 14.5s4.5-4.25 4.5-8a4.5 4.5 0 10-9 0c0 3.75 4.5 8 4.5 8z', 'M8 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z']); },
    check: function () { return svg(['M3 8.5l3 3 7-7']); },
    warning: function () { return svg(['M8 2l6.5 11.5h-13z', 'M8 6.5v3M8 11.5v.01']); }
  };

  var STEPS = [
    { key: 'creado', label: 'Creado', icon: 'cube' },
    { key: 'recolectado', label: 'Recolectado', icon: 'clipboard' },
    { key: 'en-camino', label: 'En camino', icon: 'truck' },
    { key: 'por-llegar', label: 'Por llegar', icon: 'pin' },
    { key: 'entregado', label: 'Entregado', icon: 'check' }
  ];
  var CURRENT = { creado: 0, recolectado: 1, 'en-camino': 2, incidencia: 2, 'por-llegar': 3, entregado: 4, 'en-devolucion': 4 };

  function StatusRecord(props) {
    var status = props.status || 'creado';
    var current = CURRENT[status] != null ? CURRENT[status] : 0;
    var labels = props.labels || {};
    var rest = omit(props, ['status', 'labels', 'size', 'className']);

    var items = STEPS.map(function (s, i) {
      var tone = i <= current ? 'done' : 'pending';
      var label = labels[s.key] || s.label;
      var icon = s.icon;
      if (i === current && (status === 'incidencia' || status === 'en-devolucion')) { tone = 'error'; icon = 'warning'; }
      if (status === 'en-devolucion' && i === 4) label = labels['en-devolucion'] || 'En devolución';
      if (status === 'entregado' && i === 4) tone = 'success';
      var lineOn = i < STEPS.length - 1 && i <= current && !(tone === 'error');
      return h('li', {
        key: s.key,
        className: cx('cl-status-record__step', 'cl-status-record__step--' + tone, lineOn && 'cl-status-record__step--line-on'),
        'aria-current': i === current ? 'step' : undefined
      },
        h('span', { className: 'cl-status-record__icon' }, ICONS[icon]()),
        h('span', { className: 'cl-status-record__label' }, label),
        h('span', { className: 'cl-status-record__sr' }, tone === 'pending' ? ' (pendiente)' : (tone === 'error' ? ' (con problema)' : (i === current ? ' (actual)' : ' (completado)'))));
    });

    return h('ol', Object.assign({
      className: cx('cl-status-record', props.size === 'mobile' && 'cl-status-record--mobile', props.className),
      'aria-label': props['aria-label'] || 'Estatus del envío'
    }, rest), items);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.StatusRecord = StatusRecord;
})();

/* ---- TabFilter ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // TabFilter — "tab-filter": segmented tabs that filter a table or list.
  function TabFilter(props) {
    var tabs = props.tabs || [];
    var listRef = React.useRef(null);
    var rest = omit(props, ['tabs', 'value', 'onChange', 'className']);
    var active = -1;
    tabs.forEach(function (t, i) { if (t.id === props.value) active = i; });
    if (active === -1) tabs.some(function (t, i) { if (!t.disabled) { active = i; return true; } return false; });

    function onKeyDown(e) {
      var enabled = [];
      tabs.forEach(function (t, i) { if (!t.disabled) enabled.push(i); });
      if (!enabled.length) return;
      var pos = enabled.indexOf(active);
      var next = null;
      if (e.key === 'ArrowRight') next = enabled[(pos + 1) % enabled.length];
      else if (e.key === 'ArrowLeft') next = enabled[(pos - 1 + enabled.length) % enabled.length];
      else if (e.key === 'Home') next = enabled[0];
      else if (e.key === 'End') next = enabled[enabled.length - 1];
      if (next == null) return;
      e.preventDefault();
      if (props.onChange) props.onChange(tabs[next].id);
      var nodes = listRef.current ? listRef.current.querySelectorAll('[role="tab"]') : [];
      if (nodes[next]) nodes[next].focus();
    }

    return h('div', Object.assign({}, rest, {
      ref: listRef, role: 'tablist', className: cx('cl-tab-filter', props.className), onKeyDown: onKeyDown
    }),
      tabs.map(function (t, i) {
        var selected = i === active;
        return h('button', {
          key: t.id, type: 'button', role: 'tab', className: 'cl-tab-filter__item',
          'aria-selected': selected, 'aria-controls': t.panelId, disabled: t.disabled, tabIndex: selected ? 0 : -1,
          onClick: function () { if (props.onChange) props.onChange(t.id); }
        },
          t.icon ? h('span', { className: 'cl-tab-filter__icon', 'aria-hidden': true }, t.icon) : null,
          h('span', null, t.label),
          t.count != null ? h('span', { className: 'cl-tab-filter__count' }, t.count) : null);
      }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.TabFilter = TabFilter;
})();

/* ---- TabNav ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // TabNav — "tab-nav" (Style = Tab | Pills | With underline, Dark mode).
  // The internal ".nav-item" sets become the `tabs` array.
  function TabNav(props) {
    var tabs = props.tabs || [];
    var variant = props.variant || 'tab';
    var listRef = React.useRef(null);
    var rest = omit(props, ['tabs', 'value', 'onChange', 'variant', 'dark', 'className']);

    var activeIndex = -1;
    tabs.forEach(function (t, i) { if (t.id === props.value) activeIndex = i; });
    if (activeIndex === -1) tabs.some(function (t, i) { if (!t.disabled) { activeIndex = i; return true; } return false; });

    function onKeyDown(e) {
      var enabled = [];
      tabs.forEach(function (t, i) { if (!t.disabled) enabled.push(i); });
      if (!enabled.length) return;
      var pos = enabled.indexOf(activeIndex);
      var next = null;
      if (e.key === 'ArrowRight') next = enabled[(pos + 1) % enabled.length];
      else if (e.key === 'ArrowLeft') next = enabled[(pos - 1 + enabled.length) % enabled.length];
      else if (e.key === 'Home') next = enabled[0];
      else if (e.key === 'End') next = enabled[enabled.length - 1];
      if (next == null) return;
      e.preventDefault();
      if (props.onChange) props.onChange(tabs[next].id);
      var nodes = listRef.current ? listRef.current.querySelectorAll('[role="tab"]') : [];
      if (nodes[next]) nodes[next].focus();
    }

    return h('div', Object.assign({}, rest, {
      ref: listRef,
      role: 'tablist',
      className: cx('cl-tab-nav', 'cl-tab-nav--' + variant, props.dark && 'cl-tab-nav--dark', props.className),
      onKeyDown: onKeyDown
    }),
      tabs.map(function (t, i) {
        var selected = i === activeIndex;
        return h('button', {
          key: t.id,
          id: t.tabId,
          type: 'button',
          role: 'tab',
          className: 'cl-tab-nav__item',
          'aria-selected': selected,
          'aria-controls': t.panelId,
          'aria-disabled': t.disabled ? 'true' : undefined,
          disabled: t.disabled,
          tabIndex: selected ? 0 : -1,
          onClick: function () { if (!t.disabled && props.onChange) props.onChange(t.id); }
        },
          t.icon ? h('span', { className: 'cl-tab-nav__icon', 'aria-hidden': true }, t.icon) : null,
          h('span', null, t.label));
      }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.TabNav = TabNav;
})();

/* ---- TablaPaqueterias ---- */
(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  var B = 'cl-tabla-paqueterias';

  function TablaPaqueterias(props) {
    var Card = (window.Caelus || {}).CardPaqueteria;
    var items = props.items || [];
    var rest = omit(props, ['items', 'device', 'variant', 'emptyTitle', 'emptyText', 'className', 'children']);
    var content;
    if (props.children) {
      content = props.children;
    } else if (!items.length) {
      content = Card ? h(Card, { variant: 'busqueda', device: props.device, emptyTitle: props.emptyTitle, emptyText: props.emptyText }) : null;
    } else {
      content = items.map(function (it, i) {
        return h('li', { key: it.id || i, className: B + '__item' },
          Card ? h(Card, Object.assign({ variant: props.variant || 'v2', device: props.device }, omit(it, ['id']))) : null);
      });
    }
    var isList = !props.children && items.length;
    return h(isList ? 'ul' : 'div', Object.assign({ className: cx(B, props.className) }, rest), content);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.TablaPaqueterias = TablaPaqueterias;
})();

/* ---- Toast ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function svg(size, paths) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }
  var GLYPHS = {
    info: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M12 11v5', 'M12 8h.01'],
    warning: ['M12 4l9 16H3l9-16z', 'M12 10v4', 'M12 17h.01'],
    success: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M8.5 12.5l2.5 2.5 4.5-5'],
    danger: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M9.5 9.5l5 5m0-5l-5 5']
  };

  // Toast — Type × Show body × Show date × Show link × Mobile from the Figma set "toast".
  function Toast(props) {
    var type = props.type || 'info';
    var rest = omit(props, ['type', 'title', 'children', 'date', 'link', 'icon', 'onClose', 'closeLabel', 'mobile', 'className']);
    var link = props.link;
    return h('div', Object.assign({ role: 'status' }, rest, {
      className: cx('cl-toast', 'cl-toast--' + type, props.mobile && 'cl-toast--mobile', props.className)
    }),
      h('span', { className: 'cl-toast__bar', 'aria-hidden': true }),
      h('div', { className: 'cl-toast__content' },
        h('span', { className: 'cl-toast__icon', 'aria-hidden': true }, props.icon || svg(24, GLYPHS[type] || GLYPHS.info)),
        h('div', { className: 'cl-toast__text' },
          props.title != null ? h('p', { className: 'cl-toast__title' }, props.title) : null,
          props.children != null ? h('div', { className: 'cl-toast__body' }, props.children) : null,
          props.date != null ? h('p', { className: 'cl-toast__date' }, props.date) : null,
          link ? h('a', { className: 'cl-toast__link', href: link.href || '#', onClick: link.onClick }, link.label) : null)),
      props.onClose ? h('button', {
        type: 'button', className: 'cl-toast__close', onClick: props.onClose,
        'aria-label': props.closeLabel || 'Cerrar notificación'
      }, svg(18, ['M7 7l10 10m0-10L7 17'])) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Toast = Toast;
})();

/* ---- Tooltip ---- */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // Tooltip — Position × Con título from the Figma set "tooltip". Rendered statically.
  function Tooltip(props) {
    var position = props.position || 'top';
    var rest = omit(props, ['position', 'title', 'children', 'className']);
    var hasTitle = props.title != null;
    return h('div', Object.assign({ role: 'tooltip' }, rest, {
      className: cx('cl-tooltip', 'cl-tooltip--' + position, hasTitle && 'cl-tooltip--titled', props.className)
    }),
      h('div', { className: 'cl-tooltip__bubble' },
        hasTitle ? h('p', { className: 'cl-tooltip__title' }, props.title) : null,
        h('div', { className: 'cl-tooltip__content' }, props.children)),
      h('span', { className: 'cl-tooltip__arrow', 'aria-hidden': true }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Tooltip = Tooltip;
})();

Object.assign(window.Caelus, window.__CaelusParts || {});
try { delete window.__CaelusParts; } catch (e) { window.__CaelusParts = undefined; }

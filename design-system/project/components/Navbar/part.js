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

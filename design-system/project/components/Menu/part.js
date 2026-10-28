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

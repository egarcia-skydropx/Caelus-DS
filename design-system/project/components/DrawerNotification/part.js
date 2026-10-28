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

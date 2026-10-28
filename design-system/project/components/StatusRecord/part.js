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

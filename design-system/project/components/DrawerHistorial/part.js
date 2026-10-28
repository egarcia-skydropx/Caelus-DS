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

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

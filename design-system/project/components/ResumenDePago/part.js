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

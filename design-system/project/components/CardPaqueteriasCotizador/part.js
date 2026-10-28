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

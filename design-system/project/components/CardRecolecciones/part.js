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

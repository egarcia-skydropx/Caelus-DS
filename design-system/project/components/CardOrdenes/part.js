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

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
    shield: 'M9 12.75L11.25 15 15 9.75M12 2.71A11.96 11.96 0 013.6 6 12 12 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z',
    pin: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 1115 0z',
    warn: 'M12 9v3.75M2.7 16.13c-.87 1.5.22 3.37 1.95 3.37h14.7c1.73 0 2.82-1.87 1.95-3.37L13.95 3.38c-.87-1.5-3.03-1.5-3.9 0L2.7 16.13zM12 15.75h.01',
    bolt: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    hand: 'M7 11l3-3 3 2 4-4 4 4-8 8-2-2M3 11l4-4 3 1M7 15l2 2'
  };
  var B = 'cl-card-historial-envios';

  function Field(label, body, extra) {
    return h('div', { className: cx(B + '__field', extra) }, h('span', { className: B + '__label' }, label), body);
  }
  function iconBtn(kind, label, onClick, iconPath) {
    var Btn = C().Button;
    var icon = ico(iconPath, 18, iconPath === P.more ? 2.5 : 1.5);
    if (Btn) return h(Btn, { type: kind, size: 'sm', shape: 'square', icon: icon, 'aria-label': label, onClick: onClick });
    return h('button', { type: 'button', className: B + '__iconbtn', 'aria-label': label, onClick: onClick }, icon);
  }

  function CardHistorialEnvios(props) {
    var type = props.type || 'default';
    var mobile = props.breakpoint === 'mobile';
    var carrier = props.carrier || {};
    var dest = props.destination || {};
    var services = props.services || [];
    var isError = type === 'error';
    var noProtection = type === 'sin-proteccion' || isError;
    var canDownload = type !== 'cancelado' && !isError;
    var rest = omit(props, ['type', 'breakpoint', 'date', 'author', 'orderNumber', 'platformIcon', 'status', 'carrier', 'tracking', 'destination', 'eta', 'price', 'convenioLabel', 'services', 'selected', 'onSelect', 'onDownload', 'onView', 'onMore', 'onCopyTracking', 'className']);

    var headerLeft = h('div', { className: B + '__head-left' },
      h('input', { type: 'checkbox', className: B + '__check', checked: !!props.selected, onChange: props.onSelect || function () {}, 'aria-label': 'Seleccionar envío' }),
      h('span', { className: B + '__platform' }, props.platformIcon || null),
      type === 'ordenes'
        ? h('span', { className: B + '__meta' }, h('strong', { className: B + '__order' }, 'Núm. de orden'), ' ', h('span', null, props.orderNumber || ''), ' ', h('span', { className: B + '__date' }, props.date))
        : h('span', { className: B + '__meta' }, h('span', { className: B + '__date' }, props.date), props.author ? h('span', { className: B + '__author' }, 'Por: ' + props.author) : null)
    );
    var headerRight = h('div', { className: B + '__head-right' },
      props.status || null,
      isError ? h('span', { className: B + '__warn', role: 'img', 'aria-label': 'Error en creación' }, ico(P.warn, 18)) : h('span', { className: B + '__auto', title: 'Automatización' }, ico(P.bolt, 18))
    );

    var carrierEl = Field('Paquetería', h('div', { className: B + '__carrier' },
      h('span', { className: B + '__logo' }, carrier.logo || null),
      h('span', { className: B + '__stack' }, h('span', { className: B + '__value' }, carrier.name), h('span', { className: B + '__sub' }, carrier.service))
    ), B + '__field--carrier');

    var trackingEl = Field('Núm de rastreo', isError
      ? h('span', { className: B + '__muted' }, 'Error en creación')
      : h('span', { className: B + '__tracking' },
          h('span', { className: B + '__link' }, props.tracking),
          h('button', { type: 'button', className: B + '__copy', 'aria-label': 'Copiar número de rastreo', onClick: props.onCopyTracking }, ico(P.copy, 16))));

    var destEl = Field('Destino', h('span', { className: B + '__stack' }, h('span', { className: B + '__value' }, dest.name), h('span', { className: B + '__sub' }, dest.detail)));
    var etaEl = Field('Entrega estimada', h('span', { className: B + '__value' }, props.eta));
    var priceEl = type === 'con-convenio'
      ? Field('Precio', h('span', { className: B + '__convenio' }, ico(P.hand, 16), props.convenioLabel || 'Con convenio'))
      : Field('Precio', h('span', { className: B + '__price' }, props.price));

    var Btn = C().Button;
    var actions = h('div', { className: B + '__actions' },
      canDownload && !mobile ? iconBtn('primary', 'Descargar guía', props.onDownload, P.download) : null,
      !mobile ? iconBtn('secondary', 'Ver detalles', props.onView, P.eye) : null,
      !mobile ? iconBtn('secondary', 'Más opciones', props.onMore, P.more) : null
    );

    var servicesEl = h('div', { className: B + '__services' },
      h('span', { className: B + '__services-title' }, 'Servicios'),
      h('ul', { className: B + '__service-list' }, (services.length ? services : [
        { label: noProtection ? 'Sin Protección' : 'SOS Protección', active: !noProtection, icon: 'shield' },
        { label: noProtection ? 'Sin Rastreo' : 'Rastreo', active: !noProtection, icon: 'pin' }
      ]).map(function (s, i) {
        return h('li', { key: i, className: cx(B + '__service', s.active === false && B + '__service--off') },
          h('span', { className: B + '__service-icon' }, typeof s.icon === 'string' ? ico(P[s.icon] || P.shield, 14) : (s.icon || ico(P.shield, 14))),
          s.label);
      }))
    );

    if (mobile) {
      return h('article', Object.assign({ className: cx(B, B + '--mobile', props.className) }, rest),
        h('div', { className: B + '__head' }, headerLeft, iconBtn('secondary', 'Más opciones', props.onMore, P.more)),
        h('div', { className: B + '__head-center' }, headerRight),
        h('hr', { className: B + '__div' }),
        h('div', { className: B + '__content' }, carrierEl, trackingEl, destEl, etaEl,
          h('div', { className: B + '__price-row' }, priceEl,
            canDownload ? (Btn ? h(Btn, { type: 'primary', size: 'sm', leftIcon: ico(P.download), onClick: props.onDownload }, 'Descargar guía') : null) : null)),
        servicesEl);
    }
    return h('article', Object.assign({ className: cx(B, props.className) }, rest),
      h('div', { className: B + '__head' }, headerLeft, headerRight),
      h('hr', { className: B + '__div' }),
      h('div', { className: B + '__content' }, carrierEl, trackingEl, destEl, etaEl, priceEl, actions),
      servicesEl);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardHistorialEnvios = CardHistorialEnvios;
})();

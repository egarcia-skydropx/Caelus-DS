(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    warn: 'M12 9v3.75M2.7 16.13c-.87 1.5.22 3.37 1.95 3.37h14.7c1.73 0 2.82-1.87 1.95-3.37L13.95 3.38c-.87-1.5-3.03-1.5-3.9 0L2.7 16.13zM12 15.75h.01',
    hand: 'M7 11l3-3 3 2 4-4 4 4-8 8-2-2M3 11l4-4 3 1M7 15l2 2',
    cog: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-2.82 1.17V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-2.82-1.17l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 003.17 14H3a2 2 0 110-4h.09a1.65 1.65 0 001.17-2.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 0010 3.17V3a2 2 0 114 0v.09a1.65 1.65 0 002.82 1.17l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0020.83 10H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z',
    truck: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.38a1.13 1.13 0 01-1.13-1.13V6.38c0-.62.5-1.13 1.13-1.13h10.5v13.5m0 0h1.5m4.5 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.13c.62 0 1.13-.5 1.13-1.13v-4.12L18 8.25h-4.12',
    store: 'M3 21h18M4 21V10M20 21V10M3 10l1.5-6h15L21 10zM9 21v-6h6v6',
    globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18',
    printer: 'M6.72 13.83H5.25A2.25 2.25 0 013 11.58V9.75A2.25 2.25 0 015.25 7.5h13.5A2.25 2.25 0 0121 9.75v1.83a2.25 2.25 0 01-2.25 2.25h-1.47M6.75 7.5V3h10.5v4.5M6.75 13.5h10.5V21H6.75z',
    search: 'M21 21l-5.2-5.2m0 0A7.5 7.5 0 105.2 5.2a7.5 7.5 0 0010.6 10.6z'
  };
  var B = 'cl-card-paqueteria';
  var CONV = {
    'conectado': 'Convenio activado',
    'apagado': 'Convenio desactivado',
    'intermitencia': 'Convenio con intermitencia',
    'en-curso': 'Conectando convenio...',
    'error': 'Conexión con error'
  };
  var DEFAULT_FEATURES = [
    { label: 'Recolecciones', icon: 'truck' }, { label: 'Sucursal', icon: 'store' },
    { label: 'Envíos internacionales', icon: 'globe' }, { label: 'Impresora térmica', icon: 'printer' }
  ];
  var uid = 0;

  function Toggle(p) {
    var idRef = window.React.useRef(null);
    if (!idRef.current) idRef.current = 'cl-card-paqueteria-tg-' + (++uid);
    return h('label', { className: B + '__toggle', htmlFor: idRef.current },
      h('input', { id: idRef.current, type: 'checkbox', role: 'switch', className: B + '__toggle-input', checked: !!p.checked, onChange: p.onChange || function () {}, disabled: p.disabled }),
      h('span', { className: B + '__toggle-track', 'aria-hidden': true }),
      h('span', { className: B + '__toggle-label' }, p.label));
  }

  function CardPaqueteria(props) {
    var variant = props.variant || 'v1';
    var mobile = props.device === 'mobile';
    var rest = omit(props, ['variant', 'device', 'logo', 'name', 'showWarning', 'warningLabel', 'showConvenio', 'showDetalles', 'enabled', 'onToggle', 'toggleLabel', 'statusLabel', 'statusTheme', 'servicesActive', 'servicesTotal', 'convenioState', 'onConectarConvenio', 'onConfigurar', 'features', 'emptyTitle', 'emptyText', 'className']);
    var cls = cx(B, mobile && B + '--mobile', props.className);
    var Btn = C().Button, Badge = C().Badge;

    if (variant === 'busqueda') {
      return h('div', Object.assign({ className: cx(cls, B + '--empty'), role: 'status' }, rest),
        h('span', { className: B + '__empty-icon' }, ico(P.search, 32)),
        h('p', { className: B + '__empty-title' }, props.emptyTitle || 'No encontramos coincidencias'),
        h('p', { className: B + '__empty-text' }, props.emptyText || 'Intenta de nuevo con otra búsqueda.'));
    }

    var showConvenio = props.showConvenio !== false;
    var showDetalles = props.showDetalles !== false;
    var cState = props.convenioState || 'conectar';
    var features = props.features || DEFAULT_FEATURES;

    var right = variant === 'v2'
      ? (Badge ? h(Badge, { theme: props.statusTheme || 'green', size: 'small' }, props.statusLabel || 'Activada') : null)
      : h(Toggle, { checked: props.enabled !== false, onChange: props.onToggle, label: props.toggleLabel || 'Desactivar' });

    var convenio = !showConvenio ? null : (cState === 'conectar'
      ? (Btn ? h(Btn, { type: 'secondary', size: 'sm', leftIcon: ico(P.hand), onClick: props.onConectarConvenio }, 'Conectar convenio') : null)
      : h('span', { className: cx(B + '__conv', B + '__conv--' + cState) }, ico(P.hand, 16), CONV[cState] || cState));

    var config = !Btn ? null : (variant === 'v2'
      ? h(Btn, { type: 'secondary', size: 'sm', leftIcon: ico(P.cog), onClick: props.onConfigurar }, 'Configurar')
      : h(Btn, { type: 'secondary', size: 'sm', shape: 'square', icon: ico(P.cog), 'aria-label': 'Configurar', onClick: props.onConfigurar }));

    return h('article', Object.assign({ className: cls }, rest),
      h('div', { className: B + '__head' },
        h('div', { className: B + '__brand' },
          h('span', { className: B + '__logo' }, props.logo || null),
          h('span', { className: B + '__name' }, props.name),
          props.showWarning ? h('span', { className: B + '__warn', role: 'img', 'aria-label': props.warningLabel || 'Atención' }, ico(P.warn, 16)) : null),
        right),
      h('hr', { className: B + '__div' }),
      h('div', { className: B + '__details' },
        h('div', { className: B + '__row' },
          h('div', { className: B + '__group' },
            h('span', { className: B + '__group-title' }, 'Servicios'),
            h('span', { className: B + '__services' }, 'Activados ', h('strong', null, props.servicesActive != null ? props.servicesActive : 5), ' de ', h('strong', null, props.servicesTotal != null ? props.servicesTotal : 5))),
          h('div', { className: B + '__actions' }, convenio, config)),
        showDetalles ? h('div', { className: B + '__group' },
          h('span', { className: B + '__group-title' }, 'Características'),
          h('ul', { className: B + '__features' }, features.map(function (f, i) {
            return h('li', { key: i, className: B + '__feature' },
              h('span', { className: B + '__feature-icon' }, typeof f.icon === 'string' ? ico(P[f.icon] || P.truck, 14) : (f.icon || ico(P.truck, 14))),
              f.label);
          }))) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardPaqueteria = CardPaqueteria;
})();

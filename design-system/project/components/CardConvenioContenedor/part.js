(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    hand: 'M7 11l3-3 3 2 4-4 4 4-8 8-2-2M3 11l4-4 3 1M7 15l2 2',
    info: 'M11.25 11.25l.04-.02a.75.75 0 011.06.85l-.7 2.84a.75.75 0 001.06.85l.04-.02M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.01',
    ok: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ko: 'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    pencil: 'M16.86 4.49l2.65 2.65M18.2 3.15a1.88 1.88 0 112.65 2.65L6.75 19.9 3 21l1.1-3.75L18.2 3.15z',
    trash: 'M14.74 9l-.35 9m-4.78 0L9.26 9m9.97-3.21L18.16 19.67A2.25 2.25 0 0115.92 21.75H8.08a2.25 2.25 0 01-2.24-2.08L4.77 5.79m14.46 0a48 48 0 00-14.46 0M9 5.25V4.5A1.5 1.5 0 0110.5 3h3A1.5 1.5 0 0115 4.5v.75'
  };
  var B = 'cl-card-convenio-contenedor';
  var TITLE = {
    'conectado': 'Convenio activado',
    'desactivado': 'Convenio desactivado',
    'intermitencia': 'Convenio con intermitencia',
    'en-curso': 'Conectando convenio...',
    'error': 'Conexión con error'
  };
  var DEFAULT_SKILLS = [{ label: 'Cotización' }, { label: 'Creación de envíos' }, { label: 'Cancelación de envíos' }, { label: 'Recolección' }];
  var uid = 0;

  function Toggle(p) {
    var idRef = window.React.useRef(null);
    if (!idRef.current) idRef.current = B + '-tg-' + (++uid);
    return h('label', { className: B + '__toggle', htmlFor: idRef.current },
      h('input', { id: idRef.current, type: 'checkbox', role: 'switch', className: B + '__toggle-input', checked: !!p.checked, onChange: p.onChange || function () {} }),
      h('span', { className: B + '__toggle-track', 'aria-hidden': true }),
      h('span', null, p.label));
  }

  function CardConvenioContenedor(props) {
    var state = props.state || 'conectado';
    var Btn = C().Button;
    var rest = omit(props, ['state', 'alias', 'enabled', 'onToggle', 'message', 'skills', 'showSkills', 'showAddConvenio', 'onConnect', 'onEdit', 'onDelete', 'onCancel', 'onRetry', 'emptyText', 'className']);
    var cls = cx(B, B + '--' + state, props.className);

    if (state === 'empty') {
      return h('div', Object.assign({ className: cls }, rest),
        h('p', { className: B + '__empty' }, props.emptyText || 'Conecta y gestiona los convenios que tienes con las paqueterías para cotizar y crear envíos.'),
        props.showAddConvenio !== false && Btn ? h(Btn, { type: 'secondary', size: 'sm', leftIcon: ico(P.hand), onClick: props.onConnect }, 'Conectar convenio') : null);
    }

    var hasToggle = state === 'conectado' || state === 'intermitencia' || state === 'desactivado';
    var enabled = state === 'desactivado' ? false : props.enabled !== false;
    var title = h('div', { className: B + '__titlerow' },
      h('h3', { className: B + '__title' }, ico(P.hand, 24), TITLE[state] || state),
      hasToggle ? h(Toggle, { checked: enabled, onChange: props.onToggle, label: enabled ? 'Desactivar' : 'Activar' }) : null);

    if (state === 'desactivado') return h('div', Object.assign({ className: cls }, rest), title);

    var showSkills = props.showSkills !== false && (state === 'conectado' || state === 'intermitencia');
    var skills = props.skills || DEFAULT_SKILLS;
    var text = props.message != null ? props.message : (state === 'conectado' ? props.alias : null);

    var actions = state === 'error'
      ? [Btn ? h(Btn, { key: 'c', type: 'secondary', size: 'sm', onClick: props.onCancel }, 'Cancelar conexión') : null,
         Btn ? h(Btn, { key: 'r', type: 'primary', size: 'sm', onClick: props.onRetry }, 'Reintentar') : null]
      : [Btn ? h(Btn, { key: 'e', type: 'secondary', size: 'sm', leftIcon: ico(P.pencil), onClick: props.onEdit, disabled: state === 'en-curso' }, 'Editar') : null,
         Btn ? h(Btn, { key: 'd', type: 'secondary', size: 'sm', leftIcon: ico(P.trash), onClick: props.onDelete }, 'Eliminar') : null];

    return h('div', Object.assign({ className: cls }, rest),
      h('div', { className: B + '__head' }, title, text != null ? h('p', { className: B + '__text', role: state === 'error' ? 'alert' : null }, text) : null),
      showSkills ? h('div', { className: B + '__skills' },
        h('span', { className: B + '__skills-title' }, 'Habilidades', h('span', { className: B + '__skills-info', title: 'Acciones que puedes hacer con este convenio' }, ico(P.info, 15))),
        h('ul', { className: B + '__skill-list' }, skills.map(function (s, i) {
          var ok = s.ok !== false;
          return h('li', { key: i, className: cx(B + '__skill', !ok && B + '__skill--ko') }, ico(ok ? P.ok : P.ko, 20), s.label,
            ok ? null : h('span', { className: B + '__sr' }, ' (con fallas)'));
        }))) : null,
      h('div', { className: B + '__actions' }, actions));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardConvenioContenedor = CardConvenioContenedor;
})();

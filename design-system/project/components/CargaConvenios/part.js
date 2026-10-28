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
    ok: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ko: 'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  };
  var B = 'cl-carga-convenios';
  var COPY = {
    'conexion': {
      carga: ['Conectando convenio', 'Por favor espera mientras completamos la conexión.'],
      error: ['No pudimos conectar el convenio', 'Algunos datos parecen ser incorrectos. Revisa la información e intenta nuevamente.'],
      exito: ['Tu convenio está conectado', 'A partir de ahora se mostrará tu convenio en todas tus cotizaciones.'],
      bar: 'Conexión del convenio', errorStatus: 'Error al conectar', okStatus: 'Conexión finalizada'
    },
    'edicion': {
      carga: ['Editando convenio', 'Por favor espera mientras editamos los datos.'],
      error: ['No pudimos editar el convenio', 'Algunos datos parecen ser incorrectos. Revisa la información e intenta nuevamente.'],
      exito: ['Cambios guardados con éxito', 'Actualizamos los datos de tu convenio.'],
      bar: 'Edición del convenio', errorStatus: 'Error al editar', okStatus: 'Edición finalizada'
    }
  };

  function CargaConvenios(props) {
    var state = props.state || 'carga';
    var type = props.type === 'edicion' ? 'edicion' : 'conexion';
    var copy = COPY[type];
    var Btn = C().Button;
    var value = state === 'carga' ? Math.max(0, Math.min(100, props.value != null ? props.value : 25)) : 100;
    var rest = omit(props, ['state', 'type', 'value', 'title', 'description', 'progressLabel', 'statusText', 'onHelp', 'onRetry', 'onDone', 'className']);
    var title = props.title || copy[state][0];
    var desc = props.description || copy[state][1];
    var status = props.statusText || (state === 'carga' ? null : state === 'error' ? copy.errorStatus : copy.okStatus);

    return h('div', Object.assign({ className: cx(B, B + '--' + state, props.className), role: state === 'error' ? 'alert' : 'status', 'aria-live': 'polite' }, rest),
      state === 'exito' ? h('span', { className: B + '__hero' }, ico(P.hand, 40)) : null,
      h('h3', { className: B + '__title' }, title),
      h('p', { className: B + '__desc' }, desc),
      h('div', { className: B + '__progress' },
        h('div', { className: B + '__bar-label' },
          h('span', null, props.progressLabel || copy.bar),
          state === 'carga' ? h('span', null, value + '%') : h('span', { className: B + '__bar-icon' }, ico(state === 'error' ? P.ko : P.ok, 18))),
        h('div', { className: B + '__track', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': value, 'aria-label': props.progressLabel || copy.bar },
          h('div', { className: B + '__fill', style: { width: value + '%' } })),
        status ? h('span', { className: B + '__status' }, status) : null),
      state === 'carga' ? null : h('div', { className: B + '__actions' },
        state === 'error' && Btn ? h(Btn, { type: 'tertiary', size: 'sm', onClick: props.onHelp }, 'Recibir ayuda') : null,
        Btn ? h(Btn, { type: 'primary', size: 'sm', onClick: state === 'error' ? props.onRetry : props.onDone }, state === 'error' ? 'Reintentar' : 'Entendido') : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CargaConvenios = CargaConvenios;
})();

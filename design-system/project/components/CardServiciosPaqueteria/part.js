(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function C() { return window.Caelus || {}; }
  function ico(d, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var WARN = 'M12 9v3.75M2.7 16.13c-.87 1.5.22 3.37 1.95 3.37h14.7c1.73 0 2.82-1.87 1.95-3.37L13.95 3.38c-.87-1.5-3.03-1.5-3.9 0L2.7 16.13zM12 15.75h.01';
  var B = 'cl-card-servicios-paqueteria';
  var uid = 0;
  function useId(prefix) { var r = window.React.useRef(null); if (!r.current) r.current = prefix + '-' + (++uid); return r.current; }

  function Toggle(p) {
    var id = useId(B + '-tg');
    return h('label', { className: B + '__toggle', htmlFor: id },
      h('input', { id: id, type: 'checkbox', role: 'switch', className: B + '__toggle-input', checked: !!p.checked, onChange: p.onChange || function () {} }),
      h('span', { className: B + '__toggle-track', 'aria-hidden': true }),
      h('span', null, p.label));
  }

  function Check(p) {
    var id = useId(B + '-cb');
    return h('div', { className: B + '__check' },
      h('input', { id: id, type: 'checkbox', className: B + '__check-input', checked: !!p.item.checked, disabled: p.item.disabled, onChange: function (e) { if (p.onChange) p.onChange(p.item, e.target.checked, e); }, 'aria-describedby': p.item.detail ? id + '-d' : null }),
      h('div', { className: B + '__check-text' },
        h('label', { htmlFor: id, className: B + '__check-label' }, p.item.label),
        p.item.detail ? h('span', { id: id + '-d', className: B + '__check-detail' }, p.item.detail) : null));
  }

  function CardServiciosPaqueteria(props) {
    var variant = props.variant || 'skydropx';
    var mobile = props.device === 'mobile';
    var Btn = C().Button, Alert = C().Alert;
    var rest = omit(props, ['variant', 'device', 'showAlerts', 'alertText', 'logo', 'name', 'enabled', 'onToggle', 'headText', 'title', 'description', 'groups', 'onServiceChange', 'saveDisabled', 'onSave', 'convenio', 'className']);
    var cls = cx(B, B + '--' + variant, mobile && B + '--mobile', props.className);
    var showAlerts = props.showAlerts !== false;

    if (variant === 'head-paqueteria') {
      return h('section', Object.assign({ className: cls }, rest),
        h('div', { className: B + '__head' },
          h('div', { className: B + '__brand' }, h('span', { className: B + '__logo' }, props.logo || null), h('span', { className: B + '__name' }, props.name)),
          h(Toggle, { checked: props.enabled !== false, onChange: props.onToggle, label: props.enabled === false ? 'Activar' : 'Desactivar' })),
        showAlerts ? h('p', { className: B + '__note' }, props.headText || 'Esta acción aplicará a todas tus cotizaciones, incluso si tienes un convenio.') : null);
    }

    if (variant === 'convenio') {
      var Conv = C().CardConvenioContenedor;
      return h('section', Object.assign({ className: cls }, rest), Conv ? h(Conv, props.convenio || {}) : null);
    }

    var groups = props.groups || [];
    return h('section', Object.assign({ className: cls }, rest),
      h('div', { className: B + '__intro' },
        h('h3', { className: B + '__title' }, props.title || 'Servicios'),
        h('p', { className: B + '__desc' }, props.description || 'Selecciona los servicios para cotizar tus envíos.')),
      h('div', { className: B + '__groups' }, groups.map(function (g, gi) {
        return h('fieldset', { key: gi, className: B + '__group' },
          h('legend', { className: B + '__group-title' }, g.title),
          (g.items || []).map(function (it, ii) { return h(Check, { key: it.id || ii, item: it, onChange: props.onServiceChange }); }));
      })),
      showAlerts ? (Alert
        ? h(Alert, { color: 'warning', icon: ico(WARN, 16) }, props.alertText || 'Los cambios que realices en los servicios de la paquetería, se verán reflejados en tu convenio.')
        : h('p', { className: B + '__note', role: 'status' }, props.alertText)) : null,
      h('div', { className: B + '__footer' },
        Btn ? h(Btn, { type: 'primary', size: 'base', disabled: props.saveDisabled, onClick: props.onSave }, 'Guardar') : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardServiciosPaqueteria = CardServiciosPaqueteria;
})();

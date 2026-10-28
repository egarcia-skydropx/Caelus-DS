(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }
  function shield() {
    return h('svg', { viewBox: '0 0 20 20', width: 20, height: 20, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M10 2.5l6 2.25v4.5c0 3.9-2.6 6.9-6 8.25-3.4-1.35-6-4.35-6-8.25v-4.5z', stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round' }),
      h('path', { d: 'M7.5 10l1.75 1.75L12.75 8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  var TITLES = { sos: 'SOS Protección', se: 'Protección SE', internacional: 'Protección' };

  function Link(p) {
    if (!p.href && !p.onClick) return h('span', { className: 'cl-protection__link' }, p.children);
    return h('a', { className: 'cl-protection__link', href: p.href || '#', onClick: p.onClick, target: p.href ? '_blank' : undefined, rel: p.href ? 'noreferrer' : undefined }, p.children);
  }

  function Protection(props) {
    var type = props.type || 'sos';
    var mode = props.mode || 'default';
    var title = props.title || TITLES[type];
    var switchId = useId('cl-protection-switch');
    var helperId = useId('cl-protection-helper');
    var amountId = useId('cl-protection-amount');
    var controlled = props.checked !== undefined;
    var st = React.useState(!!props.defaultChecked || mode === 'activada');
    var checked = mode === 'automatica' ? true : (controlled ? props.checked : st[0]);
    function toggle(e) {
      if (props.disabled) return;
      if (!controlled) st[1](!checked);
      if (props.onCheckedChange) props.onCheckedChange(!checked, e);
    }
    var policies = h(Link, { href: props.policiesHref, onClick: props.onPoliciesClick }, 'políticas de uso');
    var showAmount = checked && props.showDeclaredValue !== false;
    var rest = omit(props, ['type', 'mode', 'title', 'checked', 'defaultChecked', 'onCheckedChange', 'disabled',
      'declaredValue', 'defaultDeclaredValue', 'onDeclaredValueChange', 'currency', 'showDeclaredValue', 'policiesHref',
      'onPoliciesClick', 'settingsHref', 'onSettingsClick', 'label', 'className']);

    var control;
    if (mode === 'automatica') {
      control = h('div', { className: 'cl-protection__copy' },
        h('p', { className: 'cl-protection__label' }, props.label || 'Envío protegido'),
        h('p', { className: 'cl-protection__helper', id: helperId },
          title + ' se activa automáticamente. Si deseas cambiar esta preferencia, ve a ',
          h(Link, { href: props.settingsHref, onClick: props.onSettingsClick }, title), '. Aplican ', policies));
    } else {
      control = h('div', { className: 'cl-protection__toggle-row' },
        h('button', {
          id: switchId, type: 'button', role: 'switch', 'aria-checked': checked ? 'true' : 'false',
          'aria-describedby': helperId, disabled: props.disabled,
          className: 'cl-protection__switch', onClick: toggle
        }, h('span', { className: 'cl-protection__knob', 'aria-hidden': 'true' })),
        h('div', { className: 'cl-protection__copy' },
          h('label', { htmlFor: switchId, className: 'cl-protection__label' }, props.label || 'Protege ante robo, daño y más.'),
          h('p', { className: 'cl-protection__helper', id: helperId }, 'Al agregar la protección confirmo que conozco y acepto las ', policies)));
    }

    return h('section', Object.assign({ className: cx('cl-protection', 'cl-protection--' + type, props.className), 'aria-label': typeof title === 'string' ? title : undefined }, rest),
      h('div', { className: 'cl-protection__header' },
        h('h3', { className: 'cl-protection__title' }, title),
        h('span', { className: 'cl-protection__shield' }, shield())),
      h('div', { className: 'cl-protection__body' },
        control,
        showAmount ? h('div', { className: 'cl-protection__amount' },
          h('label', { htmlFor: amountId, className: 'cl-protection__amount-label' }, 'Valor declarado'),
          h('div', { className: 'cl-protection__amount-input' },
            h('span', { className: 'cl-protection__affix', 'aria-hidden': 'true' }, '$'),
            h('input', {
              id: amountId, type: 'text', inputMode: 'decimal',
              value: props.declaredValue, defaultValue: props.declaredValue === undefined ? props.defaultDeclaredValue : undefined,
              onChange: props.onDeclaredValueChange, 'aria-describedby': amountId + '-cur'
            }),
            h('span', { className: 'cl-protection__affix', id: amountId + '-cur' }, props.currency || 'MXN'))) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Protection = Protection;
})();

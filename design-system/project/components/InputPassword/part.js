(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }
  function Eye(open) {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M1.7 10.3a.9.9 0 010-.6C2.9 6.3 6.2 4 10 4s7.1 2.3 8.3 5.7a.9.9 0 010 .6C17.1 13.7 13.8 16 10 16s-7.1-2.3-8.3-5.7z', stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round' }),
      h('circle', { cx: 10, cy: 10, r: 2.5, stroke: 'currentColor', strokeWidth: 1.5 }),
      open ? null : h('path', { d: 'M3 3l14 14', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }
  function Mark(met) {
    return h('svg', { width: 20, height: 20, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      met
        ? h('path', { d: 'M4.5 10.5l3.5 3.5 7.5-8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })
        : h('path', { d: 'M5.5 5.5l9 9m0-9l-9 9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }

  // InputPassword — State from the Figma set "input-password" (❖ Forms). Uses the shared InputText field classes.
  function InputPassword(props) {
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var shown = React.useState(false);
    var auto = useUid('cl-input-password-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var reqId = inputId + '-req';
    var reqs = props.requirements || [];
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null, reqs.length ? reqId : null) || undefined;
    var rest = omit(props, ['label', 'helperText', 'state', 'requirements', 'requirementsTitle', 'showLabel', 'hideLabel', 'className', 'style', 'id', 'disabled', 'aria-describedby']);
    return h('div', { className: cx('cl-input-text', 'cl-input-password', isErr && 'cl-input-text--error', isDis && 'cl-input-text--disabled', props.className), style: props.style },
      props.label ? h('div', { className: 'cl-input-text__label-row' },
        h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label)) : null,
      h('div', { className: 'cl-input-text__control' },
        h('input', Object.assign({ placeholder: '••••••••••••', autoComplete: 'current-password' }, rest, {
          id: inputId,
          type: shown[0] ? 'text' : 'password',
          className: 'cl-input-text__native',
          disabled: isDis,
          'aria-invalid': isErr || undefined,
          'aria-describedby': describedBy
        })),
        h('button', {
          type: 'button',
          className: 'cl-input-password__toggle',
          disabled: isDis,
          'aria-pressed': shown[0],
          'aria-controls': inputId,
          'aria-label': shown[0] ? (props.hideLabel || 'Ocultar contraseña') : (props.showLabel || 'Mostrar contraseña'),
          onClick: function () { shown[1](!shown[0]); }
        }, Eye(!shown[0]))),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper' }, props.helperText) : null,
      reqs.length ? h('div', { id: reqId, className: 'cl-input-password__reqs', 'aria-live': 'polite' },
        h('p', { className: 'cl-input-password__reqs-title' }, props.requirementsTitle || 'Debe contener:'),
        h('ul', { className: 'cl-input-password__list' },
          reqs.map(function (r, i) {
            var known = r.met === true || r.met === false;
            return h('li', { key: i, className: cx('cl-input-password__req', known && (r.met ? 'cl-input-password__req--met' : 'cl-input-password__req--unmet')) },
              known ? h('span', { className: 'cl-input-password__mark' }, Mark(r.met)) : null,
              h('span', null, r.label),
              known ? h('span', { className: 'cl-input-password__sr' }, r.met ? ' (cumplido)' : ' (pendiente)') : null);
          }))) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputPassword = InputPassword;
})();

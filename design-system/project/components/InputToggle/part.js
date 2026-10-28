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

  // InputToggle — State × Disabled from the Figma set "base/input-toggle" (❖ Forms). Native checkbox with role="switch".
  function InputToggle(props) {
    var auto = useUid('cl-input-toggle-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'helperText', 'className', 'style', 'id', 'aria-describedby']);
    return h('div', { className: cx('cl-input-toggle', props.disabled && 'cl-input-toggle--disabled', props.className), style: props.style },
      h('span', { className: 'cl-input-toggle__control' },
        h('input', Object.assign({}, rest, {
          id: inputId,
          type: 'checkbox',
          role: 'switch',
          className: 'cl-input-toggle__input',
          'aria-label': props.label ? undefined : props['aria-label'],
          'aria-describedby': describedBy
        })),
        h('span', { className: 'cl-input-toggle__track', 'aria-hidden': true }, h('span', { className: 'cl-input-toggle__thumb' }))),
      props.label || props.helperText ? h('span', { className: 'cl-input-toggle__text' },
        props.label ? h('label', { className: 'cl-input-toggle__label', htmlFor: inputId }, props.label) : null,
        props.helperText ? h('span', { id: helperId, className: 'cl-input-toggle__helper' }, props.helperText) : null) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputToggle = InputToggle;
})();

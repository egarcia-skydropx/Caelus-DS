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

  // InputCheckbox — State (Default / Checked / Partial selection) × Disabled from the Figma set "base/input-checkbox" (❖ Forms).
  function InputCheckbox(props) {
    var auto = useUid('cl-input-checkbox-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var ref = React.useRef(null);
    var indeterminate = !!props.indeterminate;
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'helperText', 'indeterminate', 'className', 'style', 'id', 'aria-describedby']);
    return h('div', { className: cx('cl-input-checkbox', props.disabled && 'cl-input-checkbox--disabled', indeterminate && 'cl-input-checkbox--partial', props.className), style: props.style },
      h('span', { className: 'cl-input-checkbox__control' },
        h('span', { className: 'cl-input-checkbox__box' },
          h('input', Object.assign({}, rest, {
            ref: ref,
            id: inputId,
            type: 'checkbox',
            className: 'cl-input-checkbox__input',
            'aria-describedby': describedBy
          })),
          h('svg', { className: 'cl-input-checkbox__mark', width: 14, height: 14, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
            indeterminate
              ? h('path', { d: 'M3.5 8h9', strokeWidth: 1.75, strokeLinecap: 'round' })
              : h('path', { d: 'M3.5 8.5l3 3 6-7', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' })))),
      props.label || props.helperText ? h('span', { className: 'cl-input-checkbox__text' },
        props.label ? h('label', { className: 'cl-input-checkbox__label', htmlFor: inputId }, props.label) : null,
        props.helperText ? h('span', { id: helperId, className: 'cl-input-checkbox__helper' }, props.helperText) : null) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputCheckbox = InputCheckbox;
})();

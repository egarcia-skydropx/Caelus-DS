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
  function Glyph(plus) {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      h('path', { d: plus ? 'M10 4.5v11M4.5 10h11' : 'M4.5 10h11', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }
  function InfoGlyph(text) {
    return h('span', { className: 'cl-input-text__label-icon', role: 'img', 'aria-label': text, title: text },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 7.5, stroke: 'currentColor', strokeWidth: 1.5 }),
        h('path', { d: 'M10 9v4.5M10 6.5v.01', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' })));
  }

  // InputCounter — State × Size from the Figma set "input-counter" (❖ Forms). Native spinbutton with − / + buttons.
  function InputCounter(props) {
    var size = props.size === 'sm' ? 'sm' : 'base';
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var min = props.min != null ? Number(props.min) : null;
    var max = props.max != null ? Number(props.max) : null;
    var step = props.step != null ? Number(props.step) : 1;
    var controlled = props.value !== undefined && props.value !== null;
    var inner = React.useState(props.defaultValue != null ? Number(props.defaultValue) : (min != null ? min : 0));
    var value = controlled ? Number(props.value) : inner[0];
    var auto = useUid('cl-input-counter-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'labelInfo', 'helperText', 'size', 'state', 'value', 'defaultValue', 'min', 'max', 'step', 'onValueChange', 'decrementLabel', 'incrementLabel', 'className', 'style', 'id', 'disabled', 'aria-describedby', 'onChange']);

    function commit(n) {
      if (isNaN(n)) return;
      if (min != null) n = Math.max(min, n);
      if (max != null) n = Math.min(max, n);
      if (!controlled) inner[1](n);
      if (props.onValueChange) props.onValueChange(n);
    }
    function onKey(e) {
      if (e.key === 'ArrowUp') { e.preventDefault(); commit(value + step); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); commit(value - step); }
      else if (e.key === 'Home' && min != null) { e.preventDefault(); commit(min); }
      else if (e.key === 'End' && max != null) { e.preventDefault(); commit(max); }
      if (props.onKeyDown) props.onKeyDown(e);
    }

    return h('div', { className: cx('cl-input-text', 'cl-input-counter', isErr && 'cl-input-text--error', isErr && 'cl-input-counter--error', isDis && 'cl-input-counter--disabled', size === 'sm' && 'cl-input-counter--sm', props.className), style: props.style },
      props.label ? h('div', { className: 'cl-input-text__label-row' },
        h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label),
        props.labelInfo ? InfoGlyph(props.labelInfo) : null) : null,
      h('div', { className: 'cl-input-counter__group' },
        h('button', {
          type: 'button', className: 'cl-input-counter__btn cl-input-counter__btn--dec', tabIndex: -1,
          'aria-label': props.decrementLabel || 'Disminuir', 'aria-controls': inputId,
          disabled: isDis || (min != null && value <= min),
          onClick: function () { commit(value - step); }
        }, Glyph(false)),
        h('input', Object.assign({}, rest, {
          id: inputId,
          type: 'text',
          inputMode: 'numeric',
          role: 'spinbutton',
          className: 'cl-input-counter__native',
          value: String(value),
          disabled: isDis,
          'aria-valuenow': value,
          'aria-valuemin': min != null ? min : undefined,
          'aria-valuemax': max != null ? max : undefined,
          'aria-invalid': isErr || undefined,
          'aria-describedby': describedBy,
          onKeyDown: onKey,
          onChange: function (e) {
            var raw = e.target.value.replace(/[^0-9-]/g, '');
            commit(raw === '' || raw === '-' ? (min != null ? min : 0) : parseInt(raw, 10));
          }
        })),
        h('button', {
          type: 'button', className: 'cl-input-counter__btn cl-input-counter__btn--inc', tabIndex: -1,
          'aria-label': props.incrementLabel || 'Aumentar', 'aria-controls': inputId,
          disabled: isDis || (max != null && value >= max),
          onClick: function () { commit(value + step); }
        }, Glyph(true))),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputCounter = InputCounter;
})();

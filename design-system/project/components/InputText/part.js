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
  function InfoGlyph(text) {
    return h('span', { className: 'cl-input-text__label-icon', role: 'img', 'aria-label': text, title: text },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 7.5, stroke: 'currentColor', strokeWidth: 1.5 }),
        h('path', { d: 'M10 9v4.5M10 6.5v.01', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' })));
  }
  function CheckCircle() {
    return h('span', { className: 'cl-input-text__check', role: 'img', 'aria-label': 'Válido' },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 8, fill: 'currentColor' }),
        h('path', { d: 'M6.5 10.2l2.3 2.3 4.7-4.9', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', style: { stroke: 'var(--core-icon-invert-white)' } })));
  }

  // InputText — State × Size from the Figma set "input-text" (❖ Forms).
  // Also owns the shared field classes (label row, control box, helper) reused by the other inputs of this batch.
  function InputText(props) {
    var size = props.size === 'sm' ? 'sm' : 'base';
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var auto = useUid('cl-input-text-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'labelInfo', 'helperText', 'size', 'state', 'valid', 'leftIcon', 'rightIcon', 'className', 'style', 'id', 'disabled', 'aria-describedby']);
    return h('div', { className: cx('cl-input-text', isErr && 'cl-input-text--error', isDis && 'cl-input-text--disabled', props.className), style: props.style },
      props.label ? h('div', { className: 'cl-input-text__label-row' },
        h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label),
        props.labelInfo ? InfoGlyph(props.labelInfo) : null) : null,
      h('div', { className: cx('cl-input-text__control', size === 'sm' && 'cl-input-text__control--sm') },
        props.leftIcon ? h('span', { className: 'cl-input-text__icon', 'aria-hidden': true }, props.leftIcon) : null,
        h('input', Object.assign({ type: 'text' }, rest, {
          id: inputId,
          className: 'cl-input-text__native',
          disabled: isDis,
          'aria-invalid': isErr || undefined,
          'aria-describedby': describedBy
        })),
        props.valid && !isErr ? CheckCircle() : null,
        props.rightIcon ? h('span', { className: 'cl-input-text__icon', 'aria-hidden': true }, props.rightIcon) : null),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputText = InputText;
})();

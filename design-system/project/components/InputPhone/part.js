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
  function Chevron() {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M5.5 8l4.5 4.5L14.5 8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  function CheckCircle() {
    return h('span', { className: 'cl-input-text__check', role: 'img', 'aria-label': 'Válido' },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 8, fill: 'currentColor' }),
        h('path', { d: 'M6.5 10.2l2.3 2.3 4.7-4.9', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', style: { stroke: 'var(--core-icon-invert-white)' } })));
  }

  // InputPhone — State × Size from the Figma set "input-phone" (❖ Forms): country selector + number + optional action button.
  function InputPhone(props) {
    var size = props.size === 'sm' ? 'sm' : 'base';
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var auto = useUid('cl-input-phone-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var code = props.countryCode || '+52';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var rest = omit(props, ['label', 'helperText', 'size', 'state', 'valid', 'countryCode', 'flag', 'onCountryClick', 'countryLabel', 'actionLabel', 'onAction', 'className', 'style', 'id', 'disabled', 'aria-describedby']);
    var Btn = window.Caelus && window.Caelus.Button;
    return h('div', { className: cx('cl-input-phone', props.className), style: props.style },
      h('div', { className: cx('cl-input-text', isErr && 'cl-input-text--error', isDis && 'cl-input-text--disabled', isDis && 'cl-input-phone--disabled') },
        props.label ? h('div', { className: 'cl-input-text__label-row' },
          h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label)) : null,
        h('div', { className: 'cl-input-phone__group' },
          h('button', {
            type: 'button',
            className: cx('cl-input-phone__country', size === 'sm' && 'cl-input-phone__country--sm'),
            disabled: isDis,
            'aria-haspopup': 'listbox',
            'aria-label': props.countryLabel || ('Código de país ' + code + ', cambiar'),
            onClick: props.onCountryClick
          },
            props.flag ? h('span', { className: 'cl-input-phone__flag', 'aria-hidden': true }, props.flag) : null,
            h('span', { className: 'cl-input-phone__code' }, code),
            h('span', { className: 'cl-input-phone__chevron' }, Chevron())),
          h('div', { className: cx('cl-input-text__control', 'cl-input-phone__control', size === 'sm' && 'cl-input-text__control--sm') },
            h('input', Object.assign({ type: 'tel', inputMode: 'tel', autoComplete: 'tel-national', placeholder: '123-456-7890' }, rest, {
              id: inputId,
              className: 'cl-input-text__native',
              disabled: isDis,
              'aria-invalid': isErr || undefined,
              'aria-describedby': describedBy
            })),
            props.valid && !isErr ? CheckCircle() : null)),
        props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper cl-input-phone__helper' }, props.helperText) : null),
      props.actionLabel && Btn ? h(Btn, { type: 'primary', disabled: isDis, onClick: props.onAction, className: 'cl-input-phone__action' }, props.actionLabel) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputPhone = InputPhone;
})();

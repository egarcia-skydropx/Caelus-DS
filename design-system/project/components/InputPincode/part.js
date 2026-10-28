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

  // InputPincode — Estado from the Figma set "input-pincode" (❖ Forms): one box per digit, auto-advance and paste.
  function InputPincode(props) {
    var length = props.length || 6;
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var controlled = props.value != null;
    var inner = React.useState(props.defaultValue || '');
    var value = (controlled ? String(props.value) : inner[0]).slice(0, length);
    var refs = React.useRef([]);
    var auto = useUid('cl-input-pincode-');
    var baseId = props.id || auto;
    var labelId = baseId + '-label';
    var helperId = baseId + '-helper';
    var rest = omit(props, ['label', 'helperText', 'state', 'length', 'value', 'defaultValue', 'onValueChange', 'onComplete', 'placeholder', 'className', 'style', 'id', 'disabled']);

    function set(next, focusAt) {
      next = next.replace(/\D/g, '').slice(0, length);
      if (!controlled) inner[1](next);
      if (props.onValueChange) props.onValueChange(next);
      if (next.length === length && props.onComplete) props.onComplete(next);
      if (focusAt != null) {
        var el = refs.current[Math.max(0, Math.min(length - 1, focusAt))];
        if (el) el.focus();
      }
    }
    function onChange(i, e) {
      var digits = e.target.value.replace(/\D/g, '');
      if (!digits) return;
      // Typing over a filled box without selection: keep only the new digit.
      if (digits.length === 2 && value[i]) digits = digits[0] === value[i] ? digits[1] : digits[0];
      var next = (value.slice(0, i) + digits + value.slice(i + digits.length)).slice(0, length);
      set(next, i + digits.length);
    }
    function onKeyDown(i, e) {
      if (e.key === 'Backspace') {
        e.preventDefault();
        if (value[i]) set(value.slice(0, i) + value.slice(i + 1), i);
        else if (i > 0) set(value.slice(0, i - 1) + value.slice(i), i - 1);
      } else if (e.key === 'ArrowLeft' && i > 0) { e.preventDefault(); refs.current[i - 1].focus(); }
      else if (e.key === 'ArrowRight' && i < length - 1) { e.preventDefault(); refs.current[i + 1].focus(); }
    }
    function onPaste(i, e) {
      var text = (e.clipboardData && e.clipboardData.getData('text')) || '';
      var digits = text.replace(/\D/g, '');
      if (!digits) return;
      e.preventDefault();
      set((value.slice(0, i) + digits).slice(0, length), i + digits.length);
    }

    var boxes = [];
    for (var i = 0; i < length; i++) {
      boxes.push(h('input', Object.assign({}, rest, {
        key: i,
        ref: (function (idx) { return function (el) { refs.current[idx] = el; }; })(i),
        id: i === 0 ? baseId : baseId + '-' + i,
        className: 'cl-input-pincode__box',
        type: 'text',
        inputMode: 'numeric',
        autoComplete: i === 0 ? 'one-time-code' : 'off',
        maxLength: length,
        placeholder: props.placeholder == null ? '0' : props.placeholder,
        value: value[i] || '',
        disabled: isDis,
        'aria-label': 'Dígito ' + (i + 1) + ' de ' + length,
        'aria-invalid': isErr || undefined,
        'aria-describedby': props.helperText ? helperId : undefined,
        onChange: (function (idx) { return function (e) { onChange(idx, e); }; })(i),
        onKeyDown: (function (idx) { return function (e) { onKeyDown(idx, e); }; })(i),
        onPaste: (function (idx) { return function (e) { onPaste(idx, e); }; })(i),
        onFocus: function (e) { e.target.select(); }
      })));
    }

    return h('div', { className: cx('cl-input-text', 'cl-input-pincode', isErr && 'cl-input-text--error', isErr && 'cl-input-pincode--error', isDis && 'cl-input-pincode--disabled', props.className), style: props.style },
      props.label ? h('span', { id: labelId, className: 'cl-input-text__label' }, props.label) : null,
      h('div', { className: 'cl-input-pincode__boxes', role: 'group', 'aria-labelledby': props.label ? labelId : undefined }, boxes),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputPincode = InputPincode;
})();

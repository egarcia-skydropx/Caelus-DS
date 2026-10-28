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

  // InputBadge — State × Size from the Figma set "input-badge" (❖ Forms): multiple values shown as removable badges.
  function InputBadge(props) {
    var size = props.size === 'sm' ? 'sm' : 'base';
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var controlled = props.values != null;
    var inner = React.useState(props.defaultValues || []);
    var values = controlled ? props.values : inner[0];
    var draft = React.useState('');
    var auto = useUid('cl-input-badge-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var Badge = window.Caelus && window.Caelus.Badge;
    var rest = omit(props, ['label', 'helperText', 'size', 'state', 'values', 'defaultValues', 'onValuesChange', 'maxHeight', 'removeLabel', 'className', 'style', 'id', 'disabled', 'aria-describedby', 'onKeyDown', 'onChange', 'value']);

    function update(next) {
      if (!controlled) inner[1](next);
      if (props.onValuesChange) props.onValuesChange(next);
    }
    function add(text) {
      var t = text.trim();
      if (t && values.indexOf(t) === -1) update(values.concat([t]));
      draft[1]('');
    }
    function removeAt(i) { update(values.filter(function (_, j) { return j !== i; })); }
    function onKeyDown(e) {
      if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); add(draft[0]); }
      else if (e.key === 'Backspace' && !draft[0] && values.length) removeAt(values.length - 1);
      if (props.onKeyDown) props.onKeyDown(e);
    }

    return h('div', { className: cx('cl-input-text', 'cl-input-badge', isErr && 'cl-input-text--error', isDis && 'cl-input-text--disabled', props.className), style: props.style },
      props.label ? h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label) : null,
      h('div', { className: cx('cl-input-text__control', 'cl-input-badge__control', size === 'sm' && 'cl-input-text__control--sm', values.length && 'cl-input-badge__control--filled') },
        h('div', { className: 'cl-input-badge__list', style: { maxHeight: props.maxHeight || 112 } },
          values.map(function (v, i) {
            var label = (props.removeLabel || 'Quitar') + ' ' + v;
            return Badge
              ? h(Badge, { key: v + i, theme: 'primary', size: 'small', onRemove: isDis ? undefined : function () { removeAt(i); }, removeLabel: label }, v)
              : h('span', { key: v + i }, v);
          }),
          h('input', Object.assign({ type: 'text' }, rest, {
            id: inputId,
            className: 'cl-input-text__native cl-input-badge__native',
            value: draft[0],
            disabled: isDis,
            placeholder: values.length ? '' : props.placeholder,
            'aria-invalid': isErr || undefined,
            'aria-describedby': describedBy,
            onChange: function (e) { draft[1](e.target.value); },
            onKeyDown: onKeyDown,
            onBlur: function (e) { if (draft[0]) add(draft[0]); if (props.onBlur) props.onBlur(e); }
          })))),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper cl-input-badge__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputBadge = InputBadge;
})();

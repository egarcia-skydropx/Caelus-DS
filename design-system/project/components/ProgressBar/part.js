(function () {
  var h = window.React.createElement;

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

  // ProgressBar — Color × Value from the Figma set "progress-bars"; "progress-bar-animation" = indeterminate.
  function ProgressBar(props) {
    var color = props.color || 'primary';
    var ind = !!props.indeterminate;
    var max = props.max != null ? props.max : 100;
    var value = Math.max(0, Math.min(max, props.value != null ? props.value : 0));
    var pct = max > 0 ? (value / max) * 100 : 0;
    var hasLabel = !ind && (props.leftLabel != null || props.rightLabel != null);
    var rest = omit(props, ['color', 'value', 'max', 'indeterminate', 'leftLabel', 'rightLabel', 'label', 'className']);
    var aria = {
      role: 'progressbar',
      'aria-label': props.label || rest['aria-label'] || (rest['aria-labelledby'] ? undefined : 'Progreso'),
      'aria-valuemin': ind ? undefined : 0,
      'aria-valuemax': ind ? undefined : max,
      'aria-valuenow': ind ? undefined : value,
      'aria-busy': ind ? true : undefined
    };
    return h('div', Object.assign({}, rest, { className: cx('cl-progress-bar', 'cl-progress-bar--' + color, ind && 'cl-progress-bar--indeterminate', props.className) }),
      hasLabel ? h('div', { className: 'cl-progress-bar__labels', 'aria-hidden': true },
        h('span', null, props.leftLabel),
        h('span', null, props.rightLabel)) : null,
      h('div', Object.assign({ className: 'cl-progress-bar__track' }, aria),
        h('div', { className: 'cl-progress-bar__fill', style: ind ? undefined : { width: pct + '%' } })));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ProgressBar = ProgressBar;
})();

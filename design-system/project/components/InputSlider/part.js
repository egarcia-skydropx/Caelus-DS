(function () {
  var React = window.React;
  var h = React.createElement;

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
  function Speaker(on) {
    return h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      h('path', { d: 'M4 9.5h3l4.5-4v13L7 14.5H4z', fill: 'currentColor' }),
      on ? h('path', { d: 'M15 9a4 4 0 010 6M17.5 6.5a7.5 7.5 0 010 11' }) : h('path', { d: 'M15.5 10l4 4m0-4l-4 4' }));
  }

  // InputSlider — Type × Tooltip from the Figma set "input-slider" (❖ Forms): value, range (two thumbs), volume, with data.
  function InputSlider(props) {
    var type = props.type || 'value';
    var isRange = type === 'range';
    var min = props.min != null ? Number(props.min) : 0;
    var max = props.max != null ? Number(props.max) : 100;
    var step = props.step != null ? Number(props.step) : 1;
    var controlled = props.value != null;
    var initial = props.defaultValue != null ? props.defaultValue : (isRange ? [min, max] : min);
    var inner = React.useState(initial);
    var value = controlled ? props.value : inner[0];
    var a = isRange ? Number(value[0]) : min;
    var b = isRange ? Number(value[1]) : Number(value);
    var span = max - min || 1;
    var fmt = props.formatValue || function (v) { return String(v); };
    var rest = omit(props, ['type', 'min', 'max', 'step', 'value', 'defaultValue', 'onValueChange', 'tooltip', 'formatValue', 'marks', 'minLabel', 'maxLabel', 'className', 'style', 'disabled', 'aria-label', 'onChange']);

    function emit(next) {
      if (!controlled) inner[1](next);
      if (props.onValueChange) props.onValueChange(next);
    }
    function input(v, onCh, label, extraClass) {
      return h('input', Object.assign({}, rest, {
        type: 'range', min: min, max: max, step: step, value: v,
        disabled: props.disabled,
        className: cx('cl-input-slider__native', extraClass),
        'aria-label': label,
        'aria-valuetext': fmt(v),
        onChange: function (e) { onCh(Number(e.target.value)); }
      }));
    }

    var vars = { '--cl-slider-a': (a - min) / span, '--cl-slider-b': (b - min) / span };
    var rail = h('div', { className: 'cl-input-slider__rail', style: vars },
      h('div', { className: 'cl-input-slider__track' }, h('div', { className: 'cl-input-slider__fill' })),
      isRange
        ? [
          h(React.Fragment, { key: 'lo' }, input(a, function (n) { emit([Math.min(n, b), b]); }, props.minLabel || 'Valor mínimo', 'cl-input-slider__native--lo')),
          h(React.Fragment, { key: 'hi' }, input(b, function (n) { emit([a, Math.max(n, a)]); }, props.maxLabel || 'Valor máximo', 'cl-input-slider__native--hi'))
        ]
        : input(b, emit, props['aria-label'] || 'Valor'),
      props.tooltip && !isRange ? h('span', { className: 'cl-input-slider__tooltip', 'aria-hidden': true }, fmt(b)) : null);

    var marks = type === 'with-data' ? (props.marks || [min, Math.round(min + span / 3), Math.round(min + 2 * span / 3), max]) : null;

    return h('div', { className: cx('cl-input-slider', 'cl-input-slider--' + type, props.tooltip && 'cl-input-slider--tooltip', props.disabled && 'cl-input-slider--disabled', props.className), style: props.style },
      type === 'volume'
        ? h('div', { className: 'cl-input-slider__volume' }, h('span', { className: 'cl-input-slider__icon' }, Speaker(false)), rail, h('span', { className: 'cl-input-slider__icon' }, Speaker(true)))
        : rail,
      marks ? h('div', { className: 'cl-input-slider__marks', 'aria-hidden': true }, marks.map(function (m, i) { return h('span', { key: i }, fmt(m)); })) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputSlider = InputSlider;
})();

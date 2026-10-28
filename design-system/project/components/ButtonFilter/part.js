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
  function Funnel() {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M2.5 3.5h13l-5 6v4.5l-3 1.5v-6l-5-6z', stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round' }));
  }

  // ButtonFilter — State × Forma from the Figma set "button-filter".
  function ButtonFilter(props) {
    var shape = props.shape || 'button';
    var iconOnly = shape !== 'button';
    var rest = omit(props, ['shape', 'active', 'icon', 'children', 'className']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      'aria-pressed': props.active ? true : rest['aria-pressed'],
      className: cx('cl-button-filter', 'cl-button-filter--' + shape, props.active && 'cl-button-filter--active', props.className)
    }),
      h('span', { className: 'cl-button-filter__icon', 'aria-hidden': true }, props.icon || Funnel()),
      iconOnly ? null : h('span', null, props.children == null ? 'Filtros' : props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonFilter = ButtonFilter;
})();

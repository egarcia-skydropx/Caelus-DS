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

  // Tooltip — Position × Con título from the Figma set "tooltip". Rendered statically.
  function Tooltip(props) {
    var position = props.position || 'top';
    var rest = omit(props, ['position', 'title', 'children', 'className']);
    var hasTitle = props.title != null;
    return h('div', Object.assign({ role: 'tooltip' }, rest, {
      className: cx('cl-tooltip', 'cl-tooltip--' + position, hasTitle && 'cl-tooltip--titled', props.className)
    }),
      h('div', { className: 'cl-tooltip__bubble' },
        hasTitle ? h('p', { className: 'cl-tooltip__title' }, props.title) : null,
        h('div', { className: 'cl-tooltip__content' }, props.children)),
      h('span', { className: 'cl-tooltip__arrow', 'aria-hidden': true }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Tooltip = Tooltip;
})();

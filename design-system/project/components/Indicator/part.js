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
  function Check() {
    return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M3.5 8.5l3 3 6-7', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  // Indicator — Type from the Figma set "indicators" (dot = ".idicator-color").
  function Indicator(props) {
    var type = props.type || 'dot';
    var color = props.color || 'blue';
    var rest = omit(props, ['type', 'color', 'count', 'icon', 'children', 'className']);
    var cls = cx('cl-indicator', 'cl-indicator--' + type, props.className);
    if (type === 'dot') {
      return h('span', Object.assign({}, rest, { className: cx(cls, 'cl-indicator--' + color) }),
        h('span', { className: 'cl-indicator__dot', 'aria-hidden': true }),
        props.children != null ? h('span', { className: 'cl-indicator__text' }, props.children) : null);
    }
    if (type === 'counter' || type === 'alert') {
      return h('span', Object.assign({}, rest, { className: cls }), props.count != null ? props.count : props.children);
    }
    if (type === 'icon') {
      return h('span', Object.assign({ role: rest['aria-label'] ? 'img' : undefined }, rest, { className: cls }),
        h('span', { className: 'cl-indicator__icon', 'aria-hidden': true }, props.icon || Check()));
    }
    if (type === 'stepper') {
      return h('span', Object.assign({ role: rest['aria-label'] ? 'img' : undefined }, rest, { className: cls }),
        h('span', { className: 'cl-indicator__inner', 'aria-hidden': true }));
    }
    // charge: pill with a small spinner and text
    return h('span', Object.assign({ role: 'status' }, rest, { className: cls }),
      h('span', { className: 'cl-indicator__spinner', 'aria-hidden': true }),
      h('span', null, props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Indicator = Indicator;
})();

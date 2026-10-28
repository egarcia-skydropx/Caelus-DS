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

  // IndicatorBadge — Color from the Figma set "indicators-badge" (dot = ".idicator-color").
  function IndicatorBadge(props) {
    var color = props.color || 'gray';
    var rest = omit(props, ['color', 'children', 'className']);
    return h('span', Object.assign({}, rest, { className: cx('cl-indicator-badge', 'cl-indicator-badge--' + color, props.className) }),
      h('span', { className: 'cl-indicator-badge__dot', 'aria-hidden': true }),
      h('span', null, props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.IndicatorBadge = IndicatorBadge;
})();

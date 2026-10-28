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
    return h('svg', { viewBox: '0 0 20 20', fill: 'none' },
      h('path', { d: 'M4.5 10.5l3.5 3.5 7.5-8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  // IconBackground — Color × Forma × Size from the Figma set "icon-background".
  function IconBackground(props) {
    var color = props.color || 'green';
    var shape = props.shape || 'circle';
    var size = props.size || 'sm';
    var rest = omit(props, ['color', 'shape', 'size', 'icon', 'children', 'className']);
    var labelled = rest['aria-label'] || rest['aria-labelledby'];
    return h('span', Object.assign({ role: labelled ? 'img' : undefined, 'aria-hidden': labelled ? undefined : true }, rest, {
      className: cx('cl-icon-background', 'cl-icon-background--' + color, 'cl-icon-background--' + shape, 'cl-icon-background--' + size, props.className)
    }), h('span', { className: 'cl-icon-background__icon' }, props.icon || props.children || Check()));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.IconBackground = IconBackground;
})();

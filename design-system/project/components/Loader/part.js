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
  // Ring in a 100×100 box: stroke 9 (inner radius 82%), radius 45.5, arc of 270°.
  var R = 45.5;
  var C = 2 * Math.PI * R;

  // Loader — Size × Dark mode × Track from the Figma set "loader".
  function Loader(props) {
    var size = props.size || 'default';
    var track = props.track !== false;
    var rest = omit(props, ['size', 'dark', 'track', 'label', 'className']);
    return h('span', Object.assign({ role: 'status' }, rest, {
      className: cx('cl-loader', 'cl-loader--' + size, props.dark && 'cl-loader--dark', props.className)
    }),
      h('svg', { className: 'cl-loader__svg', viewBox: '0 0 100 100', 'aria-hidden': true },
        track ? h('circle', { className: 'cl-loader__track', cx: 50, cy: 50, r: R, fill: 'none', strokeWidth: 9 }) : null,
        h('circle', {
          className: 'cl-loader__arc', cx: 50, cy: 50, r: R, fill: 'none', strokeWidth: 9, strokeLinecap: 'round',
          strokeDasharray: (C * 0.75).toFixed(2) + ' ' + C.toFixed(2)
        })),
      h('span', { className: 'cl-loader__sr' }, props.label || 'Cargando'));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Loader = Loader;
})();

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

  // ButtonIcon — State × Background from the Figma set "button-icon".
  function ButtonIcon(props) {
    var bg = props.background !== false;
    var rest = omit(props, ['background', 'active', 'icon', 'children', 'className']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      'aria-pressed': props.active != null ? !!props.active : rest['aria-pressed'],
      className: cx('cl-button-icon', bg ? 'cl-button-icon--bg' : 'cl-button-icon--plain', props.active && 'cl-button-icon--active', props.className)
    }), h('span', { className: 'cl-button-icon__icon', 'aria-hidden': true }, props.icon || props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonIcon = ButtonIcon;
})();

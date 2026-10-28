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

  // ButtonSocial — Size × Outline from the Figma set "button-social".
  function ButtonSocial(props) {
    var size = props.size || 'base';
    var outline = props.outline !== false;
    var rest = omit(props, ['size', 'outline', 'provider', 'icon', 'children', 'className']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      className: cx('cl-button-social', 'cl-button-social--' + size, outline ? 'cl-button-social--outline' : 'cl-button-social--filled',
        props.provider && 'cl-button-social--' + props.provider, props.className)
    }),
      props.icon ? h('span', { className: 'cl-button-social__icon', 'aria-hidden': true }, props.icon) : null,
      h('span', null, props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonSocial = ButtonSocial;
})();

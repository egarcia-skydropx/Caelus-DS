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

  // AvatarText — Size from the Figma set "Avatar & text".
  function AvatarText(props) {
    var size = props.size || 'regular';
    var Avatar = window.Caelus && window.Caelus.Avatar;
    var rest = omit(props, ['size', 'src', 'alt', 'initials', 'title', 'description', 'avatar', 'className']);
    var avatar = props.avatar || (Avatar ? h(Avatar, { size: size, src: props.src, alt: props.src ? '' : (props.alt || props.initials), initials: props.initials }) : null);
    return h('div', Object.assign({}, rest, { className: cx('cl-avatar-text', 'cl-avatar-text--' + size, props.className) }),
      avatar,
      h('div', { className: 'cl-avatar-text__text' },
        h('span', { className: 'cl-avatar-text__title' }, props.title),
        props.description != null ? h('span', { className: 'cl-avatar-text__desc' }, props.description) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.AvatarText = AvatarText;
})();

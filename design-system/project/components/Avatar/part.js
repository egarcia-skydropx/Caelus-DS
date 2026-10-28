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
  function XMark() {
    return h('svg', { width: 6, height: 6, viewBox: '0 0 6 6', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M1.2 1.2l3.6 3.6m0-3.6L1.2 4.8', stroke: 'currentColor', strokeWidth: 1.2, strokeLinecap: 'round' }));
  }

  // Renders one avatar. `p.root` holds extra props for the root span (key, id, aria-*, …).
  function renderOne(p) {
    var hasImg = !!p.src;
    var remove = !!p.onRemove;
    var showDot = p.dot && !remove;
    return h('span', Object.assign({}, p.root, {
      className: cx('cl-avatar', 'cl-avatar--' + p.shape, 'cl-avatar--' + p.size, !hasImg && 'cl-avatar--placeholder', p.extraClass)
    }),
      hasImg ? h('img', { className: 'cl-avatar__img', src: p.src, alt: p.alt || '' })
        : h('span', { className: 'cl-avatar__initials', role: 'img', 'aria-label': p.alt || p.initials }, p.initials),
      showDot ? h('span', { className: 'cl-avatar__dot', 'aria-hidden': true }) : null,
      showDot && p.dotLabel ? h('span', { className: 'cl-avatar__sr' }, p.dotLabel) : null,
      remove ? h('button', {
        type: 'button', className: 'cl-avatar__dot cl-avatar__remove', onClick: p.onRemove,
        'aria-label': p.removeLabel || 'Quitar'
      }, XMark()) : null);
  }

  // Avatar — Type × Size × Placeholder × Notification dot from the Figma set "Avatar".
  function Avatar(props) {
    var type = props.type || 'circle';
    var size = props.size || 'regular';
    var own = ['type', 'size', 'src', 'alt', 'initials', 'dot', 'dotLabel', 'onRemove', 'removeLabel', 'avatars', 'max', 'className'];
    var rest = omit(props, own);
    if (type === 'stacked') {
      var list = props.avatars || [];
      var max = props.max != null ? props.max : list.length;
      var shown = list.slice(0, max);
      var extra = list.length - shown.length;
      return h('span', Object.assign({ role: 'group' }, rest, { className: cx('cl-avatar-stack', 'cl-avatar-stack--' + size, props.className) }),
        shown.map(function (a, i) {
          return renderOne({ root: { key: a.key != null ? a.key : i }, src: a.src, alt: a.alt, initials: a.initials, shape: 'circle', size: size, extraClass: 'cl-avatar--stacked' });
        }),
        extra > 0 ? h('span', {
          key: 'more', className: 'cl-avatar cl-avatar--circle cl-avatar--' + size + ' cl-avatar--stacked cl-avatar--counter',
          role: 'img', 'aria-label': '+' + extra + ' más'
        }, h('span', { className: 'cl-avatar__initials', 'aria-hidden': true }, '+' + extra)) : null);
    }
    return renderOne({
      root: rest, shape: type, size: size, src: props.src, alt: props.alt, initials: props.initials,
      dot: props.dot, dotLabel: props.dotLabel, onRemove: props.onRemove, removeLabel: props.removeLabel, extraClass: props.className
    });
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Avatar = Avatar;
})();

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
  function svg(size, paths) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }
  var GLYPHS = {
    info: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M12 11v5', 'M12 8h.01'],
    warning: ['M12 4l9 16H3l9-16z', 'M12 10v4', 'M12 17h.01'],
    success: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M8.5 12.5l2.5 2.5 4.5-5'],
    danger: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M9.5 9.5l5 5m0-5l-5 5']
  };

  // Toast — Type × Show body × Show date × Show link × Mobile from the Figma set "toast".
  function Toast(props) {
    var type = props.type || 'info';
    var rest = omit(props, ['type', 'title', 'children', 'date', 'link', 'icon', 'onClose', 'closeLabel', 'mobile', 'className']);
    var link = props.link;
    return h('div', Object.assign({ role: 'status' }, rest, {
      className: cx('cl-toast', 'cl-toast--' + type, props.mobile && 'cl-toast--mobile', props.className)
    }),
      h('span', { className: 'cl-toast__bar', 'aria-hidden': true }),
      h('div', { className: 'cl-toast__content' },
        h('span', { className: 'cl-toast__icon', 'aria-hidden': true }, props.icon || svg(24, GLYPHS[type] || GLYPHS.info)),
        h('div', { className: 'cl-toast__text' },
          props.title != null ? h('p', { className: 'cl-toast__title' }, props.title) : null,
          props.children != null ? h('div', { className: 'cl-toast__body' }, props.children) : null,
          props.date != null ? h('p', { className: 'cl-toast__date' }, props.date) : null,
          link ? h('a', { className: 'cl-toast__link', href: link.href || '#', onClick: link.onClick }, link.label) : null)),
      props.onClose ? h('button', {
        type: 'button', className: 'cl-toast__close', onClick: props.onClose,
        'aria-label': props.closeLabel || 'Cerrar notificación'
      }, svg(18, ['M7 7l10 10m0-10L7 17'])) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Toast = Toast;
})();

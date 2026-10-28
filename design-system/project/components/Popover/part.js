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
  var counter = 0;
  function useStableId(given) {
    var ref = React.useRef(null);
    if (ref.current == null) ref.current = 'cl-popover-' + (++counter);
    return given || ref.current;
  }
  function svg(size, paths) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }

  // Popover — Position (12) × Show header/body/link/close from the Figma set "popover". Rendered statically.
  function Popover(props) {
    var position = props.position || 'top-center';
    var parts = position.split('-');
    var id = useStableId(props.id);
    var rest = omit(props, ['position', 'header', 'children', 'link', 'onClose', 'closeLabel', 'className', 'id']);
    var link = props.link;
    return h('div', Object.assign({ role: 'dialog', 'aria-labelledby': props.header != null ? id + '-title' : undefined }, rest, {
      id: id,
      className: cx('cl-popover', 'cl-popover--' + parts[0], 'cl-popover--align-' + (parts[1] || 'center'), props.className)
    }),
      (props.header != null || props.onClose) ? h('div', { className: 'cl-popover__header' },
        props.header != null ? h('p', { className: 'cl-popover__title', id: id + '-title' }, props.header) : null,
        props.onClose ? h('button', {
          type: 'button', className: 'cl-popover__close', onClick: props.onClose,
          'aria-label': props.closeLabel || 'Cerrar'
        }, svg(18, ['M7 7l10 10m0-10L7 17'])) : null) : null,
      props.children != null ? h('div', { className: 'cl-popover__body' }, props.children) : null,
      link ? h('a', { className: 'cl-popover__link', href: link.href || '#', onClick: link.onClick, target: link.external ? '_blank' : undefined, rel: link.external ? 'noopener noreferrer' : undefined },
        h('span', null, link.label),
        svg(14, ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5'])) : null,
      h('span', { className: 'cl-popover__arrow', 'aria-hidden': true }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Popover = Popover;
})();

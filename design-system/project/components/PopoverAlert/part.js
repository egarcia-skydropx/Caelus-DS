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
    warning: ['M12 4l9 16H3l9-16z', 'M12 10v4', 'M12 17h.01'],
    info: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M12 11v5', 'M12 8h.01'],
    danger: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M12 8v5', 'M12 16h.01'],
    primary: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M8.5 12.5l2.5 2.5 4.5-5']
  };

  // PopoverAlert — type (con/sin botón) × style × direction from the Figma set "popover-alert". Rendered statically.
  function PopoverAlert(props) {
    var severity = props.severity || 'warning';
    var direction = props.direction || 'right';
    var show = props.showPopover !== false;
    var action = props.action;
    var rest = omit(props, ['severity', 'direction', 'title', 'children', 'icon', 'action', 'onClose', 'closeLabel', 'showPopover', 'className']);
    var icon = h('span', { className: 'cl-popover-alert__icon', 'aria-hidden': true }, props.icon || svg(14, GLYPHS[severity] || GLYPHS.warning));
    var close = props.onClose ? h('button', {
      type: 'button', className: 'cl-popover-alert__close', onClick: props.onClose,
      'aria-label': props.closeLabel || 'Cerrar'
    }, svg(18, ['M7 7l10 10m0-10L7 17'])) : null;
    var body = props.children != null ? h('div', { className: 'cl-popover-alert__body' }, props.children) : null;

    var card = action
      ? h('div', { className: 'cl-popover-alert__card cl-popover-alert__card--action' },
          h('div', { className: 'cl-popover-alert__header' },
            icon,
            props.title != null ? h('p', { className: 'cl-popover-alert__title' }, props.title) : h('span', { className: 'cl-popover-alert__spacer' }),
            close),
          body,
          h('button', { type: 'button', className: 'cl-popover-alert__action', onClick: action.onClick },
            h('span', null, action.label),
            h('span', { className: 'cl-popover-alert__action-icon', 'aria-hidden': true }, action.icon || svg(16, ['M5 12h14', 'M13 6l6 6-6 6']))))
      : h('div', { className: 'cl-popover-alert__card cl-popover-alert__card--inline' },
          icon,
          h('div', { className: 'cl-popover-alert__text' },
            props.title != null ? h('p', { className: 'cl-popover-alert__title' }, props.title) : null,
            body),
          close);

    return h('div', Object.assign({}, rest, {
      className: cx('cl-popover-alert', 'cl-popover-alert--' + severity, 'cl-popover-alert--' + direction, props.className)
    }),
      h('span', { className: 'cl-popover-alert__dot', 'aria-hidden': true }),
      show ? h('div', { className: 'cl-popover-alert__popover', role: 'status' },
        h('span', { className: 'cl-popover-alert__arrow', 'aria-hidden': true }),
        card) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.PopoverAlert = PopoverAlert;
})();

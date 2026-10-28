(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }
  function xIcon() {
    return h('svg', { viewBox: '0 0 18 18', width: 18, height: 18, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M4.5 4.5l9 9M13.5 4.5l-9 9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }
  function btn(kind, action, key) {
    if (!action) return null;
    var Button = window.Caelus && window.Caelus.Button;
    var props = { key: key, type: kind, onClick: action.onClick, disabled: action.disabled };
    if (Button) return h(Button, props, action.label);
    return h('button', { key: key, type: 'button', onClick: action.onClick, disabled: action.disabled }, action.label);
  }

  var FOOTERS = { informativo: 'primary', confirmacion: 'primary', critico: 'secondary' };

  function Modal(props) {
    var type = props.type || 'informativo';
    var inline = !!props.inline;
    var titleId = useId('cl-modal-title');
    var descId = useId('cl-modal-desc');
    var dialogRef = React.useRef(null);
    var onClose = props.onClose;
    var footerKind = props.footerVariant || FOOTERS[type] || 'primary';
    var titleInHeader = type === 'informativo' && props.title != null && props.showTitle !== false;
    var hasCenteredText = type !== 'informativo';

    React.useEffect(function () {
      if (!inline && dialogRef.current) dialogRef.current.focus();
    }, [inline]);

    function onKeyDown(e) {
      if (e.key === 'Escape' && onClose) { e.stopPropagation(); onClose(e); }
      if (props.onKeyDown) props.onKeyDown(e);
    }

    var rest = omit(props, ['type', 'inline', 'title', 'showTitle', 'description', 'illustration', 'children',
      'onClose', 'closeLabel', 'primaryAction', 'secondaryAction', 'footer', 'footerVariant', 'width',
      'className', 'style', 'onKeyDown', 'separator', 'bodyClassName']);

    var header = h('div', { className: cx('cl-modal__header', titleInHeader && 'cl-modal__header--titled') },
      titleInHeader ? h('h2', { id: titleId, className: 'cl-modal__title' }, props.title) : h('span', { className: 'cl-modal__spacer' }),
      onClose ? h('button', { type: 'button', className: 'cl-modal__close', 'aria-label': props.closeLabel || 'Cerrar', onClick: onClose }, xIcon()) : null);

    var bodyText = null;
    if (hasCenteredText && (props.title != null || props.description != null)) {
      bodyText = h('div', { className: 'cl-modal__text' },
        props.title != null && props.showTitle !== false ? h('h2', { id: titleId, className: 'cl-modal__body-title' }, props.title) : null,
        props.description != null ? h('p', { id: descId, className: 'cl-modal__body-desc' }, props.description) : null);
    }

    var content = h('div', { className: cx('cl-modal__content', hasCenteredText && 'cl-modal__content--center', props.bodyClassName) },
      props.illustration ? h('div', { className: 'cl-modal__illustration' }, props.illustration) : null,
      bodyText,
      type === 'informativo' && props.description != null ? h('p', { id: descId, className: 'cl-modal__desc' }, props.description) : null,
      props.children);

    var footer = null;
    if (props.footer !== undefined) {
      footer = props.footer;
    } else if (props.primaryAction || props.secondaryAction) {
      var primaryKind = footerKind === 'secondary' ? 'alert' : (footerKind === 'ver-mas' ? 'tertiary' : 'primary');
      footer = h('div', { className: cx('cl-modal__footer', 'cl-modal__footer--' + footerKind) },
        btn('secondary', props.secondaryAction, 's'),
        btn(primaryKind, props.primaryAction, 'p'));
    }

    var showSeparator = props.separator != null ? props.separator : type === 'informativo';
    var style = Object.assign({}, props.style || {});
    if (props.width != null) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width;

    var dialog = h('div', Object.assign({
      role: type === 'critico' ? 'alertdialog' : 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': props.title != null && props.showTitle !== false ? titleId : undefined,
      'aria-describedby': props.description != null ? descId : undefined,
      tabIndex: -1,
      ref: dialogRef,
      onKeyDown: onKeyDown,
      className: cx('cl-modal', 'cl-modal--' + type, props.className),
      style: style
    }, rest),
      header,
      content,
      footer && showSeparator ? h('hr', { className: 'cl-modal__separator' }) : null,
      footer);

    return h('div', {
      className: cx('cl-modal-backdrop', inline && 'cl-modal-backdrop--inline'),
      onMouseDown: function (e) { if (e.target === e.currentTarget && onClose && !inline) onClose(e); }
    }, dialog);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Modal = Modal;
})();

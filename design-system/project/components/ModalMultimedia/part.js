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

  function ModalMultimedia(props) {
    var Modal = window.Caelus && window.Caelus.Modal;
    var rest = omit(props, ['media', 'caption', 'children', 'className']);
    var body = h('div', { className: 'cl-modal-multimedia__media' },
      props.media || h('div', { className: 'cl-modal-multimedia__placeholder', role: 'img', 'aria-label': 'Sin contenido multimedia' }),
      props.caption ? h('p', { className: 'cl-modal-multimedia__caption' }, props.caption) : null,
      props.children);
    var modalProps = Object.assign({
      type: 'informativo',
      width: 495,
      separator: false,
      className: cx('cl-modal-multimedia', props.className),
      bodyClassName: 'cl-modal-multimedia__content'
    }, rest);
    if (!Modal) return h('div', { role: 'dialog' }, body);
    return h(Modal, modalProps, body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalMultimedia = ModalMultimedia;
})();

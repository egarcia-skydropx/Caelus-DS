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
  function xIcon() {
    return h('svg', { viewBox: '0 0 18 18', width: 18, height: 18, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M4.5 4.5l9 9M13.5 4.5l-9 9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }

  var COPY = {
    referido: { title: '¡Tu referido activó su cuenta!', message: 'Estás cerca de ganar créditos para tus envíos.' },
    creditos: { title: '¡Ganaste créditos por referir!', message: 'Empieza a utilizarlos en tus próximos envíos.' },
    beneficio: { title: '¡Aprovecha tu beneficio de referido!', message: 'Recuerda hacer tu envío y recarga dentro del tiempo disponible.' }
  };

  function NotificationPushup(props) {
    var kind = props.kind || 'referido';
    var platform = props.platform || 'pro';
    var copy = COPY[kind] || COPY.referido;
    var emoji = props.icon !== undefined ? props.icon : (platform === 'se' ? '🥳' : '🎉');
    var rest = omit(props, ['kind', 'platform', 'title', 'message', 'icon', 'date', 'onClose', 'closeLabel', 'className', 'children']);
    return h('div', Object.assign({ role: 'status', className: cx('cl-notification-pushup', 'cl-notification-pushup--' + platform, props.className) }, rest),
      h('div', { className: 'cl-notification-pushup__content' },
        emoji ? h('span', { className: 'cl-notification-pushup__icon', 'aria-hidden': 'true' }, emoji) : null,
        h('div', { className: 'cl-notification-pushup__text' },
          h('p', { className: 'cl-notification-pushup__title' }, props.title || copy.title),
          h('p', { className: 'cl-notification-pushup__message' }, props.message || copy.message),
          props.date ? h('p', { className: 'cl-notification-pushup__date' }, props.date) : null,
          props.children)),
      props.onClose ? h('button', { type: 'button', className: 'cl-notification-pushup__close', 'aria-label': props.closeLabel || 'Cerrar notificación', onClick: props.onClose }, xIcon()) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.NotificationPushup = NotificationPushup;
})();

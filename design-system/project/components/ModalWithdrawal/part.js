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
  function arrow() {
    return h('svg', { viewBox: '0 0 18 18', width: 18, height: 18, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M3.5 9h11M10 4.5L14.5 9 10 13.5', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  var DEFAULT_OPTIONS = [
    { key: 'creditos', tone: 'primary', title: 'Créditos Skydropx', description: 'Convierte tu dinero en créditos para hacer envíos.',
      benefits: ['Sin comisiones.', 'Listo para usar de inmediato.', 'No tienen fecha de vencimiento.'], actionLabel: 'Convertir a créditos' },
    { key: 'cuenta', tone: 'teal', title: 'Cuenta bancaria', description: 'Recibe el dinero directamente en tu cuenta.',
      benefits: ['Opción de pago anticipado para tus envíos.', 'Algunos bancos podrían aplicar un costo por la transacción.', 'Transferencias seguras que se reflejan los jueves.'], actionLabel: 'Transferir' }
  ];

  function OptionCard(p) {
    var o = p.option;
    var tone = o.tone === 'teal' ? 'teal' : 'primary';
    var titleId = 'cl-modal-withdrawal-' + (o.key || p.index);
    var Button = window.Caelus && window.Caelus.Button;
    return h('section', { className: cx('cl-modal-withdrawal__card', 'cl-modal-withdrawal__card--' + tone), 'aria-labelledby': titleId },
      h('span', { className: 'cl-modal-withdrawal__band', 'aria-hidden': 'true' }),
      h('div', { className: 'cl-modal-withdrawal__card-body' },
        o.illustration ? h('div', { className: 'cl-modal-withdrawal__illustration' }, o.illustration) : null,
        h('div', { className: 'cl-modal-withdrawal__head' },
          h('h3', { id: titleId, className: 'cl-modal-withdrawal__card-title' }, o.title),
          o.description ? h('p', { className: 'cl-modal-withdrawal__card-desc' }, o.description) : null),
        o.benefits && o.benefits.length ? h('ul', { className: 'cl-modal-withdrawal__benefits' },
          o.benefits.map(function (b, i) { return h('li', { key: i }, b); })) : null),
      h('div', { className: 'cl-modal-withdrawal__action' },
        Button
          ? h(Button, { type: 'tertiary', rightIcon: arrow(), onClick: o.onSelect, disabled: o.disabled }, o.actionLabel)
          : h('button', { type: 'button', onClick: o.onSelect, disabled: o.disabled }, o.actionLabel)));
  }

  function ModalWithdrawal(props) {
    var Modal = window.Caelus && window.Caelus.Modal;
    var options = props.options || DEFAULT_OPTIONS;
    var rest = omit(props, ['options', 'intro', 'children', 'className']);
    var body = h('div', { className: 'cl-modal-withdrawal__body' },
      props.intro !== null ? h('p', { className: 'cl-modal-withdrawal__intro' }, props.intro || 'Selecciona cómo quieres recibir tu dinero.') : null,
      h('div', { className: 'cl-modal-withdrawal__options' },
        options.map(function (o, i) { return h(OptionCard, { key: o.key || i, option: o, index: i }); })),
      props.children);
    var modalProps = Object.assign({ type: 'informativo', title: 'Retirar saldo', width: 800, footer: null,
      className: cx('cl-modal-withdrawal', props.className) }, rest);
    if (!Modal) return h('div', { role: 'dialog' }, body);
    return h(Modal, modalProps, body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalWithdrawal = ModalWithdrawal;
})();

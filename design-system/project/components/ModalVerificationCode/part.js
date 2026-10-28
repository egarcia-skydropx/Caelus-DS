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

  var DEFAULTS = {
    code: { title: 'Para crear usuarios es necesario validar tu identidad', message: 'Validaremos con el código de verificación.\nHemos enviado el código a: ' },
    'code-sms': { title: 'Ingresa el código de seguridad', message: 'Se envió vía SMS al móvil ', caption: 'Por seguridad, nunca compartas este código.' }
  };

  function ModalVerificationCode(props) {
    var variant = props.variant || 'code';
    var d = DEFAULTS[variant] || DEFAULTS.code;
    var inputId = useId('cl-mvc-input');
    var captionId = useId('cl-mvc-caption');
    var errorId = useId('cl-mvc-error');
    var titleId = useId('cl-mvc-title');
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue || '');
    var value = controlled ? props.value : st[0];
    var maxLength = props.length || 4;
    var caption = props.caption !== undefined ? props.caption : d.caption;
    var invalid = !!props.error;

    function change(e) {
      var v = e.target.value.replace(/\D/g, '').slice(0, maxLength);
      if (!controlled) st[1](v);
      if (props.onChange) props.onChange(v, e);
    }
    function submit(e) {
      e.preventDefault();
      if (props.onSubmit && value.length === maxLength && !props.loading) props.onSubmit(value, e);
    }
    var described = [caption ? captionId : null, invalid ? errorId : null].filter(Boolean).join(' ') || undefined;
    var Button = window.Caelus && window.Caelus.Button;
    var disabled = value.length < maxLength || !!props.loading;
    var submitLabel = props.loading ? (props.loadingLabel || 'Verificando…') : (props.submitLabel || 'Verificar');

    var rest = omit(props, ['variant', 'title', 'message', 'destination', 'label', 'placeholder', 'caption', 'value',
      'defaultValue', 'onChange', 'onSubmit', 'submitLabel', 'loading', 'loadingLabel', 'onResend', 'resendLabel',
      'onHelp', 'helpLabel', 'error', 'length', 'className']);

    return h('form', Object.assign({ className: cx('cl-modal-verification-code', props.className), onSubmit: submit, noValidate: true, 'aria-labelledby': titleId }, rest),
      h('h2', { id: titleId, className: 'cl-modal-verification-code__title' }, props.title || d.title),
      h('p', { className: 'cl-modal-verification-code__message' },
        props.message !== undefined ? props.message : d.message,
        props.destination ? h('span', { className: 'cl-modal-verification-code__destination' }, props.destination) : null),
      h('div', { className: 'cl-modal-verification-code__field' },
        h('label', { htmlFor: inputId, className: 'cl-modal-verification-code__label' }, props.label || 'Tu código'),
        h('input', {
          id: inputId,
          className: 'cl-modal-verification-code__input',
          type: 'text',
          inputMode: 'numeric',
          autoComplete: 'one-time-code',
          pattern: '[0-9]*',
          maxLength: maxLength,
          placeholder: props.placeholder || Array(maxLength).fill('0').join(' - '),
          value: value,
          onChange: change,
          'aria-invalid': invalid ? 'true' : undefined,
          'aria-describedby': described
        }),
        invalid ? h('p', { id: errorId, className: 'cl-modal-verification-code__error', role: 'alert' }, props.error) : null,
        caption ? h('p', { id: captionId, className: 'cl-modal-verification-code__caption' }, caption) : null),
      Button
        ? h(Button, { type: 'primary', htmlType: 'submit', disabled: disabled, 'aria-busy': props.loading ? 'true' : undefined, className: 'cl-modal-verification-code__submit' }, submitLabel)
        : h('button', { type: 'submit', disabled: disabled, className: 'cl-modal-verification-code__submit' }, submitLabel),
      h('p', { className: 'cl-modal-verification-code__resend' },
        '¿No recibiste tu código? ',
        h('button', { type: 'button', className: 'cl-modal-verification-code__link', onClick: props.onResend }, props.resendLabel || 'Reenviar código')),
      props.onHelp !== null ? h('button', { type: 'button', className: 'cl-modal-verification-code__help', onClick: props.onHelp }, props.helpLabel || 'Necesito ayuda') : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalVerificationCode = ModalVerificationCode;
})();

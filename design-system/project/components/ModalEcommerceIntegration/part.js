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

  var DEFAULT_FIELDS = {
    tienda: [{ name: 'url', label: 'URL de la tienda', placeholder: 'Url de la tienda', type: 'url' }],
    api: [
      { name: 'apiKey', label: 'Clave del cliente (API Key)', placeholder: 'ck_…' },
      { name: 'apiSecret', label: 'Clave secreta del cliente (API Secret Key)', placeholder: '••••••••', type: 'password' }
    ]
  };

  function Field(p) {
    var id = useId('cl-mei-field');
    var errId = id + '-error';
    return h('div', { className: 'cl-modal-ecommerce-integration__field' },
      h('label', { htmlFor: id, className: 'cl-modal-ecommerce-integration__label' }, p.field.label),
      h('input', {
        id: id,
        name: p.field.name,
        type: p.field.type || 'text',
        className: 'cl-modal-ecommerce-integration__input',
        placeholder: p.field.placeholder,
        value: p.field.value,
        defaultValue: p.field.defaultValue,
        onChange: p.field.onChange,
        autoComplete: 'off',
        'aria-invalid': p.field.error ? 'true' : undefined,
        'aria-describedby': p.field.error ? errId : undefined
      }),
      p.field.error ? h('p', { id: errId, className: 'cl-modal-ecommerce-integration__error' }, p.field.error) : null);
  }

  function ModalEcommerceIntegration(props) {
    var type = props.type || 'tienda';
    var Modal = window.Caelus && window.Caelus.Modal;
    var fields = props.fields || DEFAULT_FIELDS[type] || [];
    var primary = props.primaryAction !== undefined ? props.primaryAction : (type === 'tienda' ? { label: 'Conectar' } : null);
    var rest = omit(props, ['type', 'platformName', 'platformCategory', 'logo', 'instructions', 'hint', 'fields',
      'docsHref', 'docsLabel', 'primaryAction', 'secondaryAction', 'children', 'className']);

    var body = h('div', { className: 'cl-modal-ecommerce-integration__body' },
      h('div', { className: 'cl-modal-ecommerce-integration__brand' },
        props.logo ? h('span', { className: 'cl-modal-ecommerce-integration__logo', 'aria-hidden': 'true' }, props.logo) : null,
        h('div', { className: 'cl-modal-ecommerce-integration__brand-text' },
          h('p', { className: 'cl-modal-ecommerce-integration__name' }, props.platformName || (type === 'api' ? 'API Skydropx' : 'Shopify')),
          h('p', { className: 'cl-modal-ecommerce-integration__category' }, props.platformCategory || (type === 'api' ? 'Aplicación' : 'Ecommerce')))),
      props.instructions !== null ? h('p', { className: 'cl-modal-ecommerce-integration__instructions' },
        props.instructions || (type === 'tienda' ? 'Completa la URL de la cuenta administrativa de tu tienda' : 'Ingresa las credenciales de tu aplicación.')) : null,
      props.hint ? h('div', { className: 'cl-modal-ecommerce-integration__hint' }, props.hint) : null,
      fields.map(function (f, i) { return h(Field, { key: f.name || i, field: f }); }),
      props.children,
      props.docsHref ? h('p', { className: 'cl-modal-ecommerce-integration__docs' }, 'Consultar ',
        h('a', { href: props.docsHref, target: '_blank', rel: 'noreferrer' }, props.docsLabel || 'documentación')) : null);

    var modalProps = Object.assign({
      type: 'informativo',
      className: cx('cl-modal-ecommerce-integration', 'cl-modal-ecommerce-integration--' + type, props.className),
      primaryAction: primary || undefined,
      secondaryAction: props.secondaryAction,
      separator: true
    }, rest);
    if (!primary && !props.secondaryAction) modalProps.footer = null;

    if (!Modal) return h('div', { role: 'dialog', 'aria-label': props.title }, body);
    return h(Modal, modalProps, body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalEcommerceIntegration = ModalEcommerceIntegration;
})();

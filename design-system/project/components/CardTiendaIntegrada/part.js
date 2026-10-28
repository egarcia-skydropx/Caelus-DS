(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  var B = 'cl-card-tienda-integrada';
  var STATUS = {
    'activada': { theme: 'green', label: 'Activada' },
    'desactivada': { theme: 'gray', label: 'Desactivada' },
    'actualizar-permisos': { theme: 'yellow', label: 'Actualizar permisos' }
  };
  var NAMES = { shopify: 'Shopify', woocommerce: 'WooCommerce', 'api-key': 'API Skydropx' };

  function CardTiendaIntegrada(props) {
    var Badge = (window.Caelus || {}).Badge;
    var st = STATUS[props.status] || STATUS.activada;
    var mobile = props.version === 'mobile';
    var rest = omit(props, ['ecommerce', 'status', 'version', 'logo', 'platform', 'storeName', 'url', 'href', 'connectedAt', 'onMenu', 'menuLabel', 'className']);
    var platform = props.platform || NAMES[props.ecommerce || 'shopify'];
    var isKey = props.ecommerce === 'api-key';
    var urlEl = props.href && !isKey
      ? h('a', { className: B + '__url', href: props.href }, props.url)
      : h('span', { className: cx(B + '__url', isKey && B + '__url--key') }, props.url);

    return h('article', Object.assign({ className: cx(B, mobile && B + '--mobile', props.className) }, rest),
      h('div', { className: B + '__main' },
        h('div', { className: B + '__store' },
          h('span', { className: B + '__logo' }, props.logo || null),
          h('span', { className: B + '__stack' }, h('span', { className: B + '__platform' }, platform), h('span', null, props.storeName))),
        h('div', { className: B + '__stack' }, urlEl, h('span', null, props.connectedAt)),
        h('div', { className: B + '__status' }, Badge ? h(Badge, { theme: st.theme, size: 'small' }, st.label) : st.label)),
      h('button', { type: 'button', className: B + '__menu', 'aria-label': props.menuLabel || 'Opciones de ' + platform, 'aria-haspopup': 'menu', onClick: props.onMenu },
        h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round', 'aria-hidden': true }, h('path', { d: 'M6.75 12h.01M12 12h.01M17.25 12h.01' }))));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardTiendaIntegrada = CardTiendaIntegrada;
})();

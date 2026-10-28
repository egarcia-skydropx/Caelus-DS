(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  var B = 'cl-tabla-paqueterias';

  function TablaPaqueterias(props) {
    var Card = (window.Caelus || {}).CardPaqueteria;
    var items = props.items || [];
    var rest = omit(props, ['items', 'device', 'variant', 'emptyTitle', 'emptyText', 'className', 'children']);
    var content;
    if (props.children) {
      content = props.children;
    } else if (!items.length) {
      content = Card ? h(Card, { variant: 'busqueda', device: props.device, emptyTitle: props.emptyTitle, emptyText: props.emptyText }) : null;
    } else {
      content = items.map(function (it, i) {
        return h('li', { key: it.id || i, className: B + '__item' },
          Card ? h(Card, Object.assign({ variant: props.variant || 'v2', device: props.device }, omit(it, ['id']))) : null);
      });
    }
    var isList = !props.children && items.length;
    return h(isList ? 'ul' : 'div', Object.assign({ className: cx(B, props.className) }, rest), content);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.TablaPaqueterias = TablaPaqueterias;
})();

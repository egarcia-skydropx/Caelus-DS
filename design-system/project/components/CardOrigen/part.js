(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function ico(d, size) {
    return h('svg', { width: size || 16, height: size || 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    store: 'M3 21h18M4 21V10M20 21V10M3 10l1.5-6h15L21 10zM9 21v-6h6v6',
    user: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.12a7.5 7.5 0 0115 0',
    pin: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 1115 0z',
    phone: 'M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.37c0-.52-.35-.97-.85-1.09l-4.42-1.1c-.44-.11-.9.05-1.17.41l-.97 1.29a1.13 1.13 0 01-1.21.38 12.04 12.04 0 01-7.14-7.14 1.13 1.13 0 01.38-1.21l1.29-.97c.36-.27.52-.73.41-1.17L6.97 3.6a1.13 1.13 0 00-1.09-.85H4.5A2.25 2.25 0 002.25 5v1.75z',
    mail: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5',
    up: 'M4.5 15.75l7.5-7.5 7.5 7.5'
  };
  var B = 'cl-card-origen';
  var uid = 0;

  function Row(icon, text, extra) {
    return h('div', { className: cx(B + '__row', extra) }, h('span', { className: B + '__row-icon' }, ico(icon, 14)), h('span', { className: B + '__row-text' }, text));
  }

  function CardOrigen(props) {
    var R = window.React;
    var collapsible = props.collapsible !== false;
    var st = R.useState(props.defaultOpen !== false);
    var open = !collapsible || (props.open != null ? props.open : st[0]);
    var idRef = R.useRef(null);
    if (!idRef.current) idRef.current = B + '-' + (++uid);
    function toggle() { var n = !open; if (props.open == null) st[1](n); if (props.onOpenChange) props.onOpenChange(n); }
    var rest = omit(props, ['title', 'icon', 'name', 'address', 'phone', 'email', 'collapsible', 'defaultOpen', 'open', 'onOpenChange', 'className']);
    var bodyId = idRef.current + '-body';
    var titleInner = [h('span', { key: 'i', className: B + '__icon' }, props.icon || ico(P.store, 16)), h('span', { key: 't', className: B + '__title' }, props.title || 'Dirección de origen')];

    return h('section', Object.assign({ className: cx(B, props.className) }, rest),
      collapsible
        ? h('button', { type: 'button', className: B + '__head', 'aria-expanded': open, 'aria-controls': bodyId, onClick: toggle },
            h('span', { className: B + '__head-title' }, titleInner),
            h('span', { className: cx(B + '__chev', !open && B + '__chev--closed') }, ico(P.up, 16)))
        : h('div', { className: B + '__head' }, h('span', { className: B + '__head-title' }, titleInner)),
      h('address', { id: bodyId, className: B + '__body', hidden: !open },
        props.name ? Row(P.user, props.name) : null,
        props.address ? Row(P.pin, props.address) : null,
        (props.phone || props.email) ? h('div', { className: B + '__contact' },
          props.phone ? Row(P.phone, props.phone) : null,
          props.email ? Row(P.mail, props.email, B + '__row--grow') : null) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardOrigen = CardOrigen;
})();

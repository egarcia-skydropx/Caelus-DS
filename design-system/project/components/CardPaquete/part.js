(function () {
  var h = window.React.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; } return o; }
  function ico(d, size) {
    return h('svg', { width: size || 16, height: size || 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: d }));
  }
  var P = {
    cube: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
    ruler: 'M4 4h4v16H4zM8 8h3M8 12h2M8 16h3',
    weight: 'M6 8h12l2 12H4L6 8zM9 8a3 3 0 016 0',
    up: 'M4.5 15.75l7.5-7.5 7.5 7.5'
  };
  var B = 'cl-card-paquete';
  var uid = 0;

  function CardPaquete(props) {
    var R = window.React;
    var collapsible = props.collapsible !== false;
    var st = R.useState(props.defaultOpen !== false);
    var open = !collapsible || (props.open != null ? props.open : st[0]);
    var idRef = R.useRef(null);
    if (!idRef.current) idRef.current = B + '-' + (++uid);
    function toggle() { var n = !open; if (props.open == null) st[1](n); if (props.onOpenChange) props.onOpenChange(n); }
    var tags = props.tags || [];
    var rest = omit(props, ['title', 'icon', 'tags', 'children', 'collapsible', 'defaultOpen', 'open', 'onOpenChange', 'className']);
    var Badge = (window.Caelus || {}).Badge;

    var titleInner = [h('span', { key: 'i', className: B + '__icon' }, props.icon || ico(P.cube, 16)), h('span', { key: 't', className: B + '__title' }, props.title || 'Paquete')];
    var bodyId = idRef.current + '-body';
    return h('section', Object.assign({ className: cx(B, props.className) }, rest),
      collapsible
        ? h('button', { type: 'button', className: B + '__head', 'aria-expanded': open, 'aria-controls': bodyId, onClick: toggle },
            h('span', { className: B + '__head-title' }, titleInner),
            h('span', { className: cx(B + '__chev', !open && B + '__chev--closed') }, ico(P.up, 16)))
        : h('div', { className: B + '__head' }, h('span', { className: B + '__head-title' }, titleInner)),
      h('div', { id: bodyId, className: B + '__body', hidden: !open },
        props.children || h('div', { className: B + '__tags' }, tags.map(function (t, i) {
          var icon = t.icon === 'ruler' ? ico(P.ruler) : t.icon === 'weight' ? ico(P.weight) : t.icon;
          return Badge ? h(Badge, { key: i, theme: 'gray', size: 'large', icon: icon }, t.label) : h('span', { key: i }, t.label);
        }))));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardPaquete = CardPaquete;
})();

(function () {
  var h = window.React.createElement;
  var HOME = 'M2.25 12l8.95-8.95a1.13 1.13 0 011.59 0L21.75 12M4.5 9.75v10.13c0 .62.5 1.12 1.13 1.12H9.75v-4.88c0-.62.5-1.12 1.13-1.12h2.25c.62 0 1.12.5 1.12 1.12V21h4.13c.62 0 1.12-.5 1.12-1.12V9.75';

  function CardDestino(props) {
    var Origen = (window.Caelus || {}).CardOrigen;
    var icon = props.icon || h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' }, h('path', { d: HOME }));
    if (!Origen) return null;
    return h(Origen, Object.assign({}, props, { title: props.title || 'Dirección de destino', icon: icon }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.CardDestino = CardDestino;
})();

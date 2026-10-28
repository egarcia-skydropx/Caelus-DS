(function () {
  var React = window.React;
  var h = React.createElement;

  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // DropdownLogos — the "dropdown-logos" component: a Dropdown whose rows lead
  // with a logo or flag (countries, carriers, platforms).
  function DropdownLogos(props) {
    var items = (props.items || []).map(function (item) {
      return Object.assign({}, item, { logo: item.logo, icon: undefined });
    });
    var rest = omit(props, ['items', 'className']);
    return h(window.Caelus.Dropdown, Object.assign({}, rest, {
      items: items,
      className: ['cl-dropdown-logos', props.className].filter(Boolean).join(' ')
    }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.DropdownLogos = DropdownLogos;
})();

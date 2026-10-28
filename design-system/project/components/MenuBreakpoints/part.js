(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(props, keys) {
    var out = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) === -1) out[k] = props[k];
    return out;
  }

  // MenuBreakpoints — "menu-breakpoints": the responsive app shell
  // (navbar on top, side menu, content). From 1024px the menu is docked;
  // below it is an overlay with a backdrop, opened with `menuOpen`.
  function MenuBreakpoints(props) {
    var showMenu = props.showMenu !== false;
    var open = !!props.menuOpen;
    var rest = omit(props, ['navbar', 'menu', 'children', 'showMenu', 'showContent', 'menuOpen', 'onMenuClose', 'layout', 'className']);

    React.useEffect(function () {
      if (!open) return undefined;
      function onKey(e) { if (e.key === 'Escape' && props.onMenuClose) props.onMenuClose(); }
      document.addEventListener('keydown', onKey);
      return function () { document.removeEventListener('keydown', onKey); };
    }, [open, props.onMenuClose]);

    return h('div', Object.assign({}, rest, {
      className: cx('cl-menu-breakpoints', props.layout && 'cl-menu-breakpoints--' + props.layout, open && 'cl-menu-breakpoints--open', props.className)
    }),
      props.navbar ? h('div', { className: 'cl-menu-breakpoints__navbar' }, props.navbar) : null,
      h('div', { className: 'cl-menu-breakpoints__container' },
        showMenu && props.menu ? h('div', { className: 'cl-menu-breakpoints__menu' },
          h('div', { className: 'cl-menu-breakpoints__backdrop', 'aria-hidden': true, onClick: props.onMenuClose }),
          h('div', { className: 'cl-menu-breakpoints__panel' }, props.menu)) : null,
        props.showContent !== false ? h('main', { className: 'cl-menu-breakpoints__body' }, props.children) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.MenuBreakpoints = MenuBreakpoints;
})();

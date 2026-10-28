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

  // TabNav — "tab-nav" (Style = Tab | Pills | With underline, Dark mode).
  // The internal ".nav-item" sets become the `tabs` array.
  function TabNav(props) {
    var tabs = props.tabs || [];
    var variant = props.variant || 'tab';
    var listRef = React.useRef(null);
    var rest = omit(props, ['tabs', 'value', 'onChange', 'variant', 'dark', 'className']);

    var activeIndex = -1;
    tabs.forEach(function (t, i) { if (t.id === props.value) activeIndex = i; });
    if (activeIndex === -1) tabs.some(function (t, i) { if (!t.disabled) { activeIndex = i; return true; } return false; });

    function onKeyDown(e) {
      var enabled = [];
      tabs.forEach(function (t, i) { if (!t.disabled) enabled.push(i); });
      if (!enabled.length) return;
      var pos = enabled.indexOf(activeIndex);
      var next = null;
      if (e.key === 'ArrowRight') next = enabled[(pos + 1) % enabled.length];
      else if (e.key === 'ArrowLeft') next = enabled[(pos - 1 + enabled.length) % enabled.length];
      else if (e.key === 'Home') next = enabled[0];
      else if (e.key === 'End') next = enabled[enabled.length - 1];
      if (next == null) return;
      e.preventDefault();
      if (props.onChange) props.onChange(tabs[next].id);
      var nodes = listRef.current ? listRef.current.querySelectorAll('[role="tab"]') : [];
      if (nodes[next]) nodes[next].focus();
    }

    return h('div', Object.assign({}, rest, {
      ref: listRef,
      role: 'tablist',
      className: cx('cl-tab-nav', 'cl-tab-nav--' + variant, props.dark && 'cl-tab-nav--dark', props.className),
      onKeyDown: onKeyDown
    }),
      tabs.map(function (t, i) {
        var selected = i === activeIndex;
        return h('button', {
          key: t.id,
          id: t.tabId,
          type: 'button',
          role: 'tab',
          className: 'cl-tab-nav__item',
          'aria-selected': selected,
          'aria-controls': t.panelId,
          'aria-disabled': t.disabled ? 'true' : undefined,
          disabled: t.disabled,
          tabIndex: selected ? 0 : -1,
          onClick: function () { if (!t.disabled && props.onChange) props.onChange(t.id); }
        },
          t.icon ? h('span', { className: 'cl-tab-nav__icon', 'aria-hidden': true }, t.icon) : null,
          h('span', null, t.label));
      }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.TabNav = TabNav;
})();

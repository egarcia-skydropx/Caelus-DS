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
  function CheckIcon() {
    return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M3 8.5l3 3 7-7', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }

  function isInteractive(item) {
    var t = item.type || 'item';
    return t === 'item' && !item.disabled;
  }

  // Dropdown — menu panel. Folds the internal ".dropdown-nav-link" sets
  // (Type = Nav link | Título | Separador, Hover, Disabled) into `items`.
  function Dropdown(props) {
    var items = props.items || [];
    var role = props.role || 'listbox';
    var showCheck = props.showCheck !== false;
    var listRef = React.useRef(null);
    var rest = omit(props, ['items', 'role', 'showCheck', 'onSelect', 'maxHeight', 'leadingSize', 'className', 'style', 'autoFocus']);

    var firstFocusable = -1;
    for (var i = 0; i < items.length; i++) {
      if (!isInteractive(items[i])) continue;
      if (firstFocusable === -1) firstFocusable = i;
      if (items[i].selected) { firstFocusable = i; break; }
    }

    React.useEffect(function () {
      if (props.autoFocus && listRef.current) {
        var el = listRef.current.querySelector('[tabindex="0"]');
        if (el) el.focus();
      }
    }, [props.autoFocus]);

    function onKeyDown(e) {
      var nodes = Array.prototype.slice.call(listRef.current.querySelectorAll('.cl-dropdown__item:not([aria-disabled="true"])'));
      if (!nodes.length) return;
      var idx = nodes.indexOf(document.activeElement);
      var next = null;
      if (e.key === 'ArrowDown') next = nodes[(idx + 1) % nodes.length];
      else if (e.key === 'ArrowUp') next = nodes[(idx - 1 + nodes.length) % nodes.length];
      else if (e.key === 'Home') next = nodes[0];
      else if (e.key === 'End') next = nodes[nodes.length - 1];
      if (next) { e.preventDefault(); next.focus(); }
      if (props.onKeyDown) props.onKeyDown(e);
    }

    var style = Object.assign({}, props.style || {});
    if (props.maxHeight) style.maxHeight = props.maxHeight;

    return h('div', Object.assign({}, rest, {
      ref: listRef,
      role: role,
      className: cx('cl-dropdown', props.maxHeight && 'cl-dropdown--scroll', props.className),
      style: style,
      onKeyDown: onKeyDown
    }),
      items.map(function (item, index) {
        var type = item.type || 'item';
        var key = item.id || item.value || index;
        if (type === 'separator') return h('div', { key: key, role: 'separator', className: 'cl-dropdown__separator' });
        if (type === 'title') return h('div', { key: key, role: 'presentation', className: 'cl-dropdown__title' }, item.label);
        var selected = !!item.selected;
        function activate() {
          if (item.disabled) return;
          if (item.onSelect) item.onSelect(item);
          if (props.onSelect) props.onSelect(item);
        }
        var itemProps = {
          key: key,
          type: 'button',
          role: role === 'menu' ? 'menuitem' : 'option',
          className: cx('cl-dropdown__item', item.danger && 'cl-dropdown__item--danger', selected && 'cl-dropdown__item--selected'),
          tabIndex: index === firstFocusable ? 0 : -1,
          'aria-disabled': item.disabled ? 'true' : undefined,
          onClick: activate
        };
        if (role !== 'menu') itemProps['aria-selected'] = selected;
        var leading = item.logo || item.icon;
        return h('button', itemProps,
          leading ? h('span', { className: cx('cl-dropdown__lead', item.logo && 'cl-dropdown__lead--logo'), 'aria-hidden': true }, leading) : null,
          h('span', { className: 'cl-dropdown__text' },
            h('span', { className: 'cl-dropdown__label' }, item.label),
            item.helper ? h('span', { className: 'cl-dropdown__helper' }, item.helper) : null),
          item.trailing ? h('span', { className: 'cl-dropdown__trail', 'aria-hidden': true }, item.trailing) : null,
          showCheck && selected ? h('span', { className: 'cl-dropdown__check', 'aria-hidden': true }, h(CheckIcon)) : null);
      }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Dropdown = Dropdown;
})();

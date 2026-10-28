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
  function Chevron() {
    return h('svg', { viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: 'M4.5 6.75L9 11.25l4.5-4.5', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  function Dots() {
    return h('svg', { viewBox: '0 0 18 18', fill: 'currentColor', 'aria-hidden': true },
      h('circle', { cx: 4, cy: 9, r: 1.25 }), h('circle', { cx: 9, cy: 9, r: 1.25 }), h('circle', { cx: 14, cy: 9, r: 1.25 }));
  }

  var uid = 0;

  // DropdownButton — "dropdown-button": a secondary Button that opens a
  // Dropdown of actions (Type = Default | Only Icon).
  function DropdownButton(props) {
    var type = props.type || 'default';
    var controlled = typeof props.open === 'boolean';
    var st = React.useState(false);
    var open = controlled ? props.open : st[0];
    var wrapRef = React.useRef(null);
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = 'cl-ddb-' + (++uid);
    var menuId = idRef.current + '-menu';

    function setOpen(next, refocus) {
      if (!controlled) st[1](next);
      if (props.onOpenChange) props.onOpenChange(next);
      if (!next && refocus && wrapRef.current) {
        var btn = wrapRef.current.querySelector('.cl-dropdown-button__trigger');
        if (btn) btn.focus();
      }
    }

    React.useEffect(function () {
      if (!open) return undefined;
      function onDoc(e) { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false, false); }
      document.addEventListener('mousedown', onDoc);
      return function () { document.removeEventListener('mousedown', onDoc); };
    }, [open]);

    var rest = omit(props, ['type', 'label', 'icon', 'items', 'open', 'onOpenChange', 'onSelect', 'align', 'menuLabel', 'className', 'buttonType', 'size', 'disabled']);
    var Button = window.Caelus.Button;
    var Dropdown = window.Caelus.Dropdown;

    var triggerProps = {
      type: props.buttonType || 'secondary',
      size: props.size || 'base',
      disabled: props.disabled,
      className: 'cl-dropdown-button__trigger',
      'aria-haspopup': 'menu',
      'aria-expanded': open,
      'aria-controls': open ? menuId : undefined,
      onClick: function () { setOpen(!open, false); },
      onKeyDown: function (e) {
        if (e.key === 'ArrowDown' && !open) { e.preventDefault(); setOpen(true, false); }
      }
    };
    var trigger = type === 'icon'
      ? h(Button, Object.assign(triggerProps, { shape: 'square', icon: props.icon || h(Dots), 'aria-label': props.label || 'Más acciones' }))
      : h(Button, Object.assign(triggerProps, { rightIcon: h(Chevron) }), props.label);

    return h('div', Object.assign({}, rest, {
      ref: wrapRef,
      className: cx('cl-dropdown-button', props.align === 'end' && 'cl-dropdown-button--end', props.className),
      onKeyDown: function (e) { if (e.key === 'Escape' && open) { e.stopPropagation(); setOpen(false, true); } }
    }),
      trigger,
      open ? h(Dropdown, {
        id: menuId,
        role: 'menu',
        showCheck: false,
        autoFocus: true,
        'aria-label': props.menuLabel || (typeof props.label === 'string' ? props.label : 'Acciones'),
        className: 'cl-dropdown-button__menu',
        items: props.items || [],
        onSelect: function (item) {
          if (props.onSelect) props.onSelect(item);
          setOpen(false, true);
        }
      }) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.DropdownButton = DropdownButton;
})();

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
  function Svg(d, size, sw) {
    return h('svg', { width: size, height: size, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: d, stroke: 'currentColor', strokeWidth: sw || 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  var uid = 0;
  function useId(prefix) {
    var r = React.useRef(null);
    if (!r.current) r.current = prefix + (++uid);
    return r.current;
  }

  // Checkbox row (base/input-checkbox inside .dropdown-nav-link)
  function Check(p) {
    var ref = React.useRef(null);
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!p.indeterminate; }, [p.indeterminate]);
    var helperId = p.helper ? p.id + '-h' : undefined;
    return h('div', { className: cx('cl-dropdown-multiselect__check', p.strong && 'cl-dropdown-multiselect__check--strong') },
      h('span', { className: 'cl-dropdown-multiselect__box' },
        h('input', { ref: ref, id: p.id, type: 'checkbox', checked: !!p.checked, disabled: p.disabled, 'aria-describedby': helperId,
          onChange: function (e) { p.onChange(e.target.checked); } }),
        h('span', { className: 'cl-dropdown-multiselect__mark', 'aria-hidden': true },
          p.indeterminate ? Svg('M5 9h8', 12, 2) : Svg('M4.5 9.5l3 3 6-7', 12, 2))),
      h('span', { className: 'cl-dropdown-multiselect__text' },
        h('label', { htmlFor: p.id, className: 'cl-dropdown-multiselect__label' }, p.label),
        p.helper ? h('span', { id: helperId, className: 'cl-dropdown-multiselect__helper' }, p.helper) : null));
  }

  function leafValues(options) {
    var out = [];
    options.forEach(function (o) {
      if (o.children && o.children.length) o.children.forEach(function (c) { if (!c.disabled) out.push(c.value); });
      else if (!o.disabled) out.push(o.value);
    });
    return out;
  }
  function matches(text, q) {
    return String(text == null ? '' : text).toLowerCase().indexOf(q) !== -1;
  }

  // DropdownMultiselect — "dropdown-multiselect" (Type = Default | Hierarchical,
  // Status = Default | Empty State).
  function DropdownMultiselect(props) {
    var base = useId('cl-dms-');
    var options = props.options || [];
    var value = props.value || [];
    var searchable = props.searchable !== false;
    var showSelectAll = props.showSelectAll !== false;
    var searchCtl = typeof props.search === 'string';
    var sState = React.useState('');
    var search = searchCtl ? props.search : sState[0];
    var eState = React.useState({});
    var expanded = eState[0];

    function setSearch(v) {
      if (!searchCtl) sState[1](v);
      if (props.onSearchChange) props.onSearchChange(v);
    }
    function emit(next) { if (props.onChange) props.onChange(next); }
    function toggleValues(vals, on) {
      var set = value.slice();
      vals.forEach(function (v) {
        var i = set.indexOf(v);
        if (on && i === -1) set.push(v);
        if (!on && i !== -1) set.splice(i, 1);
      });
      emit(set);
    }

    var q = search.trim().toLowerCase();
    var visible = options.map(function (o) {
      if (!q) return o;
      if (o.children && o.children.length) {
        if (matches(o.label, q)) return o;
        var kids = o.children.filter(function (c) { return matches(c.label, q) || matches(c.helper, q); });
        return kids.length ? Object.assign({}, o, { children: kids, _forceOpen: true }) : null;
      }
      return matches(o.label, q) || matches(o.helper, q) ? o : null;
    }).filter(Boolean);

    var visibleLeaves = leafValues(visible);
    var selectedVisible = visibleLeaves.filter(function (v) { return value.indexOf(v) !== -1; });
    var allOn = visibleLeaves.length > 0 && selectedVisible.length === visibleLeaves.length;
    var someOn = selectedVisible.length > 0 && !allOn;

    var rest = omit(props, ['options', 'value', 'onChange', 'searchable', 'showSelectAll', 'search', 'onSearchChange',
      'searchPlaceholder', 'searchLabel', 'selectAllLabel', 'emptyText', 'clearSearchLabel', 'maxHeight', 'className', 'style']);

    var rows = visible.map(function (o, i) {
      var id = base + '-o' + i;
      if (o.children && o.children.length) {
        var kids = leafValues([o]);
        var on = kids.filter(function (v) { return value.indexOf(v) !== -1; }).length;
        var isOpen = o._forceOpen || (expanded[o.value] != null ? expanded[o.value] : !!o.defaultExpanded);
        var groupId = id + '-g';
        return h('div', { key: o.value, className: 'cl-dropdown-multiselect__group', role: 'group', 'aria-labelledby': id + '-lbl' },
          h('div', { className: 'cl-dropdown-multiselect__row cl-dropdown-multiselect__row--parent' },
            h(Check, { id: id, label: h('span', { id: id + '-lbl' }, o.label), checked: kids.length > 0 && on === kids.length, indeterminate: on > 0 && on < kids.length,
              onChange: function (c) { toggleValues(kids, c); } }),
            h('button', { type: 'button', className: 'cl-dropdown-multiselect__toggle', 'aria-expanded': isOpen, 'aria-controls': groupId,
              'aria-label': (isOpen ? 'Contraer ' : 'Expandir ') + (typeof o.label === 'string' ? o.label : ''),
              onClick: function () { var n = Object.assign({}, expanded); n[o.value] = !isOpen; eState[1](n); } },
              Svg(isOpen ? 'M4.5 11.25L9 6.75l4.5 4.5' : 'M4.5 6.75L9 11.25l4.5-4.5', 18))),
          isOpen ? h('div', { id: groupId, className: 'cl-dropdown-multiselect__children' },
            o.children.map(function (c, j) {
              return h('div', { key: c.value, className: 'cl-dropdown-multiselect__row cl-dropdown-multiselect__row--child' },
                h(Check, { id: id + '-c' + j, label: c.label, helper: c.helper, disabled: c.disabled, checked: value.indexOf(c.value) !== -1,
                  onChange: function (on2) { toggleValues([c.value], on2); } }));
            })) : null);
      }
      return h('div', { key: o.value, className: 'cl-dropdown-multiselect__row' },
        h(Check, { id: id, label: o.label, helper: o.helper, disabled: o.disabled, checked: value.indexOf(o.value) !== -1,
          onChange: function (c) { toggleValues([o.value], c); } }));
    });

    var Button = window.Caelus.Button;
    var listStyle = props.maxHeight ? { maxHeight: props.maxHeight } : undefined;

    return h('div', Object.assign({}, rest, { className: cx('cl-dropdown-multiselect', props.className), style: props.style }),
      (searchable || showSelectAll) ? h('div', { className: 'cl-dropdown-multiselect__header' },
        searchable ? h('div', { className: 'cl-dropdown-multiselect__search' },
          h('span', { className: 'cl-dropdown-multiselect__search-icon', 'aria-hidden': true }, Svg('M15.5 15.5l-3.6-3.6M13 8A5 5 0 113 8a5 5 0 0110 0z', 18)),
          h('input', { type: 'search', value: search, placeholder: props.searchPlaceholder || 'Búsqueda',
            'aria-label': props.searchLabel || props.searchPlaceholder || 'Buscar opciones',
            onChange: function (e) { setSearch(e.target.value); } })) : null,
        showSelectAll ? h(Check, { id: base + '-all', strong: true, label: props.selectAllLabel || 'Seleccionar todos', checked: allOn, indeterminate: someOn,
          disabled: visibleLeaves.length === 0, onChange: function (c) { toggleValues(visibleLeaves, c); } }) : null) : null,
      visible.length
        ? h('div', { className: 'cl-dropdown-multiselect__list', style: listStyle }, rows)
        : h('div', { className: 'cl-dropdown-multiselect__empty', role: 'status' },
          h('p', { className: 'cl-dropdown-multiselect__empty-text' }, props.emptyText || 'No se encontraron resultados'),
          q && Button ? h(Button, { type: 'tertiary', size: 'xs', onClick: function () { setSearch(''); } }, props.clearSearchLabel || 'Limpiar búsqueda') : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.DropdownMultiselect = DropdownMultiselect;
})();

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

  function Check(p) {
    var ref = React.useRef(null);
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!p.indeterminate; }, [p.indeterminate]);
    return h('div', { className: 'cl-filter__check' },
      h('span', { className: 'cl-filter__box' },
        h('input', { ref: ref, id: p.id, type: 'checkbox', checked: !!p.checked, disabled: p.disabled,
          onChange: function (e) { p.onChange(e.target.checked); } }),
        h('span', { className: 'cl-filter__mark', 'aria-hidden': true },
          p.indeterminate ? Svg('M5 9h8', 12, 2) : Svg('M4.5 9.5l3 3 6-7', 12, 2))),
      h('label', { htmlFor: p.id, className: 'cl-filter__check-label' }, p.label));
  }

  // .filter-header: section title (+ counter) with optional collapse chevron
  function Section(p) {
    var st = React.useState(p.defaultOpen !== false);
    var open = st[0];
    var bodyId = p.id + '-body';
    var head = h('span', { className: 'cl-filter__section-title' },
      h('span', { className: 'cl-filter__section-label' }, p.label),
      p.count ? h('span', { className: 'cl-filter__count' }, '(' + p.count + ')') : null);
    return h('section', { className: 'cl-filter__section', 'aria-labelledby': p.id + '-h' },
      h('h3', { id: p.id + '-h', className: 'cl-filter__section-head' },
        p.collapsible === false ? head : h('button', {
          type: 'button', className: 'cl-filter__section-btn', 'aria-expanded': open, 'aria-controls': bodyId,
          onClick: function () { st[1](!open); }
        }, head, h('span', { className: 'cl-filter__chevron', 'aria-hidden': true },
          Svg(open ? 'M4.5 11.25L9 6.75l4.5 4.5' : 'M4.5 6.75L9 11.25l4.5-4.5', 16)))),
      open || p.collapsible === false ? h('div', { id: bodyId, className: 'cl-filter__section-body' }, p.children) : null);
  }

  // Filter — "filter" panel (Breakpoints = Desktop | Mobile). Folds
  // .filter-header, .filter-header-badge, .filter-category, .filter-toggle
  // and .filter-badge.
  function Filter(props) {
    var base = useId('cl-filter-');
    var breakpoint = props.breakpoint || 'desktop';
    var values = props.value || {};
    var applied = props.applied || [];
    var categories = props.categories || [];
    var toggles = props.toggles || [];
    var Badge = window.Caelus.Badge;
    var Button = window.Caelus.Button;
    var rest = omit(props, ['breakpoint', 'title', 'onClose', 'closeLabel', 'onClear', 'clearLabel', 'applied', 'appliedTitle',
      'onRemoveApplied', 'date', 'dateLabel', 'categories', 'value', 'onChange', 'toggles', 'className', 'children']);

    var blocks = [];
    if (applied.length) {
      blocks.push(h(Section, { key: 'applied', id: base + '-ap', label: props.appliedTitle || 'Filtros aplicados', count: applied.length },
        h('div', { className: 'cl-filter__badges' }, applied.map(function (a) {
          return h(Badge, { key: a.id, theme: 'white', size: 'small', removeLabel: 'Quitar filtro ' + (typeof a.label === 'string' ? a.label : ''),
            onRemove: props.onRemoveApplied ? function () { props.onRemoveApplied(a.id); } : undefined }, a.label);
        }))));
    }
    if (props.date) {
      blocks.push(h(Section, { key: 'date', id: base + '-dt', label: props.dateLabel || 'Fecha', collapsible: false }, props.date));
    }
    categories.forEach(function (cat, ci) {
      var sel = values[cat.id] || [];
      var all = (cat.options || []).filter(function (o) { return !o.disabled; }).map(function (o) { return o.value; });
      var allOn = all.length > 0 && all.every(function (v) { return sel.indexOf(v) !== -1; });
      function set(next) { if (props.onChange) props.onChange(cat.id, next); }
      blocks.push(h(Section, { key: 'c' + ci, id: base + '-c' + ci, label: cat.label, count: sel.length || 0, defaultOpen: cat.defaultOpen },
        h('div', { className: 'cl-filter__options', role: 'group', 'aria-labelledby': base + '-c' + ci + '-h' },
          cat.allLabel !== null ? h(Check, { id: base + '-c' + ci + '-all', label: cat.allLabel || 'Todos', checked: allOn,
            indeterminate: sel.length > 0 && !allOn, onChange: function (on) { set(on ? all.slice() : []); } }) : null,
          h('div', { className: cx('cl-filter__nested', cat.allLabel === null && 'cl-filter__nested--flat') }, (cat.options || []).map(function (o, oi) {
            return h(Check, { key: o.value, id: base + '-c' + ci + '-' + oi, label: o.label, disabled: o.disabled, checked: sel.indexOf(o.value) !== -1,
              onChange: function (on) {
                var n = sel.filter(function (v) { return v !== o.value; });
                if (on) n.push(o.value);
                set(n);
              } });
          })))));
    });
    toggles.forEach(function (t, ti) {
      var id = base + '-t' + ti;
      blocks.push(h('div', { key: 't' + ti, className: 'cl-filter__toggle' },
        h('div', { className: 'cl-filter__toggle-text' },
          h('div', { className: 'cl-filter__toggle-title' },
            h('label', { htmlFor: id, className: 'cl-filter__toggle-label' }, t.label),
            t.badge ? h('span', { className: 'cl-filter__toggle-badge' }, t.badge) : null),
          t.helper ? h('p', { id: id + '-h', className: 'cl-filter__toggle-helper' }, t.helper) : null),
        h('span', { className: 'cl-filter__switch' },
          h('input', { id: id, type: 'checkbox', role: 'switch', checked: !!t.checked, disabled: t.disabled,
            'aria-describedby': t.helper ? id + '-h' : undefined,
            onChange: function (e) { if (t.onChange) t.onChange(e.target.checked); } }),
          h('span', { className: 'cl-filter__knob', 'aria-hidden': true }))));
    });

    var body = [];
    blocks.forEach(function (b, i) {
      if (i > 0) body.push(h('hr', { key: 'sep' + i, className: 'cl-filter__sep' }));
      body.push(b);
    });

    return h('aside', Object.assign({ 'aria-labelledby': base + '-title' }, rest, {
      className: cx('cl-filter', 'cl-filter--' + breakpoint, props.className)
    }),
      h('div', { className: 'cl-filter__header' },
        h('h2', { id: base + '-title', className: 'cl-filter__title' }, props.title || 'Filtros'),
        props.onClose ? h('button', { type: 'button', className: 'cl-filter__close', onClick: props.onClose, 'aria-label': props.closeLabel || 'Cerrar filtros' },
          Svg('M5 5l8 8m0-8l-8 8', 20)) : null),
      h('div', { className: 'cl-filter__body' },
        props.onClear && Button ? h('div', { className: 'cl-filter__clear' },
          h(Button, { type: 'tertiary', size: 'xs', onClick: props.onClear }, props.clearLabel || 'Limpiar')) : null,
        body,
        props.children));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Filter = Filter;
})();

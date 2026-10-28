(function () {
  var R = window.React;
  var h = R.createElement;
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
  function useIdSafe(given) { var gen = R.useId(); return given || ('cl' + String(gen).replace(/[^a-zA-Z0-9_-]/g, '')); }
  function useControlled(value, defaultValue, fallback) {
    var st = R.useState(defaultValue !== undefined ? defaultValue : fallback);
    var controlled = value !== undefined;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  var PATHS = {
    chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
    chevronUp: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    x: 'M6 18L18 6M6 6l12 12',
    search: 'M21 21l-5.2-5.2M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'M4.5 12.75l6 6 9-13.5',
    calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z',
    clock: 'M12 7v5h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    arrowLeft: 'M21 12H3m0 0l6-6m-6 6l6 6',
    arrowRight: 'M3 12h18m0 0l-6-6m6 6l-6 6',
    cloudUp: 'M12 16.5v-6.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.4-8.78 5.25 5.25 0 0 1 10.23-2.33 3 3 0 0 1 3.76 3.85A3.75 3.75 0 0 1 18 19.5H6.75z',
    trayUp: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5L12 3m0 0l4.5 4.5M12 3v13.5',
    trash: 'M5 7h14M10 7V4.5h4V7M7 7l.8 13h8.4L17 7',
    bookmark: 'M17.25 3.75H6.75v16.5L12 16.5l5.25 3.75V3.75z'
  };
  function icon(name, size) {
    return h('svg', { width: size || 18, height: size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: PATHS[name] }));
  }
  function Field(P, p, renderControl) {
    var helper = (typeof p.error === 'string' && p.error) ? p.error : p.helperText;
    var helpId = helper ? p.id + '-help' : undefined;
    return h('div', { className: cx(P, p.size === 'sm' && P + '--sm', p.error && P + '--error', p.disabled && P + '--disabled', p.className), style: p.style },
      p.label ? h('div', { className: P + '__label-row' },
        h('label', { className: P + '__label', htmlFor: p.id, id: p.id + '-label' }, p.label),
        p.info ? h('span', { className: P + '__info', title: p.info, role: 'img', 'aria-label': p.info, tabIndex: 0 }, icon('info', 18)) : null) : null,
      renderControl(helpId),
      helper ? h('p', { className: P + '__helper', id: helpId }, helper) : null);
  }
  var P = 'cl-input-combobox';
  function norm(s) { return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function InputCombobox(props) {
    var id = useIdSafe(props.id);
    var listId = id + '-list';
    var sel = useControlled(props.value, props.defaultValue, null);
    var openSt = R.useState(!!props.defaultOpen);
    var qSt = R.useState(props.defaultInputValue != null ? props.defaultInputValue : null);
    var actSt = R.useState(-1);
    var inputRef = R.useRef(null);
    var options = props.options || [];
    var minChars = props.minChars || 0;
    var showChevron = props.showChevron !== false;
    var clearable = props.clearable !== false;
    var query = qSt[0];
    var typing = query !== null;
    var selected = null;
    for (var i = 0; i < options.length; i++) { if (options[i].value === sel[0]) selected = options[i]; }
    var filtered = typing && query ? options.filter(function (o) { return norm(o.label).indexOf(norm(query)) >= 0; }) : options;
    var open = openSt[0] && !props.disabled && (query || '').length >= minChars;
    var text = typing ? query : (selected ? selected.label : '');
    var rest = omit(props, ['id', 'label', 'info', 'helperText', 'error', 'size', 'disabled', 'className', 'style', 'options', 'placeholder', 'leftIcon', 'value', 'defaultValue', 'onChange', 'onInputChange', 'minChars', 'showChevron', 'clearable', 'defaultOpen', 'defaultInputValue', 'emptyText', 'controlClassName', 'clearLabel']);

    function choose(o) {
      if (!o || o.disabled) return;
      sel[1](o.value); qSt[1](null); openSt[1](false); actSt[1](-1);
      if (props.onChange) props.onChange(o.value, o);
    }
    function clear() {
      sel[1](null); qSt[1](null); actSt[1](-1);
      if (props.onChange) props.onChange(null, null);
      if (props.onInputChange) props.onInputChange('');
      if (inputRef.current) inputRef.current.focus();
    }
    function move(d) {
      if (!filtered.length) return;
      var n = actSt[0];
      for (var k = 0; k < filtered.length; k++) { n = (n + d + filtered.length) % filtered.length; if (!filtered[n].disabled) break; }
      actSt[1](n); openSt[1](true);
    }
    function onKeyDown(e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter' && open && actSt[0] >= 0) { e.preventDefault(); choose(filtered[actSt[0]]); }
      else if (e.key === 'Escape') { openSt[1](false); qSt[1](null); actSt[1](-1); }
      if (props.onKeyDown) props.onKeyDown(e);
    }
    var lead = selected && selected.icon && !typing ? selected.icon : props.leftIcon;
    var lastGroup = null;
    var items = [];
    filtered.forEach(function (o, idx) {
      if (o.group && o.group !== lastGroup) { lastGroup = o.group; items.push(h('li', { key: 'g-' + o.group + idx, role: 'presentation', className: P + '__group' }, o.group)); }
      var isSel = selected && selected.value === o.value;
      items.push(h('li', {
        key: String(o.value), id: id + '-opt-' + idx, role: 'option', 'aria-selected': isSel ? 'true' : 'false', 'aria-disabled': o.disabled ? 'true' : undefined,
        className: cx(P + '__option', idx === actSt[0] && P + '__option--active'),
        onMouseDown: function (e) { e.preventDefault(); }, onClick: function () { choose(o); }, onMouseEnter: function () { actSt[1](idx); }
      },
        o.icon ? h('span', { className: P + '__opt-icon' }, o.icon) : null,
        h('span', { className: P + '__option-label' }, o.label),
        isSel ? h('span', { className: P + '__check' }, icon('check', 16)) : null));
    });

    return Field(P, { id: id, label: props.label, info: props.info, helperText: props.helperText, error: props.error, size: props.size, disabled: props.disabled, className: props.className, style: props.style }, function (helpId) {
      return h('div', { className: P + '__anchor' },
        h('div', { className: cx(P + '__control', open && P + '__control--open', props.controlClassName), onClick: function () { if (!props.disabled) { openSt[1](true); if (inputRef.current) inputRef.current.focus(); } } },
          lead ? h('span', { className: P + '__icon' }, lead) : null,
          h('input', Object.assign({ placeholder: props.placeholder }, rest, {
            ref: inputRef, id: id, type: 'text', className: P + '__input', value: text, disabled: props.disabled, autoComplete: 'off',
            role: 'combobox', 'aria-expanded': open ? 'true' : 'false', 'aria-controls': listId, 'aria-autocomplete': 'list',
            'aria-activedescendant': open && actSt[0] >= 0 ? id + '-opt-' + actSt[0] : undefined,
            'aria-invalid': props.error ? true : undefined, 'aria-describedby': helpId,
            onChange: function (e) { qSt[1](e.target.value); openSt[1](true); actSt[1](-1); if (props.onInputChange) props.onInputChange(e.target.value); },
            onKeyDown: onKeyDown,
            onBlur: function (e) { openSt[1](false); qSt[1](null); actSt[1](-1); if (props.onBlur) props.onBlur(e); }
          })),
          clearable && text && !props.disabled ? h('button', { type: 'button', className: P + '__iconbtn', 'aria-label': props.clearLabel || 'Borrar', onMouseDown: function (e) { e.preventDefault(); }, onClick: function (e) { e.stopPropagation(); clear(); } }, icon('x', 18)) : null,
          clearable && text && showChevron && !props.disabled ? h('span', { className: P + '__sep', 'aria-hidden': 'true' }) : null,
          showChevron ? h('span', { className: P + '__chevron' }, icon(open ? 'chevronUp' : 'chevronDown', 18)) : null),
        open ? h('div', { className: P + '__menu', onMouseDown: function (e) { e.preventDefault(); } },
          h('ul', { id: listId, role: 'listbox', className: P + '__list', 'aria-labelledby': props.label ? id + '-label' : undefined },
            items.length ? items : h('li', { role: 'presentation', className: P + '__empty' }, props.emptyText || 'Sin resultados'))) : null);
    });
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputCombobox = InputCombobox;
})();

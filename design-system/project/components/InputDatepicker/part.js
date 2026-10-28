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
  var P = 'cl-input-datepicker';
  var MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  var ABBR = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  var WEEK = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  function day0(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function same(a, b) { return !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function fmt(d) { return (d.getDate() < 10 ? '0' : '') + d.getDate() + '/' + ABBR[d.getMonth()] + '/' + d.getFullYear(); }
  function InputDatepicker(props) {
    var id = useIdSafe(props.id);
    var range = props.mode === 'range';
    var v = useControlled(props.value, props.defaultValue, null);
    var openSt = R.useState(!!props.defaultOpen);
    var pendSt = R.useState(null);
    var today = day0(props.today || new Date());
    var start = range ? (v[0] && v[0][0]) : v[0];
    var end = range ? (v[0] && v[0][1]) : null;
    var focusSt = R.useState(day0(start || props.defaultMonth || today));
    var viewSt = R.useState(new Date((start || props.defaultMonth || today).getFullYear(), (start || props.defaultMonth || today).getMonth(), 1));
    var rootRef = R.useRef(null);
    var gridRef = R.useRef(null);
    var trigRef = R.useRef(null);
    var kbd = R.useRef(false);
    var open = openSt[0] && !props.disabled;
    R.useEffect(function () {
      if (!open) return undefined;
      function onDoc(e) { if (rootRef.current && !rootRef.current.contains(e.target)) openSt[1](false); }
      document.addEventListener('mousedown', onDoc);
      return function () { document.removeEventListener('mousedown', onDoc); };
    }, [open]);
    R.useEffect(function () {
      if (open && kbd.current && gridRef.current) { var b = gridRef.current.querySelector('[data-focus="true"]'); if (b) b.focus(); }
    });
    function close() { openSt[1](false); pendSt[1](null); if (trigRef.current) trigRef.current.focus(); }
    function pick(d) {
      if (!range) { v[1](d); if (props.onChange) props.onChange(d); close(); return; }
      var p = pendSt[0];
      if (!p) { pendSt[1](d); return; }
      var r = d < p ? [d, p] : [p, d];
      v[1](r); if (props.onChange) props.onChange(r); close();
    }
    function moveFocus(n) {
      var f = addDays(focusSt[0], n);
      kbd.current = true; focusSt[1](f);
      if (f.getMonth() !== viewSt[0].getMonth() || f.getFullYear() !== viewSt[0].getFullYear()) viewSt[1](new Date(f.getFullYear(), f.getMonth(), 1));
    }
    function onGridKey(e) {
      var m = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
      if (m) { e.preventDefault(); moveFocus(m); }
    }
    function shift(n) { var m = viewSt[0]; viewSt[1](new Date(m.getFullYear(), m.getMonth() + n, 1)); kbd.current = false; }
    var view = viewSt[0];
    var first = new Date(view.getFullYear(), view.getMonth(), 1);
    var lead = (first.getDay() + 6) % 7;
    var cells = [];
    for (var i = 0; i < 42; i++) cells.push(addDays(first, i - lead));
    var rs = range ? (pendSt[0] || start) : null;
    var re = range ? (pendSt[0] ? null : end) : null;
    var text = props.displayText || (range ? (start && end ? fmt(start) + ' - ' + fmt(end) : null) : (start ? fmt(start) : null));
    var weeks = [];
    for (var w = 0; w < 6; w++) {
      weeks.push(h('div', { key: w, role: 'row', className: P + '__week' }, cells.slice(w * 7, w * 7 + 7).map(function (d) {
        var out = d.getMonth() !== view.getMonth();
        var isSel = range ? (same(d, rs) || same(d, re)) : same(d, start);
        var inRange = range && rs && re && d > rs && d < re;
        var foc = same(d, focusSt[0]);
        return h('div', { key: d.getTime(), role: 'gridcell', 'aria-selected': isSel ? 'true' : undefined },
          h('button', {
            type: 'button', tabIndex: foc ? 0 : -1, 'data-focus': foc ? 'true' : undefined,
            className: cx(P + '__day', out && P + '__day--out', same(d, today) && P + '__day--today', inRange && P + '__day--range', isSel && P + '__day--selected', isSel && range && P + '__day--edge'),
            'aria-label': d.getDate() + ' de ' + MONTHS[d.getMonth()].toLowerCase() + ' de ' + d.getFullYear(), 'aria-current': same(d, today) ? 'date' : undefined,
            onClick: function () { focusSt[1](d); pick(d); }
          }, d.getDate()));
      })));
    }
    return h('div', { className: cx(P, props.disabled && P + '--disabled', props.className), style: props.style, ref: rootRef, onKeyDown: function (e) { if (e.key === 'Escape' && open) { e.stopPropagation(); close(); } } },
      props.label ? h('label', { className: P + '__label', htmlFor: id }, props.label) : null,
      h('div', { className: P + '__anchor' },
        h('button', Object.assign({}, omit(props, ['id', 'label', 'mode', 'value', 'defaultValue', 'onChange', 'placeholder', 'displayText', 'disabled', 'defaultOpen', 'defaultMonth', 'today', 'className', 'style']), {
          ref: trigRef, type: 'button', id: id, className: cx(P + '__control', open && P + '__control--open', !text && P + '__control--empty'), disabled: props.disabled,
          'aria-haspopup': 'dialog', 'aria-expanded': open ? 'true' : 'false',
          onClick: function () { kbd.current = false; openSt[1](!open); }
        }),
          h('span', { className: P + '__icon' }, icon('calendar', 18)),
          h('span', { className: P + '__text' }, text || props.placeholder || 'Selecciona una fecha'),
          h('span', { className: P + '__chevron' }, icon(open ? 'chevronUp' : 'chevronDown', 18))),
        open ? h('div', { className: P + '__popover', role: 'dialog', 'aria-label': 'Calendario' },
          h('div', { className: P + '__header' },
            h('button', { type: 'button', className: P + '__nav', 'aria-label': 'Mes anterior', onClick: function () { shift(-1); } }, icon('arrowLeft', 20)),
            h('span', { className: P + '__month', 'aria-live': 'polite' }, MONTHS[view.getMonth()] + ' ' + view.getFullYear()),
            h('button', { type: 'button', className: P + '__nav', 'aria-label': 'Mes siguiente', onClick: function () { shift(1); } }, icon('arrowRight', 20))),
          h('div', { role: 'grid', className: P + '__grid', ref: gridRef, onKeyDown: onGridKey, 'aria-label': MONTHS[view.getMonth()] + ' ' + view.getFullYear() },
            h('div', { role: 'row', className: P + '__week' }, WEEK.map(function (d) { return h('div', { key: d, role: 'columnheader', className: P + '__wd' }, d); })),
            weeks)) : null));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputDatepicker = InputDatepicker;
})();

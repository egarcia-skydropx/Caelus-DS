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
  var P = 'cl-input-search';
  function InputSearch(props) {
    var v = useControlled(props.value, props.defaultValue, '');
    var ref = R.useRef(null);
    var rest = omit(props, ['size', 'className', 'style', 'value', 'defaultValue', 'onChange', 'onClear', 'clearLabel', 'placeholder']);
    var ph = props.placeholder != null ? props.placeholder : 'Buscar';
    return h('div', { className: cx(P, props.size === 'sm' && P + '--sm', props.disabled && P + '--disabled', props.className), style: props.style },
      h('div', { className: P + '__control' },
        h('span', { className: P + '__icon' }, icon('search', 18)),
        h('input', Object.assign({ 'aria-label': ph }, rest, {
          ref: ref, type: 'search', className: P + '__input', placeholder: ph, value: v[0],
          onChange: function (e) { v[1](e.target.value); if (props.onChange) props.onChange(e); }
        })),
        v[0] && !props.disabled ? h('button', { type: 'button', className: P + '__iconbtn', 'aria-label': props.clearLabel || 'Borrar búsqueda', onClick: function () { v[1](''); if (props.onClear) props.onClear(); if (ref.current) ref.current.focus(); } }, icon('x', 18)) : null));
  }
  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputSearch = InputSearch;
})();

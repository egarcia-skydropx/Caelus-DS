(function () {
  var React = window.React;
  var h = React.createElement;
  var seq = 0;

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
  function useUid(prefix) {
    if (React.useId) return prefix + React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    var r = React.useRef(null);
    if (r.current == null) r.current = prefix + (++seq);
    return r.current;
  }
  function svg(children) {
    return h.apply(null, ['svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }].concat(children));
  }
  function p(d) { return h('path', { d: d }); }
  var GLYPHS = {
    bold: function () { return svg([p('M4.5 3h4.2a2.5 2.5 0 010 5H4.5zM4.5 8h5a2.5 2.5 0 010 5h-5z')]); },
    italic: function () { return svg([p('M7 3h5M4 13h5M9.5 3l-3 10')]); },
    underline: function () { return svg([p('M4.5 2.5v5a3.5 3.5 0 007 0v-5M3.5 14h9')]); },
    strikethrough: function () { return svg([p('M2.5 8h11M11 4.5C10.4 3.3 9.3 2.7 8 2.7c-1.8 0-3 1-3 2.4M5 11.3c.6 1.3 1.7 2 3.1 2 1.8 0 3-1 3-2.5')]); },
    'align-left': function () { return svg([p('M3 4h10M3 7h6M3 10h10M3 13h6')]); },
    'align-center': function () { return svg([p('M3 4h10M5 7h6M3 10h10M5 13h6')]); },
    'align-right': function () { return svg([p('M3 4h10M7 7h6M3 10h10M7 13h6')]); },
    'align-justify': function () { return svg([p('M3 4h10M3 7h10M3 10h10M3 13h10')]); },
    'bullet-list': function () { return svg([p('M6 4.5h7.5M6 8h7.5M6 11.5h7.5M2.75 4.5h.01M2.75 8h.01M2.75 11.5h.01')]); },
    'numbered-list': function () { return svg([p('M6.5 4.5h7M6.5 8h7M6.5 11.5h7M2.5 3.5l1-.5v3M2.3 9.5c.3-.5 1.7-.6 1.7.3 0 .7-1.7 1.2-1.7 2h1.8')]); },
    image: function () { return svg([h('rect', { x: 1.75, y: 3, width: 12.5, height: 10, rx: 1.5 }), p('M1.75 11l3.5-3.5 3 3 2-2 4 4'), h('circle', { cx: 10.5, cy: 6, r: 0.9 })]); },
    link: function () { return svg([p('M6.8 9.2a2.8 2.8 0 004 0l2-2a2.8 2.8 0 00-4-4l-.8.8M9.2 6.8a2.8 2.8 0 00-4 0l-2 2a2.8 2.8 0 004 4l.8-.8')]); }
  };
  var GROUPS = [
    [['bold', 'Negrita'], ['italic', 'Cursiva'], ['underline', 'Subrayado'], ['strikethrough', 'Tachado']],
    [['align-left', 'Alinear a la izquierda'], ['align-center', 'Centrar'], ['align-right', 'Alinear a la derecha'], ['align-justify', 'Justificar'], ['bullet-list', 'Lista con viñetas'], ['numbered-list', 'Lista numerada']],
    [['image', 'Insertar imagen'], ['link', 'Insertar enlace']]
  ];
  function InfoGlyph(text) {
    return h('span', { className: 'cl-input-text__label-icon', role: 'img', 'aria-label': text, title: text },
      h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
        h('circle', { cx: 10, cy: 10, r: 7.5, stroke: 'currentColor', strokeWidth: 1.5 }),
        h('path', { d: 'M10 9v4.5M10 6.5v.01', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' })));
  }

  // InputTextarea — State from the Figma set "input-textarea" (❖ Forms), with the optional rich-text toolbar.
  function InputTextarea(props) {
    var state = props.state || (props.disabled ? 'disabled' : 'default');
    var isErr = state === 'error';
    var isDis = state === 'disabled';
    var auto = useUid('cl-input-textarea-');
    var inputId = props.id || auto;
    var helperId = inputId + '-helper';
    var describedBy = cx(props['aria-describedby'], props.helperText ? helperId : null) || undefined;
    var toolbar = props.toolbar !== false;
    var rest = omit(props, ['label', 'labelInfo', 'helperText', 'state', 'toolbar', 'onToolbarAction', 'resize', 'className', 'style', 'id', 'disabled', 'aria-describedby']);
    return h('div', { className: cx('cl-input-text', 'cl-input-textarea', isErr && 'cl-input-text--error', isErr && 'cl-input-textarea--error', isDis && 'cl-input-textarea--disabled', props.className), style: props.style },
      props.label ? h('div', { className: 'cl-input-text__label-row' },
        h('label', { className: 'cl-input-text__label', htmlFor: inputId }, props.label),
        props.labelInfo ? InfoGlyph(props.labelInfo) : null) : null,
      h('div', { className: 'cl-input-textarea__box' },
        toolbar ? h('div', { className: 'cl-input-textarea__toolbar', role: 'toolbar', 'aria-label': 'Formato de texto', 'aria-controls': inputId },
          GROUPS.map(function (group, gi) {
            var items = [h('div', { key: 'g' + gi, className: 'cl-input-textarea__group' },
              group.map(function (it) {
                return h('button', {
                  key: it[0], type: 'button', className: 'cl-input-textarea__tool', 'aria-label': it[1], title: it[1], disabled: isDis,
                  onClick: function () { if (props.onToolbarAction) props.onToolbarAction(it[0]); }
                }, GLYPHS[it[0]]());
              }))];
            if (gi < GROUPS.length - 1) items.push(h('span', { key: 's' + gi, className: 'cl-input-textarea__sep', 'aria-hidden': true }));
            return items;
          })) : null,
        h('div', { className: 'cl-input-textarea__area' },
          h('textarea', Object.assign({ rows: 7, placeholder: 'Escribe tu texto aquí' }, rest, {
            id: inputId,
            className: cx('cl-input-textarea__native', props.resize === false && 'cl-input-textarea__native--fixed'),
            disabled: isDis,
            'aria-invalid': isErr || undefined,
            'aria-describedby': describedBy
          })))),
      props.helperText ? h('p', { id: helperId, className: 'cl-input-text__helper cl-input-textarea__helper' }, props.helperText) : null);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputTextarea = InputTextarea;
})();

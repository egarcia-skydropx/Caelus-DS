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
  function icon(size, d) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      [].concat(d).map(function (x, i) { return typeof x === 'string' ? h('path', { key: i, d: x }) : x; }));
  }
  var Clip = function () { return icon(20, 'M18.4 11.1l-6.9 6.9a4.5 4.5 0 01-6.4-6.4l7.6-7.6a3 3 0 014.2 4.2l-7.4 7.4a1.5 1.5 0 01-2.1-2.1l6.5-6.5'); };
  var Photo = function () { return icon(20, [h('rect', { key: 'r', x: 3, y: 5, width: 18, height: 14, rx: 2 }), 'M3 16l5-5 4 4 3-3 6 6', h('circle', { key: 'c', cx: 15.5, cy: 9, r: 1.2 })]); };
  var Plane = function () { return icon(24, 'M6 12L3.3 3.8a.6.6 0 01.8-.7l16.6 8.3a.7.7 0 010 1.2L4.1 20.9a.6.6 0 01-.8-.7L6 12zm0 0h7.5'); };

  // InputChatroom — Chatroom-input states from the Figma set "input-chatroom" (❖ Forms).
  function InputChatroom(props) {
    var isDis = !!props.disabled;
    var controlled = props.value != null;
    var inner = React.useState(props.defaultValue || '');
    var text = controlled ? String(props.value) : inner[0];
    var rest = omit(props, ['value', 'defaultValue', 'onChange', 'onSend', 'onAttach', 'onAddImage', 'showAttach', 'showImage', 'sendLabel', 'attachLabel', 'imageLabel', 'className', 'style', 'disabled', 'onKeyDown']);
    var showAttach = props.showAttach !== false;
    var showImage = props.showImage !== false;

    function send() {
      if (!text.trim() || isDis) return;
      if (props.onSend) props.onSend(text);
      if (!controlled) inner[1]('');
    }
    return h('div', { className: cx('cl-input-chatroom', isDis && 'cl-input-chatroom--disabled', props.className), style: props.style },
      showAttach ? h('button', { type: 'button', className: 'cl-input-chatroom__icon', disabled: isDis, 'aria-label': props.attachLabel || 'Adjuntar archivo', title: props.attachLabel || 'Adjuntar archivo', onClick: props.onAttach }, Clip()) : null,
      showImage ? h('button', { type: 'button', className: 'cl-input-chatroom__icon', disabled: isDis, 'aria-label': props.imageLabel || 'Agregar imagen', title: props.imageLabel || 'Agregar imagen', onClick: props.onAddImage }, Photo()) : null,
      h('div', { className: 'cl-input-chatroom__field' },
        h('textarea', Object.assign({ rows: 1, placeholder: 'Escribe un mensaje…', 'aria-label': 'Mensaje' }, rest, {
          className: 'cl-input-chatroom__native',
          value: text,
          disabled: isDis,
          onChange: function (e) { if (!controlled) inner[1](e.target.value); if (props.onChange) props.onChange(e); },
          onKeyDown: function (e) {
            if (e.key === 'Enter' && !e.shiftKey && !(e.nativeEvent && e.nativeEvent.isComposing)) { e.preventDefault(); send(); }
            if (props.onKeyDown) props.onKeyDown(e);
          }
        }))),
      h('button', { type: 'button', className: 'cl-input-chatroom__send', disabled: isDis || !text.trim(), 'aria-label': props.sendLabel || 'Enviar mensaje', title: props.sendLabel || 'Enviar mensaje', onClick: send }, Plane()));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputChatroom = InputChatroom;
})();

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
  function CopyGlyph(done) {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      done
        ? h('path', { d: 'M4.5 10.5l3.5 3.5 7.5-8', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })
        : h('g', { stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round' },
          h('rect', { x: 6.5, y: 6.5, width: 10, height: 11, rx: 1.5 }),
          h('path', { d: 'M13.5 6.5V4a1.5 1.5 0 00-1.5-1.5H5A1.5 1.5 0 003.5 4v9A1.5 1.5 0 005 14.5h1.5' })));
  }

  // InputCode — Type from the Figma set "input-code" (❖ Forms): dark blocks for developer docs.
  function InputCode(props) {
    var type = props.type || 'token';
    var code = props.code != null ? String(props.code) : '';
    var copied = React.useState(false);
    var showCopy = props.showCopy != null ? props.showCopy : (type === 'post' || type === 'token');
    var rest = omit(props, ['type', 'code', 'params', 'showCopy', 'copyLabel', 'onCopy', 'requiredLabel', 'typeLabel', 'className', 'children']);

    function copy() {
      if (props.onCopy) props.onCopy(code);
      else if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code);
      copied[1](true);
      setTimeout(function () { copied[1](false); }, 1500);
    }

    var body;
    if (type === 'cuerpo') {
      var Badge = window.Caelus && window.Caelus.Badge;
      body = h('dl', { className: 'cl-input-code__params' }, (props.params || []).map(function (p, i) {
        return h('div', { key: i, className: 'cl-input-code__param' },
          h('dt', { className: 'cl-input-code__param-name' },
            h('span', null, p.name),
            p.required ? (Badge ? h(Badge, { theme: 'red', size: 'small' }, props.requiredLabel || 'Requerido') : h('span', null, ' (' + (props.requiredLabel || 'Requerido') + ')')) : null),
          h('dd', { className: 'cl-input-code__param-type' }, (props.typeLabel || 'Type') + ': ' + (p.type || 'string')));
      }));
    } else if (type === 'esquema') {
      body = h('pre', { className: 'cl-input-code__pre' }, h('code', null, code || props.children));
    } else {
      body = h('code', { className: cx('cl-input-code__code', type === 'token' && 'cl-input-code__code--single') }, code || props.children);
    }

    return h('div', Object.assign({}, rest, { className: cx('cl-input-code', 'cl-input-code--' + type, props.className) }),
      h('div', { className: 'cl-input-code__content' },
        body,
        showCopy ? h('button', {
          type: 'button',
          className: 'cl-input-code__copy',
          'aria-label': copied[0] ? 'Copiado' : (props.copyLabel || 'Copiar'),
          title: props.copyLabel || 'Copiar',
          onClick: copy
        }, CopyGlyph(copied[0])) : null),
      h('span', { className: 'cl-input-code__sr', 'aria-live': 'polite' }, copied[0] ? 'Copiado al portapapeles' : ''));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.InputCode = InputCode;
})();

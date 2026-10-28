(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) === -1) out[k] = obj[k];
    return out;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }
  function xIcon() {
    return h('svg', { viewBox: '0 0 18 18', width: 18, height: 18, fill: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M4.5 4.5l9 9M13.5 4.5l-9 9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }));
  }
  function btn(kind, a) {
    if (!a) return null;
    var Button = window.Caelus && window.Caelus.Button;
    return Button ? h(Button, { key: kind, type: kind, onClick: a.onClick, disabled: a.disabled }, a.label)
      : h('button', { key: kind, type: 'button', onClick: a.onClick, disabled: a.disabled }, a.label);
  }

  function EmptyDrawer(props) {
    var titleId = useId('cl-ed-title');
    var rest = omit(props, ['title', 'onClose', 'closeLabel', 'illustration', 'heading', 'description',
      'primaryAction', 'secondaryAction', 'className', 'children']);
    return h('aside', Object.assign({ className: cx('cl-empty-drawer', props.className), 'aria-labelledby': titleId }, rest),
      h('div', { className: 'cl-empty-drawer__heading' },
        h('h2', { id: titleId, className: 'cl-empty-drawer__title' }, props.title),
        props.onClose ? h('button', { type: 'button', className: 'cl-empty-drawer__close', 'aria-label': props.closeLabel || 'Cerrar', onClick: props.onClose }, xIcon()) : null),
      h('div', { className: 'cl-empty-drawer__panel' },
        h('div', { className: 'cl-empty-drawer__state' },
          props.illustration ? h('div', { className: 'cl-empty-drawer__illustration' }, props.illustration) : null,
          h('div', { className: 'cl-empty-drawer__content' },
            h('div', { className: 'cl-empty-drawer__text' },
              props.heading ? h('p', { className: 'cl-empty-drawer__state-title' }, props.heading) : null,
              props.description ? h('p', { className: 'cl-empty-drawer__state-desc' }, props.description) : null),
            props.primaryAction || props.secondaryAction ? h('div', { className: 'cl-empty-drawer__actions' },
              btn('secondary', props.secondaryAction), btn('primary', props.primaryAction)) : null),
          props.children)));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.EmptyDrawer = EmptyDrawer;
})();

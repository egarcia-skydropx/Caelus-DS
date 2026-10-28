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
  function renderAction(action, type) {
    if (!action) return null;
    var Button = window.Caelus && window.Caelus.Button;
    var p = { type: type, size: 'base', onClick: action.onClick, className: 'cl-empty-state__button' };
    return Button ? h(Button, p, action.label) : h('button', { type: 'button', onClick: action.onClick, className: 'cl-empty-state__button' }, action.label);
  }

  // EmptyState — Dispositivo × Plataforma from the Figma set "empty-states".
  function EmptyState(props) {
    var device = props.device || 'desktop';
    var Tag = props.titleAs || 'h2';
    var rest = omit(props, ['device', 'illustration', 'title', 'titleAs', 'children', 'primaryAction', 'secondaryAction', 'className']);
    var hasActions = props.primaryAction || props.secondaryAction;
    return h('section', Object.assign({}, rest, {
      className: cx('cl-empty-state', 'cl-empty-state--' + device, props.className)
    }),
      props.illustration ? h('div', { className: 'cl-empty-state__illustration', 'aria-hidden': true }, props.illustration) : null,
      h('div', { className: 'cl-empty-state__content' },
        h('div', { className: 'cl-empty-state__text' },
          props.title != null ? h(Tag, { className: 'cl-empty-state__title' }, props.title) : null,
          props.children != null ? h('p', { className: 'cl-empty-state__description' }, props.children) : null),
        hasActions ? h('div', { className: 'cl-empty-state__actions' },
          renderAction(props.secondaryAction, 'secondary'),
          renderAction(props.primaryAction, 'primary')) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.EmptyState = EmptyState;
})();

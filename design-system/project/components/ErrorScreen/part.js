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
    return Button ? h(Button, { type: type, size: 'base', onClick: action.onClick }, action.label)
      : h('button', { type: 'button', onClick: action.onClick }, action.label);
  }

  // ErrorScreen — Breakpoints from the Figma set "error-screen" (the internal ".ilustration" folds into `illustration`).
  function ErrorScreen(props) {
    var breakpoint = props.breakpoint || 'desktop';
    var rest = omit(props, ['breakpoint', 'code', 'title', 'children', 'illustration', 'primaryAction', 'secondaryAction', 'className']);
    var hasActions = props.primaryAction || props.secondaryAction;
    return h('main', Object.assign({}, rest, {
      className: cx('cl-error-screen', 'cl-error-screen--' + breakpoint, props.className)
    }),
      h('div', { className: 'cl-error-screen__inner' },
        h('div', { className: 'cl-error-screen__info' },
          props.code != null ? h('p', { className: 'cl-error-screen__code' }, props.code) : null,
          h('div', { className: 'cl-error-screen__text' },
            props.title != null ? h('h1', { className: 'cl-error-screen__title' }, props.title) : null,
            props.children != null ? h('div', { className: 'cl-error-screen__message' }, props.children) : null),
          hasActions ? h('div', { className: 'cl-error-screen__actions' },
            renderAction(props.secondaryAction, 'secondary'),
            renderAction(props.primaryAction, 'primary')) : null),
        props.illustration ? h('div', { className: 'cl-error-screen__illustration', 'aria-hidden': true }, props.illustration) : null));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ErrorScreen = ErrorScreen;
})();

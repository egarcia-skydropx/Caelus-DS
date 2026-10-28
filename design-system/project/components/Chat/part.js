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
  function svg(size, paths, filled) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }
  var ELLIPSIS = ['M6 12h.01', 'M12 12h.01', 'M18 12h.01'];
  var DOC = ['M7 3h7l5 5v13H7z', 'M14 3v5h5'];
  var DOWNLOAD = ['M12 4v11', 'M7 10l5 5 5-5', 'M5 20h14'];

  // internal .chat-button-more: tertiary icon button + dropdown menu.
  function ChatMore(props) {
    var st = React.useState(false);
    var open = st[0];
    var setOpen = st[1];
    var Button = window.Caelus && window.Caelus.Button;
    var menuRef = React.useRef(null);
    React.useEffect(function () {
      if (open && menuRef.current) {
        var first = menuRef.current.querySelector('[role="menuitem"]');
        if (first) first.focus();
      }
    }, [open]);
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    var trigger = {
      'aria-label': props.label || 'Más acciones',
      'aria-haspopup': 'menu',
      'aria-expanded': open ? 'true' : 'false',
      onClick: function () { setOpen(!open); }
    };
    return h('div', { className: cx('cl-chat__more', 'cl-chat__more--' + props.side), onKeyDown: onKey },
      Button ? h(Button, Object.assign({ type: 'tertiary', shape: 'square', icon: svg(18, ELLIPSIS) }, trigger))
        : h('button', Object.assign({ type: 'button' }, trigger), svg(18, ELLIPSIS)),
      open ? h('div', { className: 'cl-chat__menu', role: 'menu', ref: menuRef },
        props.actions.map(function (a, i) {
          return h('button', {
            key: i, type: 'button', role: 'menuitem', className: 'cl-chat__menu-item',
            onClick: function (e) { setOpen(false); if (a.onClick) a.onClick(e); }
          }, a.label);
        })) : null);
  }

  // internal .chat-bubble: Usuario (agent | client) × Mensaje (text, attachment, link).
  function Bubble(m, i) {
    var from = m.from === 'client' ? 'client' : 'agent';
    var avatar = h('div', { className: 'cl-chat__avatar', 'aria-hidden': true }, m.avatar || (m.author ? String(m.author).charAt(0) : ''));
    var att = m.attachment;
    var link = m.link;
    var bubble = h('div', { className: 'cl-chat__bubble' },
      h('div', { className: 'cl-chat__header' },
        m.author != null ? h('span', { className: 'cl-chat__author' }, m.author) : null,
        m.time != null ? h('span', { className: 'cl-chat__time' }, m.time) : null),
      att ? h('a', { className: 'cl-chat__file', href: att.href || '#', download: att.href ? '' : undefined, onClick: att.onClick },
        h('span', { className: 'cl-chat__file-info' },
          h('span', { className: 'cl-chat__file-name' }, svg(24, DOC), h('span', null, att.name)),
          att.meta != null ? h('span', { className: 'cl-chat__file-meta' }, att.meta) : null),
        h('span', { className: 'cl-chat__file-download' }, svg(24, DOWNLOAD), h('span', { className: 'cl-chat__sr' }, 'Descargar'))) : null,
      link ? h('a', { className: 'cl-chat__preview', href: link.url, target: '_blank', rel: 'noopener noreferrer' },
        link.image ? h('span', { className: 'cl-chat__preview-img' }, link.image) : null,
        link.title != null ? h('span', { className: 'cl-chat__preview-title' }, link.title) : null,
        link.domain != null ? h('span', { className: 'cl-chat__preview-domain' }, link.domain) : null) : null,
      link ? h('a', { className: 'cl-chat__link', href: link.url, target: '_blank', rel: 'noopener noreferrer' }, link.url) : null,
      m.text != null ? h('p', { className: 'cl-chat__text' }, m.text) : null,
      m.status != null ? h('p', { className: 'cl-chat__status' }, m.status) : null);
    var group = h('div', { className: 'cl-chat__group' },
      from === 'agent' ? avatar : null, bubble, from === 'client' ? avatar : null);
    var more = m.actions && m.actions.length ? h(ChatMore, { side: from === 'agent' ? 'left' : 'right', actions: m.actions, label: m.actionsLabel }) : null;
    return h('li', { key: m.id != null ? m.id : i, className: cx('cl-chat__row', 'cl-chat__row--' + from) },
      from === 'client' ? more : null, group, from === 'agent' ? more : null);
  }

  // Chat — standalone "chat" component; its slot holds .chat-bubble instances.
  function Chat(props) {
    var rest = omit(props, ['messages', 'className']);
    var messages = props.messages || [];
    return h('div', Object.assign({ role: 'log', 'aria-live': 'polite' }, rest, { className: cx('cl-chat', props.className) }),
      h('ol', { className: 'cl-chat__list' }, messages.map(Bubble)));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Chat = Chat;
})();

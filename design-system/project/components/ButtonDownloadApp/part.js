(function () {
  var h = window.React.createElement;

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
  var STORE_NAMES = { appstore: 'App Store', googleplay: 'Google Play' };

  // ButtonDownloadApp — Device (AppStore / Google Play) from the Figma set "button-download-app".
  function ButtonDownloadApp(props) {
    var store = props.store || 'appstore';
    var rest = omit(props, ['store', 'badge', 'caption', 'storeName', 'className', 'children']);
    var tag = props.href ? 'a' : 'button';
    var extra = tag === 'button' ? { type: 'button' } : {};
    return h(tag, Object.assign(extra, rest, {
      className: cx('cl-button-download-app', 'cl-button-download-app--' + store, props.className)
    }),
      props.badge ? h('span', { className: 'cl-button-download-app__badge', 'aria-hidden': true }, props.badge) : null,
      h('span', { className: 'cl-button-download-app__text' },
        h('span', { className: 'cl-button-download-app__caption' }, props.caption == null ? 'Descárgala en' : props.caption),
        h('span', { className: 'cl-button-download-app__store' }, props.storeName || STORE_NAMES[store] || store)));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonDownloadApp = ButtonDownloadApp;
})();

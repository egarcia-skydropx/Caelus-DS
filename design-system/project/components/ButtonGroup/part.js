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
  var counter = 0;
  function useStableId() {
    if (React.useId) return React.useId();
    var ref = React.useRef(null);
    if (ref.current == null) ref.current = 'cl-bg-' + (++counter);
    return ref.current;
  }

  // ButtonGroup — Type (group, With stat, Only Icon, With save, With tooltip) from the Figma set "button-group".
  function ButtonGroup(props) {
    var items = props.items || [];
    var base = useStableId();
    var rest = omit(props, ['items', 'className']);
    return h('div', Object.assign({ role: 'group' }, rest, { className: cx('cl-button-group', props.className) }),
      items.map(function (item, i) {
        var key = item.key != null ? item.key : i;
        var iconOnly = item.icon && item.label == null;
        var cls = cx('cl-button-group__item', iconOnly && 'cl-button-group__item--icon',
          item.stat && 'cl-button-group__item--stat', item.selected && 'cl-button-group__item--selected');
        var content = [
          item.icon ? h('span', { key: 'i', className: 'cl-button-group__icon', 'aria-hidden': true }, item.icon) : null,
          item.label != null ? h('span', { key: 't' }, item.label) : null
        ];
        if (item.stat) return h('span', { key: key, className: cls }, content);
        var tipId = item.tooltip ? base + '-tip-' + i : undefined;
        var btn = h('button', {
          key: 'b', type: 'button', className: cls, onClick: item.onClick, disabled: item.disabled,
          'aria-label': item['aria-label'], 'aria-pressed': item.selected != null ? !!item.selected : undefined,
          'aria-describedby': tipId
        }, content);
        if (!item.tooltip) return h(React.Fragment, { key: key }, btn);
        return h('span', { key: key, className: 'cl-button-group__tip-wrap' }, btn,
          h('span', { id: tipId, role: 'tooltip', className: 'cl-button-group__tooltip' }, item.tooltip));
      }));
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ButtonGroup = ButtonGroup;
})();

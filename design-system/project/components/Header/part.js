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
  function Svg(d, size) {
    return h('svg', { width: size, height: size, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: d, stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  var uid = 0;

  // Header — "headers" (Breakpoints = Desktop | Mobile): page title, description,
  // actions, tabs, table search (base/input-search-tables) and filter button.
  function Header(props) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = 'cl-header-' + (++uid);
    var breakpoint = props.breakpoint || 'desktop';
    var Title = props.titleAs || 'h1';
    var search = props.search;
    var rest = omit(props, ['title', 'titleAs', 'description', 'actions', 'iconActions', 'tabs', 'search', 'onFilterClick',
      'filterLabel', 'filterCount', 'breakpoint', 'className', 'children']);

    var searchEl = search ? h('form', {
      role: 'search',
      className: 'cl-header__search',
      onSubmit: function (e) { e.preventDefault(); if (search.onSubmit) search.onSubmit(search.value); }
    },
      h('input', {
        type: 'search', value: search.value, placeholder: search.placeholder || 'Busca por nombre o número de rastreo',
        'aria-label': search.label || search.placeholder || 'Buscar',
        onChange: function (e) { if (search.onChange) search.onChange(e.target.value); }
      }),
      h('button', { type: 'submit', className: 'cl-header__search-btn', 'aria-label': search.buttonLabel || 'Buscar' },
        Svg('M15.5 15.5l-3.6-3.6M13 8A5 5 0 113 8a5 5 0 0110 0z', 18))) : null;

    var filterEl = props.onFilterClick ? h('button', { type: 'button', className: 'cl-header__filter', onClick: props.onFilterClick },
      Svg('M3 6h12M3 12h12M7 4v4M11 10v4', 18),
      h('span', null, props.filterLabel || 'Filtros'),
      props.filterCount ? h('span', { className: 'cl-header__filter-count' }, '(' + props.filterCount + ')') : null) : null;

    var tools = (searchEl || filterEl) ? h('div', { className: 'cl-header__tools' }, searchEl, filterEl) : null;
    var tabs = props.tabs ? h('div', { className: 'cl-header__tabs' }, props.tabs) : null;

    return h('header', Object.assign({ 'aria-labelledby': idRef.current }, rest, {
      className: cx('cl-header', 'cl-header--' + breakpoint, props.className)
    }),
      h('div', { className: 'cl-header__intro' },
        h('div', { className: 'cl-header__titlebar' },
          h(Title, { id: idRef.current, className: 'cl-header__title' }, props.title),
          (props.actions || props.iconActions) ? h('div', { className: 'cl-header__actions' },
            props.actions,
            props.actions && props.iconActions ? h('span', { className: 'cl-header__divider', 'aria-hidden': true }) : null,
            props.iconActions) : null),
        props.description ? h('p', { className: 'cl-header__description' }, props.description) : null),
      (tabs || tools) ? h('div', { className: 'cl-header__bar' },
        breakpoint === 'mobile' ? [tools && h('div', { key: 't' }, tools), tabs && h('div', { key: 'n' }, tabs)] : [tabs && h('div', { key: 'n' }, tabs), tools && h('div', { key: 't', className: 'cl-header__tools-wrap' }, tools)]) : null,
      props.children);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Header = Header;
})();

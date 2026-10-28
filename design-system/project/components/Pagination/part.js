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
  function Svg(d, size, sw) {
    return h('svg', { width: size, height: size, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
      h('path', { d: d, stroke: 'currentColor', strokeWidth: sw || 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  function Dots() {
    return h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'currentColor', 'aria-hidden': true },
      h('circle', { cx: 9, cy: 4, r: 1.25 }), h('circle', { cx: 9, cy: 9, r: 1.25 }), h('circle', { cx: 9, cy: 14, r: 1.25 }));
  }
  var uid = 0;

  // Pagination — "pagination" (State = Default | Partial selection | Select All,
  // Breakpoint = Desktop | Mobile). Table toolbar with selection, sort, range
  // and previous/next. Folds .buttons-arrows, .text, .icons, .button-circular, .more.
  function Pagination(props) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = 'cl-pag-' + (++uid);
    var cbRef = React.useRef(null);
    var page = props.page || 1;
    var pageSize = props.pageSize || 20;
    var total = props.total || 0;
    var pages = Math.max(1, Math.ceil(total / pageSize));
    var from = total ? (page - 1) * pageSize + 1 : 0;
    var to = Math.min(total, page * pageSize);
    var selection = props.selection || 'none';
    var breakpoint = props.breakpoint || 'desktop';
    var ofLabel = props.ofLabel || 'de';

    React.useEffect(function () { if (cbRef.current) cbRef.current.indeterminate = selection === 'partial'; }, [selection]);

    var rest = omit(props, ['page', 'pageSize', 'total', 'onPageChange', 'selection', 'onSelectAllChange', 'selectLabel',
      'showSelectAll', 'actions', 'selectionText', 'selectionAction', 'onSortClick', 'sortLabel', 'sortIcon', 'onMoreClick',
      'moreLabel', 'breakpoint', 'ofLabel', 'prevLabel', 'nextLabel', 'navLabel', 'className']);

    function go(p) { if (props.onPageChange && p >= 1 && p <= pages && p !== page) props.onPageChange(p); }

    var left = h('div', { className: 'cl-pagination__left' },
      props.showSelectAll !== false ? h('div', { className: 'cl-pagination__select' },
        h('span', { className: 'cl-pagination__box' },
          h('input', { ref: cbRef, id: idRef.current + '-all', type: 'checkbox', checked: selection === 'all',
            onChange: function (e) { if (props.onSelectAllChange) props.onSelectAllChange(e.target.checked); } }),
          h('span', { className: 'cl-pagination__mark', 'aria-hidden': true },
            selection === 'partial' ? Svg('M5 9h8', 12, 2) : Svg('M4.5 9.5l3 3 6-7', 12, 2))),
        h('label', { htmlFor: idRef.current + '-all' }, props.selectLabel || 'Seleccionar')) : null,
      props.actions ? h('span', { className: 'cl-pagination__divider', 'aria-hidden': true }) : null,
      props.actions ? h('div', { className: 'cl-pagination__actions' }, props.actions) : null,
      selection !== 'none' && (props.selectionText || props.selectionAction) && breakpoint === 'desktop'
        ? h('p', { className: 'cl-pagination__selection', 'aria-live': 'polite' },
          props.selectionText,
          props.selectionAction ? h('button', { type: 'button', className: 'cl-pagination__link', onClick: props.selectionAction.onClick }, props.selectionAction.label) : null)
        : null);

    var right = h('div', { className: 'cl-pagination__right' },
      props.onSortClick ? h('div', { className: 'cl-pagination__sort' },
        h('button', { type: 'button', className: 'cl-pagination__circle cl-pagination__circle--lg', onClick: props.onSortClick, 'aria-label': props.sortLabel || 'Ordenar' },
          props.sortIcon || Svg('M3 5h9M3 9h6M3 13h4M14 6v8m0-8l-2 2m2-2l2 2', 15)),
        h('span', { className: 'cl-pagination__divider cl-pagination__divider--tall', 'aria-hidden': true })) : null,
      h('nav', { className: 'cl-pagination__nav', 'aria-label': props.navLabel || 'Paginación' },
        h('span', { className: 'cl-pagination__range', 'aria-current': 'page', 'aria-live': 'polite' },
          from + '-' + to + ' ' + ofLabel + ' ' + total),
        h('div', { className: 'cl-pagination__arrows' },
          h('button', { type: 'button', className: 'cl-pagination__circle', disabled: page <= 1, onClick: function () { go(page - 1); },
            'aria-label': props.prevLabel || 'Página anterior' }, Svg('M11 4.5L6.5 9l4.5 4.5', 11, 2)),
          h('button', { type: 'button', className: 'cl-pagination__circle', disabled: page >= pages, onClick: function () { go(page + 1); },
            'aria-label': props.nextLabel || 'Página siguiente' }, Svg('M7 4.5L11.5 9 7 13.5', 11, 2)))),
      props.onMoreClick ? h('button', { type: 'button', className: 'cl-pagination__more', onClick: props.onMoreClick, 'aria-label': props.moreLabel || 'Más opciones' }, h(Dots)) : null);

    var mobileSel = selection !== 'none' && (props.selectionText || props.selectionAction) && breakpoint === 'mobile'
      ? h('p', { className: 'cl-pagination__selection', 'aria-live': 'polite' },
        props.selectionText,
        props.selectionAction ? h('button', { type: 'button', className: 'cl-pagination__link', onClick: props.selectionAction.onClick }, props.selectionAction.label) : null)
      : null;

    return h('div', Object.assign({}, rest, { className: cx('cl-pagination', 'cl-pagination--' + breakpoint, props.className) }),
      left, mobileSel, right);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Pagination = Pagination;
})();

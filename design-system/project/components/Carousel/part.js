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
  function chevron(dir) {
    return h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      h('path', { d: dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7' }));
  }

  // Carousel — Vista × Indicadores from the Figma set "carousel".
  function Carousel(props) {
    var view = props.view || 'desktop';
    var indicators = props.indicators || 'none';
    var slides = React.Children.toArray(props.children);
    var perView = view === 'mobile' ? 1 : Math.max(1, props.perView || 3);
    var pages = Math.max(1, slides.length - perView + 1);
    var controlled = props.index != null;
    var st = React.useState(props.defaultIndex || 0);
    var index = Math.min(controlled ? props.index : st[0], pages - 1);
    function go(i) {
      var next = (i + pages) % pages;
      if (!controlled) st[1](next);
      if (props.onIndexChange) props.onIndexChange(next);
    }
    var rest = omit(props, ['view', 'indicators', 'perView', 'index', 'defaultIndex', 'onIndexChange', 'children', 'className', 'prevLabel', 'nextLabel']);
    var Button = window.Caelus && window.Caelus.Button;
    function navButton(dir) {
      var label = dir === 'prev' ? (props.prevLabel || 'Anterior') : (props.nextLabel || 'Siguiente');
      var onClick = function () { go(index + (dir === 'prev' ? -1 : 1)); };
      return Button
        ? h(Button, { type: 'secondary', size: 'xs', shape: 'square', icon: chevron(dir), 'aria-label': label, onClick: onClick, className: 'cl-carousel__nav' })
        : h('button', { type: 'button', 'aria-label': label, onClick: onClick, className: 'cl-carousel__nav' }, chevron(dir));
    }
    var dots = indicators !== 'none' && pages > 1 ? h('div', { className: 'cl-carousel__dots' },
      Array.from({ length: pages }, function (_, i) {
        return h('button', {
          key: i, type: 'button', className: 'cl-carousel__dot',
          'aria-label': 'Ir a la diapositiva ' + (i + 1),
          'aria-current': i === index ? 'true' : undefined,
          onClick: function () { go(i); }
        });
      })) : null;
    var track = h('div', { className: 'cl-carousel__track', 'aria-live': 'polite' },
      slides.map(function (child, i) {
        var visible = i >= index && i < index + perView;
        return h('div', {
          key: i, className: 'cl-carousel__slide', role: 'group', 'aria-roledescription': 'diapositiva',
          'aria-label': (i + 1) + ' de ' + slides.length, hidden: !visible
        }, child);
      }),
      indicators === 'overlay' ? dots : null);

    var body;
    if (indicators === 'below') {
      body = [h('div', { key: 't', className: 'cl-carousel__row' }, track),
        h('div', { key: 'c', className: 'cl-carousel__controls' }, navButton('prev'), dots, navButton('next'))];
    } else if (view === 'mobile') {
      body = [h('div', { key: 't', className: 'cl-carousel__row' }, track,
        h('div', { className: 'cl-carousel__overlay-nav' }, navButton('prev'), navButton('next')))];
    } else {
      body = [h('div', { key: 't', className: 'cl-carousel__row' }, navButton('prev'), track, navButton('next'))];
    }
    return h('div', Object.assign({ role: 'region', 'aria-roledescription': 'carrusel' }, rest, {
      className: cx('cl-carousel', 'cl-carousel--' + view, 'cl-carousel--dots-' + indicators, props.className)
    }), body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.Carousel = Carousel;
})();

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

  var DEFAULT_COLUMNS = [
    [
      { label: 'En creación', color: 'blue', description: 'El envío está en proceso de ser creado.' },
      { label: 'Creado', color: 'primary', description: 'El envío se ha creado y el paquete será recogido por la paquetería o entregado en una sucursal.' },
      { label: 'Recolectado', color: 'indigo', description: 'El paquete ha sido recogido por la paquetería o entregado en una sucursal.' },
      { label: 'En camino', color: 'indigo', description: 'El envío está recorriendo su ruta de entrega.' },
      { label: 'Por llegar', color: 'indigo', description: 'El paquete se encuentra cerca de la dirección de destino.' },
      { label: 'Intento de entrega', color: 'indigo', description: 'El paquete aún no se ha podido entregar en la dirección de destino.' },
      { label: 'Entregado', color: 'green', description: 'El paquete fue recibido en la dirección de destino.' },
      { label: 'Entregado en sucursal', color: 'green', description: 'El paquete fue recogido por el destinatario en una sucursal de la paquetería.' }
    ],
    [
      { label: 'Error en creación', color: 'red', description: 'El envío no pudo crearse y tus créditos serán reembolsados.' },
      { label: 'Incidencia', color: 'red', description: 'El envío presenta un problema detectado por la paquetería.' },
      { label: 'En devolución', color: 'red', description: 'Tu paquete será devuelto a su origen porque no pudo entregarse o fue rechazado por el destinatario. Contacta a la paquetería.' },
      { label: 'Cancelado', color: 'orange', description: 'Tu envío fue cancelado correctamente.' }
    ]
  ];

  function StatusList(p) {
    return h('ul', { className: 'cl-modal-status-delivery__list' },
      p.items.map(function (it, i) {
        return h('li', { key: i, className: cx('cl-modal-status-delivery__item', 'cl-modal-status-delivery__item--' + (it.color || 'indigo')) },
          h('span', { className: 'cl-modal-status-delivery__dot', 'aria-hidden': 'true' }, h('span', null)),
          h('div', { className: 'cl-modal-status-delivery__text' },
            h('p', { className: 'cl-modal-status-delivery__label' }, it.label),
            it.description ? h('p', { className: 'cl-modal-status-delivery__desc' }, it.description) : null));
      }));
  }

  function ModalStatusDelivery(props) {
    var Modal = window.Caelus && window.Caelus.Modal;
    var columns = props.columns || DEFAULT_COLUMNS;
    var rest = omit(props, ['columns', 'closeActionLabel', 'children', 'className']);
    var body = h('div', { className: 'cl-modal-status-delivery__body' },
      columns.map(function (col, i) { return h(StatusList, { key: i, items: col }); }),
      props.children);
    var modalProps = Object.assign({
      type: 'informativo',
      title: 'Significado de los estatus',
      width: 924,
      separator: true,
      className: cx('cl-modal-status-delivery', props.className),
      bodyClassName: 'cl-modal-status-delivery__content',
      primaryAction: { label: props.closeActionLabel || 'Cerrar', onClick: props.onClose }
    }, rest);
    if (!Modal) return h('div', { role: 'dialog' }, body);
    return h(Modal, modalProps, body);
  }

  window.__CaelusParts = window.__CaelusParts || {};
  window.__CaelusParts.ModalStatusDelivery = ModalStatusDelivery;
})();

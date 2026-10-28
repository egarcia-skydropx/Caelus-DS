# CardHistorialEnvios

Fila en forma de card para el historial de envíos: reúne fecha, autor, paquetería, rastreo, destino, entrega, precio y acciones de una guía.

## Cuándo usarlo
- En el listado del historial de envíos, una card por guía.
- Cuando el usuario necesita descargar la guía, ver el detalle o copiar el rastreo sin salir de la lista.
- No la uses para órdenes de e-commerce sin guía: para eso está `CardOrdenes`.

## Qué pasa el consumidor
- `type`: `default`, `sin-proteccion`, `con-convenio`, `ordenes`, `cancelado` o `error`.
- `breakpoint`: `desktop` (fila horizontal) o `mobile` (columna con botón “Descargar guía”).
- Datos: `date`, `author`, `orderNumber`, `platformIcon`, `status`, `carrier { logo, name, service }`, `tracking`, `destination { name, detail }`, `eta`, `price`, `convenioLabel`, `services`.
- Acciones: `onDownload`, `onView`, `onMore`, `onCopyTracking`, y `selected` + `onSelect` para el checkbox.
- Los logos llegan como `ReactNode`. Sin logo se ve una caja neutra de `core-surface-gray-light-100`.

## Estados
- `cancelado`: sin botón de descarga.
- `error`: rastreo “Error en creación” en `core-text-minimal-gray400`, triángulo rojo en el encabezado, sin descarga y servicios en gris (“Sin Protección”, “Sin Rastreo”).
- `con-convenio`: el precio se cambia por “Con convenio” en `convenio-palette-600`.
- `ordenes`: el encabezado muestra “Núm. de orden” en lugar del autor.

## Do / Don't
- Haz: deja el botón primario (descargar) como única acción naranja de la fila.
- No hagas: meter más de tres acciones visibles; las demás van en el menú de más opciones.
- Haz: pasa el `aria-label` del checkbox si la lista tiene otro contexto (por defecto “Seleccionar envío”).

## Notas de la fuente
- Figma: set `card-historial-envios` (5579:12956), página ❖ Cards (5572:11171). Usa los subcomponentes `.header-historial-envios`, `.rastreo`, `.destino`, `.entrega-estimada`, `.botones` y `.extras`, aquí integrados.
- La sombra de la card (dos sombras de 2 y 3px) coincide con `shadow`.
- Algunos textos en Figma usan variables con nombres sueltos (`gray/900`, `white`); aquí se mapean a `core-text-primary-gray900` y `core-surface-light-white`, que tienen el mismo valor.
- `core-text-minimal-gray400` sobre blanco da unos 2.5:1 y `convenio-palette-600` unos 4:1: menos de 4.5:1 para texto de 14px.
- El icono del rayo (automatización) y el de convenio son glifos genéricos, no los de Figma.

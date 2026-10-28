# DrawerHistorial

Panel lateral con el desglose completo de un envío del historial: estatus, rastreo, costos, direcciones y paquete, sin salir de la pantalla principal.

## Cuándo usarlo
- Al abrir un envío desde el historial de transacciones (usuario o administrador).
- Para mostrar alertas críticas del envío (incidencia, error en creación) junto a su contexto.

## Qué pasa el consumidor
- `status`: estado del envío (ver `Estados`).
- `title`, `onClose`, `closeLabel`.
- `carrierName`, `onTrack`, `trackLabel`: botón secundario "Rastrear en {paquetería}".
- `alert`: por ejemplo `<Alert color="danger">` en `incidencia`.
- `events`: eventos de rastreo `{ title, date }`.
- `statusDescription`, `statusDate`: para `en-creacion`, `error-en-creacion` y `cancelado`.
- `details`, `charges`, `total`: filas `{ label, value, tone, icon }` en una lista de definiciones (`dl`).
- `origin`, `destination`: `{ name, address, phone, email }`; `packageInfo`: `{ dimensions, weight }`. Cada sección es plegable con un botón que lleva `aria-expanded`.
- El resto de props va al `aside`, que se nombra con el título.

## Estados
- Flujo con `StatusRecord`: `creado`, `recolectado`, `en-camino`, `por-llegar`, `entregado`, `incidencia`, `en-devolucion`; `error-en-camino` se muestra como `incidencia`.
- Etiqueta de estatus sin línea de progreso: `en-creacion` (azul), `error-en-creacion` (rojo, con ícono; el botón de rastreo se deshabilita), `cancelado` (naranja).
- Mobile: el panel ocupa el 100% del ancho disponible (376px en Figma).

## Do / Don't
- Do: deja que el cuerpo tenga scroll propio; el encabezado no debe desaparecer del contexto.
- Do: muestra la alerta crítica arriba, junto al estatus.
- Don't: metas acciones destructivas dentro del drawer sin confirmación.
- Don't: muestres todos los eventos sin límite; la lista de rastreo tiene alto máximo y scroll.

## Notas de la fuente
- Figma: set `drawer-historial ` (7340:39285, con espacio al final, versión Pro) y set `drawer-historial` (7340:40730, versión Solo Envíos) en ❖ Drawer. Tienen las mismas 13 variantes y el mismo contenido; solo cambian los colores de tema (morado en Pro, azul en SE), que aquí resuelven los tokens de tema. Se unieron en este componente.
- Diferencias de contenido entre los dos sets: en SE la variante `Creado` incluye datos de paquetería; en Pro la variante `Error en creación` repite el bloque de información con el rastreo en gris ("Error en creación"). Se cubren con `details` y `tone: 'muted'`.
- El título usa `#000000` sin variable de tema; se usó `core-theme-dark-black` (mismo hex).
- Varias variables vienen con nombres cortos (`gray/50`, `gray/200`, `gray/900`, `white`, `primary/600`); se mapearon a `core-gray-50`, `core-gray-200`, `core-gray-900`, `white`, `core-primary-600`.
- El ícono de las secciones usa `icon-background` color "Secondary": fondo `core-surface-secondary-light-100`; el color del ícono (`core-theme-secondary-contrast-600`) es una suposición, no se leyó del vector.
- El logo de la paquetería (`#4a2681` en FedEx) es un asset de marca y se recibe como `icon`.
- La variante `Mobile` de Figma no se construyó aparte; el panel es fluido.

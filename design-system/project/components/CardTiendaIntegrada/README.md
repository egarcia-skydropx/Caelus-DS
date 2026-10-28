# CardTiendaIntegrada

Card que muestra una tienda o API conectada a Skydropx: plataforma, nombre, URL, fecha de conexión y estatus.

## Cuándo usarlo
- En la sección de integraciones, una card por tienda conectada.
- Cuando el usuario necesita ver qué tiendas están activas o cuáles piden actualizar permisos.

## Qué pasa el consumidor
- `ecommerce`: `shopify`, `woocommerce` o `api-key` (solo pone el nombre por defecto).
- `status`: `activada` (badge verde), `desactivada` (gris) o `actualizar-permisos` (amarillo). Usa `Caelus.Badge` small.
- `version`: `desktop` (fila) o `mobile` (columna).
- Datos: `logo`, `platform`, `storeName`, `url`, `href`, `connectedAt`.
- `onMenu` y `menuLabel` para el botón de más opciones (abre un menú; tiene `aria-haspopup="menu"`).

## Estados
- En `api-key`, la llave se muestra enmascarada en `core-text-minimal-gray400` y nunca como enlace.

## Do / Don't
- Haz: agrupa las cards por tipo (marketplaces, e-commerce, API).
- No hagas: mostrar la API key completa; enmascárala antes de pasarla.
- Haz: si el estatus es “Actualizar permisos”, ofrece la acción en el menú.

## Notas de la fuente
- Figma: set `card-tienda-integrada` (647:2273), página ❖ Cards (5572:11171). Integra `.status-tiendas`.
- Los textos usan la variable suelta `gray/900`; se mapea a `core-text-primary-gray900` (mismo valor).
- El botón de opciones es un cuadro de 24px con `core-surface-gray-light-100`: su área táctil queda bajo los 44px recomendados en móvil.
- El color de la API key en gris es inferido de la captura; `core-text-minimal-gray400` no llega a 4.5:1.

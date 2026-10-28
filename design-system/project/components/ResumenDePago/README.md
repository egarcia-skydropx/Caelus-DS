# ResumenDePago

Card de la paquetería elegida dentro del resumen de pago (México): junta servicio, entrega, recolección, precio y características antes de pagar.

## Cuándo usarlo
- En el panel lateral del resumen de pago, justo antes de confirmar el envío.
- Para comparar opciones en la búsqueda usa `CardPaqueteriasCotizador`.

## Qué pasa el consumidor
- `type`: `normal` (muestra precio) o `convenio` (muestra “Con convenio” y el alias).
- `breakpoint`: `desktop` o `mobile`.
- Datos: `carrier { logo, name }`, `eta`, `pickup { title, detail, tooltip }`, `price`, `convenioAlias`, `features`.

## Do / Don't
- Haz: muestra el mismo precio que el usuario verá cobrado; no lo redondees.
- No hagas: añadir botones aquí; la acción de pagar vive fuera de la card.

## Notas de la fuente
- Figma: set `mx-resumen-de-pago` (5602:7073), página ❖ Cards (5572:11171). Integra `.paqueteria-servicio`, `.tipo-recoleccion`, `Precio` y `.extras`.
- A diferencia de las otras cards no tiene sombra: borde de 1px `core-theme-gray-lighter-200`.
- El precio usa la variable suelta `text/primary-gray900`; se mapea a `core-text-primary-gray900`.
- `convenio-palette-600` y `core-text-minimal-gray400` quedan bajo 4.5:1 sobre blanco.

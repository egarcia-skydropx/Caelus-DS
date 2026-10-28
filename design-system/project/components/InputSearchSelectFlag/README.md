# InputSearchSelectFlag

Selector de país más buscador de C. P. o direcciones guardadas, creado para origen y destino en el cotizador.

## Cuándo usarlo

- Capturar origen o destino de un envío cuando importa el país y el código postal.
- Cuando el usuario puede reutilizar direcciones guardadas.

## Qué pasa el consumidor

- `label`, `info`, `helperText`, `error`, `disabled`.
- `countries`: `{ value, label, name?, flag? }[]`; `label` es el código visible ("MX"), `name` el nombre que leen los lectores de pantalla.
- `country` / `defaultCountry` / `onCountryChange`, `countryLabel` (default "País").
- `options`: resultados; `saved: true` muestra el icono de dirección guardada en la lista y en el campo.
- El resto de props de `InputSearchSelect` (`value`, `onChange`, `placeholder`, `minChars`…).

## Estados

Default, Active + Dropdown, Typing, Value, Error. El país usa fondo `core-surface-gray-lighter-50` y esquinas izquierdas; el buscador, esquinas derechas.

## Do / Don't

- Do: úsalo siempre que necesites precisión geográfica (cotizar, crear guías).
- Do: muestra primero las direcciones guardadas.
- Don't: lo uses fuera de flujos de dirección; para búsquedas generales usa `InputSearchSelect`.

## Notas de la fuente

- El selector de país es un `<select>` nativo invisible sobre la bandera y el código, así funciona con teclado y lector de pantalla.
- Banderas: caja neutra 28×20 (`--radius-2`); no se copia el arte de Figma.
- El placeholder en Figma usa la variable `inputField/normal/placeholder`, que no existe en tokens; se usa `core-text-secondary-gray500`.
- Figma solo tiene modo claro (`Dark mode=no`).
- Se apoya en `InputSearchSelect` en tiempo de render.

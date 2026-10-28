# InputSlider

Barra deslizante para elegir un valor o un rango arrastrando, cuando importa más explorar que la precisión exacta.

## Cuándo usarlo
- Filtrar resultados por rangos: precio de la guía, peso del paquete, días de entrega.
- Ajustes relativos como volumen o intensidad.
- Si el número exacto importa, combínalo con un input o usa `InputCounter`.

## Qué pasa el consumidor
- `type`: `value`, `range` (dos thumbs, valor `[desde, hasta]`), `volume` (iconos a los lados) o `with-data` (marcas debajo).
- `min`, `max`, `step`, `value` + `onValueChange` o `defaultValue`.
- `tooltip` y `formatValue` para mostrar el valor exacto.
- `marks` en `with-data`; `aria-label` (o `minLabel` / `maxLabel` en `range`) siempre que no haya una etiqueta visible.

## Estados y tokens
- Riel `core-theme-gray-lighter-200`, relleno `core-interactions-active-primary600`; en `volume` el riel es `core-theme-primary-light-300`.
- Thumb `core-surface-light-white`, borde `core-border-secondary-gray200`, sombra `--shadow-sm`; 22px con radio 8 (en `volume`, círculo de 20px).
- Tooltip `core-theme-gray-gray-900` con texto `core-text-invert-white`.
- Marcas e iconos `core-text-secondary-gray500` / `core-icon-secondary-gray500`.
- Foco con contorno de 2px alrededor del thumb.

## Accesibilidad
Usa `<input type="range">` nativo: flechas, Inicio/Fin y RePág/AvPág funcionan solos. `aria-valuetext` usa `formatValue`.

## Do / Don't
- Haz: usa el tooltip cuando el valor exacto ayude a decidir.
- Haz: muestra el rango elegido como texto cerca ("$100 – $500").
- No hagas: usarlo para valores que la persona ya sabe de memoria (un código postal, una cantidad exacta).
- No hagas: pasos tan pequeños que sea imposible atinar con el dedo.

## Notas de la fuente
- Figma set `input-slider` (página ❖ Forms, `3:218119`).
- Este set usa variables sueltas de la librería (`gray/200`, `primary/600`, `primary/300`, `white`, `gray/500`, `gray/900`). Se cambiaron por los tokens semánticos con el mismo valor (`core-theme-gray-lighter-200`, `core-interactions-active-primary600`, `core-theme-primary-light-300`, `core-surface-light-white`, `core-icon-secondary-gray500`, `core-theme-gray-gray-900`).
- Figma no tiene estado Disabled; aquí el relleno pasa a `core-theme-primary-light-300`.
- En Figma el tooltip se ve siempre; aquí también, cuando `tooltip` es true.
- Las marcas de `with-data` se reparten a lo ancho (como en Figma), no se alinean exactamente a su valor si no son parejas.
- Contraste: el riel gris 200 sobre blanco queda bajo 3:1; el relleno y el thumb llevan el contraste.

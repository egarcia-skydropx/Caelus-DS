# CardPaqueteriaDetalles

Panel con las características operativas de una paquetería (recolecciones, sucursal, envíos internacionales, cargos extra e impresora), abierto o colapsable.

## Cuándo usarlo
- En el módulo de Convenios, junto a la paquetería seleccionada, para que el usuario conozca sus condiciones antes de usarla.
- En móvil, en modo colapsable para no ocupar toda la pantalla.

## Qué pasa el consumidor
- `title`, `description`.
- Una prop por sección: `recolecciones`, `sucursal`, `internacionales`, `cargosExtra`, `impresora`. Aceptan texto o nodos (listas, enlaces). La sección que no se pasa no se muestra (equivale a los `Show …` de Figma).
- `collapsible`, `defaultOpen`, `open`, `onOpenChange`, `device`.

## Estados
- Abierto: título y descripción arriba, secciones con icono morado de 32px.
- Colapsado: solo el título y un chevron; el botón tiene `aria-expanded` y `aria-controls`.

## Do / Don't
- Haz: frases cortas y datos concretos (horarios, máximos) en cada sección.
- No hagas: repetir aquí lo que ya dice la card de la paquetería.
- Haz: los enlaces dentro del texto usan `core-text-contrast-primary600`.

## Notas de la fuente
- Figma: set `card-paqueteria-detalles` (6381:9341), página ❖ Cards (5572:11171). Borde `gray/200` mapeado a `core-border-secondary-gray200` (mismo valor).
- En Figma el texto de Sucursal no tiene variable de color; aquí usa `core-text-secondary-gray500` como las demás secciones.
- El icono de Cargos extra es un glifo genérico de billete; en la fuente no se leyó.

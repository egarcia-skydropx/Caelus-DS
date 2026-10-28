# InputMultiselect

Lista desplegable para elegir varias opciones; lo elegido se ve como badges que se pueden quitar.

## Cuándo usarlo

- Filtros con varias opciones (paqueterías, estados de envío, sucursales).
- Cuando la persona necesita ver y corregir su selección sin abrir la lista.

## Qué pasa el consumidor

- `label`, `info` (texto del icono de información), `helperText`, `error` (booleano o texto que reemplaza al helper), `disabled`.
- `options`: `{ value, label, disabled? }[]`.
- `value` / `defaultValue` / `onChange(values)`.
- `size`, `placeholder`, `maxBadges` (default 8, luego un badge "+N"), `searchPlaceholder`, `selectAllLabel`, `emptyText`.
- `defaultOpen`, `defaultSearch`: solo demos.

## Estados

Default, Value, Error, Disabled, Active + Dropdown, Selected + Dropdown, Selected Options + Dropdown, Without Results + Dropdown. El estado *Active* de Figma (fondo `select-active-gray50` y borde de 2px `core-interactions-active-primary600`) aparece con el foco; no hace falta prop.

## Do / Don't

- Do: usa "Seleccionar todo" cuando la lista sea larga.
- Do: deja visible el buscador interno si hay más de ~8 opciones.
- Don't: lo uses si solo se puede elegir una opción.
- Don't: pongas textos largos en las opciones: se cortan en los badges.

## Notas de la fuente

- Badges: usa `Badge` (`theme="primary"`, `size="large"`) con su X para quitar; buscador interno: `InputSearch`.
- Las casillas son checkboxes nativos con `accent-color` `core-interactions-active-primary600` (el checkbox de Caelus es de otro lote).
- El dropdown se cierra con Escape o clic afuera.
- Medidas: badges de 25px, padding 8/12 (base) y 8/16 (sm), como en Figma.
- Texto deshabilitado `core-text-secondary-gray500` sobre `select-disabled-surface` (#6b7280 sobre #f3f4f6) da 4.39:1, apenas bajo 4.5:1. Aceptable por ser estado deshabilitado (WCAG lo exime), pero no lo uses para información importante.

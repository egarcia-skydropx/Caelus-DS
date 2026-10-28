# InputSelect

Campo de selección única sobre un `<select>` nativo, con label, icono de información, helper y estados de error y deshabilitado.

## Cuándo usarlo

- Listas cortas y conocidas (idioma, paquetería por defecto, tipo de envío).
- Cuando no hace falta buscar: si la lista pasa de ~10 opciones usa `InputCombobox`.

## Qué pasa el consumidor

- `label`, `info` (texto del icono de información), `helperText`, `error` (booleano o texto que reemplaza al helper), `disabled`.
- `size`: `sm` (37px) o `base` (42px, default).
- `options` (`{ value, label, disabled }[]`) o `<option>` como children.
- `placeholder`: primera opción vacía y no seleccionable.
- `leftIcon`: icono o logo a la izquierda (Figma `Type=Logos`).
- `value` / `defaultValue` / `onChange` y cualquier atributo nativo de `<select>`.

## Estados

Default, Active (foco), Value, Error, Disabled. El estado *Active* de Figma (fondo `select-active-gray50` y borde de 2px `core-interactions-active-primary600`) aparece con el foco; no hace falta prop. El texto pasa de gris (`core-text-secondary-gray500`) a `core-text-primary-gray900` al tener valor.

## Do / Don't

- Do: usa labels cortos y claros ("Paquetería", "Idioma").
- Do: si usas logos en un select, úsalos en todos los selects del mismo nivel.
- Don't: escondas información crítica en el icono de información.
- Don't: lo uses para elegir varias opciones; para eso está `InputMultiselect`.

## Notas de la fuente

- La lista abierta es la nativa del navegador (accesible y móvil), no el dropdown dibujado en Figma. Si necesitas el dropdown de Caelus, usa `InputCombobox`.
- Algunos textos de Figma usan estilo "mixed"; se tomó Medium 14px para el label y Regular 14px para el valor.
- El estado *Selected* de Figma (fondo gris, borde 2px, texto oscuro) equivale a foco con valor.
- Texto deshabilitado `core-text-secondary-gray500` sobre `select-disabled-surface` (#6b7280 sobre #f3f4f6) da 4.39:1, apenas bajo 4.5:1. Aceptable por ser estado deshabilitado (WCAG lo exime), pero no lo uses para información importante.

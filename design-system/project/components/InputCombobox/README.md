# InputCombobox

Campo que despliega una lista de opciones y permite escribir para filtrarla; elige una sola opción.

## Cuándo usarlo

- Listas medianas o largas donde escribir ahorra tiempo (paqueterías, sucursales, categorías).
- Cuando las opciones se agrupan por secciones (usa `group` en cada opción).

## Qué pasa el consumidor

- `label`, `info` (texto del icono de información), `helperText`, `error` (booleano o texto que reemplaza al helper), `disabled`.
- `options`: `{ value, label, group?, icon?, disabled? }[]`.
- `value` / `defaultValue` / `onChange(value, option)`; `onInputChange(text)`.
- `size` (`sm` | `base`), `placeholder`, `leftIcon`, `emptyText`, `clearLabel`.
- `showChevron`, `clearable`, `minChars`, `controlClassName`: ajustes que usan las variantes (`InputComboboxFlag`, `InputSearchSelect`).
- `defaultOpen`, `defaultInputValue`: solo para demos.

## Estados

Default, Selected, Value, Error, Disabled, Active + Dropdown, Typing + Dropdown. El estado *Active* de Figma (fondo `select-active-gray50` y borde de 2px `core-interactions-active-primary600`) aparece con el foco; no hace falta prop. Con valor o texto aparece la X (borrar) con un separador antes del chevron.

## Do / Don't

- Do: ordena las opciones de forma lógica (alfabética o por frecuencia) y agrúpalas con títulos de sección.
- Do: escribe un placeholder que diga qué elegir.
- Don't: lo uses para 2–3 opciones; ahí es mejor un radio o un select.
- Don't: pongas acciones (botones) dentro de la lista.

## Notas de la fuente

- Teclado: flechas para moverse, Enter para elegir, Escape para cerrar. Usa el patrón ARIA *combobox* + *listbox*.
- El dropdown usa `dropdownMenu-surface`, borde `core-border-secondary-gray200`, radio `dropdownMenu-border-radius` y `--shadow-md` (Figma tiene dos sombras 4px/6px; `--shadow-md` es la más cercana).
- El fondo del slot interno en Figma es `#ffffff` sin variable; se usa la superficie del dropdown.
- Hover de opción: `core-interactions-hover-gray100`; check de la opción elegida: `core-icon-contrast-primary600`; títulos de sección SemiBold.
- La barra de scroll dibujada en Figma no se replica (se usa la del navegador).
- Texto deshabilitado `core-text-secondary-gray500` sobre `select-disabled-surface` (#6b7280 sobre #f3f4f6) da 4.39:1, apenas bajo 4.5:1. Aceptable por ser estado deshabilitado (WCAG lo exime), pero no lo uses para información importante.

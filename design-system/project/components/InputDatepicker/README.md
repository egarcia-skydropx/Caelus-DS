# InputDatepicker

Campo para elegir una fecha o un rango con un calendario desplegable.

## Cuándo usarlo

- Filtrar datos por fecha (envíos, facturas) o programar una recolección.
- Con `displayText` puedes mostrar un preset como "Últimos 30 días".

## Qué pasa el consumidor

- `label`, `mode` (`single` | `range`), `value` / `defaultValue` / `onChange`.
- `placeholder`, `displayText`, `disabled`, `defaultMonth`, `today`.
- `defaultOpen`: solo demos.

## Estados

Default, Value, Selected (foco), Active + Dropdown (abierto), Disabled. En el calendario: día normal, hover, hoy, seleccionado y rango.

## Do / Don't

- Do: usa el estado abierto (Active) para que se note qué campo se edita.
- Do: usa formato corto y claro (19/mar/2025).
- Don't: lo uses para fechas muy lejanas (fecha de nacimiento); escribir es más rápido.

## Notas de la fuente

- Se construyó el panel `.Datepicker calendario` (una fecha o rango). El dropdown con presets y dos meses de Figma (`.Dropdown personalizado`) no se construyó.
- Teclado: flechas para moverse entre días, Enter para elegir, Escape para cerrar. La semana empieza en lunes.
- Hover de día: Figma usa `core-theme-gray-lighter-200`, distinto del token `datepicker-status-day-hover`; se respeta Figma. Igual con el rango: Figma usa `core-surface-gray-light-100`, no `datepicker-status-day-range`. El día elegido sí usa `datepicker-status-day-active`.
- El panel de Figma no tiene borde ni sombra; se añadió borde `core-border-secondary-gray200` y `--shadow-md` para separarlo del fondo.
- Variables sueltas en Figma (`text/primary-gray900`, `gray/500`, `white`) se mapearon a `core-text-primary-gray900`, `core-text-secondary-gray500` y `core-surface-light-white`.
- Días fuera del mes: `core-text-minimal-gray400` sobre blanco da 2.54:1 (bajo 4.5:1); es información secundaria.

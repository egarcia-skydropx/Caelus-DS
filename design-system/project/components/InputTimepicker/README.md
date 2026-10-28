# InputTimepicker

Campo para elegir una hora en formato de 12 horas (HH:MM am/pm) con tres columnas desplegables.

## Cuándo usarlo

- Agendar recolecciones o entregas, horarios de atención.

## Qué pasa el consumidor

- `label`, `value` / `defaultValue` (texto "hh:mm am") y `onChange`.
- `placeholder` (default "--:-- --"), `minuteStep` (default 1), `disabled`.
- `defaultOpen`: solo demos.

## Estados

Default, Hover (borde `core-border-heavy-gray-400`), Focus, Active + Dropdown, Disabled (borde `core-interactions-disabled-gray400`).

## Do / Don't

- Do: usa `minuteStep` de 5 o 15 si no hace falta precisión al minuto.
- Don't: lo uses para duraciones; es para una hora del día.

## Notas de la fuente

- Cada columna es un grupo de botones con `aria-pressed`; Escape o clic afuera cierran.
- Dropdown: radio 12px (literal), borde `core-border-primary-gray300`, sombra `--shadow-md` (Figma: una sombra 8px/4px).
- Medidas de las celdas 45×32 como en Figma.

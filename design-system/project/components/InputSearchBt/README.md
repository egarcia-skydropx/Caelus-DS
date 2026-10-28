# InputSearchBt

Buscador con botón "Buscar" visible, pensado para la página de rastreo.

## Cuándo usarlo

- Cuando buscar es la acción principal de la página (rastrear una guía).

## Qué pasa el consumidor

- `value` / `defaultValue` / `onChange`, `onSearch(value)` al enviar, `onClear`.
- `placeholder` (default "Buscar nombre, elemento..."), `buttonLabel`, `clearLabel`.

## Estados

Default, Active, Typing, Value. Es un `<form role="search">`: Enter o el botón envían.

## Do / Don't

- Do: usa un placeholder que diga qué se puede buscar.
- Do: mantén el botón siempre visible.
- Don't: pongas más de un botón dentro del campo.

## Notas de la fuente

- El botón es `Button` (`type="primary"`, `size="sm"`). En Figma el texto del botón es de 12px; aquí se respeta el tamaño de `Button` sm.
- El foco usa borde de 1px `core-interactions-active-primary600` y fondo `core-surface-gray-lighter-50`, como en Figma.

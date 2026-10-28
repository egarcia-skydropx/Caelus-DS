# InputColor

Muestra de color más campo hexadecimal para elegir, ver y editar un color.

## Cuándo usarlo

- Personalizar colores de marca, etiquetas o vehículos (Mi flota).

## Qué pasa el consumidor

- `label`, `value` / `defaultValue` ("#RRGGBB", default "#D68205"), `onChange(hex)`.
- `swatchLabel` (default "Elegir color"), `disabled` y atributos nativos del campo de texto.

## Estados

Value, Hover (borde `core-border-heavy-gray-400`), Typing/foco (borde `core-interactions-active-primary600`), foco en la muestra (borde 2px).

## Do / Don't

- Do: mantén la muestra a la izquierda del campo.
- Do: valida el hexadecimal (solo emite `onChange` con 6 dígitos válidos).
- Don't: lo uses para elegir entre pocos colores fijos; ahí es mejor una lista de muestras.

## Notas de la fuente

- La muestra es un `<input type="color">` nativo: abre el selector del sistema. El popup dibujado en Figma (`popup` booleano) no se construyó.
- El color de la muestra es dinámico (no es token); #D68205 es solo el ejemplo de Figma.

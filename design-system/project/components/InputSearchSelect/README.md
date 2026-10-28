# InputSearchSelect

Buscador que muestra resultados en una lista mientras escribes, pensado para listados largos (clientes, direcciones, productos).

## Cuándo usarlo

- Buscar dentro de un listado largo y elegir un resultado.
- Cuando el usuario sabe lo que busca y escribir es más rápido que recorrer una lista.

## Qué pasa el consumidor

- Todas las props de `InputCombobox` salvo `showChevron` (no tiene chevron).
- `minChars`: caracteres antes de mostrar resultados. Default 2.
- `placeholder`: default "Buscar"; mejor algo concreto como "Buscar cliente".

## Estados

Default, Active (foco), Typing + Dropdown, Value, Error. Lleva lupa (`core-icon-secondary-gray500`) a la izquierda y X para borrar.

## Do / Don't

- Do: usa un label claro ("Buscar cliente" en vez de "Búsqueda").
- Do: muestra resultados a partir de 2 caracteres para no saturar la lista.
- Don't: lo uses para listas cortas; ahí conviene un select.

## Notas de la fuente

- Se apoya en `InputCombobox` (`window.Caelus.InputCombobox`) con lupa, sin chevron y `minChars: 2`.
- Separación entre lupa y texto de 10px, como en Figma.

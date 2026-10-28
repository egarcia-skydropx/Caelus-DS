# InputBadge

Campo que acepta varios valores independientes y los muestra como badges que se pueden quitar.

## Cuándo usarlo
- Buscar o filtrar por varias guías, códigos postales o correos a la vez.
- Si solo hay un valor, usa `InputText`; si las opciones son una lista cerrada, usa un select múltiple.

## Qué pasa el consumidor
- `label`, `placeholder`, `helperText`.
- `values` + `onValuesChange(list)` o `defaultValues`.
- `size` (`base` / `sm`), `state` (`default` / `error` / `disabled`), `maxHeight` (default 112px, luego scroll).
- `removeLabel` para la X de cada badge ("Quitar 15964").

## Comportamiento
- Enter, coma o salir del campo agrega lo escrito como badge (sin duplicados).
- Retroceso con el campo vacío quita el último badge.
- Cada badge es `Badge` `theme="primary"` `size="small"` con su botón de quitar.

## Estados
Iguales a `InputText` (`inputField-*`); con badges el padding vertical baja a 10px como en Figma.

## Do / Don't
- Haz: explica en el helper cómo separar valores ("Separa las guías con Enter o coma").
- Haz: valida cada valor al agregarlo y marca el error en el helper.
- No hagas: usarlo para textos largos; los badges deben ser cortos.

## Notas de la fuente
- Figma set `input-badge` (página ❖ Forms, `5399:8663`); el slot `Badges` usa `badge/Type=Icon & text, Theme=Primary, Size=Sm`.
- La barra de scroll dibujada en Figma (`core-theme-gray-light-300`) se resuelve con el scroll nativo.
- Depende de `window.Caelus.Badge`.

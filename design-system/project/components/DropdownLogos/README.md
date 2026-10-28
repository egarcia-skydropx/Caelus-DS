# DropdownLogos

Variante del `Dropdown` donde cada opción lleva un logo o bandera antes del texto.

## Cuándo usarlo
- Elegir país (México, Colombia) o moneda.
- Elegir paquetería o plataforma cuando el logo ayuda a reconocerla más rápido que el nombre.

## Qué pasa el consumidor
- `items`: igual que en `Dropdown`, con `logo` (ReactNode: `svg`, `img` o un componente de bandera) en lugar de `icon`.
- `onSelect`, `showCheck`, `maxHeight`, `role`, `autoFocus` y atributos de `div`, como en `Dropdown`.

## Estados
Los mismos del `Dropdown`: hover `core-interactions-hover-gray100`, seleccionada con palomita `core-icon-contrast-primary600`, deshabilitada en `core-text-secondary-gray500`.

## Do / Don't
- Haz: acompaña siempre el logo con el nombre; el logo solo no es accesible.
- Haz: usa logos del mismo tamaño y proporción en toda la lista.
- No hagas: usar logos decorativos que no ayuden a distinguir la opción.

## Notas de la fuente
- Construido sobre `Dropdown`. Los logos y banderas de Figma no se copian: el consumidor los pasa como ReactNode.
- La fila mide 38px (2px más que la fila de texto) porque la bandera de Figma va en un marco de 20x22.
- La fila con hover de la muestra usa `core-surface-gray-light-100`, que tiene el mismo valor que `core-interactions-hover-gray100`.

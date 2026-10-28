# Dropdown

Panel flotante con una lista de opciones o acciones, con títulos de sección y separadores opcionales.

## Cuándo usarlo
- Debajo de un select, un botón o un campo para elegir una opción (paquetería, país, estatus de envío).
- Como menú de acciones cuando lo abre un `DropdownButton` (`role="menu"`).
- Para listas largas, fija `maxHeight` y deja que haga scroll.

## Qué pasa el consumidor
- `items`: arreglo de filas. Cada fila tiene `type` (`item`, `title` o `separator`), `label`, `helper` opcional, `icon` o `logo` a la izquierda, `trailing` a la derecha, `selected`, `disabled`, `danger` y `onSelect`.
- `role`: `listbox` (por defecto, para elegir un valor) o `menu` (para acciones).
- `showCheck`: muestra la palomita en la opción elegida (por defecto `true`).
- `onSelect(item)`: se llama con la fila activada.
- `maxHeight`, `autoFocus` y cualquier atributo de `div` (`aria-label`, `id`…).

## Estados
- Hover y foco: fondo `core-interactions-hover-gray100`; el foco de teclado añade un contorno `core-interactions-active-primary600`.
- Seleccionada: palomita `core-icon-contrast-primary600`.
- Deshabilitada: texto e icono `core-text-secondary-gray500`, se salta con el teclado.
- Peligro (`danger`): texto `core-theme-red-contrast-600`.
- Teclado: flechas arriba/abajo, Inicio y Fin mueven el foco; Enter o Espacio activan.

## Do / Don't
- Haz: agrupa opciones con `title` y `separator` cuando hay más de 6 o 7.
- Haz: pon la acción destructiva al final, separada del resto.
- No hagas: meter formularios o contenido largo; para eso usa un modal o un drawer.
- No hagas: usar `danger` para algo que no borra ni cierra sesión.

## Notas de la fuente
- Los conjuntos internos `.dropdown-nav-link` (con check, con icono, con bandera, con helper) se juntaron en un solo tipo de fila con props.
- El panel usa `dropdownMenu-surface`, borde `core-border-secondary-gray200`, radio 8 y sombra equivalente a `shadow-md`.
- En la muestra de Figma el área de filas tiene 10px de padding y 10px entre filas; en `dropdown-logos` y en el menú del `dropdown-button` no hay espacio entre filas. Se tomó la versión sin espacio para que todas las variantes coincidan.
- El hover de Figma no tiene radio y el estado deshabilitado sí (8px). Aquí ninguno lleva radio.
- La barra de scroll falsa de Figma (`core-theme-gray-light-300`) no se dibujó; se usa la nativa.

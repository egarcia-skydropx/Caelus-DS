# Button

Botón de acción (CTA) de Caelus: ejecuta una tarea inmediata con un texto corto y, si hace falta, un icono.

## Cuándo usarlo
- **primary**: la acción principal de la vista. Una sola por bloque.
- **secondary**: acciones de apoyo junto a la principal (Cancelar, Volver).
- **tertiary**: acciones de baja jerarquía o tipo enlace, sin fondo.
- **alert**: decisiones críticas o destructivas (Eliminar, Cancelar envío). Rojo `core-theme-red-dark-700`.
- **convenios**: solo en flujos de convenios con paqueterías (paleta `convenio-palette-*`).
- **dashed**: agregar elementos a una lista o zona vacía (Agregar paquete).

## Qué pasa el consumidor
- `children`: el texto, corto y en verbo (“Crear envío”, “Guardar”).
- `type`, `size` (`base` 41px, `sm` 37px, `xs` 34px), `shape` (`button`, `square`, `circle`).
- `leftIcon` / `rightIcon` (18px) o `icon` para los botones de solo icono, que **deben** llevar `aria-label`.
- `disabled` y los atributos nativos de `<button>`; `htmlType` para `submit`.

## Estados
Default, hover, focus (anillo visible con `:focus-visible`) y disabled vienen de los tokens `buttons-*`. En foco, primary y alert muestran un anillo de 3px (`buttons-primary-focus-border`, `core-theme-red-lighter-200`), secondary un borde de 2px `core-interactions-active-primary600` y tertiary un anillo de 2px `buttons-tertiary-focus-border`.

## Do / Don't
- Haz: un solo primary por contenedor; secondary al lado para la salida.
- Haz: usa `alert` solo cuando la acción tiene consecuencias difíciles de deshacer.
- No hagas: textos largos o en dos líneas; el botón no hace wrap.
- No hagas: usar `convenios` fuera del módulo de convenios.

## Notas de la fuente
- Los tokens `buttons-alert-*` del archivo de Foundations apuntan a colores primary, pero el componente Alert en Figma usa rojo. Aquí se sigue al componente.
- En Figma, el foco se dibuja como un trazo de 3px; aquí es un anillo exterior (`box-shadow`) para no mover el layout.
- El estado de carga (`Show loader`) y el estado Active de primary/secondary todavía no están importados.

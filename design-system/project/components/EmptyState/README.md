# EmptyState

Bloque que aparece cuando una sección no tiene datos todavía o una búsqueda no da resultados, y orienta al usuario sobre qué hacer.

## Cuándo usarlo
- Cuando una lista o tabla está vacía porque el usuario aún no ha creado nada (envíos, órdenes, guías).
- Cuando una búsqueda o un filtro no devuelve resultados.
- Si la información no se puede mostrar por una falla, usa ErrorScreen.

## Qué pasa el consumidor
- `illustration`: la ilustración como ReactNode (128px en desktop, 96px en mobile). Es decorativa (`aria-hidden`).
- `title` y `children`: título en semibold 16px y descripción en 14px, centrados.
- `titleAs`: etiqueta del título (default `h2`) para respetar la jerarquía de la página.
- `primaryAction` y `secondaryAction`: `{ label, onClick }`. Se pintan con `Button` de Caelus (`primary` y `secondary`, tamaño `base`).
- `device`: `desktop` (default, hasta 736px) o `mobile` (hasta 352px, botones a todo el ancho).

## Do / Don't
- Do: explica por qué está vacío y qué puede hacer el usuario.
- Do: un solo CTA principal; el secundario es opcional.
- Don't: usarlo para errores del sistema.
- Don't: textos genéricos como “No hay datos”.

## Notas de la fuente
- El eje `Plataforma` (Skydropx / WL) solo cambia la ilustración, así que no es una prop: el consumidor pasa la ilustración que corresponda.
- El título en Figma usa la variable `gray/900` del archivo de componentes; tiene el mismo valor que `core-text-primary-gray900`. El fondo `white` es igual a `core-surface-light-white`.
- Figma usa altos fijos (384px desktop, 368px mobile); aquí son `min-height`.
- Las ilustraciones de Figma no se copian; el preview usa un marcador neutro.

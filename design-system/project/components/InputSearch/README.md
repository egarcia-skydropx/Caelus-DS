# InputSearch

Buscador simple con lupa y X para borrar, sin lista de sugerencias; para navbars o como base de otros buscadores.

## Cuándo usarlo

- Buscar en una sección (guías, facturas, clientes) cuando los resultados aparecen en la página.
- Barras de navegación.

## Qué pasa el consumidor

- `size`: `sm` (37px) o `base` (42px, default).
- `value` / `defaultValue` / `onChange`, `onClear`, `clearLabel`.
- `placeholder` (default "Buscar"; también se usa como `aria-label` si no pasas uno).
- Cualquier atributo nativo de `<input>`.

## Estados

Default, Active (foco: fondo gris y borde 2px), Typing (aparece la X), Value.

## Do / Don't

- Do: usa verbos en el placeholder ("Buscar en facturas…").
- Do: pon un `aria-label` si no hay label visible.
- Don't: lo uses cuando haya que elegir un resultado; para eso está `InputSearchSelect`.

## Notas de la fuente

- Es un `<input type="search">`; se oculta la X nativa del navegador para no duplicarla.

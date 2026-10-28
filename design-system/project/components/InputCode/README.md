# InputCode

Bloques oscuros de solo lectura para documentación técnica: endpoints, comandos, esquemas JSON y tablas de parámetros, con botón para copiar.

## Cuándo usarlo
- Portal de desarrolladores y guías de integración con la API (p. ej. obtener el token OAuth).
- No es un campo editable: para que alguien escriba código usa `InputTextarea`.

## Qué pasa el consumidor
- `type`:
  - `token`: endpoint en una sola línea, con copiar.
  - `post`: comando largo (curl) que se ajusta en varias líneas, con copiar.
  - `esquema`: JSON preformateado, respeta sangrías y hace scroll horizontal.
  - `cuerpo`: lista de `params` (`{ name, type, required }`) con badge rojo de obligatorio.
- `code`: el texto del bloque y lo que se copia.
- `showCopy`, `copyLabel`, `onCopy(code)`; por defecto copia con el portapapeles del navegador y anuncia "Copiado".
- `requiredLabel` (default "Requerido"), `typeLabel` (default "Type").

## Colores
Fondo `core-theme-gray-darkest-800`, borde `core-theme-gray-dark-700`, texto e icono `core-text-invert-white` / `core-icon-invert-white`, nombres de parámetro `core-theme-teal-lighter-200`.

## Do / Don't
- Haz: un bloque por concepto (endpoint, cuerpo, respuesta) en el orden en que se usan.
- Haz: ofrece copiar en todo lo que la persona pegará en su terminal.
- No hagas: poner tokens o llaves reales en los ejemplos; usa marcadores como `{{BEARER_TOKEN}}`.
- No hagas: usarlo para texto normal o avisos.

## Notas de la fuente
- Figma set `input-code` (página ❖ Forms, `8862:142631`). Los nombres de los tipos se dejan en español como en Figma (`esquema`, `cuerpo`).
- Figma usa Inter (no una fuente monoespaciada); se respetó con `--font-sans`. Para alinear JSON largo conviene evaluar una mono en el sistema.
- El badge de Figma dice "Required"; aquí el default es "Requerido". Se dibuja con `window.Caelus.Badge` (`theme="red"`, `size="small"`).
- El tipo `esquema` en Figma no muestra copiar; aquí puedes activarlo con `showCopy`.
- Contraste: blanco sobre gris 800 y teal 200 sobre gris 800 superan 4.5:1.

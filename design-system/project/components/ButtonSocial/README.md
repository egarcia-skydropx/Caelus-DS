# ButtonSocial

Botón de inicio de sesión o registro con un proveedor externo (Google, Facebook, GitHub…), con la estética de Caelus.

## Cuándo usarlo
- En pantallas de acceso o registro, como alternativa rápida al formulario.
- Varias opciones juntas: mismo `size` y mismo `outline` en todas.

## Qué pasa el consumidor
- `children`: texto claro que anticipe la redirección ("Continuar con Google", "Iniciar sesión con Facebook").
- `icon`: el logo oficial del proveedor. El componente **no** dibuja logos de marca.
- `provider`: `facebook` | `twitter` | `google` | `dribbble` | `github`. Pinta el ícono con `core-social-<provider>` (útil para logos monocromos con `currentColor`). Sin `provider` el ícono usa `core-gray-900`.
- `size`: `xs` | `sm` | `base` | `lg`. `outline`: `true` (borde `core-gray-200`) o `false` (fondo `white`).

## Estados
- Hover: fondo `core-interactions-hover-gray100`.
- Focus (`:focus-visible`): anillo de 2px `core-interactions-active-primary600`.
- Disabled: texto `core-interactions-disabled-gray400`.

## Do / Don't
- Haz: usa el logo oficial y sus colores; no lo recolorees con la marca.
- Haz: ordena por relevancia para tu audiencia.
- No hagas: mezclar tamaños o estilos (con y sin borde) en el mismo grupo.

## Notas de la fuente
- En Figma el tamaño grande se llama `l`; aquí es `lg`.
- Figma usa variables de librería `gray/200`, `gray/900` y `white`; aquí se mapean a `core-gray-200`, `core-gray-900` y `white` (mismos valores).
- Figma no define hover, focus ni disabled; los de aquí son propuestos.
- Figma pinta el logo en `gray/900`; los tokens `core-social-*` se usan solo si pasas `provider`.
- La variante sin borde (`outline={false}`) es blanca sobre blanco: úsala solo sobre superficies grises o de color.
- El texto de muestra de Figma está en inglés ("Sign in with Facebook"); el preview usa español.

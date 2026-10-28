# Indicator

Elementos pequeños que comunican estado, conteo o progreso sin pedir interacción.

## Cuándo usarlo
- `dot`: estado simple con punto de color y texto (Disponible, En pausa, Error).
- `alert` y `counter`: conteo de notificaciones o pendientes sobre un ícono o un menú.
- `icon`: paso completado (palomita) en un flujo.
- `stepper`: paso actual en un stepper.
- `charge`: proceso en curso ("Generando guías…").

## Qué pasa el consumidor
- `type`: `dot` | `alert` | `counter` | `icon` | `stepper` | `charge`.
- `color` (solo `dot`): `blue` | `gray` | `green` | `indigo` | `orange` | `primary` | `red` | `yellow`, con los tokens `indicators-<color>-indicator-*`.
- `count` (alert / counter), `icon` (icon), `children` (texto en dot y charge).
- `aria-label`: obligatorio cuando el indicador no tiene texto visible (icon, stepper o un conteo sin contexto, p. ej. "3 notificaciones").

## Estados
- `charge` gira un anillo pequeño (`core-theme-indigo-lighter-200` / `core-theme-indigo-contrast-600`) y usa `role="status"`. Con `prefers-reduced-motion` el anillo queda quieto.

## Do / Don't
- Haz: acompaña el color con texto o tooltip.
- No hagas: usar indicadores como botones.
- No hagas: contadores con números muy largos; usa "99+".

## Notas de la fuente
- Incluye el componente interno de Figma `.idicator-color` (el punto de 12px) en `type="dot"`.
- Tipos de Figma → props: Indicator + text → `dot`; Contador alert → `alert`; Contador indicador → `counter`; Indicator & Icon → `icon`; Stepper indicator → `stepper`; Charge indicator → `charge`.
- `icon` y `stepper` usan variables de librería `primary/600`, `primary/200` y `white`; aquí `core-primary-600`, `core-primary-200` y `white`.
- El anillo de `charge` en Figma es una instancia del Loader (16px); aquí es un anillo CSS propio de 1.5px de grosor (no es token) para no depender de otro componente.
- Contraste: texto blanco de 12px sobre `core-theme-red-base-500` (#f05252) ≈ 3.7:1, por debajo de 4.5:1.

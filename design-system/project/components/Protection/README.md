# Protection

Módulo para agregar protección a un envío contra robo, daño o pérdida, con switch, enlace a políticas y valor declarado.

## Cuándo usarlo
- En la cotización o creación de guía, cuando el usuario puede (o debe) asegurar su envío.
- `sos` para SOS Protección (Skydropx), `se` para Solo Envíos, `internacional` para envíos internacionales.

## Qué pasa el consumidor
- `type`, `mode`, `title`, `label`.
- `checked` / `defaultChecked` / `onCheckedChange` / `disabled` para el switch (`role="switch"` con `aria-checked`, ligado a su etiqueta y a su texto de ayuda).
- `declaredValue` / `defaultDeclaredValue` / `onDeclaredValueChange`, `currency`, `showDeclaredValue`.
- `policiesHref` / `onPoliciesClick`, `settingsHref` / `onSettingsClick`.

## Estados
- `default`: switch apagado; al encenderlo aparece "Valor declarado".
- `activada`: switch encendido y valor declarado visible.
- `automatica`: sin switch; texto "Envío protegido" con enlace a la configuración.
- `disabled` en el switch.

## Do / Don't
- Do: deja visible qué cubre la protección (robo, daño) para que se entienda el beneficio.
- Do: muestra el campo de valor declarado en cuanto se activa.
- Do: haz que "políticas de uso" se vea y funcione como enlace.
- Don't: actives la protección sin que el usuario lo vea, salvo en el modo `automatica` y con el aviso.

## Notas de la fuente
- Figma: set `protection` (14425:56949) en ❖ Drawer, `Protección` × `Mensaje` (9 variantes).
- El módulo tiene borde a la derecha, abajo y a la izquierda (sin borde superior) y sin radio: está pensado para apilarse bajo otra tarjeta.
- Título y escudo: `core-theme-green-base-500` (sos), `core-theme-primary-contrast-600` (se), `core-text-primary-gray900` (internacional). El verde (#0e9f6e) sobre blanco da ~3.4:1: por debajo de 4.5:1 para un título de 16px.
- El texto de ayuda de 12px usa `core-text-secondary-gray500` (4.8:1).
- El switch y el campo con prefijo `$` / sufijo `MXN` se construyeron aquí con elementos nativos (los componentes `InputToggle` e `InputText` pertenecen a otro lote). El prefijo y sufijo usan 11.94px en Figma; se redondearon a 12px.

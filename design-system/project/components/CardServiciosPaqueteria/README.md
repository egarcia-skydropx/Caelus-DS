# CardServiciosPaqueteria

Card de configuración de una paquetería en Convenios: encender o apagar la paquetería, ver su convenio o elegir qué servicios se cotizan.

## Cuándo usarlo
- En el detalle de una paquetería dentro del módulo de Convenios, normalmente las tres variantes apiladas: encabezado, convenio y servicios.
- `head-paqueteria`: activar o desactivar la paquetería para todas las cotizaciones.
- `convenio`: estado del convenio (usa `CardConvenioContenedor`).
- `skydropx`: elegir los servicios nacionales e internacionales que se cotizan con tarifa Skydropx.

## Qué pasa el consumidor
- `variant`, `device`, `showAlerts`.
- head-paqueteria: `logo`, `name`, `enabled`, `onToggle`, `headText`.
- convenio: `convenio` (las props de `CardConvenioContenedor`).
- skydropx: `title`, `description`, `groups`, `onServiceChange`, `alertText`, `saveDisabled`, `onSave`.

## Estados
- Toggle con `role="switch"`; en activo `core-interactions-active-primary600`.
- Cada grupo es un `fieldset` con `legend`; cada casilla tiene su `label` y su detalle ligado con `aria-describedby`.
- “Guardar” es `Caelus.Button` primario tamaño base; en Figma aparece deshabilitado hasta que hay cambios.
- La advertencia usa `Caelus.Alert` en `warning`.

## Do / Don't
- Haz: deshabilita “Guardar” mientras no haya cambios.
- No hagas: guardar en cada clic de casilla; el usuario confirma con “Guardar”.
- Haz: muestra la alerta solo si la paquetería tiene convenio, porque los cambios lo afectan.

## Notas de la fuente
- Figma: set `card-servicios-paqueteria` (6381:9190), página ❖ Cards (5572:11171). Integra `.alerts-apagar-servicios`, `.toggle` y `.habilidades`.
- La descripción del set en Figma empieza con una frase dirigida a un asistente (“Aquí tienes el formato final procesado…”). Es un resto de redacción, no afecta al componente; se ignoró.
- La alerta en Figma usa `alerts/warning/yellow50` con texto `theme/yellow/darkest-800`; aquí lo resuelve `Caelus.Alert`, que añade el borde del sistema.
- El gris del toggle apagado (`core-theme-gray-lighter-200`) es inferido.

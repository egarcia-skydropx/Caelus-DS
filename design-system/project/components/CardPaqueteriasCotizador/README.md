# CardPaqueteriasCotizador

Card de resultado del cotizador: muestra una opción de paquetería con recolección, entrega estimada, precio y el botón para crear el envío.

## Cuándo usarlo
- En la lista de resultados del cotizador, una card por servicio de paquetería.
- Cuando el usuario compara opciones y elige con qué paquetería enviar.
- Para el resumen final antes de pagar usa `ResumenDePago`.

## Qué pasa el consumidor
- `type`: `paqueteria`, `convenio`, `no-disponible`, `cargos-extra`, `alerta` o `sin-beneficio`.
- `breakpoints`: `desktop` o `mobile`.
- Datos: `carrier { logo, name, service }`, `pickup { title, detail, tooltip }`, `eta`, `price`, `priceNote`, `convenioAlias`, `features`, `automation`, `message`, `actionLabel`.
- Acción: `onCreate`. El botón es `Caelus.Button` `primary` tamaño `xs` con flecha; en `convenio` pasa a `type="convenios"`.

## Estados
- `convenio`: en lugar del precio, “Con convenio” en `convenio-palette-600` y el alias en `core-text-minimal-gray400`.
- `no-disponible`: botón deshabilitado, logo en gris y franja gris con el motivo.
- `cargos-extra`: franja azul (`alerts-info-blue50`) con el desglose; usa `priceNote` y `automation`.
- `alerta`: franja morada (`core-surface-purple-lighter-50`) para alta demanda.
- `sin-beneficio`: sin fila de características.

## Do / Don't
- Haz: un solo botón por card; es la acción primaria.
- No hagas: esconder el motivo de “no disponible”; pásalo siempre en `message`.
- Haz: el tooltip de recolección debe explicar la restricción en texto plano.

## Notas de la fuente
- Figma: set `card-paqueterias-cotizador` (5588:6532), página ❖ Cards (5572:11171). Integra `.paqueteria-servicio`, `.tipo-recoleccion`, `.entrega-estimada`, `.precio` y `.extras`.
- Los colores de las franjas inferiores no se leyeron como variables; se eligieron los tokens de superficie más cercanos (gris, azul, morado) a partir de la captura.
- El fondo de los iconos de características es `core-surface-purple-light-100`; el color del glifo (`core-theme-purple-dark-700`) es inferido.
- `core-text-minimal-gray400` (alias de convenio) y `convenio-palette-600` quedan bajo 4.5:1 sobre blanco.

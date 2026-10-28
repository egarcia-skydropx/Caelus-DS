# ModalWithdrawal

Modal de decisión con dos tarjetas comparativas para elegir cómo retirar saldo: convertirlo en créditos o transferirlo a una cuenta bancaria.

## Cuándo usarlo
- Cuando el usuario retira dinero y debe escoger entre dos caminos de salida.
- Para mostrar beneficios y limitaciones de cada opción lado a lado y fomentar la opción de créditos.

## Qué pasa el consumidor
- Todo lo de `Modal` (`title`, `onClose`, `width` default 800, `inline`…). No tiene footer: cada tarjeta trae su propio botón.
- `intro`: frase superior.
- `options`: lista de `{ key, tone, illustration, title, description, benefits, actionLabel, onSelect, disabled }`.

## Estados
- `tone="primary"` (franja y textos del color primario) o `tone="teal"`.
- En pantallas angostas las tarjetas se apilan.

## Do / Don't
- Do: escribe beneficios cortos (máximo 10 palabras).
- Do: usa ilustraciones de la misma familia visual en ambas tarjetas.
- Do: usa botones con la acción concreta ("Convertir a créditos", "Transferir").
- Don't: uses "Continuar" como acción.
- Don't: quites la X de cierre.

## Notas de la fuente
- Figma: componente `modal-withdrawal` (12638:4077) en ❖ Modals.
- En Figma la segunda tarjeta repite el título "Créditos Skydropx"; parece un error de copy y aquí el default es "Cuenta bancaria".
- La segunda ilustración de Figma es una imagen (tarjeta bancaria); se recibe como `ReactNode`.
- Ambas tarjetas usan el borde `core-theme-purple-lighter-200`, también la teal; se respetó.
- Los botones son `tertiary` con flecha a la derecha, alineados a la derecha.
- Muchas variables de este componente vienen con nombres cortos en Figma (`white`, `gray/900`, `theme/purple/lighter-200`); se mapearon a `core-theme-light-white`, `core-gray-900`, `core-theme-purple-lighter-200`, etc.

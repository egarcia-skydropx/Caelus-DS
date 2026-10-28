# ModalEcommerceIntegration

Modal enfocado para conectar una tienda en línea o una aplicación por API capturando datos sensibles sin distracciones.

## Cuándo usarlo
- Al conectar una plataforma de ecommerce (Shopify, WooCommerce…) por URL: `type="tienda"`.
- Al registrar credenciales de una integración por API: `type="api"`.

## Qué pasa el consumidor
- Todo lo de `Modal` (`title`, `onClose`, `primaryAction`, `secondaryAction`, `width`, `inline`…).
- `type`, `platformName`, `platformCategory`, `logo`, `instructions`, `hint`.
- `fields`: lista de `{ name, label, placeholder, type, value, defaultValue, onChange, error }`; cada label se liga a su input con `htmlFor`/`id`.
- `docsHref` / `docsLabel` para el enlace a la documentación.
- En `tienda` el botón por defecto es "Conectar"; en `api` no hay footer salvo que pases acciones.

## Estados
- Breakpoints: 416px en desktop; se ajusta al ancho disponible en mobile.
- Error por campo con `error` (`aria-invalid` + mensaje).

## Do / Don't
- Do: usa un título de acción directo ("Conecta tu tienda Shopify").
- Do: muestra siempre el logo y la categoría del servicio.
- Do: deja las etiquetas visibles sobre cada campo.
- Don't: muestres secretos completos; usa `type: 'password'` para claves.

## Notas de la fuente
- Figma: set `modal-ecommerce-integration` (648:5579) en ❖ Modals, variantes `Tienda`/`API` × `Desktop`/`Mobile`.
- Figma trae una línea separadora extra bajo el header además del borde del propio header; se dejó solo una línea para no duplicarla.
- La variante API de Figma termina sin botones (solo el enlace "Consultar documentación"); se respetó y las acciones son opcionales.
- Los inputs se construyen aquí con elementos nativos porque `InputText` pertenece a otro lote.
- El logo de Figma es una instancia de `integrations`; aquí se recibe como `ReactNode`.

# ErrorScreen

Pantalla completa que explica que la información no se puede mostrar por una falla (servidor caído, conexión, solicitud inválida) y ofrece una salida.

## Cuándo usarlo
- Cuando una página entera no puede cargarse (errores 400, 404, 500).
- Cuando el usuario necesita una salida clara: regresar o ir al inicio.
- Si la sección simplemente no tiene datos, usa EmptyState.

## Qué pasa el consumidor
- `code`: el código del error (extrabold 30px, color de marca).
- `title`: título del error (bold 20px, se pinta como `h1`).
- `children`: mensaje en lenguaje humano (16px); respeta los saltos de línea.
- `illustration`: ilustración como ReactNode (hasta 691px en desktop, 398px en mobile). Es decorativa (`aria-hidden`).
- `primaryAction` y `secondaryAction`: `{ label, onClick }`, con `Button` de Caelus (`primary` y `secondary`).
- `breakpoint`: `desktop` (texto e ilustración lado a lado) o `mobile` (apilados).

## Do / Don't
- Do: explica qué pasó sin tecnicismos de servidor.
- Do: ofrece siempre una acción para salir.
- Don't: mostrar trazas, IDs internos o mensajes del backend.
- Don't: culpar al usuario.

## Notas de la fuente
- El componente interno `.ilustration` (tipos 400 y 500) se integra como la prop `illustration`; las ilustraciones no se copian y el preview usa un marcador neutro.
- En Figma el valor móvil se llama `movil`; aquí es `mobile`.
- Título y mensaje usan las variables `gray/900` y `gray/600` del archivo de componentes; tienen el mismo valor que `core-text-primary-gray900` y `core-theme-gray-contrast-600`. El fondo `gray/50` es igual a `core-surface-gray-lighter-50`.
- El código usa peso 800 (extrabold), que no está en la escala de pesos base.
- Figma fija un alto de 880px; aquí el alto sale del contenido.

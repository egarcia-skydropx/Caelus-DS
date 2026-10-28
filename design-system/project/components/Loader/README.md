# Loader

Anillo giratorio que avisa que una acción está en proceso.

## Cuándo usarlo
- Mientras se cotiza, se generan guías o se carga una sección cuyo tiempo no se conoce.
- Siempre centrado vertical y horizontalmente en el contenedor que carga.
- Si tarda más de 3 o 4 segundos, añade un texto debajo ("Cargando paqueterías…").
- Si conoces el layout de la página, prefiere skeletons para la carga inicial.

## Qué pasa el consumidor
- `size`: `sm` | `default` | `lg`.
- `dark`: para fondos oscuros (anillo `core-gray-700`, arco `core-primary-500`).
- `track`: muestra u oculta el anillo de fondo (`core-theme-gray-lighter-200`). El arco usa `core-theme-primary-contrast-600`.
- `label`: texto accesible; el componente tiene `role="status"`.

## Estados
- Gira con una animación CSS. Con `prefers-reduced-motion: reduce` el giro se vuelve muy lento en lugar de detenerse, para que siga leyéndose como "cargando".

## Do / Don't
- Haz: un solo loader por zona que carga.
- No hagas: usarlo dentro de botones pequeños; el `Button` ya tiene su propio loader.
- No hagas: dejarlo indefinidamente sin mensaje si el proceso puede fallar.

## Notas de la fuente
- Geometría de Figma: anillo con radio interior al 82 % (grosor 9 % del tamaño) y arco de 270° con extremos redondeados; aquí es un SVG con esos valores.
- La variante oscura usa variables de librería `gray/700` y `primary/500`; aquí `core-gray-700` y `core-primary-500`.
- Figma no define velocidad de giro; se usó 0.9 s por vuelta.
- Contraste del arco (gráfico) sobre blanco: `core-primary-600` es alto. El anillo de fondo es decorativo.

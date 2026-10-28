# Carousel

Contenedor que permite pasar horizontalmente entre contenidos relacionados (imágenes, tarjetas, banners) cuando hay poco espacio.

## Cuándo usarlo
- Para mostrar un grupo de contenidos del mismo tipo donde no todos caben a la vez.
- Para banners o beneficios que el usuario puede explorar a su ritmo.
- Si el contenido es crítico para la tarea, no lo escondas en un carrusel: muéstralo en una lista.

## Qué pasa el consumidor
- `children`: las diapositivas; cada una se envuelve en un grupo con “n de N”.
- `view`: `desktop` (default: varias diapositivas y flechas a los lados) o `mobile` (una diapositiva en un marco con borde y flechas encima).
- `indicators`: `none` (default), `overlay` (puntos sobre las diapositivas) o `below` (puntos entre las flechas, debajo).
- `perView`: diapositivas visibles en desktop (default 3).
- `index` / `defaultIndex` / `onIndexChange`: para controlar o escuchar la posición.
- `prevLabel` / `nextLabel`: `aria-label` de las flechas (default “Anterior” / “Siguiente”).
- Pasa un `aria-label` al carrusel para nombrar la región.

## Estados
- Las flechas son `Button` de Caelus `secondary`, `xs`, cuadrados. Hacen ciclo: después de la última vuelve a la primera.
- Punto activo: blanco con contorno `core-border-heavy-gray-400` y `aria-current="true"`; inactivos `core-icon-secondary-gray500`.

## Do / Don't
- Do: entre 3 y 6 diapositivas.
- Do: textos alternativos en las imágenes de cada diapositiva.
- Don't: avance automático; aquí no existe y Figma no lo define.
- Don't: mezclar tipos de contenido distintos.

## Notas de la fuente
- Las diapositivas en Figma tienen radio de 12px, que no coincide con ningún token; se deja literal.
- La variante `Movil, Indicadores=Si` tiene relleno literal `#e1e1e1` con una capa negra al 20%; no se replicó (el marco usa `core-surface-light-white`).
- Los puntos miden 6px, como en Figma; el área de clic se amplía 4px por lado.
- Las imágenes de Figma no se copian; el preview usa bloques neutros.

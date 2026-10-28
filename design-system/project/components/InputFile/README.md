# InputFile

Selector de archivo compacto con botón integrado, pensado para formularios largos.

## Cuándo usarlo

- Cuando no hace falta vista previa ni arrastrar y soltar.
- Formularios donde quieres ahorrar espacio vertical.

## Qué pasa el consumidor

- `label`, `helperText`, `size` (`default` 42px | `large` 52px).
- `buttonLabel` (default "Seleccionar archivo"), `placeholder` (default "Ningún archivo seleccionado"), `fileName`.
- `accept`, `multiple`, `onChange` y atributos nativos del `<input type="file">`.

## Estados

Sin archivo y con archivo (muestra el nombre). El foco dibuja un contorno `core-interactions-active-primary600` alrededor.

## Do / Don't

- Do: muestra siempre el nombre del archivo elegido.
- Do: indica formato y peso en `helperText`.
- Don't: lo uses para imágenes que el usuario necesita ver; usa `InputDropfile`.

## Notas de la fuente

- Los textos de Figma estaban en inglés ("Choose file", "No file chosen"); se tradujeron.
- El tamaño Large en Figma usa `core-surface-purple-light-100` y variables sueltas (`gray/50`, `gray/300`, `gray/900`); se unificó con Default (`core-surface-primary-light-100` y tokens `fileUpload-*`). Conviene corregirlo en Figma.
- El input nativo es invisible y cubre la fila completa.

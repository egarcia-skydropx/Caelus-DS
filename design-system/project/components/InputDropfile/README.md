# InputDropfile

Zona para arrastrar y soltar o elegir archivos, con estados de carga con barra de progreso y de archivo listo.

## Cuándo usarlo

- Cuando quieres mostrar vista previa (imágenes, logos) o cargar archivos masivos (XLSX, CSV).
- Siempre indica formatos y peso máximo en `hint`.

## Qué pasa el consumidor

- `type` (`img` | `file`), `status` (`default` | `uploading` | `value`).
- `label`, `info`, `title`, `hint`, `helperText`.
- `onFiles(files)`, `accept`, `multiple` y atributos nativos del `<input type="file">`.
- `fileName`, `progress` (0–100), `progressText`, `previewSrc`, `previewAlt`, `onRemove`, `removeLabel`.

## Estados

Default, Uploading, Value (archivo o imagen). Al arrastrar encima se marca el borde.

## Do / Don't

- Do: indica formatos y tamaño máximo.
- Do: deja quitar el archivo antes de enviar.
- Don't: lo uses en formularios largos donde ocupa mucho espacio: usa `InputFile`.

## Notas de la fuente

- El `<input type="file">` cubre la zona de forma invisible: acepta clic, teclado y arrastrar y soltar de forma nativa.
- Borde: Figma usa 2px punteado (5/5) `core-border-secondary-gray200`; CSS no permite fijar el patrón 5/5, así que se usa `dashed`. Los tokens `fileUpload-*-stroke` (1px) y `fileUpload-default-border-color` (gray300) no coinciden con lo dibujado; se respeta Figma.
- Botón eliminar: `Button` `type="tertiary"`, `shape="square"`, `size="xs"`. Barra de progreso: `core-theme-gray-lighter-200` y `core-theme-primary-contrast-600`.
- La miniatura de Figma es una imagen; aquí se pasa con `previewSrc`.

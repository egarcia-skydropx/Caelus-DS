# InputComboboxFlag

Variante del combobox en la que cada opción lleva una bandera; sirve para elegir país escribiendo o desde la lista.

## Cuándo usarlo

- Selección de país (origen/destino, idioma regional).
- Cuando la bandera ayuda a reconocer la opción más rápido que el texto.

## Qué pasa el consumidor

- Todas las props de `InputCombobox`.
- `options`: igual que en el combobox más `flag` (ReactNode: un `<img>` o `<svg>` de la bandera). Sin `flag` se dibuja una caja gris neutra de 28×20.

## Estados

Los mismos que `InputCombobox`. La bandera de la opción elegida se muestra a la izquierda en el campo.

## Do / Don't

- Do: ordena los países alfabéticamente o pon los más usados primero.
- Do: usa banderas en todos los selects de país del mismo flujo.
- Don't: uses solo la bandera sin nombre: no todos la reconocen.

## Notas de la fuente

- No se copia el arte de las banderas de Figma: el consumidor pasa su propia bandera en `flag`. El hueco usa `core-theme-gray-lighter-200` y `--radius-2`.
- En Figma las banderas del dropdown miden 20×14; aquí se usa una caja de 28×20 según el brief del sistema.
- Se apoya en `InputCombobox` en tiempo de render (`window.Caelus.InputCombobox`).

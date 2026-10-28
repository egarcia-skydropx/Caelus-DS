# DrawerNotification

Panel lateral que agrupa las notificaciones del usuario con filtros, marca de no leídas y acceso a ver más.

## Cuándo usarlo
- Como centro de notificaciones que se abre desde el borde derecho (referidos, créditos, incidencias de envíos).
- Para avisos asíncronos del sistema; para un evento puntual que celebrar usa `NotificationPushup`.

## Qué pasa el consumidor
- `title`, `onClose`, `closeLabel`.
- `notifications`: `{ id, title, message, time, read, icon }`.
- `filters`, `filter` / `defaultFilter`, `onFilterChange`: botones con `aria-pressed`; la app filtra la lista.
- `onMarkAllRead`, `markAllLabel`, `onSeeMore`, `seeMoreLabel`, `onNotificationClick`, `emptyState`.

## Estados
- Notificación no leída: fondo `core-surface-indigo-light-100` y punto `core-icon-contrast-primary600` (anunciado como "No leída" a lectores de pantalla).
- Leída: fondo blanco, alineada con las no leídas.
- "Marcar como leídas" deshabilitado cuando no hay pendientes (variante `Leidas` del filtro).
- Lista vacía: mensaje simple o `emptyState`.

## Do / Don't
- Do: el título debe coincidir con la sección que abrió el drawer.
- Do: usa los botones indicados para cada flujo (terciario para "Ver más").
- Don't: uses el índigo de no leída como color de acción.

## Notas de la fuente
- Figma: `drawer-notification` (15680:29389) en ❖ Drawer; los internos `.filtro-notificaciones` (15680:28698) y `.notificación` (15680:28854) quedan dentro.
- La notificación leída usa `#ffffff` sin variable; se usó `white` (mismo hex). El texto "No leídas (0)" usa `#6b7280` sin variable: igual a `core-text-secondary-gray500`.
- El tiempo ("10min") usa Inter Light (300); se usó 400 porque el sistema define 400–700.
- Las variantes por `Plataforma` (Pro, SE, EI) de `.notificación` comparten los mismos colores; no se agregó prop de plataforma. La variante `En Blanco` no se construyó (es un placeholder vacío).
- En Figma el filtro activo de la variante `No leídas` muestra una campana en lugar de barras; aquí el ícono es configurable por filtro.

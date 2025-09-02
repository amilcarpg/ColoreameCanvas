# Resumen de TECNICO.md

La arquitectura del proyecto es una SPA sin frameworks que usa la API Canvas 2D y persistencia ligera con LocalStorage. La lógica se divide en:

- `state.js` para el estado global (herramienta, color, tolerancia, historial).
- `/services` para la lógica de negocio (canvas, imágenes, exportación, historial, storage).
- `/ui` para componentes de interfaz.
- `/utils` con helpers puros.
- `/workers` para operaciones pesadas opcionales como el flood fill.

Limitaciones principales: lienzo hasta 1920×1080 px, historial de 20 pasos y posible lentitud del flood fill en imágenes grandes. Es compatible con los navegadores modernos en desktop y móvil (Chrome, Firefox, Edge, Safari, Safari iOS ≥ 13) y no envía datos a servidores externos. Las pruebas unitarias se ubican en `/tests` y se ejecutan en el navegador mediante `runner.js` y `assert.js`.


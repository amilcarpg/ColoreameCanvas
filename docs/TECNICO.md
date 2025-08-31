# ⚙️ Notas Técnicas — Coloréame

## Arquitectura
- **SPA sin frameworks**: HTML5, CSS3, JavaScript (ES6).
- **Canvas 2D API**: motor gráfico para pintar, borrar y rellenar.
- **LocalStorage**: persistencia mínima (color y tamaño de pincel).
- **Pruebas unitarias**: ejecutadas en navegador desde `/tests`.

## Estructura lógica
- `state.js`: estado global de la app (herramienta, color, tolerancia, historial).
- `/services`: lógica de negocio (canvas, imágenes, exportación, historial, storage).
- `/ui`: componentes de interfaz (toolbar, paleta, canvasView).
- `/utils`: helpers puros (color, geometría).
- `/workers`: lógica pesada (flood fill) opcional en Web Worker.

## Límites técnicos
- Resolución máxima de lienzo: **1920×1080**.
- Historial: máximo **20 pasos** (undo/redo).
- Flood fill: puede ser lento en imágenes muy grandes → recomendable usar Worker.

## Compatibilidad
- Desktop: Chrome, Firefox, Edge, Safari.
- Móvil: Chrome Android, Safari iOS ≥ 13.

## Seguridad / Privacidad
- Todo ocurre localmente en el navegador.
- No se envían imágenes ni datos a servidores externos.

## Pruebas unitarias
- **Ubicación**: `/tests`.
- **Runner**: `runner.js` + `assert.js`.
- **Alcance**: utils y services (color, geometría, historial, canvas básico).
- **Ejecución**: abrir `tests/index.html` en navegador.

---

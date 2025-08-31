# Plan para el MVP de Coloréame

1. **Estructura inicial del proyecto**
   - Crear las carpetas descritas: `css/`, `js/`, `workers/`, `assets/`, `tests/` y `docs/`.
   - Incluir `index.html` y hojas de estilo base.

2. **Estado global y servicios**
   - Implementar `state.js` para manejar herramienta activa, color, tamaño de pincel, tolerancia y pila de historial.
   - Desarrollar servicios para cargar imágenes, gestionar el canvas, historial, exportación y almacenamiento en LocalStorage.

3. **Interfaz de usuario**
   - Construir componentes en `/ui` para la barra de herramientas, paleta de colores y vista del canvas.
   - Integrar un selector avanzado de color.

4. **Herramientas de dibujo**
   - Implementar el **pincel** con tamaño configurable.
   - Crear el **bote de pintura** con algoritmo de flood fill y tolerancia; opcionalmente usar un Web Worker.
   - Añadir **borrador** que remueva el color agregado.

5. **Historial y exportación**
   - Gestionar deshacer/rehacer hasta 20 pasos.
   - Exportar el canvas final a PNG.

6. **Pruebas unitarias**
   - Escribir pruebas para utilidades y servicios clave en `/tests` usando `runner.js` y `assert.js`.

7. **Documentación y despliegue**
   - Completar guía de uso y notas técnicas.
   - Preparar publicación en GitHub Pages desde la rama `main`.


# 🎨 Coloréame — MVP (SPA Vanilla)

Coloréame es una aplicación web **SPA sin frameworks** para colorear imágenes (PNG/JPG) usando HTML5 Canvas.
Todo funciona **localmente en el navegador**, sin backend, y puede desplegarse fácilmente en **GitHub Pages**.

## 🚀 Características (MVP)
- Carga de imágenes locales (PNG/JPG) y galería de ejemplos.
- Herramientas: **Pincel**, **Bote de pintura (flood fill con tolerancia)**, **Borrador**.
- Paleta de colores + selector avanzado.
- Historial: **Deshacer / Rehacer** (hasta 20 pasos).
- Exportación a PNG.

## 📂 Estructura de carpetas

```
/ (raíz)
├─ index.html
├─ /css
│  └─ style.css
├─ /js
│  ├─ main.js
│  ├─ state.js
│  ├─ /tools
│  ├─ /services
│  ├─ /ui
│  └─ /utils
├─ /workers
│  └─ floodFill.js
├─ /assets
├─ /tests
│  ├─ runner.js
│  ├─ assert.js
│  ├─ history.test.js
│  └─ storage.test.js
├─ /docs
│  ├─ USO.md
│  └─ TECNICO.md
└─ README.md
```

## 🧪 Pruebas unitarias
- Se encuentran en `/tests`.
- Se ejecutan con `npm test`.

## 🌐 Despliegue en GitHub Pages
1. Sube este repo a GitHub.
2. Ve a **Settings → Pages**.
3. Selecciona branch `main` y carpeta `/`.
4. Accede desde la URL pública generada.

## 📄 Documentación adicional
- [USO.md](./docs/USO.md): Guía rápida de uso para usuarios finales.
- [TECNICO.md](./docs/TECNICO.md): Notas técnicas y de mantenimiento.

---

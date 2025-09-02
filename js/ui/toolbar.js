import { setTool, setBrushSize, state } from '../state.js';
import { exportPNG } from '../services/exportService.js';
import { loadExample } from '../services/galleryService.js';
import { loadFile, getImage } from '../services/canvasService.js';

export function initToolbar() {
  document.getElementById('brush').onclick = () => setTool('brush');
  document.getElementById('bucket').onclick = () => setTool('bucket');
  document.getElementById('eraser').onclick = () => setTool('eraser');
  document.getElementById('brushSize').oninput = (e) => setBrushSize(parseInt(e.target.value));
  document.getElementById('export').onclick = exportPNG;

  document.getElementById('imageLoader').onchange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await loadFile(file);
      state.history.clear();
      state.history.push(getImage());
    }
  };

  document.getElementById('gallery').onchange = (e) => {
    const val = e.target.value;
    if (val) loadExample(val);
  };
}

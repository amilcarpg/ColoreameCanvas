import { setTool, setBrushSize } from '../state.js';
import { exportPNG } from '../services/exportService.js';

export function initToolbar() {
  document.getElementById('brush').onclick = () => setTool('brush');
  document.getElementById('bucket').onclick = () => setTool('bucket');
  document.getElementById('eraser').onclick = () => setTool('eraser');
  document.getElementById('brushSize').oninput = (e) => setBrushSize(parseInt(e.target.value));
  document.getElementById('export').onclick = exportPNG;
}

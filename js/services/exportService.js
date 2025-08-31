import { canvas } from './canvasService.js';

export function exportPNG() {
  const link = document.createElement('a');
  link.download = 'canvas.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

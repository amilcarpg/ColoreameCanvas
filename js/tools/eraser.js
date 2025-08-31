import { state } from '../state.js';
import { ctx } from '../services/canvasService.js';

export function eraseStart(x, y) {
  ctx.save();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineWidth = state.brushSize;
  ctx.lineCap = 'round';
}

export function eraseDraw(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
}

export function eraseEnd() {
  ctx.closePath();
  ctx.restore();
}

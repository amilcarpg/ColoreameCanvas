import { state } from '../state.js';
import { ctx } from '../services/canvasService.js';

export function startBrush(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.strokeStyle = state.color;
  ctx.lineWidth = state.brushSize;
  ctx.lineCap = 'round';
}

export function drawBrush(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
}

export function endBrush() {
  ctx.closePath();
}

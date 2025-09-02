import { state } from '../state.js';
import { ctx } from '../services/canvasService.js';
import { floodFill } from '../utils/floodFill.js';

let worker = null;
if (window.Worker) {
  try {
    worker = new Worker('../workers/floodFill.js', { type: 'module' });
  } catch (e) {
    worker = null;
  }
}

export function bucketFill(x, y) {
  const image = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const fillColor = hexToRgba(state.color);
  if (worker) {
    worker.postMessage({ imageData: image, x, y, color: fillColor, tolerance: state.tolerance });
    worker.onmessage = (e) => {
      ctx.putImageData(e.data, 0, 0);
      state.history.push(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
    };
  } else {
    floodFill(image, x, y, fillColor, state.tolerance);
    ctx.putImageData(image, 0, 0);
    state.history.push(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
  }
}

function hexToRgba(hex) {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  return [
    (bigint >> 16) & 255,
    (bigint >> 8) & 255,
    bigint & 255,
    255,
  ];
}

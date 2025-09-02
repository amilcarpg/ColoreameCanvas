import { state } from './state.js';
import { canvas, ctx, resize, getImage, putImage } from './services/canvasService.js';
import { initToolbar } from './ui/toolbar.js';
import { initPalette } from './ui/palette.js';
import { startBrush, drawBrush, endBrush } from './tools/brush.js';
import { eraseStart, eraseDraw, eraseEnd } from './tools/eraser.js';
import { bucketFill } from './tools/bucket.js';

resize(800, 600);
initToolbar();
initPalette();
state.history.push(getImage());

let drawing = false;

canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  if (state.tool === 'brush') {
    drawing = true;
    startBrush(x, y);
  } else if (state.tool === 'eraser') {
    drawing = true;
    eraseStart(x, y);
  } else if (state.tool === 'bucket') {
    bucketFill(x, y);
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (!drawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  if (state.tool === 'brush') {
    drawBrush(x, y);
  } else if (state.tool === 'eraser') {
    eraseDraw(x, y);
  }
});

canvas.addEventListener('mouseup', () => {
  if (drawing) {
    if (state.tool === 'brush') endBrush();
    if (state.tool === 'eraser') eraseEnd();
    state.history.push(getImage());
  }
  drawing = false;
});

canvas.addEventListener('mouseleave', () => {
  if (drawing) {
    if (state.tool === 'brush') endBrush();
    if (state.tool === 'eraser') eraseEnd();
    state.history.push(getImage());
  }
  drawing = false;
});

// Undo/redo buttons
const undoBtn = document.getElementById('undo');
const redoBtn = document.getElementById('redo');

undoBtn.onclick = () => {
  const img = state.history.undo();
  if (img) putImage(img);
};

redoBtn.onclick = () => {
  const img = state.history.redo();
  if (img) putImage(img);
};

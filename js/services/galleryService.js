import { ctx, resize, clear, getImage } from './canvasService.js';
import { state } from '../state.js';

function baseSetup(width, height) {
  resize(width, height);
  clear();
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
}

function drawHouse() {
  baseSetup(400, 300);
  ctx.strokeRect(100, 150, 200, 100);
  ctx.beginPath();
  ctx.moveTo(100, 150);
  ctx.lineTo(200, 80);
  ctx.lineTo(300, 150);
  ctx.closePath();
  ctx.stroke();
}

function drawSmiley() {
  baseSetup(300, 300);
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(110, 120, 10, 0, Math.PI * 2);
  ctx.arc(190, 120, 10, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(150, 170, 60, 0, Math.PI);
  ctx.stroke();
}

export function loadExample(name) {
  if (name === 'house') drawHouse();
  else if (name === 'smiley') drawSmiley();
  state.history.clear();
  state.history.push(getImage());
}

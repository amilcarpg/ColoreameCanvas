const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFA500', '#FFFFFF'];
let currentColor = colors[0];
let currentTool = 'bucket';
let undoStack = [];
let redoStack = [];

function initPalette() {
  const palette = document.getElementById('palette');
  colors.forEach(c => {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.background = c;
    div.addEventListener('click', () => {
      currentColor = c;
    });
    palette.appendChild(div);
  });
}

document.getElementById('bucket').addEventListener('click', () => currentTool = 'bucket');
document.getElementById('eraser').addEventListener('click', () => currentTool = 'eraser');
document.getElementById('undo').addEventListener('click', undo);
document.getElementById('redo').addEventListener('click', redo);
document.getElementById('export').addEventListener('click', exportImage);

function loadImage(name) {
  fetch('assets/' + name)
    .then(res => res.text())
    .then(svg => {
      const area = document.getElementById('drawing-area');
      area.innerHTML = svg;
      undoStack = [];
      redoStack = [];
      attachSvgEvents();
    });
}

function attachSvgEvents() {
  const svg = document.querySelector('#drawing-area svg');
  if (!svg) return;
  svg.addEventListener('click', e => {
    const target = e.target;
    if (target.tagName === 'svg') return;
    saveState();
    if (currentTool === 'bucket') target.setAttribute('fill', currentColor);
    if (currentTool === 'eraser') target.setAttribute('fill', '#FFFFFF');
  });
}

function saveState() {
  const area = document.getElementById('drawing-area');
  if (undoStack.length >= 20) undoStack.shift();
  undoStack.push(area.innerHTML);
  redoStack.length = 0;
}

function undo() {
  const area = document.getElementById('drawing-area');
  if (undoStack.length === 0) return;
  redoStack.push(area.innerHTML);
  const state = undoStack.pop();
  area.innerHTML = state;
  attachSvgEvents();
}

function redo() {
  const area = document.getElementById('drawing-area');
  if (redoStack.length === 0) return;
  undoStack.push(area.innerHTML);
  const state = redoStack.pop();
  area.innerHTML = state;
  attachSvgEvents();
}

function exportImage() {
  const svg = document.querySelector('#drawing-area svg');
  if (!svg) return;
  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svg);
  const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  img.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'coloreado.png';
    a.click();
  };
  img.src = url;
}

initPalette();
loadImage('house.svg');

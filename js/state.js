import History from './services/historyService.js';

export const state = {
  tool: 'bucket',
  color: '#000000',
  brushSize: 10,
  tolerance: 32,
  history: new History()
};

export function setTool(t) {
  state.tool = t;
}

export function setColor(c) {
  state.color = c;
}

export function setBrushSize(s) {
  state.brushSize = s;
}

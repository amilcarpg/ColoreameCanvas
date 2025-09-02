import { setColor } from '../state.js';

export function initPalette() {
  const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFA500', '#800080'];
  const container = document.getElementById('palette');
  colors.forEach(c => {
    const btn = document.createElement('button');
    btn.style.background = c;
    btn.onclick = () => setColor(c);
    container.appendChild(btn);
  });
  const picker = document.getElementById('colorPicker');
  picker.oninput = (e) => setColor(e.target.value);
}

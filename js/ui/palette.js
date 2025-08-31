import { setColor } from '../state.js';

export function initPalette() {
  const picker = document.getElementById('colorPicker');
  picker.oninput = (e) => setColor(e.target.value);
}

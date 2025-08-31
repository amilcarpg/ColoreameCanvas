export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

export function resize(width, height) {
  canvas.width = width;
  canvas.height = height;
}

export function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function getImage() {
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

export function putImage(data) {
  ctx.putImageData(data, 0, 0);
}

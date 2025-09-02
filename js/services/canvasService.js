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

export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      resize(img.width, img.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      resolve();
    };
    img.onerror = reject;
    img.src = src;
  });
}

export function loadFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => loadImage(reader.result).then(resolve).catch(reject);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

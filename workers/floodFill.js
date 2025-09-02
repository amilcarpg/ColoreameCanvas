import { floodFill } from '../js/utils/floodFill.js';

self.onmessage = (e) => {
  const { imageData, x, y, color, tolerance } = e.data;
  floodFill(imageData, x, y, color, tolerance);
  postMessage(imageData, [imageData.data.buffer]);
};

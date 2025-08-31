import History from '../js/services/historyService.js';
import { equal } from './assert.js';

export default function testHistory() {
  const h = new History();
  h.push(1);
  h.push(2);
  h.push(3);
  equal(h.undo(), 2, 'undo');
  equal(h.undo(), 1, 'second undo');
  equal(h.redo(), 2, 'redo');
  h.push(4);
  equal(h.redo(), null, 'redo at end');
}

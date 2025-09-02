import { save, load } from '../js/services/storageService.js';
import { equal } from './assert.js';

export default function testStorage() {
  save('key', { a: 1 });
  const val = load('key', {});
  equal(val.a, 1, 'load saved value');
  const def = load('missing', 42);
  equal(def, 42, 'default value');
}

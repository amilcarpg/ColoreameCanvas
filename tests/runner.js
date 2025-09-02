import testHistory from './history.test.js';
import testStorage from './storage.test.js';

const tests = [testHistory, testStorage];
let passed = 0;
for (const t of tests) {
  try {
    t();
    console.log(`✓ ${t.name}`);
    passed++;
  } catch (e) {
    console.error(`✗ ${t.name} - ${e.message}`);
  }
}
console.log(`${passed}/${tests.length} tests passed`);

export function equal(actual, expected, message = '') {
  if (actual !== expected) {
    throw new Error(`${message} expected ${expected} but got ${actual}`);
  }
}

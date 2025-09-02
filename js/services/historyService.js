const MAX_HISTORY = 20;

export default class History {
  constructor() {
    this.stack = [];
    this.index = -1;
  }

  push(data) {
    if (this.index < this.stack.length - 1) {
      this.stack = this.stack.slice(0, this.index + 1);
    }
    this.stack.push(data);
    if (this.stack.length > MAX_HISTORY) {
      this.stack.shift();
    }
    this.index = this.stack.length - 1;
  }

  undo() {
    if (this.index > 0) {
      this.index--;
      return this.stack[this.index];
    }
    return null;
  }

  redo() {
    if (this.index < this.stack.length - 1) {
      this.index++;
      return this.stack[this.index];
    }
    return null;
  }

  clear() {
    this.stack = [];
    this.index = -1;
  }
}

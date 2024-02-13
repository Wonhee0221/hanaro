const assert = require('assert');

class Collection {
  _arr=[];
  constructor(...args){
    if (Array.isArray(args[0]))
      this._arr = args[0]
    else
      this._arr = args;
    }

  get _array() {
    return this._arr;
  }

  push(data) {
    this._arr.push(data);
    return this;
  }

  get peek() {
    return this.isQueue ? this._arr[0] : this._arr[this._arr.length - 1];
  }

  get poll() {
    if (this.isEmpty) {
      return null;
    }
    return this.isQueue ? this._arr.shift() : this._arr.pop();
  }

  clear() {
    this._arr = [];
  }

  toArray() {
    return [...this._arr];
  }

  remove() {
    this.isQueue ? this._arr.shift() : this._arr.pop();
  }

  get isEmpty() {
    return this._arr.length === 0;
  }

  get size() {
    return this._arr.length;
  }

  get isQueue(){ return this.constructor.name.toLowerCase()=="queue"}
  get isStack(){ return this.constructor.name.toLowerCase()=="stack"}
}

class Stack extends Collection {
  pop() {
    if (!this.isEmpty) {
      return this._arr.pop();
    }
  }
}

class Queue extends Collection {
  enqueue(data) {
    this._arr.push(data);
    return this;
  }

  dequeue() {
    return this._arr.shift();
  }
}

const stack = new Stack();
stack.push(1).push(2).push(3).push(5);
assert.deepStrictEqual(stack.toArray(), [1, 2, 3, 5]);
stack.pop();
console.log(stack.toArray());
assert.strictEqual(stack.peek, 3);
stack.remove();
assert.strictEqual(stack.poll, 2);
assert.deepStrictEqual(stack.toArray(), [1]);

const queue = new Queue();
queue.enqueue(1).enqueue(3).enqueue(5);
queue.dequeue();
assert.deepStrictEqual(queue.toArray(), [3, 5]);
assert.strictEqual(queue.poll, 3);
assert.deepStrictEqual(queue.toArray(), [5]);

if (!stack.isEmpty) stack.clear();
if (queue.size) queue.clear();

assert.deepStrictEqual(stack.toArray(), []);
assert.deepStrictEqual(queue.toArray(), []);

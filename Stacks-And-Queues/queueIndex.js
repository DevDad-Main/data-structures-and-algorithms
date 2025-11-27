class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }

    // NOTE: We set the next item in the queue to be the first as we remove the first Item due to our queues work. FIFO
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const queue = new Queue();
queue.enqueue("Joy");
queue.enqueue("Matt");
queue.enqueue("Pavel");
queue.enqueue("Samir");

console.log(queue.dequeue());
console.log(queue.peek());

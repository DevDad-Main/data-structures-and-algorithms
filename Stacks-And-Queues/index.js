class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    // OR we could check if the length is 0
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    //NOTE: If we didn't create this refernce to the top node, becuase JS is a garbage collected language,
    // as soon as it sees we have no references it will get automatically deleted.
    const holdingPointer = this.top; // Technically we don't need this, but handy if we want to use it later as it still holds the references.
    this.top = this.top.next; // Next inline
    this.length--;
  }
}

const stack = new Stack();
stack.push("google");
stack.push("udemy");
stack.push("discord");

console.log(stack);
console.log("Peek: ", stack.peek());

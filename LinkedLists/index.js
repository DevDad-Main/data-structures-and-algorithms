//INFO: Linked Lits 10 => 5 => 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null, // Null Terminator
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    // NOTE: At the begining of the list, the tail is the head
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);

console.log(linkedList);
/* Expected Initial Output:

LinkedList {
  head: { value: 10, next: null },
  tail: { value: 10, next: null },
  length: 1
}
*/

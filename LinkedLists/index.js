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
    // - 1. Create a new node with the values passed in.
    // - 2. Set the next value of the second to last element as this new value;
    // - 3. set Tail to the last element in the list
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {}
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

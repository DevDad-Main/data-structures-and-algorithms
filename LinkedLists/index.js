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

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    //NOTE: Adding to the end of the linked list if index is greater than the length
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    //NOTE: Traverse to the index we want but then we get the previous node so we shift our data around and insert the new node in it's place
    const leader = this.traverseToIndex(index - 1);
    //                       10 will be the leeader
    // Current Output: [ 1, 10, 5, 16 ]
    //                          ^ will be the holdingPointer as wee want to insert the node into index 2
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();

    //Expected Output: [ 1, 10, 99, 5, 16 ]
  }

  //NOTE: we traverse the linked list to the index we want to insert the new node
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  /**
   * Removes a Node from our linked list
   * @param {number} index
   * @returns {LinkedList}
   */
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    // NOTE: Node to delete
    const unwantedNode = leader.next;
    //NOTE: Then we set it to the node we want to delete's next node
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.printList();

linkedList.insert(2, 99);
linkedList.insert(20, 88);
linkedList.printList();

linkedList.remove(2);
linkedList.remove(2);
/* Expected Initial Output:

LinkedList {
  head: { value: 10, next: null },
  tail: { value: 10, next: null },
  length: 1
}
*/

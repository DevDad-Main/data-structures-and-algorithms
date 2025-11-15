function printList(linkedList) {
  let current = linkedList.head;
  while (current) {
    console.log({
      value: current.value,
      next: current.next ? current.next.value : null,
      prev: current.prev ? current.prev.value : null,
    });
    current = current.next;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    // NOTE: At the begining of the list, the tail is the head
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    this.printList();
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
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

const linkedList = new DoublyLinkedList(10);
linkedList.append(5);
linkedList.append(16);
/* Result:
    { key: 'length', value: 3 }
    { value: 10, next: 5, prev: null }
    { value: 5, next: 16, prev: 10 }
    { value: 16, next: null, prev: 5 }
*/
linkedList.prepend(1);

printList(linkedList);

linkedList.insert(2, 99);

printList(linkedList);

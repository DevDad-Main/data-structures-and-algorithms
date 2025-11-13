class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //NOTE: Big O of O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.data.length;
    }
    return hash;
  }

  //NOTE: Big O of O(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  //NOTE: Big O of O(1)
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // Expected Output: [ [ 'grapes', 10000 ] ]
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        // Accessing the key which would be the first element of the array 'grapes'
        if (currentBucket[i][0] === key) {
          // returning the 'value' which would be the second element of the array 'grapes'
          return currentBucket[i][1];
        }
      }
    }
    return undefined; // NOTE: Nothing in the bucket to be found
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
// const result = myHashTable.get("grapes"); // 10000
// const result = myHashTable.get("apples"); // 54
// console.log(result);

console.log(myHashTable.keys());

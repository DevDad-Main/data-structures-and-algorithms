const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// const array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// const array = [2, 3, 4, 5];

function firstRecurringCharacter(array) {
  let result = [];
  let currentIndex = undefined;

  for (let i = 0; i < array.length; i++) {
    currentIndex = array[i];
    if (!result.includes(currentIndex)) {
      result.push(currentIndex);
      console.log(result);
    } else {
      return currentIndex;
    }
  }
}

//NOTE: O(n*2)
const nestedRecurringLoop = (array) => {
  //NOTE: Nested loop, the outer loop checks each index only once in the inner loop loops through all the items
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return undefined; // No values recure
};

//NOTE: Improved: O(n)
const nestedRecurringLoopWithHashTables = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    //NOTE: Need to specify due to Javascripts dynamic nature
    if (map[array[i]] !== undefined) {
      return array[i];
    } else {
      map[array[i]] = i;
    }
    console.log(map);
    // Expected Output:
    /*{ '2': 0 }
      { '2': 0, '5': 1 }
      { '1': 2, '2': 0, '5': 1 }
      2
      */
  }
  return undefined; // No values recure
};

// console.log(firstRecurringCharacter(array));
// console.log(nestedRecurringLoop(array));
console.log(nestedRecurringLoopWithHashTables(array));

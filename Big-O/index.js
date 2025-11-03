const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(100000).fill("nemo");
// const larger = new Array(1000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

// findNemo(large); // O(n) => Linear Time

// findNemo(nemo); // Takes 3.8893079999999998 milliseconds - 1 Item
// findNemo(everyone); // Takes 3.747309999999999 milliseconds -10 Items
// findNemo(large); // Takes 6.494449000000001 milliseconds - 100 Items
// findNemo(larger); // Takes 16.809918999999997 milliseconds - 1000 Items

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }
//
// logFirstTwoBoxes(boxes); // O(2) => We are doing 2 operations - Constant Time, it still is flat and is a constant line regardless of the amount of operations we do.

// NOTE: Loggin all pairs of an array
// const boxes = ["a", "b", "c", "d", "e", "f"];

// INFO: This would be classed as horrible on our Big O chart, but it is a good example of how we can log all pairs of an array.
// function logAllPairsfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }

// logAllPairsfArray(boxes); // O(n^2) => We are doing n^2 operations - Quadratic Time, it is a linear increase in time as the amount of operations increases.

function booo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooooooo!");
  }
}

booo([1, 2, 3, 4]); // O(1) => Space complexity of 1

function arrayOfHelloNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hello";
  }
  return hiArray;
}

console.log(arrayOfHelloNTimes(10)); // O(n) => Space complexity of n

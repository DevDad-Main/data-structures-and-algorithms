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

const large = new Array(100).fill("nemo");
const larger = new Array(1000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log(`Time taken to find nemo: ${t1 - t0} milliseconds`);
}

// findNemo(nemo); // Takes 3.8893079999999998 milliseconds - 1 Item
// findNemo(everyone); // Takes 3.747309999999999 milliseconds -10 Items
// findNemo(large); // Takes 6.494449000000001 milliseconds - 100 Items
findNemo(larger); // Takes 16.809918999999997 milliseconds - 1000 Items

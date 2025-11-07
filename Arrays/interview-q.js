//#region Reverse String
// Hi my name is Devdad

/**
 * Takes a string and returns the reversed string
 * @param {string} str
 * @returns {string} Reveresed string
 */
function reverse(str) {
  if (!str || str.length === 0 || typeof str !== "string")
    throw new Error("Invalid argument of string");

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => str.split("").reverse().join("");
const reverse4 = (str) => [...str].reverse().join("");

console.log(reverse("Hi my name is Devdad"));
console.log(reverse2("Hi my name is Devdad"));
console.log(reverse3("Hi my name is Devdad"));
console.log(reverse4("Hi my name is Devdad"));
//#endregion

//#region Merge Sorted Arrays
const compareNumbers = (a, b) => a - b;

function mergeSortedArrays(arr1, arr2) {
  if ((arr1 || arr1).length === 0) return;
  const mergedArray = [];

  return mergedArray.concat(arr1, arr2).sort(compareNumbers);
}

console.log("Merged Arrays... ", mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
//#endregion

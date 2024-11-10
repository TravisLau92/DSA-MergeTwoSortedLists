// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function mergeSortedLists(arr1, arr2) {
  const result = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }

  // Add any remaining elements from arr1
  while (index1 < arr1.length) {
    result.push(arr1[index1]);
    index1++;
  }

  // Add any remaining elements from arr2
  while (index2 < arr2.length) {
    result.push(arr2[index2]);
    index2++;
  }

  return result;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

console.log(`Array 1: [${arr1}]`);

console.log(`Array 2: [${arr2}]`);

console.log(`Merged and Sorted Array: [${mergeSortedLists(arr1, arr2)}]`);
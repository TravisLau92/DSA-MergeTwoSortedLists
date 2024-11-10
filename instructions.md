Title: Merge Two Sorted Lists Algorithm Challenge


Objective:
In this coding exercise, you will create a JavaScript function to merge two sorted arrays into a single sorted array. The input arrays will be in ascending order, and the resulting merged array should also be in ascending order. You are advised to use a for...of loop for this challenge.

Create a function named `mergeSortedLists(arr1, arr2)` that takes two sorted arrays of integers (`arr1` and `arr2`) as input and returns a new array containing the merged and sorted elements.

When using the following input:
```js
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(`Array 1: [${arr1}]`);
console.log(`Array 2: [${arr2}]`);
console.log(`Merged and Sorted Array: [${mergeSortedLists(arr1, arr2)}]`);
```

For example, after implementing the function, you should be able to produce the following output:
```js
Array 1: [1, 3, 5, 7]
Array 2: [2, 4, 6, 8]
Merged and Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8]
```

Helpful resources:
- The for...of loop documentation on the Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- Template literals documentation on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

<details>
<summary>Hints</summary>
  
1. Create a function `mergeSortedLists(arr1, arr2)` that accepts two arrays, `arr1` and `arr2`.
2. Initialize two variables, `index1` and `index2`, to keep track of the current positions in `arr1` and `arr2`, respectively. Initialize an empty array named `result` to store the merged and sorted array.
3. Use a for...of loop to iterate through the elements of both arrays. Use the loop to compare the elements at `arr1[index1]` and `arr2[index2]`.
4. If `arr1[index1]` is less than or equal to `arr2[index2]`, push `arr1[index1]` to the `result` array and increment `index1`.
5. Otherwise, push `arr2[index2]` to the `result` array and increment `index2`.
6. After the loop, there might be some remaining elements in either `arr1` or `arr2`. Use another loop or a `while` loop to add the remaining elements to the `result` array.
7. Return the `result` array.
8. Call the function with appropriate input arrays and log the original arrays and the merged and sorted array using template literals.
9. Make sure to use camel case for variable names.
10. Use template literals when logging the output to the console.
</details>
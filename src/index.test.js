// import { findNotIncluded, removeArrayElement } from "./index";

// // findNotIncluded tests.
// test(`findNotIncluded test #1: Checks if returns the items of the array that are not included in the subset.`, () => {
//   const array = [1, 2, 3, 4, 5];
//   const subset = [2, 4, 5];

//   const result = findNotIncluded(array, subset);

//   expect(result).toEqual([1, 3]);
// });

// test(`findNotIncluded test #2: Checks if returns the array if the subset is empty.`, () => {
//   const array = [1, 2, 3, 4, 5];
//   const subset = [];

//   const result = findNotIncluded(array, subset);

//   expect(result).toEqual([1, 2, 3, 4, 5]);
// });

// test(`findNotIncluded test #3: Checks if returns an empty array if the subset is bigger than the array.`, () => {
//   const array = [1, 2, 3, 4];
//   const subset = [1, 2, 3, 4, 5];

//   const result = findNotIncluded(array, subset);

//   expect(result).toEqual([]);
// });

// test(`findNotIncluded test #4: Checks if returns an empty array if the subset is equal to the array.`, () => {
//   const array = [1, 2, 3, 4, 5];
//   const subset = [1, 2, 3, 4, 5];

//   const result = findNotIncluded(array, subset);

//   expect(result).toEqual([]);
// });

// test(`findNotIncluded test #5: Checks if returns an empty array if the subset is not actually a subset.`, () => {
//     const array = [1, 2, 3, 4, 5];
//     const subset = [6, 7, 8, 9, 10];
  
//     const result = findNotIncluded(array, subset);
  
//     expect(result).toEqual([]);
//   });

// // removeArrayElement tests
// test(`removeArrayElement test #1: Checks if removes the element from the array.`, () => {
//   const array = [1, 2, 3, 4, 5];
//   const element = 1;

//   removeArrayElement(array, element);

//   expect(array).toEqual([2, 3, 4, 5]);
// });

// test(`removeArrayElement test #2: Checks if the array remains intact when the element does not belong in the array.`, () => {
//   const array = [1, 2, 3, 4, 5];
//   const element = 8;

//   removeArrayElement(array, element);

//   expect(array).toEqual([1, 2, 3, 4, 5]);
// });
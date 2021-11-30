const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let obj = {};
  for (let val of allItems) {
    if (itemsToCount[val]) {
      if (obj[val]) {
        obj[val] += 1;
      } else {
        obj[val] = 1;
      }
    }
  }
  return obj;
};

#!/usr/bin/node
/**
 * Write a function that returns the number of occurrences in a list:
 * * * Prototype: exports.nbOccurences = function (list, searchElement)
 */
exports.nbOccurences = function (list, searchElement) {
  let collect = 0;
  for (let i = 0; list[i] !== undefined; i++) {
    if (list[i] === searchElement) {
      collect++;
    } else {
      continue;
    }
  }
  return collect;
};

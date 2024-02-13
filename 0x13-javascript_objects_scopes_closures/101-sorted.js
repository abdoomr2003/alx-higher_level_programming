#!/usr/bin/node
/**
 * Write a script that imports a dictionary of occurrences by user id and computes a dictionary of user ids by occurrence.

 * * My script must import dict from the file 101-data.js
 * * In the new dictionary:
 * * * A key is a number of occurrences
 * * * A value is the list of user ids
 * * Print the new dictionary at the end
 */
const { dict } = require('./101-data.js');

const newDict = {};
for (const value in dict) {
  const kay = dict[value];
  if (kay in newDict) {
    newDict[kay].push(value);
  } else {
    newDict[kay] = [value];
  }
}

console.log(newDict);

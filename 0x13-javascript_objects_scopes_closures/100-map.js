#!/usr/bin/node
/**
 * Write a script that imports an array and computes a new array.
 * * My script must import list from the file 100-data.js
 * * I must use a map. Tips(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=control)
 * * A new list must be created with each value equal to the value of the initial list, multipled by the index in the list
 * * Print both the initial list and the new list
 */
const {list} = require('./100-data');
console.log(list);
const newlist = list.map((value, index) => value * index);
console.log(newlist);

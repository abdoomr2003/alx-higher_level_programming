#!/usr/bin/node

/**
 * This script prints a square.
 * The first argument is the size of the square
 * If the first argument can’t be converted to an integer, print “Missing size”
 * I must use the character X to print the square
 * I must use console.log(...) to print all output
 * I'm not allowed to use 'var'
 * I must use a loop (while, for, etc.)
 */
const argv = Number(process.argv[2]);
let isarray = [];
if (isNaN(argv) === true) {
  console.log('Missing size');
} else {
  let i, j;
  for (i = 1; i <= argv; i++) {
    for (j = 1; j <= argv; j++) {
      isarray += 'X';
    }
    console.log(isarray);
    isarray = [];
  }
}

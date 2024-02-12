#!/usr/bin/node

/**
 * This script prints x times “C is fun”
 * Where x is the first argument of the script.
 * If the first argument can’t be converted to an integer, print “Missing number of occurrences”
 * I must use console.log(...) to print all output.
 * I'm not allowed to use var.
 * I can use only two console.log.
 * I must use a loop (while, for, etc.).
 */
const argv = Number(process.argv[2]);
if (isNaN(argv) === true) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 1; i <= argv; i++) {
    console.log('C is fun');
  }
}
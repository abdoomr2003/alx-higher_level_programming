#!/usr/bin/node
/**
 * This script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:
 * If the argument can’t be converted to an integer, print “Not a number”.
 * I must use console.log(...) to print all output
 * I'm  not allowed to use "var" or "try/catch"
 */
let argv = process.argv[2];
argv = Number(argv);
if (isNaN(argv) === true) {
  console.log('Not a number');
} else {
  console.log('My number:', argv);
}

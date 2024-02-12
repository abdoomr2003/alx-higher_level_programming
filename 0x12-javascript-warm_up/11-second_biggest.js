#!/usr/bin/node
/**
 * This script that searches the second biggest integer in the list of arguments.
 * I can assume all arguments can be converted to integer
 * If no argument passed, print 0
 * If the number of arguments is 1, print 0
 * I must use console.log(...) to print all output
 * I'm not allowed to use var
 */
let argv = process.argv.slice(2);
for (let i = 0; argv[i] !== undefined; i++) {
  argv[i] = Number(argv[i]);
}
argv = parseInt(argv.sort().slice(-2, -1));
console.log(argv);

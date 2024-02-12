#!/usr/bin/node

/**
 * This script prints the addition of 2 integers
 * The first argument is the first integer
 * The second argument is the second integer
 * I have to define a function with this prototype: function add(a, b)
 * I must use console.log(...) to print all output
 * I'm not allowed to use var
 */
function add (a, b) {
  const c = a + b;
  console.log(c);
}

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
add(a, b);

#!/usr/bin/node
/**
 * This script computes and prints a factorial
 * The first argument is integer (argument can be cast as integer) used for computing the factorial
 * Factorial of NaN is 1
 * I must do it recursively
 * I must use a function
 * I must use console.log(...) to print all output
 * I'm not allowed to use var
 */
function factorial (a) {
  if (a === 0 || a === 1) {
    return 1;
  }
  return a * factorial((a - 1));
}
let a = Number(process.argv[2]);
if (isNaN(a) === true) {
  console.log(1);
} else {
  const factory = factorial(a);
  console.log(factory);
}

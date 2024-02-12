#!/usr/bin/node

/**
 * This script prints two arguments passed to it, in the following format: “ is ”.
 * I  must use console.log(...) to print all output.
 * I'm  are not allowed to use var.
 */
const argv = process.argv;
console.log(argv[2], 'is', argv[3]);

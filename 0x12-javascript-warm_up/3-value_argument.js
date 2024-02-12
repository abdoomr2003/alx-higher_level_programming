#!/usr/bin/node
/**
 * This script that prints the first argument passed to it:
 * If no arguments are passed to the script, print “No argument”.
 * I  must use console.log(...) to print all output.
 * I'm not allowed to use "var" or "length".
 */
const argv = process.argv;
if (argv[2] !== undefined) {
  console.log(argv[2]);
} else {
  console.log('No argument');
}

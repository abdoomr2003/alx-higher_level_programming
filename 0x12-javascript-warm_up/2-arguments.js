#!/usr/bin/node
/**
 * This script that prints a message depending of the number of arguments passed:
 * If no arguments are passed to the script, print “No argument”.
 * If only one argument is passed to the script, print “Argument found”.
 * Otherwise, print “Arguments found”.
 * I  must use console.log(...) to print all output.
 * I'm not allowed to use var.
 */
const argv = process.argv.length - 2;
if (argv === 0) {
  console.log('No argument');
} else if (argv === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}

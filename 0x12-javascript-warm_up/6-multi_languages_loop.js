#!/usr/bin/node
/**
 * This  script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop.
 * The first line: “C is fun”.
 * The second line: “Python is cool”.
 * The third line: “JavaScript is amazing”.
 * I must use console.log(...) to print all output.
 * I'm not allowed to use "var" or "if/else".
 * I can use only one console.log.
 * I must use a loop (while, for, etc.).
 */
const array = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let i;
for (i = 0; array[i] !== undefined; i++) {
  console.log(array[i]);
}

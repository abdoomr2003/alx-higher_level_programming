#!/usr/bin/node
/**
 * Write a script that concats 2 files.
 * * The first argument is the file path of the first source file
 * * The second argument is the file path of the second source file
 * * The third argument is the file path of the destination
 */
const fs = require('fs');
const filename = process.argv.slice(2);
const array = [];
for (let i = 0; i <= 1; i++) {
  array.push(fs.readFileSync(filename[i], 'utf-8'));
}
const finaltext = array.join('');
fs.writeFileSync(filename[2], finaltext);

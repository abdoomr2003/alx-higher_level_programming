#!/usr/bin/node
/**
 * Update script to replace the value 12 with 89:

 * I'm not allowed to use var
 */
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
myObject.value = 89;
console.log(myObject);

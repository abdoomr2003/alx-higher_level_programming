#!/usr/bin/node
/**
 * Write a function that executes x times a function.
 * The function must be visible from outside
 * Prototype: function (x, theFunction)
 * I'm not allowed to use var
 */
const callMeMoby = (x, theFunction) => {
  for (let i = 0; i <= x; i++) {
    theFunction();
  }
};
exports.callMeMoby = callMeMoby;

#!/usr/bin/node
/**
 * Write a function that increments and calls a function.
 * The function must be visible from outside
 * Prototype: function (number, theFunction)
 * I'm not allowed to use var
 * @param {is a var pass from main file} number
 * @param {* function that call in main file} theFunction
 */
exports.addMeMaybe = function (number, theFunction) {
  theFunction(++number);
};

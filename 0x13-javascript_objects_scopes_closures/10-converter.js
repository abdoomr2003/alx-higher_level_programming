#!/usr/bin/node
/**
 * Write a function that converts a number from base 10 to another base passed as argument:
 * * Prototype: exports.converter = function (base)
 * * I'm not allowed to import any file
 * * I'm not allowed to declare any new variable (var, let, etc..)
 */
exports.converter = function (base) {
  return function (num) {
    return num.toString(base);
  };
};

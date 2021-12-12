"use strict";

var name = ['jewel', 'tosi', 'nasi'];

function printNumber(str) {
  return str.reduce(function (mon) {
    return console.log(mon);
  });
}

printNumber(name);
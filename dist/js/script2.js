"use strict";

var name = ['ibrahim', 'jewel', 'tosi', 'nasi'];

function printNumber(str) {
  return str.reduce(function (mon) {
    return console.log(mon);
  });
}

printNumber(name);

var mother = function mother() {
  console.log("hello mother!");
};

mother();
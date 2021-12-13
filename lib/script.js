"use strict";

var printer = document.getElementById("main");
var nmlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var _i = 0, _nmlist = nmlist; _i < _nmlist.length; _i++) {
  var nmOne = _nmlist[_i];
  printer.innerHTML += "<p>".concat(nmOne, " </p>");
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var printer = document.getElementById("main");
var nmlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var _i = 0, _nmlist = nmlist; _i < _nmlist.length; _i++) {
  var nmOne = _nmlist[_i];
  printer.innerHTML += "<p>".concat(nmOne, " </p>");
} //make a class that contain name and age for each person;


var person = /*#__PURE__*/function () {
  function person(name, age) {
    _classCallCheck(this, person);

    this.name = name;
    this.age = age;
  }

  _createClass(person, [{
    key: "sayHi",
    value: function sayHi() {
      console.log("My name is ".concat(this.name, " and age is ").concat(this.age));
    }
  }]);

  return person;
}(); //now make an object for a person;


var jewelObs = new person('jewel', 33);
jewelObs.sayHi();
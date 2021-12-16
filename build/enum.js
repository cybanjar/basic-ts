"use strict";
// enum numeric
// enum Frameworks {
//   vue = 100,
//   react = 200,
//   angular
// }
// console.log(Frameworks);
// enum string
var Laptops;
(function (Laptops) {
    Laptops["mac"] = "apple";
    Laptops["thinkpad"] = "windows";
    Laptops["dell"] = "linux";
})(Laptops || (Laptops = {}));
console.log(Laptops.mac);

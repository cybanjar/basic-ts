"use strict";
function getProfile() {
    var name = 'Syamsul';
    return name;
}
function getRank() {
    return 12;
}
function printBranch() {
    console.log('void tidak boleh return');
}
printBranch();
var add = function (val1, val2) {
    return val1 + val2;
};
var result = add(4, 10);
// default parameter
var fullName = function (firstname, lastname) {
    if (lastname === void 0) { lastname = "Amin"; }
    return firstname + " " + lastname;
};
console.log(fullName("Syamsul"));
// optional parameter
var getFullname = function (val1, val2, val3) {
    return val1 + val2 + val3;
};
console.log(getFullname("Syamsul ", "Amin ", "Ahmad"));

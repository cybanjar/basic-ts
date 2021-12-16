"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        return console.log('Nyala');
    };
    Asus.prototype.off = function () {
        console.log('Mati');
    };
    return Asus;
}());
var asus = new Asus('Asus', true);
console.log(asus);
var MacBook = /** @class */ (function () {
    function MacBook(name, isRetina) {
        this.name = name;
        this.isRetina = isRetina;
    }
    MacBook.prototype.on = function () {
        console.log('Nyala');
    };
    MacBook.prototype.off = function () {
        console.log('Mati');
    };
    return MacBook;
}());
var mac = new MacBook('Mac Pro', true);
console.log(mac);

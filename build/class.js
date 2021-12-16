"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// var yg ada didalam class wajib constructor
var User = /** @class */ (function () {
    function User(name, age, noHp) {
        var _this = this;
        this.age = age;
        this.noHp = noHp;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
// inheritance :
// public = bisa di akses di semua class/ luar class
// protected = hanya bisa di akses dalam class tersebut, dan class turunannya
// private = hanya dalam class tsb
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(hoby, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = ""; // must set & get
        _this.hoby = hoby;
        return _this;
    }
    Admin.getRole = function () {
        return "hi doraemon";
    };
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.length < 5) {
                this._email = 'email salah';
            }
            else {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Admin.getRoleName = "Admin"; // static property
    return Admin;
}(User));
// let admin = new Admin("Badminton", "Ahmad", 20);
// admin.getName();
// admin.setName("Syamsul");
// admin.getRole();
// admin.email = 'ah@g';
// console.log(admin.email);
var admin = Admin.getRole(); // print static method
console.log(admin);

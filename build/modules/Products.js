"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Mercy_1 = __importDefault(require("./Mercy"));
var Satria_1 = __importDefault(require("./Satria"));
var mercy = new Mercy_1.default("Mercedes Benz", 4, 200);
console.log(mercy);
var satria = new Satria_1.default("F150", 2, "Manual");
console.log(satria);
satria.manual();
satria.automatic();

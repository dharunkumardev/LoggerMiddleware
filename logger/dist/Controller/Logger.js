"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor() {
        this.Logger = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let currentdate = new Date();
            let formatted_date = currentdate.getFullYear() + "-" +
                (currentdate.getMonth() + 1) + '-' + currentdate.getDate() +
                ' ' + currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds() +
                '-' + currentdate.getMilliseconds();
            let method = req.method;
            let url = req.url;
            let status = 200;
            let log = `[${formatted_date}] ${method} ${url} ${status}`;
            console.log(log);
            next();
        });
    }
}
exports.default = new Controller();

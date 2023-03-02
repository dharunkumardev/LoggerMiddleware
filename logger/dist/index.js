"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Logger_1 = __importDefault(require("./Controller/Logger"));
const routes_1 = __importDefault(require("./router/routes"));
const app = (0, express_1.default)();
app.use(Logger_1.default.Logger);
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(8000, () => {
    console.log("Server in running in port 8000");
});

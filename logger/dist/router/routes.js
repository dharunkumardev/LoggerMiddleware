"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const methodController_1 = __importDefault(require("../Controller/methodController"));
const recordRoutes = express_1.default.Router();
const app = (0, express_1.default)();
app.use(express_1.default.json());
recordRoutes.get("/get", methodController_1.default.find);
exports.default = recordRoutes;

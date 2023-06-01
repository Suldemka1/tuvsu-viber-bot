"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const viber_bot_1 = require("viber-bot");
const app = (0, express_1.default)();
const bot = new viber_bot_1.Bot({
    authToken: process.env.VIBER_BOT_API,
    name: "tusvu-bot",
    avatar: "http://viber.com/avatar.jpg",
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/", () => {
    bot.sendMessage();
});
app.use("https://b1c4-176-208-2-67.ngrok-free.app", bot.middleware());
app.listen(8081, () => {
    console.log("api");
});
//# sourceMappingURL=index.js.map
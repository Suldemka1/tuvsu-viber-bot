export { IViberBot, ITextMessage, IUserProfile } from "./bot.interface";

import { BotService } from "./bot.service";
import { BotController } from "./bot.controller";
import { bot } from "./bot.config";

const botService = new BotService(bot)
const botController = new BotController(botService)

export default botController


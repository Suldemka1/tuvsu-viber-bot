import { Router } from "express";
import multer from "multer";
import { BotController } from "src/entities/bot/bot.controller";
import { BotService } from "src/entities/bot/bot.service";
import { bot } from "src/entities/bot/bot.config";

const botService = new BotService(bot)
const botController = new BotController(botService)

const router = Router();
router.use(multer().none());

router.route("/sendMessage").post(botController.sendMessage);

export { router as botRouter };

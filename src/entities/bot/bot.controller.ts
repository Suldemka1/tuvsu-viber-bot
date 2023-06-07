import { Request, Response } from "express";
import { BotService } from "./bot.service";

class BotController {
  constructor(private botService: BotService) {}
  sendMessage = async (req: Request, res: Response) => {
    try {
      await this.botService?.sendMessage(req?.body?.id, req?.body?.message);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  };
}

export { BotController };

import { Message } from "viber-bot";

class BotService {
  constructor(private bot: any) {
    this.bot = bot;
  }

  sendMessage = async (id: string, message: string) => {
    try {
      this.bot.sendMessage(
        {
          id: id,
        },
        [new Message.Text(message)]
      );
    } catch (e) {
      console.log("send");
      console.error(e);
    }
  };

  sendFileMessage(id: string, file: Express.Multer.File) {}

  sendUrlMessage(id: string, url: string) {}
}

export { BotService };

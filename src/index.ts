import "dotenv/config";
import express, { Request, Response, Router } from "express";
//@ts-ignore
import { Bot, Events, Message } from "viber-bot";
import path from "node:path";

function say(response, message) {
  response.send(new Message.Text(message));
}

const bot = new Bot({
  authToken: process.env.VIBER_BOT_API_KEY,
  name: "Поступаю в ТувГУ",
  avatar: path.resolve(__dirname, "../public/avatar.png"),
});

bot.on(Events.MESSAGE_RECEIVED, async (message, response) => {
  if (message instanceof Message.Text) {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name} ${message.text}`);
  }

  
    
});

bot.onSubscribe(() => {});

// bot.onTextMessage(/./, (message, response) => {
//   say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}`);
// });

const app = express();
app.use("/", bot.middleware());

app.listen(process.env.PORT, () => {
  bot.setWebhook("https://8d35-176-208-2-67.ngrok-free.app").catch(() => {});
});

import { Bot, Events, Message } from "viber-bot";

export const bot = new Bot({
  authToken: process.env.VIBER_BOT_API_KEY,
  name: "Поступаю в ТувГУ",
  avatar: "https://webstockreview.net/images250_/clipart-sleeping-corgi-5.png"
});

bot.on(Events.MESSAGE_RECEIVED, async (message, response) => {
  if (message instanceof Message.Text) {
    response.send(
      new Message.Text(
        `Hi there ${response.userProfile.name}. I am ${bot.name} ${message.text}`
      )
    );
  }
});

bot.onError((e) => {
  console.log(e);
});

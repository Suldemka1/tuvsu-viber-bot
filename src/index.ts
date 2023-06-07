import "dotenv/config";
import express from "express";
import rootRouter from "./router";
import { bot } from "./entities/bot/bot.config";

const app = express();
app.use(rootRouter);

app.use("/", bot.middleware())

app.listen(process.env.PORT ?? 8080, async () => {
  await bot
    .setWebhook(process.env.WEBHOOK)
    .catch((e) => console.error(e));
});

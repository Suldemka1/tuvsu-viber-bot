import express, { Express } from "express";
import { IController } from "./app.interface";

class App {
  app: Express = express();
  bot: any;
  
  constructor(bot: any) {
    this.bot = bot;

    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
    this.app.use("/", this.bot.middleware());
  }

  public addRouter(router: IController) {
    this.app.use(router.getRouter());
  }

  public start() {
    try {
      this.app.listen(process.env.PORT ?? 8080, () => {
        this.bot.setWebhook(process.env.WEBHOOK).catch((e) => {
          console.error(e);
        });
      });
    } catch (e) {
      console.log("Error in running application");
      console.log(e);
    }
  }
}

export { App };

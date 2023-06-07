import { Router } from "express";
import { botRouter } from "./bot.router";

const rootRouter = Router();

rootRouter.use("/", botRouter);

export default rootRouter;

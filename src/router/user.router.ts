import { Router } from "express";
import multer from "multer";
import { UserController, UserService } from "src/entities/user";

const userService = new UserService();
const userController = new UserController(userService);

const router = Router();
router.use(multer().none());

router.route("/getUserInfo").post(userController.getUserInfo);

export { router as userRouter };

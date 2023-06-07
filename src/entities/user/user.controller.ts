import { UserService } from "./user.service";

class UserController {
  userService: UserService
  constructor(userService: UserService) {
    this.userService = userService
  }

  getUserInfo(req, res) {
    const user = this.userService.getUser(req.body.id, req.body.message);
    res.send(JSON.stringify(user));
  }
}

export { UserController };

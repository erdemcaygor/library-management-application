import { userService } from "../services/user.service";

class UserController {
    constructor() {
    }

    async getUserList() {
        try {
            const users = await userService.getUserList();
            return users;
        } catch(e) {
            console.log(e);
        }
    }
}

export const userController = new UserController();
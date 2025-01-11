import { userService } from "../services/user.service";
import User from "../models/user.model";
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

    async createUser(name: string) {
        return await  User.create({name});
    }
}

export const userController = new UserController();
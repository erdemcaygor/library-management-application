import User from '../models/user.model';

class UserService {

    constructor() {}

    async getUserList() {
        try {
            return await  User.findAll({attributes: ['id', 'name']});
        } catch(e) {
            throw new Error(e);
        }
    }
    async createUser(name: string) {
        try {
            return await  User.create({name});
        } catch(e) {
            throw new Error(e);
        }
    }
}

export const userService = new UserService();
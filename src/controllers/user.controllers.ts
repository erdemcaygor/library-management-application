import Transaction from "../models/transaction.model";
import User from "../models/user.model";
class UserController {
    constructor() {
    }

    async getUserList() {
        try {
            const users = await User.findAll();
            return users;
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

    async getUser(id: number) {
        try {
            return await  User.findByPk(id);
        } catch(e) {
            throw new Error(e);
        }
    }

    async borrowBook(userId: number, bookId: number) {
        try {
            return await  Transaction.create({userId, bookId});
        } catch(e) {
            throw new Error(e);
        }
    }
}

export const userController = new UserController();
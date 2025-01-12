import { Model } from "sequelize";

import User from "../models/user.model";
import Book, { BookAttributes } from "../models/book.model";
import Transaction, { TransactionAttributes } from "../models/transaction.model";
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

    async getUser(id: string | number) {
        try {
            const user = await User.findByPk(Number(id));
            if (!user) {
                return {error: 'User not found!'};
            }
            const transactions = await Transaction.findAll<Model<TransactionAttributes>>({where: {userId: Number(id)}});
            let pastBooks = [];
            let presentBooks = [];
            if (transactions.length > 0) {
                pastBooks = await Promise.all(transactions
                    .filter(transaction => transaction.get('returnedAt') !== null)
                    .map(async transaction => {
                        const book = await Book.findByPk<Model<BookAttributes>>(transaction.get('bookId'));
                        return {
                            name: book.get('name'),
                            score: transaction.get('score')
                        }
                    }));   
                presentBooks = await Promise.all(transactions
                    .filter(transaction => transaction.get('returnedAt') === null)
                    .map(async transaction => {
                        const book = await Book.findByPk<Model<BookAttributes>>(transaction.get('bookId'));
                        return {
                            name: book.get('name')
                        }
                    }));
            }
            return {id: user.get('id'), name: user.get('name'), books:{pastBooks, presentBooks}};
        } catch(e) {
            throw new Error(e);
        }
    }
}

export const userController = new UserController();
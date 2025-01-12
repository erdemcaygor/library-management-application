import { Model, Op } from "sequelize";

import Book from "../models/book.model";
import Transaction from "../models/transaction.model";
import { TransactionAttributes } from "../models/transaction.model";
class BookController {
    constructor() {
    }

    async getBookList() {
        try {
            const books = await Book.findAll();
            return books;
        } catch(e) {
            throw new Error(e);
        }
    }

    async getBook(id: number) {
        try {
            const book = await  Book.findByPk(id);

            if (!book) {
                return {error: 'Book not found!'};
            }
            const transactions = await Transaction.findAll<Model<TransactionAttributes>>({where: {bookId: id, returnedAt: {[Op.not]: null}}});
            let score = -1;
            if (transactions.length > 0) {
                score = transactions.reduce((acc, transaction) => acc + Number(transaction.get('score')), 0) / transactions.length;
            }
            return {id: book.get('id'), name: book.get('name'), score};
        } catch(e) {
            throw new Error(e);
        }
    }

    async createBook(name: string) {
        try {
            return await  Book.create({name});
        } catch(e) {
            throw new Error(e);
        }
    }
}

export const bookController = new BookController();
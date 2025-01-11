import Book from "../models/book.model";

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

    async createBook(name: string) {
        try {
            return await  Book.create({name});
        } catch(e) {
            throw new Error(e);
        }
    }
}

export const bookController = new BookController();
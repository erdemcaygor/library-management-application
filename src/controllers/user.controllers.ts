import Book from "../models/book.model";
import User from "../models/user.model";

class UserController {
    constructor() {
    }

    async getRecommendations() {
        const book = await Book.create({
            name: "new book",
            score: "-1"
        })
        const mike = await User.create({
            name: "Mike Smithh",
            book: book
        })
        console.log(mike);
    }
}

export const userController = new UserController();
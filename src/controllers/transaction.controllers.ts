import { Model } from "sequelize";
import { TransactionAttributes } from "../models/transaction.model";
import Transaction from "../models/transaction.model";

type TransactionResult = Model<TransactionAttributes> | { error: string };

class TransactionController {
    async borrowBook(userId: number, bookId: number): Promise<TransactionResult> {
        try {
            const transaction = await Transaction.findOne<Model<TransactionAttributes>>({where: {bookId, returnedAt: null}});
            if (transaction) {
                return {error: userId.toString() === transaction?.get('userId')?.toString() ? 'Book already borrowed!' : 'Book already borrowed by another user!'};
            }
            return await Transaction.create({userId, bookId});
        } catch(e) {
            throw new Error(e);
        }
    }

    async returnBook(userId: number, bookId: number, score: number): Promise<TransactionResult> {
        try {
            const transaction = await Transaction.findOne<Model<TransactionAttributes>>({where: {userId, bookId}});
            if (!transaction) {
                return {error: 'Book not borrowed. Borrow it first!'};
            }
            if (transaction.get('returnedAt')) {
                return {error: 'Book already returned!'};
            }
            transaction.set('returnedAt', new Date());
            transaction.set('score', score);
            return await transaction.save();
        } catch(e) {
            throw new Error(e);
        }
    }
}

export const transactionController = new TransactionController();
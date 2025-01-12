import { DataTypes, Model, NOW } from 'sequelize';
import sq from '../db';
import Book from './book.model';
import User from './user.model';

export type TransactionAttributes = {
    id: number;
    userId: number;
    bookId: number;
    score: number;
    returnedAt: Date;
    borrowedAt: Date;
}

const Transaction = sq.define<Model<TransactionAttributes>>('Transaction', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Books',
        key: 'id',
      },
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    returnedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    borrowedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  }, {
    indexes: [
      {
        unique: true,
        fields: ['bookId'],
        where: {
          returnedAt: null
        }
      }
    ]
  });

Transaction.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
Transaction.belongsTo(Book, { foreignKey: 'bookId' });

export default Transaction;
import { DataTypes, NOW } from 'sequelize';
import sq from '../db';
import Book from './book.model';
import User from './user.model';

const Transaction = sq.define('Transaction', {
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
      allowNull: true,
      validate: {
        min: 1,
        max: 5
      }
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
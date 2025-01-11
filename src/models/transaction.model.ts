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
        model: User,
        key: 'id',
      },
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Book,
        key: 'id',
      },
      unique: 'activeTransaction',
    },
    borrowedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    returnedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
  }, {
    indexes: [
      {
        unique: true,
        fields: ['bookId', 'returnedAt'],
        where: {
          returnedAt: null,
        },
      },
    ],
  });
  
  User.hasMany(Transaction, { foreignKey: 'userId' });
  Transaction.belongsTo(User, { foreignKey: 'userId' });
  
  Book.hasMany(Transaction, { foreignKey: 'bookId' });
  Transaction.belongsTo(Book, { foreignKey: 'bookId' });

Transaction.sync().then(() => {
    console.log("Transaction Model synced");
});

export default Transaction;
import { DataTypes } from "sequelize";
import sq from '../db';
import Book from "./book.model";

const User = sq.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

User.hasOne(Book, {
    foreignKey: {
        name: 'name',
        allowNull: true
      }
});
Book.belongsTo(User, {
    foreignKey: {
        name: 'name',
        allowNull: true
      }
});

User.sync().then(() => {
    console.log("User Model synced");
});

export default User;
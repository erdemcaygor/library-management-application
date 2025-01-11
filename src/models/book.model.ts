import { DataTypes } from "sequelize";
import sq from '../db';

const Book = sq.define("Book", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
});

Book.sync().then(() => {
    console.log("Book Model synced");
});

  export default Book;
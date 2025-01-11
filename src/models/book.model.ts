import { DataTypes } from "sequelize";
import sq from '../db';

const Book = sq.define("Book", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    score: {
        type: DataTypes.STRING
    }
});

Book.sync().then(() => {
    console.log("Book Model synced");
});

  export default Book;
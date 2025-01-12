import { DataTypes } from "sequelize";
import sq from '../db';

const Book = sq.define("Book", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
}, {
    indexes: [
        {
            unique: true,
            fields: ['id']
        }
    ]
});

export default Book;
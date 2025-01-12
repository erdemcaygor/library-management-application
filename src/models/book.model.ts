import { DataTypes, Model } from "sequelize";
import sq from '../db';

export interface BookAttributes {
    id: number;
    name: string;
}

const Book = sq.define<Model<BookAttributes>>('Book', {
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

export default Book;
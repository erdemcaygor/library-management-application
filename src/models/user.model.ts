import { DataTypes } from "sequelize";
import sq from '../db';

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

export default User;
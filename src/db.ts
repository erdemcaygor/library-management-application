import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:RDM104e5r6d.@localhost:5432/libraryManagementApplication');

export default sequelize;
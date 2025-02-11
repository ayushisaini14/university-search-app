import sequelize from '../config/database.js';
import Favorite from './favorite.js';

const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Database & tables synced successfully");
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

export { sequelize, Favorite, syncDatabase };
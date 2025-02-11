import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Favorite = sequelize.define('Favorite', {
    university_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state_province: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    web_page: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true
});

export default Favorite;
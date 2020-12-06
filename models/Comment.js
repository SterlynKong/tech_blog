const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// declare that comment inherits from the sequlize Model object
class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize
    }
);


module.exports = Comment;
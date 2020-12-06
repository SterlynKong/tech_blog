const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// declare that Post inherits from the sequlize Model object
class Post extends Model {}

// define structure of Post
Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
    },
    {
        sequelize
    }
);


module.exports = Post;
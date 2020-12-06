// requirements
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create user model and add method for password check
class User extends Model {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    };
};

// define structure of User
User.init(
    {
        id: {
            type: DateTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DateTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DateTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            // use lifecycle hook 'beforeCreate' bcrypt method to encrypt password prior to storing
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    }
);


module.exports = User;
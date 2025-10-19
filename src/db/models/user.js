'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Comment, {
        foreignKey:"UserId",
        onDelete: 'CASCADE',
        hooks: true
      });
      User.hasMany(models.Post, {
        foreignKey:"UserId",
        onDelete: 'CASCADE',
        hooks: true
      });
      User.belongsToMany(models.User, {
        through: "UserFollowers",
        as: "followers",
        foreignKey: "followedId"
      });
      User.belongsToMany(models.User, {
        through: "UserFollowers",
        as: "following",
        foreignKey:"followerId"
      });
    }
  }
  User.init({
    nickName: {type:DataTypes.STRING, allowNull:false, unique:true},
    name: {type: DataTypes.STRING, allowNull:false},
    email: {type: DataTypes.STRING, allowNull:false},
  }, {
    sequelize,
    modelName: 'User',
    timestamps:false,
  });
  return User;
};
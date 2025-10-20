'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsToMany(models.Tag, {
        through: "Post_Tag", as: "tags"
      });
      Post.hasMany(models.Post_Images, {
        foreignKey: "PostId",
        onDelete: 'CASCADE',
        hooks: true
      });
      Post.hasMany(models.Comment, {
        foreignKey: "PostId",
        onDelete: 'CASCADE',
        hooks: true
      });
      Post.belongsTo(models.User);
    }
  }
  Post.init({
    descripcion: {type: DataTypes.STRING, allowNull:false}
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
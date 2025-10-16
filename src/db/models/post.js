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
      });
      Post.hasMany(models.Comment, {
        foreignKey: "PostId",
      });
      Post.belongsTo(models.User);
    }
  }
  Post.init({
    descripcion: {type: DataTypes.STRING, allowNull:false},
    fechaDePublicacion: { type: DataTypes.DATEONLY, allowNull:false },
    tiempo: {
      type: new DataTypes.VIRTUAL(DataTypes.NUMBER, ['fechaDePublicacion']),
      get: function(){
        return Math.floor( (new Date() - new Date(this.get('fechaDePublicacion'))) / (1000*60*60*24*12) ) 
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
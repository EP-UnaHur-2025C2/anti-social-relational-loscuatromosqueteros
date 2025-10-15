'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User);
      Comment.belongsTo(models.Post);
    }
  }
  Comment.init({
    comentario: {type: DataTypes.STRING, allowNull:false},
    fechaDePublicacion: { type: DataTypes.DATEONLY, allowNull:false },
    tiempo: {
      type: new DataTypes.VITUAL(DataTypes.NUMBER, ['fechaDePublicacion']),
      get: function(){
        return Math.floor( (new Date() - new Date(this.get('fechaDePublicacion'))) / (1000*60*60*24*12) ) 
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
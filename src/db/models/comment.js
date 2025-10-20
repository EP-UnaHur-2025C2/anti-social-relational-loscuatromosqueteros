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
    esVisible: {
      type: new DataTypes.VIRTUAL(DataTypes.BOOLEAN, ['createdAt']),
      get: function(){
        const tiempoDePublicacion = Math.floor( (new Date() - new Date(this.get('createdAt'))) / (1000*60*60*24*30) );
        const mesMax = process.env.MaximoMeses || 6;

        return  mesMax > tiempoDePublicacion;
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
const {Post} = require('../db/models');
const validarByld = require('./generic.middleware');

const validarUserById = validarByld(Post);

module.exports = {validarUserById};
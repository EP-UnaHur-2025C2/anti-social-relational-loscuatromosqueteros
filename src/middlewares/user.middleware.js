const {User} = require('../db/models');
const validarByld = require('./generic.middleware');

const validarUserById = validarByld(User);

module.exports = {validarUserById};
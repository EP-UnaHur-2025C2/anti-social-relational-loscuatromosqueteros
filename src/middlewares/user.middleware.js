const {User} = require('../db/models');
const validarByld = require('./generic.middleware');
const userSchema = require("../schemas/user.schema");
const genericSchemaValidator = require("../schemas/genericSchemaValidator");
const validateSchema = require('./validateSchema.middleware');

const validarUserById = validarByld(User);

const validarSchemaUser = validateSchema(userSchema);

module.exports = {validarUserById, validarSchemaUser};
const { userSchema, userUpdateSchema } = require("../schemas/user.schema");
const validateSchema = require('./validateSchema.middleware');

const validarSchemaUser = validateSchema(userSchema);
const validarSchemaUserUpdate = validateSchema(userUpdateSchema);

module.exports = { validarSchemaUser, validarSchemaUserUpdate };
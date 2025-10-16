const userSchema = require("../schemas/user.schema");
const validateSchema = require('./validateSchema.middleware');

const validarSchemaUser = validateSchema(userSchema);

module.exports = {validarSchemaUser};
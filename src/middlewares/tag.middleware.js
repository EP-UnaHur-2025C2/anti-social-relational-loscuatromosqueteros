const tagSchema = require("../schemas/tag.schema");
const validateSchema = require('./validateSchema.middleware');

const validarSchemaTag = validateSchema(tagSchema);

module.exports = {validarSchemaTag};
const {tagSchema, tagArraySchema} = require("../schemas/tag.schema");
const validateSchema = require('./validateSchema.middleware');

const validarSchemaTag = validateSchema(tagSchema);
const validarSchemaArrayTag = validateSchema(tagArraySchema);

module.exports = {validarSchemaTag, validarSchemaArrayTag};
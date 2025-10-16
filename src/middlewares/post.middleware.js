const postSchema = require("../schemas/post.schema");
const validateSchema = require('./validateSchema.middleware');

const validarSchemaPost = validateSchema(postSchema);

module.exports = {validarSchemaPost};
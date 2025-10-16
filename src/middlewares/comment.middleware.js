const commentSchema = require("../schemas/comment.schema");
const validateSchema = require('./validateSchema.middleware');

const validarSchemaComment = validateSchema(commentSchema);

module.exports = {validarSchemaComment};
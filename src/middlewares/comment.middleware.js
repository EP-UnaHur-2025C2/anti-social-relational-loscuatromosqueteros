const {commentSchema, commentUpdateSchema} = require("../schemas/comment.schema");
const validateSchema = require('./validateSchema.middleware');

const validarSchemaComment = validateSchema(commentSchema);
const validarSchemaUpdateComment = validateSchema(commentUpdateSchema);

module.exports = {validarSchemaComment, validarSchemaUpdateComment};
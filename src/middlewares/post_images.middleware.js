const post_imagesSchema = require("../schemas/post_images.schema");
const validateSchema = require('./validateSchema.middleware');

const validarSchemaPost_Images = validateSchema(post_imagesSchema);

module.exports = { validarSchemaPost_Images };
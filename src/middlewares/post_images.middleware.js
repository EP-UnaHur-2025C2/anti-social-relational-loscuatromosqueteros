const {post_imagesSchema, post_imagesArraySchema} = require("../schemas/post_images.schema");
const validateSchema = require('./validateSchema.middleware');

const validarSchemaPost_Images = validateSchema(post_imagesSchema);//Si no se usar borrarlo el post_imagesSchema
const validarSchemaArrayPost_Images = validateSchema(post_imagesArraySchema);

module.exports = { validarSchemaPost_Images, validarSchemaArrayPost_Images };
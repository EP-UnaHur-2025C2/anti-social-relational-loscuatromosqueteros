const Joi = require("joi");

const post_imagesSchema = Joi.object({
  urlImg: Joi.string().uri().required().messages({
    "string.empty": "La Url no puede estar vacía",
    "string.uri": "La Url de la imagen debe ser valida",
    "any.required": "La imagen debe existir"
  })
});

const post_imagesArraySchema = Joi.object({
  images: Joi.array().items(post_imagesSchema).required().messages({
    "any.required": "El array images debe existir ( aunque sea vacio )",
    "array.base": "El campo images debe ser un array valido",
  }),
});

module.exports = { post_imagesSchema, post_imagesArraySchema };
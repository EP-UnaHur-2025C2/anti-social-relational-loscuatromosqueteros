const Joi = require("joi");

const post_imagesSchema = Joi.object({
  urlImg: Joi.string().uri().required().messages({
    "string.empty": "La Url no puede estar vacía",
    "string.uri": "La Url de la imagen debe ser valida",
    "any.required":"La imagen debe existir"
  })
});

module.exports = post_imagesSchema;
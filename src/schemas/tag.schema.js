const Joi = require("joi");

const tagSchema = Joi.object({
  tagName: Joi.string().min(3).max(25).required().messages({
    "string.empty": "El tagName no puede ser vacío",
    "string.min": "El tagName no puede tener menos de 3 caracteres",
    "string.max":"El tagName tiene que tener como maximo 25 caracteres",
    "any.required":"El atributo tagName debe existir",
  })
});

module.exports = tagSchema;
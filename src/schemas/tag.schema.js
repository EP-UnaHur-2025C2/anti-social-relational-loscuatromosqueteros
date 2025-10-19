const Joi = require("joi");

const tagSchema = Joi.object({
  tagName: Joi.string().min(3).max(25).required().messages({
    "string.empty": "El tagName no puede ser vacío",
    "string.min": "El tagName no puede tener menos de 3 caracteres",
    "string.max":"El tagName tiene que tener como maximo 25 caracteres",
    "any.required":"El atributo tagName debe existir",
  })
});

const tagArraySchema = Joi.object({
  tags: Joi.array().items(tagSchema).required().messages({
    "any.required": "El array tags debe existir ( aunque sea vacio )",
    "array.base": "El campo tags debe ser un array valido",
  }),
});

module.exports = {tagSchema, tagArraySchema};
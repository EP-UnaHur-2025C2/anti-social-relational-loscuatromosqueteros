const Joi = require("joi");

const tagSchema = Joi.object({
  tagName: Joi.string().min(3).max(30).required().messages({
    "string.empty": "El nombre no puede ser vacío",
    "string.min": "El nombre no puede tener menos de 3 caracteres",
    "string.max":"El nombre tiene que tener como maximo 30 caracteres",
    "any.required":"El atributo nombre debe existir",
  })
});

module.exports = userSchema;
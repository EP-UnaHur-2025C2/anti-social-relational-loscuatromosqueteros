const Joi = require("joi");

const userSchema = Joi.object({
  nickName: Joi.string().min(3).max(20).required().messages({
    "string.empty": "El nombre no puede ser vacío",
    "string.min": "El nombre no puede tener menos de 3 caracteres",
    "string.max":"El nombre tiene que tener como maximo 20 caracteres",
    "any.required":"El atributo nombre debe existir",
  }),
  name: Joi.string().min(3).max(20).required().messages({
    "string.empty": "El nombre no puede ser vacío",
    "string.min": "El nombre no puede tener menos de 3 caracteres",
    "string.max":"El nombre tiene que tener como maximo 20 caracteres",
    "any.required":"El atributo nombre debe existir",
  }),
  email: Joi.string().min(3).max(70).required().messages({
    "string.empty": "El email no puede ser vacío",
    "string.min": "El email no puede tener menos de 3 caracteres",
    "string.max":"El nombre tiene que tener como maximo 20 caracteres",
    "any.required":"El atributo email debe existir",
  })
});

module.exports = userSchema;
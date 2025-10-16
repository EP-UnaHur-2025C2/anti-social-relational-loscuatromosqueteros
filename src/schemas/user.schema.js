const Joi = require("joi");

const userSchema = Joi.object({
  nickName: Joi.string().min(3).max(20).required().messages({
    "string.empty": "El nombre no puede ser vacío",
    "string.min": "El nombre no puede tener menos de 3 caracteres",
    "string.max":"El nombre tiene que tener como maximo 20 caracteres",
    "any.required":"El atributo nombre debe existir",
  })
});

module.exports = userSchema;
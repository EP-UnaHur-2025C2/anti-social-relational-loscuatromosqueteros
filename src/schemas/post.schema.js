const Joi = require("joi");

const postSchema = Joi.object({
  descripcion: Joi.string().min(3).required().messages({
    "string.empty": "El Post no puede ser vacío",
    "string.min": "El Post no puede tener menos de 3 caracteres",
    "any.required":"El atributo descripción debe existir"
  })
});

module.exports = postSchema;
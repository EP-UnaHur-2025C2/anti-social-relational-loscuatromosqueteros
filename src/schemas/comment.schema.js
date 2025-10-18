const Joi = require("joi");

const comentarioSchema = Joi.object({
  comentario: Joi.string().min(3).max(200).required().messages({
    "string.empty": "El Comentario no puede ser vacío",
    "string.min": "El Comentario no puede tener menos de 3 caracteres",
    "string.max":"El Comentario tiene que tener como maximo 200 caracteres",
    "any.required":"El atributo Comentario debe existir",
  }),
  idPost: Joi.number().integer().required().min(1).messages({
    "any.required":"El atributo idPost debe existir",
    "number.min": "El idPost debe ser positivo",
    "number.integer": "El idPost tiene que ser un numero entero"
  })
});

module.exports = comentarioSchema;
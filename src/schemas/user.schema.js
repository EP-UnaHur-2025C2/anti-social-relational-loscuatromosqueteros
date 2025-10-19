const Joi = require("joi");

const userSchema = Joi.object({
  nickName: Joi.string().min(3).max(20).required().messages({
    "string.empty": "El nickName no puede ser vacío",
    "string.min": "El nickName no puede tener menos de 3 caracteres",
    "string.max": "El nickName tiene que tener como maximo 20 caracteres",
    "any.required": "El atributo nickName debe existir",
  }),
  name: Joi.string().min(3).max(20).required().messages({
    "string.empty": "El nombre no puede ser vacío",
    "string.min": "El nombre no puede tener menos de 3 caracteres",
    "string.max": "El nombre tiene que tener como maximo 20 caracteres",
    "any.required": "El atributo nombre debe existir",
  }),
  email: Joi.string().min(3).max(70).required().
    email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
      "string.empty": "El email no puede ser vacío",
      "string.min": "El email no puede tener menos de 3 caracteres",
      "string.max": "El email tiene que tener como maximo 70 caracteres",
      "string.email": "El formato del email es invalido",
      "any.required": "El atributo email debe existir",
    })
});

const userUpdateSchema = Joi.object({
  nickName: Joi.string().min(3).max(20).optional().messages({
    "string.empty": "El nickName no puede ser vacío",
    "string.min": "El nickName no puede tener menos de 3 caracteres",
    "string.max": "El nickName tiene que tener como maximo 20 caracteres",
  }),
  name: Joi.string().min(3).max(20).optional().messages({
    "string.empty": "El nombre no puede ser vacío",
    "string.min": "El nombre no puede tener menos de 3 caracteres",
    "string.max": "El nombre tiene que tener como maximo 20 caracteres",
  }),
  email: Joi.string().min(3).max(70).optional().
    email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
      "string.empty": "El email no puede ser vacío",
      "string.min": "El email no puede tener menos de 3 caracteres",
      "string.max": "El email tiene que tener como maximo 70 caracteres",
      "string.email": "El formato del email es invalido",
    })
});


module.exports = { userSchema, userUpdateSchema };
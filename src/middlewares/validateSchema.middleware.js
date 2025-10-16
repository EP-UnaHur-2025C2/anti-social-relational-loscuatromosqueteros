const genericSchemaValidator = require("../schemas/genericSchemaValidator");

const validateSchema = (schema) => (req, res, next) => {
  const {error} = genericSchemaValidator(schema,req.body)

  if (error) {
    return res.status(400).json({
      errores: error.details.map((err) => {
        return {
          atributo: err.path[0],
          detalle: err.message
        }
      }),
    });
  }

  next();
};

module.exports = validateSchema;
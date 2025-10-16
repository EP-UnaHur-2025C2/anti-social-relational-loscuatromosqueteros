const validateSchema = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Error de validación",
      details: error.details.map((err) => err.message),
    });
  }

  next();
};

module.exports = validateSchema;
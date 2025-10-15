const validarByld = (modelo) => {
  return async (req, res, next) => {
    const id = req.params.idUser;
    const instance = await modelo.findByPk(id);
    if (!instance) {
      res.status(404).json({ error_message: `El ${modelo.name} ${id} no fue encontrado.` });
      return;
    }
    next();
  };
};

module.exports = validarByld;

const validarById = (modelo) => {
  return async (req, res, next) => {
    const idParamName = Object.keys(req.params).find(key => key.toLowerCase().includes('id'));

    if (!idParamName) {
      return res.status(400).json({ error_message: 'No se encontró ningún parámetro de ID en la ruta.' });
    }

    const id = req.params[idParamName];
    const instance = await modelo.findByPk(id);

    if (!instance) {
      res.status(404).json({ error_message: `El ${modelo.name} ${id} no fue encontrado.` });
      return;
    }
    next();
  };
};

module.exports = validarById;

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

const existAttribute = (model, attribute) => {
  return async (req, res, next) => {
    const value = req.body[attribute];
    if (value) {
      const data = await model.findOne({ where: { [attribute]: value } });
      if (data) {
        return res.status(406).json({ message: `El ${attribute} ${value} ya está registrado` })
      }
    }
    next()
  }
};

const validarPorBody = (modelo) => {
  return async (req, res, next) => {
    const idBodyName = Object.keys(req.body).find(key => key.toLowerCase().includes('id'));

    if (!idBodyName) {
      return res.status(400).json({ error_message: 'No se encontró ningún parámetro de ID en el body.' });
    }

    const id = req.body[idBodyName];
    const instance = await modelo.findByPk(id);

    if (!instance) {
      res.status(404).json({ error_message: `El ${modelo.name} ${id} no fue encontrado.` });
      return;
    }
    next();
  };
};

module.exports = { validarById, existAttribute, validarPorBody };

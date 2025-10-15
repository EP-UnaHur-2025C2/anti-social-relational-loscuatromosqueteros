const { Router } = require('express');
const route = Router();
const { findAllUsers, findUserByPK, createUser, createPost } = require('../controllers/user.controller')

route.get('/', findAllUsers);

route.get('/:idUser', findUserByPK);

route.post('/', createUser);

route.post('/:idUser/post', createPost);

//NO FUNCIONA (hay que pulirlo y mejorarlo, puede que sea diferente a como esta, mañana lo pienso mejor)
route.post('/:id/post/create-images', async (req, res) => {
    /*
    const id = req.params.idUser;
    const data = req.body;
    const user = await User.findByPk(id);

    const post = await user.createPost({
     descripcion: data.descripcion
    });

    const promesas = [];

    data.images.forEach(element =>
      promesas.push(Post_Images.create({ urlImg: element.urlImg })) 
    );

    imagenes = await Promise.all(promesas);
    
    await post.addPost_Imagess(imagenes)

    res.status(201).json({
        ...post.dataValues,
        images: await post.getImages_Post({joinTableAttributes: [] })
    });
    */
});

module.exports = route;
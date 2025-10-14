const { Router } = require('express');
const route = Router();
const { User } = require('../db/models');



route.get('/', async (req,res) => {
    //findAllUsers
    const data = await User.findAll({});

    res.status(200).json(data);
});

route.get('/:idUser', async (req, res) => {
    //getUserById
    const id = req.params.idUser;

    const user = await User.findByPk(id);

    res.status(200).json(user);
});

route.post('/', async (req, res) => {
    //createUser
    const data = req.body;
    const record = await User.create(data);

    res.status(201).json(record);
});

route.post('/:idUser/post', async (req, res) => {
    //createPost
    const id = req.params.idUser;
    const data = req.body;
    const user = await User.findByPk(id);

    const record = await user.createPost(data);

    res.status(201).json(data);
});

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
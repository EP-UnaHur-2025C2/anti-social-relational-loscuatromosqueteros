const { User,Post_Images } = require('../db/models');

const findAllUsers = async (_, res) => {
    const data = await User.findAll({});

    res.status(200).json(data);
}
const findUserByPK = async (req, res) => {
    const id = req.params.idUser;

    const user = await User.findByPk(id);

    res.status(200).json(user);
}
const createUser = async (req, res) => {
    //createUser
    const data = req.body;
    const record = await User.create(data);

    res.status(201).json(record);
}
const createPost = async (req, res) => {
    //createPost
    const id = req.params.idUser;
    const data = req.body;
    const user = await User.findByPk(id);

    const record = await user.createPost(data);

    res.status(201).json(data);
}
const createPostImages = async (req, res) => {
    const id = req.params.idUser;
    const data = req.body;
    const user = await User.findByPk(id);

    const post = await user.createPost({
        descripcion: data.descripcion
    });

    if (data.images) {
        const promesas = [];
        data.images.forEach(element =>
            promesas.push(Post_Images.create({ urlImg: element.urlImg }))
        );

        imagenes = await Promise.all(promesas);

        await post.addPost_Images(imagenes)
    }

    res.status(201).json({
        ...post.dataValues,
        images: await post.getPost_Images({ joinTableAttributes: [] })
    });
}
module.exports = { findAllUsers, findUserByPK, createUser, createPost, createPostImages};  
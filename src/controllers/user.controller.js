const { User } = require('../db/models');

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
    const data = req.body;
    const record = await User.create(data);

    res.status(201).json(record);
}
const deleteUser = async(req,res)=>{
    const user = await User.findByPk(req.params.idUser);
    await user.destroy();

    res.status(204).send();
}
const updateUser = async(req,res)=>{
    const data = req.body;
    const user = await User.findByPk(req.params.idUser);
    user.update(data);

    res.status(200).json(user);
}

const getPostsFromUser = async (req, res) => {
    const id = req.params.idUser;

    const user = await User.findByPk(id);
    const posts = await user.getPosts();

    res.status(200).json(posts);
}

const createPostFromUser = async (req, res) => {
    //createPost
    const id = req.params.idUser;
    const data = req.body;
    const user = await User.findByPk(id);

    const post = await user.createPost(data);

    if (data.images) {
        const promesas = [];
        data.images.forEach(element =>
            promesas.push(post.createPost_Image({ urlImg: element.urlImg }))
        );
        imagenes = await Promise.all(promesas);
        await post.addPost_Images(imagenes)
    }

    if (data.tags) {
        const promesas = [];
        data.tags.forEach(element =>
            promesas.push(post.createTag({ tagName: element.tagName }))
        );
        tags = await Promise.all(promesas);

        await post.addTags(tags)
    }

    res.status(201).json(post);
}

module.exports = { findAllUsers, findUserByPK, createUser,deleteUser, updateUser, getPostsFromUser, createPostFromUser };  
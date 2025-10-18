const { User } = require('../db/models');
const { message } = require('../schemas/user.schema');

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
const updateUserNickName = async(req,res)=>{
    const data = req.body;
    const user = await User.findByPk(req.params.idUser);
    user.nickName = data.nickName
    // the name is still "Jane" in the database
    await user.save();

    res.status(204).json(user);
}

const updateUserEmail = async(req,res)=>{
    const data = req.body;
    const user = await User.findByPk(req.params.idUser);
    user.email = data.email;
    await user.save()
    res.status(204).send(user)
}

const updateUserName = async (req,res) => {
    const data = req.body;
    const user = await User.findByPk(req.params.idUser);
    user.name = data.name;

    await user.save()
    res.status(204).send(user)
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
const createComment = async (req, res) => {
    const iduser = req.params.idUser;
    const data = req.body;
    const idpost = data.idPost;

    const user = await User.findByPk(iduser);

    const comment = await user.createComment({
        comentario: data.comentario,
        PostId: idpost,
        UserId: iduser
    });
    res.status(201).json(comment);
}
module.exports = { findAllUsers, findUserByPK, createUser,deleteUser,updateUserName, getPostsFromUser, createPostFromUser, createComment, updateUserNickName, updateUserEmail };  
const { Post, Tag, Post_Images, Post_Tag, User, Comment } = require('../db/models');
const { Op } = require("sequelize");

const findAllPost = async (req, res) => {
    const data = await Post.findAll({});

    res.status(200).json(data);
}

const findPostByPK = async (req, res) => {
    const id = req.params.idPost;

    const post = await Post.findByPk(id, {
        include: [
            {
                model: User,
                attributes: ['nickName']
            },
            {
                model: Post_Images,
                attributes: ['id', 'urlImg']
            },
            {
                model: Comment,
                required: false,
                include: [
                    {
                        model: User,
                        attributes: ['nickName']
                    }
                ]
            }
        ]
    });

    res.status(200).json(post);
}

const getCommentFromPost = async (req, res) => {
    const id = req.params.idPost;

    const post = await Post.findByPk(id);
    const comment = await post.getComments();

    res.status(200).json(comment);
}

const getTagsFromPost = async (req, res) => {
    const id = req.params.idPost;

    const post = await Post.findByPk(id);
    const tags = await post.getTags({ joinTableAttributes: [] });

    res.status(200).json(tags);
}

const getUserFromPost = async (req, res) => {
    const id = req.params.idPost;
    const post = await Post.findByPk(id);

    const user = await post.getUser();

    res.status(200).json(user);
}

const addTags = async (req, res) => {
    const id = req.params.idPost;
    const post = await Post.findByPk(id);

    const data = req.body

    const promesas = [];

    data.tags.forEach(element => {
        promesas.push(Tag.findOrCreate({
            where: { tagName: { [Op.eq]: element.tagName } },
            defaults: element,
        }));
    });

    result = await Promise.all(promesas);

    const tags = result.map(([tag]) => tag);

    await post.addTags(tags);

    res.status(201).json({
        ...post.dataValues,
        tags: await post.getTags({ joinTableAttributes: [] })
    });
}

const createImages = async (req, res) => {
    const id = req.params.idPost;
    const data = req.body;
    const post = await Post.findByPk(id);


    const promesas = [];
    data.images.forEach(element =>
        promesas.push(Post_Images.create({ urlImg: element.urlImg }))
    );

    imagenes = await Promise.all(promesas);

    await post.addPost_Images(imagenes)


    res.status(201).json({
        ...post.dataValues,
        images: await post.getPost_Images({ joinTableAttributes: [] })//tal vez no es necesario
    });
}


const deletePost = async (req, res) => {
    const post = await Post.findByPk(req.params.idPost);

    const postTag = await post.getTags();
    if (!postTag) {
        await Post_Tag.destroy({ where: { PostId: post.postId } });
    }

    await post.destroy();

    res.status(204).send();
}

module.exports = { findAllPost, findPostByPK, getCommentFromPost, getTagsFromPost, getUserFromPost, addTags, createImages, deletePost };
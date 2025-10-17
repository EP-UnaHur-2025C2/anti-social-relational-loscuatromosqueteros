const { Tag } = require('../db/models');

const findAllTags = async (_, res) => {
    const data = await Tag.findAll({});

    res.status(200).json(data);
}

const findTagByPK = async (req, res) => {
    const id = req.params.idTag;

    const tag = await Tag.findByPk(id);

    res.status(200).json(tag);
}

const getPostFromTag = async (req,res) => {
    const id = req.params.idTag;
    const tag = await Tag.findByPk(id);

    const post = tag.getPosts({ joinTableAttributes: [] });

    res.status(200).json({
        ...tag.dataValues,
        post: post
    });
}

const createTag = async (req,res) => {
    const record = req.body;
    const tag = await Tag.create(record);

    res.status(201).json(tag);
}

module.exports = { findAllTags, findTagByPK, getPostFromTag, createTag };
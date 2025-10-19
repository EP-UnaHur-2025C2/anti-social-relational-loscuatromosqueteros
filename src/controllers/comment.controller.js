const { User, Comment } = require('../db/models');

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

const updateComment = async(req,res)=>{
    const data = req.body;
    const comment = await Comment.findByPk(req.body.idComment);
    comment.update(data);

    res.status(200).json(comment);
}

const deleteComment = async(req,res)=>{
    const comment = await Comment.findByPk(req.body.idComment);
    await comment.destroy();

    res.status(204).send();
}

module.exports = { createComment, deleteComment, updateComment};
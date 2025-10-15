const { User } = require('../db/models');

const findAllUsers = async(_,res)=>{
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
module.exports = {findAllUsers,findUserByPK,createUser,createPost};  
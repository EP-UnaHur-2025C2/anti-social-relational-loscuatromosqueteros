const { Router } = require('express');
const route = Router();
const { User, Post_Images } = require('../db/models');
const { findAllUsers, findUserByPK, createUser, createPost,createPostImages } = require('../controllers/user.controller')

route.get('/', findAllUsers);

route.get('/:idUser', findUserByPK);

route.post('/', createUser);

route.post('/:idUser/post', createPost);

//NO FUNCIONA (hay que pulirlo y mejorarlo, puede que sea diferente a como esta, mañana lo pienso mejor)
route.post('/:idUser/post-images', createPostImages);

module.exports = route;
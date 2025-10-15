const { Router } = require("express");
const route = Router();
const { User, Post_Images } = require("../db/models");
const {
  findAllUsers,
  findUserByPK,
  createUser,
  getPostsFromUser,
  createPostFromUser,
  createComment,
} = require("../controllers/user.controller");
const { validarUserById } = require("../middlewares/user.middleware");

route.get("/", findAllUsers);

route.get("/:idUser", validarUserById, findUserByPK);

route.get("/:idUser/posts",getPostsFromUser);

route.post("/", createUser);

route.post("/:idUser/post",createPostFromUser); //Aca tambien se crean las imagenes y los tags del post.

route.post("/:idUser/:idPost/comment",createComment);

//route.delete("/:idUser");

module.exports = route;
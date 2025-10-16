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
const { validarSchemaUser } = require("../middlewares/user.middleware");
const validarById = require("../middlewares/generic.middleware");

route.get("/", findAllUsers);

route.get("/:idUser", validarById(User), findUserByPK);

route.get("/:idUser/posts", getPostsFromUser);

route.post("/", validarSchemaUser, createUser);

route.post("/:idUser/post", createPostFromUser); //Aca tambien se crean las imagenes y los tags del post.

route.post("/:idUser/:idPost/comment", createComment);

//route.delete("/:idUser");

module.exports = route;
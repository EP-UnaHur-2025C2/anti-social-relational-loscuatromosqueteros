const { Router } = require("express");
const route = Router();
const { User, Post_Images } = require("../db/models");
const {
  findAllUsers,
  findUserByPK,
  createUser,
  createPost,
  createPostImages,
} = require("../controllers/user.controller");
const { validarUserById } = require("../middlewares/user.middleware");

route.get("/", findAllUsers);

route.get("/:idUser", validarUserById, findUserByPK);

route.get("/:idUser/post",(_, res) => {});

route.post("/", createUser);

route.post("/:idUser/post", createPost); //Aca tambien se crean las imagenes y los tags del post.

route.post("/:idUser/:idPost/comentario",(_, res) => {});

//route.delete("/:idUser");

module.exports = route;
const { Router } = require("express");
const route = Router();
const { User, Post, Comment } = require("../db/models");
const {
  findAllUsers,
  findUserByPK,
  createUser,
  deleteUser,
  getPostsFromUser,
  createPostFromUser,
  updateUser
} = require("../controllers/user.controller");
const { validarSchemaUser, validarSchemaUserUpdate } = require("../middlewares/user.middleware");
const {validarById,existAttribute, validarIdPorBody} = require("../middlewares/generic.middleware");
const { validarSchemaComment, validarSchemaUpdateComment } = require("../middlewares/comment.middleware");
const { validarSchemaPost } = require("../middlewares/post.middleware");
const { deleteComment, createComment, updateComment } = require("../controllers/comment.controller");


route.get("/", findAllUsers);

route.get("/:idUser", validarById(User), findUserByPK);

route.get("/:idUser", validarById(User), findUserByPK);

route.get("/:idUser/posts", validarById(User), getPostsFromUser);

route.post("/", validarSchemaUser, existAttribute(User,"nickName") ,createUser);

route.post("/:idUser/post", validarById(User), validarSchemaPost, createPostFromUser); //Aca tambien se crean las imagenes y los tags del post.

route.post("/:idUser/comment", validarById(User), validarSchemaComment, validarIdPorBody(Post), createComment);

route.delete("/:idUser", validarById(User), deleteUser);

route.delete("/:idUser/comment",validarById(User), validarIdPorBody(Comment), deleteComment);

route.put("/:idUser", validarById(User), validarSchemaUpdateComment, updateComment);

route.put("/:idUser", validarById(User), existAttribute(User,"nickName"), validarSchemaUserUpdate, updateUser);

module.exports = route;
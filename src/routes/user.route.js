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
  updateUser,
  followUser,
  unfollow,
  getFollowed,
  getFollowers
} = require("../controllers/user.controller");
const { validarSchemaUser, validarSchemaUserUpdate } = require("../middlewares/user.middleware");
const {validarById,existAttribute, validarIdPorBody} = require("../middlewares/generic.middleware");
const { validarSchemaComment, validarSchemaUpdateComment } = require("../middlewares/comment.middleware");
const { validarSchemaPost } = require("../middlewares/post.middleware");
const { deleteComment, createComment, updateComment } = require("../controllers/comment.controller");

route.get("/", findAllUsers);

route.post("/", validarSchemaUser, existAttribute(User,"nickName") ,createUser);


route.get("/:idUser", validarById(User), findUserByPK);

route.put("/:idUser", validarById(User), existAttribute(User,"nickName"), validarSchemaUserUpdate, updateUser);

route.delete("/:idUser", validarById(User), deleteUser);


route.post("/:idUser/post", validarById(User), validarSchemaPost, createPostFromUser); //Aca tambien se crean las imagenes y los tags del post.

route.get("/:idUser/posts", validarById(User), getPostsFromUser);


route.post("/:idUser/comment", validarById(User), validarSchemaComment, validarIdPorBody(Post), createComment);

route.put("/:idUser/comment", validarById(User), validarSchemaUpdateComment, updateComment);

route.delete("/:idUser/comment",validarById(User), validarIdPorBody(Comment), deleteComment);


route.get("/:idUser/followed", validarById(User), getFollowed);

route.get("/:idUser/followers", validarById(User), getFollowers);

route.post("/:idUser/follow", validarById(User), validarIdPorBody(User), followUser);

route.delete("/:idUser/unfollow", validarById(User), validarIdPorBody(User), unfollow);

module.exports = route;
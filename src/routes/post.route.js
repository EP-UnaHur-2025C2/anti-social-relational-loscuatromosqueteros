const { Router } = require("express");
const route = Router();
const { Post } = require("../db/models");
const { findAllPost, findPostByPK, getCommentFromPost, getTagsFromPost, addTags, getUserFromPost, createImages, deletePost } = require("../controllers/post.controller");
const { validarById } = require("../middlewares/generic.middleware");

route.get("/", findAllPost);

route.get("/:idPost", validarById(Post), findPostByPK);

route.get("/:idPost/comentarios", validarById(Post), getCommentFromPost);

route.get("/:idPost/tags", validarById(Post), getTagsFromPost);

route.get("/:idPost/user", validarById(Post), getUserFromPost);

route.post("/:idPost/tags", validarById(Post), addTags);

route.post("/:idPost/images", validarById(Post), createImages);

route.delete("/:idPost", validarById(Post), deletePost);//bora asociacion con tag de la tabla Post_Tag, borra imagenes y comentarios


module.exports = route;
const { Router } = require("express");
const route = Router();
const {Post}= require("../db/models");
const { findAllPost, findPostByPK, getCommentFromPost, getTagsFromPost, addTags, getUserFromPost, createImages } = require("../controllers/post.controller");
const {validarById}  = require("../middlewares/generic.middleware")

route.get("/", findAllPost);

route.get("/:idPost", validarById(Post) , findPostByPK);

route.get("/:idPost/comentarios", getCommentFromPost);

route.get("/:idPost/tags", getTagsFromPost);

route.get("/:idPost/user", getUserFromPost);

route.post("/:idPost/tags", addTags);

route.post("/:idPost/images", createImages);

//route.delete("/:idPost/tags")
//route.delete("/:idPost/images")

module.exports = route;
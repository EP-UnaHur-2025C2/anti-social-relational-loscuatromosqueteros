const { Router } = require("express");
const route = Router();
const { Post, Tag, Post_Images} = require("../db/models");
const { findAllPost, findPostByPK, getCommentFromPost, getTagsFromPost, addTags, getUserFromPost, createImages, deletePost, updatePost, deletePost_Images } = require("../controllers/post.controller");
const { validarById, validarIdPorBody } = require("../middlewares/generic.middleware");
const { validarSchemaArrayTag } = require("../middlewares/tag.middleware");
const { validarSchemaArrayPost_Images } = require("../middlewares/post_images.middleware");
const { validarSchemaPost } = require("../middlewares/post.middleware");
const { deleteTagEnPost } = require("../controllers/tag.controller");

route.get("/", findAllPost);

route.get("/:idPost", validarById(Post), findPostByPK);

route.get("/:idPost/comment", validarById(Post), getCommentFromPost);

route.get("/:idPost/tags", validarById(Post), getTagsFromPost);

route.get("/:idPost/user", validarById(Post), getUserFromPost);

route.post("/:idPost/tags", validarById(Post), validarSchemaArrayTag, addTags);

route.post("/:idPost/images", validarById(Post), validarSchemaArrayPost_Images, createImages);

route.delete("/:idPost", validarById(Post), deletePost);

route.delete("/:idPost/image",validarById(Post), validarIdPorBody(Post_Images), deletePost_Images);

route.delete("/:idPost/tag", validarById(Post), validarIdPorBody(Tag), deleteTagEnPost);

route.put("/:idPost", validarById(Post), validarSchemaPost, updatePost);


module.exports = route;
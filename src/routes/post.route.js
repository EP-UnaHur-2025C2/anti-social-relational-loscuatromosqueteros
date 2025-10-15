const { Router } = require("express");
const route = Router();
const { findAllPost, findPostByPK, getCommentFromPost, getTagsFromPost, addTags, getUserFromPost, creatImages } = require("../controllers/post.controller");

route.get("/",findAllPost);

route.get("/:idPost",findPostByPK);

route.get("/:idPost/comentarios", getCommentFromPost);

route.get("/:idPost/tags", getTagsFromPost);

route.get("/:idPost/user", getUserFromPost);

route.post("/:idPost/tags", addTags);

route.post("/:idPost/images", creatImages);

//route.delete("/:idPost/tags")
//route.delete("/:idPost/images")

module.exports = route;
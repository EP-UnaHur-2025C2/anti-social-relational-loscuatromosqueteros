const { Router } = require("express");
const route = Router();
const { findAllTags, findTagByPK, getPostFromTag, createTag } = require("../controllers/tag.controller");

route.get("/", findAllTags);

route.get("/:idTag", findTagByPK);

route.get("/:idTag/posts", getPostFromTag);

route.post("/", createTag);

module.exports = route;
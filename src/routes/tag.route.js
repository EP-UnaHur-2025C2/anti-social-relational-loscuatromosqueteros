const { Router } = require("express");
const route = Router();
const { Tag } = require("../db/models");
const { findAllTags, findTagByPK, getPostFromTag, createTag } = require("../controllers/tag.controller");
const { validarById, existAttribute } = require("../middlewares/generic.middleware");

route.get("/", findAllTags);

route.get("/:idTag", validarById(Tag), findTagByPK);

route.get("/:idTag/posts", validarById(Tag), getPostFromTag);

route.post("/", existAttribute(Tag,"tagName"), createTag);

module.exports = route;
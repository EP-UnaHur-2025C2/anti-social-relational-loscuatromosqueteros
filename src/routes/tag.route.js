const { Router } = require("express");
const route = Router();
const { Tag } = require("../db/models");
const { findAllTags, findTagByPK, getPostFromTag, createTag, deleteTag } = require("../controllers/tag.controller");
const { validarById, existAttribute, validarIdPorBody } = require("../middlewares/generic.middleware");

route.get("/", findAllTags);

route.get("/:idTag", validarById(Tag), findTagByPK);

route.get("/:idTag/posts", validarById(Tag), getPostFromTag);

route.post("/", existAttribute(Tag,"tagName"), createTag);

route.delete("/", validarIdPorBody(Tag), deleteTag);

module.exports = route;
const { Router } = require("express");
const route = Router();

route.get("/",(_, res) => {});

route.get("/:idPost",(_, res) => {});

route.get("/:idPost/comentarios",(_, res) => {});

route.get("/:idPost/tags",(_, res) => {});

route.get("/:idPost/user",(_, res) => {});

route.post("/:idPost/tags",(_, res) => {});

route.post("/:idPost/images",(_, res) => {});

//route.delete("/:idPost/tags")
//route.delete("/:idPost/images")

module.exports = route;
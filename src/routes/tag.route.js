const { Router } = require("express");
const route = Router();

route.get("/",(_, res) => {});

route.get("/:idTag",(_, res) => {});

route.get("/:idTag/posts",(_, res) => {});

route.post("/",(_, res) => {});

//route.delete("/:idTag")

module.exports = route;
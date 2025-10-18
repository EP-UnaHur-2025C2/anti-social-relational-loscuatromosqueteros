const { Router } = require("express");
const route = Router();
const { User, Post_Images } = require("../db/models");
const {
  findAllUsers,
  findUserByPK,
  createUser,
  deleteUser,
  getPostsFromUser,
  createPostFromUser,
  createComment,
  updateUserName
} = require("../controllers/user.controller");
const { validarSchemaUser } = require("../middlewares/user.middleware");
const {validarById,existAttribute} = require("../middlewares/generic.middleware");

route.get("/", findAllUsers);

//validar id
route.get("/:idUser", validarById(User), findUserByPK);

//validar id
route.get("/:idUser/posts", validarById(User), getPostsFromUser);

//validar esquema de usuario, validar que el usuario sea unique en el nickName
route.post("/", validarSchemaUser, existAttribute(User,"nickName") ,createUser);

//validar id, validar que el post cumpla el esquema
route.post("/:idUser/post",validarById(User), createPostFromUser); //Aca tambien se crean las imagenes y los tags del post.

//validar id, validar que el comentario cumpla el esquema, y que sea obligatorio el idPost
route.post("/:idUser/comment",validarById(User), createComment);

//validar id
route.delete("/:idUser",validarById(User), deleteUser);

//modifica el nombre de usuario, validando que existe
route.put("/:idUser/name", validarById(User),existAttribute(User,"name") ,updateUserName)

//validar que nickname nuevo no este tomado
//route.put("/:idUser",updateUser)

module.exports = route;
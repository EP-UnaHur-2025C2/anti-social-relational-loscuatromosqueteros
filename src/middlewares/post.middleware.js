const {Post} = require('../db/models');
const validarByld = require('./generic.middleware');
const postSchema = require("../schemas/post.schema");
const genericSchemaValidator = require("../schemas/genericSchemaValidator");

const validarPostById = validarByld(Post);

const validarSchemaPost = (req,res,next)=>{
   const {error,_} = genericSchemaValidator(postSchema,req.body)
   if (error){
    res.status(400).json({mensaje:"hay errores"});
    return;
   }
   next()
}

module.exports = {validarPostById, validarSchemaPost};
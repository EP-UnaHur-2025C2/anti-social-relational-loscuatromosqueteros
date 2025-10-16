const {User} = require('../db/models');
const validarByld = require('./generic.middleware');
const userSchema = require("../schemas/user.schema");
const genericSchemaValidator = require("../schemas/genericSchemaValidator");

const validarUserById = validarByld(User);

const validarSchemaUser = (req,res,next)=>{
   const {error,_} = genericSchemaValidator(userSchema,req.body)
   if (error){
    res.status(400).json({mensaje:"hay errores"});
    return;
   }
   next()
}

module.exports = {validarUserById, validarSchemaUser};
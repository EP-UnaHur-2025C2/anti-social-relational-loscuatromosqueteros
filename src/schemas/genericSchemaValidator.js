const genericSchemaValidator = (schema, data) =>{
    const {error,value} = schema.validate(data, {abortEarly:false});
    return {error,value};
}

module.exports = genericSchemaValidator;
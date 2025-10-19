const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db/models')['sequelize']

const userRoute= require('./routes/user.route');
const postRoute= require('./routes/post.route');
const tagRoute= require('./routes/tag.route');

const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')
 
const file  = fs.readFileSync('./src/swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/tag', tagRoute);


app.get('/', (_, res) => {
    res.send('Hello World')
})

app.listen(port, async (err) => {
    if(err){
        console.error('Error starting server: ', err)
        process.exit(1)
    }
    //await db.sync()
    console.log(`Server is running on port ${port}`)
})
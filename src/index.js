const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db/models')['sequelize']

const userRoute = require('./routes/user.route');

app.use(express.json())

app.use('/User', userRoute);

app.get('/', (_, res) => {
    res.send('Hello World')
})

app.listen(port, async (err) => {
    if(err){
        console.error('Error starting server: ', err)
        process.exit(1)
    }
    //await db.sync({force: true})
    console.log(`Server is running on port ${port}`)
})
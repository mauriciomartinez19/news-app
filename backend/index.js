const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express()

require('./database/database')

app.use(cors())
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json())

//Verify middleware
const verifyToken = require('./routes/token/verify-controller')

const news = require('./routes/news')
const user = require('./routes/users')
const verify = require('./routes/token/verify-route')

app.use('/api/news', news)
app.use('/api/users', user)
//verify
app.use('/api/verify', verifyToken, verify)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`)
})
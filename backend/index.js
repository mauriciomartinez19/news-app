const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express()

require('./database/database')

app.use(cors())
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json())



const news = require('./routes/news')


app.use('/api/news', news)



const PORT = 5000
app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`)
})
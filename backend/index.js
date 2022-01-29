const express = require('express')
const app = express()

require('./database/database')

const news = require('./routes/news')

app.use('/api/news', news)



const PORT = 5000
app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`)
})
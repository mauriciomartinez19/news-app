const express = require('express')
const router = express.Router()

const users = {
    name: 'maruicio',
    data: 'hola como andas'
}

const New = require('../database/models/news')

router.route('/').get(async (req, res) => {
    const news = await New.find()
    res.status(200).json(news)
})

module.exports = router
const express = require('express')
const router = express.Router()

const users = {
    name: 'maruicio',
    data: 'hola como andas'
}

const New = require('../database/models/news')

router.route('/').get(async (req, res) => {
    const news = await New.find().sort({ _id: -1 }).limit(5)
    res.status(200).json(news)
})

router.route('/create').post(async (req, res) => {
    try {
        const newNews = new New(req.body)
        await newNews.save()
        res.status(200).json('done it')
    }
    catch (error) {
        res.json(error)
    }

})

module.exports = router
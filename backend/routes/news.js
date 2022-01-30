const express = require('express')
const { findById } = require('../database/models/news')
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

router.route('/:id').get(async (req, res) => {
    const { id } = req.params
    try {
        const news = await New.findById(id)
        res.status(200).json(news)
    } catch (error) {
        console.log(error)
        res.json(error)
    }

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
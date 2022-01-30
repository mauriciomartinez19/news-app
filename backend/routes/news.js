const express = require('express')
const { findById } = require('../database/models/news')
const router = express.Router()

const users = {
    name: 'maruicio',
    data: 'hola como andas'
}

const New = require('../database/models/news')

router.route('/oldest/:num').get(async (req, res) => {
    try {
        const { num } = req.params
        const news = await New.find().sort({ _id: 1 }).limit(num)
        res.status(200).json(news)
    } catch (error) {
        console.log(error)
        res.json(error)
    }

})

router.route('/latest/:num').get(async (req, res) => {
    try {
        const { num } = req.params
        const news = await New.find().sort({ _id: -1 }).limit(num)
        res.status(200).json(news)
    } catch (error) {
        console.log(error)
        res.json(error)
    }

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

router.route('/tag/:tag').get(async (req, res) => {
    const { tag } = req.params
    try {
        const news = await New.find({ tag: tag }).limit(5)
        res.status(200).json(news)
    } catch (error) {
        req.json(error)
        console.log(error)
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
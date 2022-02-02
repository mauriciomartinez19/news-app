const express = require('express')
const router = express.Router()

const Comment = require('../database/models/comment')

router.route('/create-comment').post(async (req, res) => {
    try {
        const newComment = new Comment(req.body)
        await newComment.save()
        res.status(200).json('done it')
    }
    catch (error) {
        res.json(error)
    }

})

router.route('/:id').get(async (req, res) => {
    const { id } = req.params
    try {
        const comments = await Comment.find({ newsId: id })
        res.status(200).json(comments)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

module.exports = router
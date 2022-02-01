const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../database/models/user')
const { hashPassword, validation } = require('./controllers/users-controllers')

router.route('/create-user').post(async (req, res) => {
    const { email, name, password } = req.body
    try {
        const exist = await User.find({ name: name })
        if (exist.length) {
            res.status(409).json('The name has been used')
        } else if (!exist.length) {
            const hashPass = await hashPassword(password, 5)
            console.log(hashPass)
            const newUser = new User(
                {
                    name: name,
                    email: email,
                    hashPass: hashPass
                }
            )
            await newUser.save()
            res.status(200).json('User Created')
        }
    } catch (error) {
        res.json(error)
        console.log(error)
    }


})

router.route('/login').post(async (req, res) => {
    const { name, password } = req.body
    console.log(req.body)
    const { mes, user } = await validation(name, password)
    if (user) {
        const token = jwt.sign(
            {
                name: user[0].name,
                email: user[0].email,
                id: user[0]._id
            },
            'secret123',
            { expiresIn: '6h' }
        )
        res.json({ status: mes, user: token })
    } else res.json({ status: mes, user: false })
})





module.exports = router
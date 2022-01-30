const express = require('express')
const router = express.Router()

const User = require('../database/models/user')
const hashPassword = require('./controllers/users-controllers')

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





module.exports = router
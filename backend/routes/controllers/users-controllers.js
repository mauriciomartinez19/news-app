const bcrypt = require('bcrypt')
const User = require('../../database/models/user')

const hashPassword = async (password, saltRounds) => {
    const passwordHash = await bcrypt.hash(password, saltRounds)
    return passwordHash
}

const validation = async (userName, password) => {
    console.log(userName)
    const exist = await User.find({ name: userName })
    if (exist.length) {
        const response = await bcrypt.compare(password, exist[0].hashPass)
        let mes = ''
        return (response
            ? {
                mes: 'valid user',
                user: exist
            }
            : {
                mes: 'wrong password',
                user: undefined
            })
    } return {
        mes: 'user name doesnt exist',
        user: undefined
    }
}

module.exports = { hashPassword, validation }
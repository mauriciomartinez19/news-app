const express = require('express')
const bcrypt = require('bcrypt')

const hashPassword = async (password, saltRounds) => {
    const passwordHash = await bcrypt.hash(password, saltRounds)
    return passwordHash
}

module.exports = hashPassword
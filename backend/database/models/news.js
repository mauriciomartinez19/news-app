const mongoose = require('mongoose');
const { Schema } = mongoose;

const New = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    date: { type: Date, required: true },
    author: { type: String, required: true },
    img: { type: String, required: true },
    imgFooter: { type: String, required: true },
    content: { type: Array, required: true },
    tag: { type: String, required: true },


});

module.exports = mongoose.model('New', New);
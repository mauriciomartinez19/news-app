const mongoose = require('mongoose');
const { Schema } = mongoose;

const Comment = new Schema({
    post: { type: String, required: true },
    userName: { type: String, required: true },
    newsId: { type: Schema.Types.ObjectId, required: true, ref: 'New' },
    reply: { type: Boolean, required: true },
    commentId: { type: String, required: false },
    likes: { type: Number, required: true },
    date: { type: String, required: true }
});

module.exports = mongoose.model('Comment', Comment);

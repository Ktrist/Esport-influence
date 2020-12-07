const mongoose = require('mongoose')


//Reviews

const reviewSchema = mongoose.Schema({
    rate:Number,
    audience:Number,
    writtenCommentary:String,
    user_writter:[userSchema],
    user_evaluated:[userSchema]
})


const reviewModel = mongoose.model('reviews', reviewSchema)

module.exports = reviewModel
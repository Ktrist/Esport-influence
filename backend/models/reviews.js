const mongoose = require('mongoose')


//Reviews

const reviewSchema = mongoose.Schema({
    rate:Number,
    audience:Number,
    writtenCommentary:String,
    user_writter:String,
    user_evaluated:String
})


const reviewModel = mongoose.model('reviews', reviewSchema)

module.exports = reviewModel
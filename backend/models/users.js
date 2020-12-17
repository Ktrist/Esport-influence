const mongoose = require('mongoose')

//Campagne

// const campagne = mongoose.Schema({
//     campaignName:String,
//     description:String,
//     dateStart:Date,
//     dateEnd:Date,
//     status:String,
//     audienceCriteria:String,
//     uploadedDoc:String,
//     public_id_doc:String,
//     id_influenceur_participant:String,
    

// })

// User
const userSchema = mongoose.Schema({
    userName:String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    token: String,
    salt: String,
    phone: String,
    role:String,
    company:String,
    numberFollower:Number,
    favoriteGame:String,
    urlSocialNetwork:String,
    bio:String,
    campaign_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'campaigns'}]
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel
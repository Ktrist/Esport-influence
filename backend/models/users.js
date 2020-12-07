const mongoose = require('mongoose')

//Campagne

const campagne = mongoose.Schema({
    description:String,
    dateStart:Date,
    dateEnd:Date,
    status:String,
    audienceCriteria:String,
    uploadedDoc:String,
    public_id_doc:String,
    id_influenceur_participant:String

})







// User
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    token: String,
    salt: String,
    phone: String,
    role:String,
    entreprise:String,
    pseudo:String,
    numberFollower:Number,
    favoriteGame:String,
    urlSocialNetwork:String,
    fk_campagne_owner:[campagne]
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel
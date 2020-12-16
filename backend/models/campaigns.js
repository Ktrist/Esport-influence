const mongoose = require('mongoose')

// Campagne

const campaignSchema = mongoose.Schema({
    campaignName:String,
    description:String,
    dateStart:Date,
    dateEnd:Date,
    status:String,
    audienceCriteriaMin: String,
    audienceCriteriaMax: String,
    uploadedDoc:String,
    public_id_doc:String,
    influencer_id:String, 
    brand_id:String,


})

const campaignModel = mongoose.model('campaigns', campaignSchema)

module.exports = campaignModel
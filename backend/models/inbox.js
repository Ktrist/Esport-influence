const mongoose = require('mongoose')

//Inbox

const inboxSchema = mongoose.Schema({
    message:Array,
    user_id_sender:String,
    user_id_receiver:String,

})

const inboxModel = mongoose.model('inboxs', inboxSchema)

module.exports = inboxModel

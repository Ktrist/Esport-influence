const mongoose = require('mongoose')

//Inbox

const inboxSchema = mongoose.Schema({
    message:Array,
    user_id_sender:[userSchema],
    user_id_receiver:[userSchema],

})


const inboxModel = mongoose.model('inbox', inboxSchema)

module.exports = inboxModel

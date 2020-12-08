var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://florian:tr-909@cluster0.1viue.mongodb.net/esport_data?retryWrites=true&w=majority',
    options,
    function(err){
        if (err) {
            console.log(`error, failed to connect to the database because --> ${err}`);
          } else {
            console.info('*** Database E-Sport connection : Success ***');
          }
    }
)

module.exports = mongoose
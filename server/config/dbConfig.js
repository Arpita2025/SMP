const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('connected',() => {
    console.log('Connected Successfully');
})

connection.on('error',(err) => {
    console.log('Connected error',err);
})

module.exports = mongoose;
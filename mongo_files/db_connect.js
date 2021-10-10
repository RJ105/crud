const mongoose = require('mongoose');
require('./schema');

mongoose.connect('mongodb://localhost:27017/crud_demo', { useNewUrlParser : true}, (err) => {
    if(!err)    { console.log("database connected successfully..")}
    else { console.log("some error occured :  " + err)}
});
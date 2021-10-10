const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name : {
        type : String
    },
    emp_id : {
        type : Number
    },
    email : {
        type : String
    },
    mob_no : {
        type : Number
    }
});

mongoose.model('employees', employeeSchema);

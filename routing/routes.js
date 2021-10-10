const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employees = mongoose.model('employees');

router.get('/', (req, res) => {
    res.render('employee/form', {
        viewTitle : "Insert Employee"
    });
});

router.post('/', (req, res) => {
    if(req.body._id == '')
        insertrecord(req,res);

    else {
        updaterecord(req, res); }
});

function insertrecord(req, res){
    var employee = new employees();
    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.emp_id = req.body.emp_id;
    employee.mob_no = req.body.mob_no;

    employee.save((err, doc) => {
        if(!err) { res.redirect('/employee/list');}

        else {
            console.log("error in insert" + err);
        }
    });
}


function updaterecord(req, res) {
    employees.findOneAndUpdate({ _id: req.body._id }, req.body, { new : true }, (err, doc) => {
        if(!err) { res.redirect('employee/list');}
        else {
            console.log("error occuredd while updating : " + err);
        }
    });
}

router.get('/list', (req,res) => {
    employees.find((err, docs) => {
        if(!err) {
            res.render("employee/list", {
                list : docs
            });
        }

        else {
            console.log("error in retrieving list : " + err);
        }
    }).lean();
});


router.get('/:id', (req, res) => {
    employees.findById(req.params.id, (err, doc) =>{
        if(!err) {
            res.render('employee/form', {
                viewTitle : "Update employee",
                employee : doc
            })
         }
    }).lean();
});

router.get('/delete/:id', (req, res) => {
    employees.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/employee/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;
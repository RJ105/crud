require('./mongo_files/db_connect');
const employee_route = require('./routing/routes'); 
const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyparser = require('body-parser');



const app = express();

app.use(bodyparser.urlencoded({
    extended : true
}));

app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exhbs({ extname : 'hbs', defaultLayout : 'mainlayout', layoutsDir : __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.use('/employee', employee_route);

app.listen(3000, (req, res) => {
    console.log("listening on port 3000...");
});
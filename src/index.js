const express = require('express');
const app = express();
const morgan = require('morgan');

//settings

app.set('port', process.env.PORT || 500);


//midderwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());


//routers
 
//app.use(require('./routes/index'));
//app.use('/api/tasks',require('./routes/tasks'));

app.use(require('./routes/tasks'));

//stargin the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`); 
});
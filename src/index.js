const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
app.set('port', process.env.PORT || 500);
//midderwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());


//routers
//app.use(require('./routes/index'));
//app.use('/api/tasks',require('./routes/tasks'));

app.use('json',require('./routes/tasks'));
app.use('/base',require('./routes/baseD'));

//stargin the server
//app.use(require('./config/server'))


// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`); 
});

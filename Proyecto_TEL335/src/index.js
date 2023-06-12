const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {mongoose} = require('./database');
const cors = require('cors')


//Settings
app.set('port', process.env.PORT || 3001); //Para desplegar la app en un puerto

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
const routes = require('./routes/task.routes');
app.use('/api/tasks', routes);
//Routes for Excercises
const exerciseRouter = require('./routes/exercise.routes')
app.use('/exercise', exerciseRouter);


//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Starting server
app.listen(app.get('port'), () => { console.log('Server Started....')});

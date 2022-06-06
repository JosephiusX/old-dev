const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes.js');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // allows express middleware for all routes , for json
app.use(express.static(`${__dirname}/public`)); // built in express middleware for rendering static html

//  middleware applies to each and every request THAT COMES AFTER IT
app.use((req, res, next) => {
  console.log('hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter); // mounting router
app.use('/api/v1/users', userRouter); // mounting router

module.exports = app;

// 4) START SERVER

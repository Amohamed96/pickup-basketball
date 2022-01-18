const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db/index');
const dbHelpers = require('./helpers/dbHelpers')(db);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const teamsRouter = require('./routes/teams');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/teams', teamsRouter(dbHelpers));

//Get all Users
// app.get("/users", (req, res) => {
//   res.status(404).json({
//     status: "success", 
//     data: {
//       users: ["Hawarsa, LB, Tanker, Awab, Eddy, Kobz"]
//     },
//   });
//  });
  
 //Get a single user
 app.get("/api/v1/users/:id", (req, res) => {
  console.log(req.params)
 })
  
 //Create a user
 app.post("api/v1/users", (req, res) => {})
  
  
 const port = process.env.PORT || 3001;
 app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
 });
 
module.exports = app;

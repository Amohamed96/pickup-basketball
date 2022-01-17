require("dotenv").config();
const express = require("express")
const morgan = require('morgan')
const app = express()

app.use(morgan("dev"))

// app.use((req, res, next) => {
//   console.log("middleware is solid lol")
//   next();
// })

//Get all Users
app.get("/api/v1/users", (req, res) => {
  res.status(404).json({
    status: "success",  
    data: {
      users: ["Hawarsa, LB, Tanker, Awab, Eddy, Kobz"]
    },
  });
});

//Get a single user 
app.get("/api/v1/users/:id", (req, res) => {
  console.log(req.params)
})

//Create a user 
app.post("api/v1/users", (req, res) => {})


const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/my_database";
const db = require('./models/index')

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
console.log('MONGODB_URI');
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.post("/users",(req,res) => {
  db.user.create({
    name: req.body.name,
    email: req.body.email
  }).then(user => {
    return res.sendStatus(201);
  }).catch(err => {
    res.sendStatus(500);
  });
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
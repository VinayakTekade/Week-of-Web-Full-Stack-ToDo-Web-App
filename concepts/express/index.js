//Importing Express Module
const express = require("express");

//Initialising Express
const app = express();

// Configuring Express
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//Creating APIs

//GET request to display our todo list
app.get("/", (req, res) => {
  //Code to fecth data from the database will go here
  res.render("index"); // open index.ejs from views folder
});

//POST request to create a new task in todo list
app.post("/create", (req, res) => {
  //Code to add a new data to the database will go here
  res.redirect("/"); // redirects to "/" after process is the complete
});

//POST request to delete a task in todo list
app.post("/delete", (req, res) => {
  //Code to delete a data from the database will go here
  res.redirect("/"); // redirects to "/" after process is the complete
});

// Detect port number from the Node Server or use 5000
const PORT = process.env.PORT || 5000;

// Listen for URIs on a port
app.listen(PORT, () => console.log(`Server started at ${PORT}`));

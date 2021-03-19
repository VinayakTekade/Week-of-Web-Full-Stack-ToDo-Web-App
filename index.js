const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use(require("./routes/index"));

app.get("/", (req, res) => {
  let tasklist = [];
  db.collection("todo")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        let task = {
          id: doc.id,
          text: doc.data().task,
        };
        tasklist.push(task);
        // console.log(`${doc.id} : ${doc.data().task}`);
      });
      console.log(tasklist);
      res.render("index", {
        tasklist: tasklist,
      });
    });
});

app.post("/create", (req, res) => {
  try {
    const data = req.body;
    db.collection("todo").add({
      task: data.task,
    });
    console.log("Task added");
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/delete", (req, res) => {
  const deleteID = req.body.deleteid;
  db.collection("todo").doc(deleteID).delete();
  console.log(deleteID);
  res.redirect("/");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));

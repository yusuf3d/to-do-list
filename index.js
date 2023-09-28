import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let textList = [];
let workList = [];

app.post("/submit", (req, res) => {
  const newText = req.body.textInput;
  textList.push(newText);
  res.redirect("/");
});

app.post("/ok", (req, res) => {
  const newText = req.body.textInput;
  workList.push(newText);
  res.redirect("/work");
});


app.get("/", (req, res) => {
    res.render("index.ejs", {textList});
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {workList});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


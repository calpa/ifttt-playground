const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.send("Hello world");
});

app.post("*", (req, res) => {
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Express is listening to port 3000");
});

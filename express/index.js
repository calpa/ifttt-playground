const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    result: "Hello world"
  });
});

app.use("/random", require("./random"));
app.use("/hko", require("./hko"));

app.use((req, res) => {
  res.status(404).send("Sorry cant find that!");
});

app.listen(3000, () => {
  console.log("Express is listening to port 3000");
});

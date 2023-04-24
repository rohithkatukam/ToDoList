const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("veiw engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newItems: items });
});

app.post("/", function(res, req) {

  var item = req.body.newItem;

  items.push(item);

  res.redirect('/')
});

app.listen(3000, function () {
  console.log("running on 3000");
});
